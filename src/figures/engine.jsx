import { useEffect, useReducer, useRef } from 'react'

// Tiny isometric engine: boxes, cylinders and balls, true 3D yaw rotation,
// painter's-order sorting, drag + inertia, see-through mode.

export const INK = '#231e16'
const N = 18
const TAU = Math.PI * 2

const mix = (hex, t) => {
  const n = parseInt(hex.slice(1), 16)
  const to = t < 0 ? 0 : 255
  const a = Math.abs(t)
  const f = c => Math.round(c + (to - c) * a)
  return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`
}
const tone = (nx, ny) => Math.max(-0.4, Math.min(0.2, -0.3 * nx + 0.1 * ny - 0.04))

export const ISO = { a: Math.PI / 4, e: Math.SQRT1_2 }
// Orthographic camera: yaw turns the object, cam.a is the viewer's azimuth, cam.e how far it looks down.
export const view = (yaw, cam = ISO, pv = [0, 0]) => {
  const c = Math.cos(yaw), s = Math.sin(yaw), ca = Math.cos(cam.a), sa = Math.sin(cam.a)
  const s1 = 1 + 0.2247 * Math.sin(2 * cam.a)
  const f = (x, y, z) => {
    x -= pv[0]; y -= pv[1]
    const rx = x * c - y * s, ry = x * s + y * c
    const d = rx * ca + ry * sa
    return { x: (rx * sa - ry * ca) * s1, y: d * cam.e - z, d: d * Math.SQRT2 }
  }
  f.cx = ca; f.cy = sa; f.e = cam.e
  return f
}
const pts = arr => arr.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')

function keyOf(v, q, h) {
  if (q.floor) return -1e9
  // grouped parts (keyboard) sort as one unit against the rest, then by layer inside the group
  if (q.g) return v(q.g[0], q.g[1], 0).d + (q.gk || 0) + v(q.x, q.y, 0).d * 1e-3
  // flat details printed on a face (kx / ky) sort by the face's centre line, not their sideways offset, so they never slip behind the body as it turns
  return v(q.kx ?? q.x, q.ky ?? q.y, 0).d + (q.z + h / 2) * 0.02 + (q.k || 0)
}

function boxOp(q, v, yaw, i) {
  const h = Math.max(0.5, q.h + (q.dh || 0))
  const r = (q.r || 0) + (q.dr || 0)
  const cr = Math.cos(r), sr = Math.sin(r)
  const w2 = q.w / 2, d2 = q.d / 2
  const loc = [[-w2, -d2], [w2, -d2], [w2, d2], [-w2, d2]]
  const cs = loc.map(([a, b]) => [q.x + a * cr - b * sr, q.y + a * sr + b * cr])
  const bot = cs.map(([x, y]) => v(x, y, q.z))
  const top = cs.map(([x, y]) => v(x, y, q.z + h))
  const norms = [[0, -1], [1, 0], [0, 1], [-1, 0]]
  const els = []
  norms.forEach(([lx, ly], e) => {
    const ca = Math.cos(r + yaw), sa = Math.sin(r + yaw)
    const nx = lx * ca - ly * sa, ny = lx * sa + ly * ca
    if (nx * v.cx + ny * v.cy <= 0.001) return
    const j = (e + 1) % 4
    els.push(<polygon key={e} points={pts([bot[e], bot[j], top[j], top[e]])} fill={mix(q.c, tone(nx, ny))} />)
  })
  els.push(<polygon key="t" points={pts(top)} fill={mix(q.c, 0.2)} />)
  return { k: keyOf(v, q, h), el: wrap(q, i, els) }
}

function cylOp(q, v, yaw, i) {
  const r1 = q.r, r2 = q.r2 ?? q.r
  const ring = (rad, z) => Array.from({ length: N }, (_, k) => v(q.x + rad * Math.cos((k / N) * TAU), q.y + rad * Math.sin((k / N) * TAU), z))
  const bot = ring(r1, q.z), top = ring(r2, q.z + q.h)
  const vis = []
  const els = []
  for (let k = 0; k < N; k++) {
    const am = ((k + 0.5) / N) * TAU + yaw
    const nx = Math.cos(am), ny = Math.sin(am)
    vis[k] = nx * v.cx + ny * v.cy > 0
    if (!vis[k]) continue
    const j = (k + 1) % N
    const fill = mix(q.c, tone(nx, ny))
    els.push(<polygon key={k} points={pts([bot[k], bot[j], top[j], top[k]])} fill={fill} stroke={fill} strokeWidth="0.8" />)
  }
  const edge = []
  for (let k = 0; k < N; k++) {
    const j = (k + 1) % N
    if (vis[k] !== vis[j]) edge.push(<line key={`e${k}`} x1={bot[j].x} y1={bot[j].y} x2={top[j].x} y2={top[j].y} />)
  }
  const arc = []
  for (let k = 0; k < N; k++) if (vis[k]) arc.push(bot[k], bot[(k + 1) % N])
  els.push(<g key="o" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" fill="none">
    {edge}
    {arc.length > 0 && <polyline points={pts(arc)} />}
  </g>)
  els.push(<polygon key="t" points={pts(top)} fill={mix(q.c, 0.2)} stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />)
  return { k: keyOf(v, q, q.h), el: wrap(q, i, els, true) }
}

// Side-profile prism: pts are [y, z] corners (counter-clockwise seen from +x) extruded along x by w.
function prismOp(q, v, yaw, i) {
  const hw = q.w / 2, P = q.pts, n = P.length
  const ca = Math.cos(yaw), sa = Math.sin(yaw)
  const els = []
  const face = (nx, ny, nz, verts, key) => {
    const wx = nx * ca - ny * sa, wy = nx * sa + ny * ca
    if (wx * v.cx + wy * v.cy + nz * v.e <= 0.001) return
    const t = Math.max(-0.4, Math.min(0.22, -0.3 * wx + 0.1 * wy + 0.22 * nz - 0.04))
    els.push(<polygon key={key} points={pts(verts.map(([x, y, z]) => v(x, y, z)))} fill={mix(q.c, t)} />)
  }
  for (let k = 0; k < n; k++) {
    const [y1, z1] = P[k], [y2, z2] = P[(k + 1) % n]
    const dy = y2 - y1, dz = z2 - z1, L = Math.hypot(dy, dz)
    face(0, dz / L, -dy / L, [[q.x - hw, y1, z1], [q.x + hw, y1, z1], [q.x + hw, y2, z2], [q.x - hw, y2, z2]], `s${k}`)
  }
  face(1, 0, 0, P.map(([y, z]) => [q.x + hw, y, z]), 'r')
  face(-1, 0, 0, P.map(([y, z]) => [q.x - hw, y, z]), 'l')
  return { k: keyOf(v, q, q.h), el: wrap(q, i, els) }
}

// Wheel with its axis along x: two rings, rungs between them, spokes and a hub. q.a is the spin angle.
function wheelOp(q, v, yaw, i) {
  const N = q.n || 12, a0 = (q.a || 0) + (q.da || 0)
  const x0 = q.x - q.w / 2, x1 = q.x + q.w / 2
  const at = (x, a, r) => v(x, q.y + r * Math.sin(a), q.z - r * Math.cos(a))
  const ring = x => pts(Array.from({ length: 40 }, (_, k) => at(x, (k / 40) * TAU, q.r)))
  const rungs = Array.from({ length: N }, (_, k) => {
    const a = a0 + (k / N) * TAU, p = at(x0, a, q.r), r = at(x1, a, q.r)
    return `M${p.x.toFixed(1)} ${p.y.toFixed(1)}L${r.x.toFixed(1)} ${r.y.toFixed(1)}`
  }).join('')
  const spokes = [x0, x1].flatMap(x => Array.from({ length: 4 }, (_, k) => {
    const a = a0 + 0.4 + (k / 4) * TAU, c = at(x, 0, 0), e = at(x, a, q.r)
    return `M${c.x.toFixed(1)} ${c.y.toFixed(1)}L${e.x.toFixed(1)} ${e.y.toFixed(1)}`
  })).join('')
  const h0 = at(x0, 0, 0), h1 = at(x1, 0, 0)
  const stroke = (d, w, c) => <path d={d} fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" />
  const loop = (x, w, c) => <polygon points={ring(x)} fill="none" stroke={c} strokeWidth={w} strokeLinejoin="round" />
  const els = [
    stroke(spokes, 2.4, INK), stroke(spokes, 1, q.c2 || '#f8f6f0'),
    stroke(rungs, 2.8, INK), stroke(rungs, 1.4, q.c),
    loop(x0, 2.8, INK), loop(x0, 1.4, q.c), loop(x1, 2.8, INK), loop(x1, 1.4, q.c),
    <line key="ax" x1={h0.x} y1={h0.y} x2={h1.x} y2={h1.y} stroke={INK} strokeWidth="3.4" strokeLinecap="round" />,
  ]
  return { k: keyOf(v, q, q.r * 2), el: wrap(q, i, els.map((e, n) => ({ ...e, key: n })), true) }
}

function ballOp(q, v, yaw, i) {
  const p = v(q.x, q.y, q.z)
  const els = [
    <circle key="b" cx={p.x} cy={p.y} r={q.r} fill={q.c} />,
    <circle key="s" cx={p.x + q.r * 0.3} cy={p.y + q.r * 0.3} r={q.r * 0.72} fill={mix(q.c, -0.14)} clipPath="none" opacity="0.55" />,
    <circle key="h" cx={p.x - q.r * 0.32} cy={p.y - q.r * 0.34} r={q.r * 0.28} fill="#fff" opacity="0.55" />,
    <circle key="o" cx={p.x} cy={p.y} r={q.r} fill="none" stroke={INK} strokeWidth="1.4" />,
  ]
  return { k: p.d + q.z * 0.02 + (q.k || 0), el: wrap(q, i, els, true) }
}

// Faces carry their own fill; a group stroke inks the outlines of boxes.
function wrap(q, i, els, noStroke) {
  const op = q.opacity ?? 1
  return (
    <g key={i} data-k={q.kid} opacity={op} stroke={noStroke ? undefined : INK} strokeWidth="1.4" strokeLinejoin="round">
      {els}
    </g>
  )
}

// `see` is 0..1 (a boolean works too): how far the case has faded to glass and the insides have faded in
export function compose(parts, yaw, t, see, cam = ISO, pv) {
  const v = view(yaw, cam, pv)
  const k = typeof see === 'number' ? see : see ? 1 : 0
  see = k > 0.01
  const ops = []
  parts.forEach((p, i) => {
    if (p.inner && !see) return
    // flat details (vents, bezel, slot...) only exist on the face they are printed on
    if (p.n) {
      const ca = Math.cos(yaw), sa = Math.sin(yaw)
      const wx = p.n[0] * ca - p.n[1] * sa, wy = p.n[0] * sa + p.n[1] * ca
      if (wx * v.cx + wy * v.cy + p.n[2] * v.e <= 0.05) return
    }
    const a = p.anim ? p.anim(t) : null
    const q = { ...p }
    if (a) {
      q.x += a.dx || 0; q.y += a.dy || 0; q.z += a.dz || 0
      q.dh = a.dh; q.dr = a.dr; q.da = a.da
    }
    q.opacity = p.inner ? k : p.glass ? 0.42 + (0.14 - 0.42) * k : p.shell ? 1 + (0.14 - 1) * k : 1
    if (p.fade != null) q.opacity *= p.fade   // first-load build-in
    ops.push(p.t === 'box' ? boxOp(q, v, yaw, i) : p.t === 'prism' ? prismOp(q, v, yaw, i) : p.t === 'wheel' ? wheelOp(q, v, yaw, i) : p.t === 'cyl' ? cylOp(q, v, yaw, i) : ballOp(q, v, yaw, i))
  })
  ops.sort((a, b) => a.k - b.k)
  return ops.map(o => o.el)
}

export function figureArt(parts, { scale = 1, extent = 60 }, yaw, t, see = false) {
  return (
    <>
      <ellipse cx="0" cy="4" rx={extent * 1.15 * scale} ry={extent * 0.58 * scale} fill={INK} opacity="0.13" />
      <g transform={`scale(${scale})`}>{compose(parts, yaw, t, see)}</g>
    </>
  )
}

export function Figure({ parts, extent = 60, scale = 1, see = false, label }) {
  const [, force] = useReducer(x => x + 1, 0)
  const st = useRef({ yaw: 0.65, vel: 0, t: 0, drag: false, last: 0, inView: true, reduce: false })
  const host = useRef(null)

  useEffect(() => {
    const s = st.current
    s.reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(([e]) => { s.inView = e.isIntersecting }, { threshold: 0.05 })
    io.observe(host.current)
    let raf, prev = performance.now()
    const AUTO = s.reduce ? 0 : 0.22
    const loop = now => {
      const dt = Math.min(0.05, (now - prev) / 1000)
      prev = now
      if (s.inView) {
        if (!s.drag) {
          s.vel += (AUTO - s.vel) * Math.min(1, dt * 1.6)
          s.yaw += s.vel * dt
        }
        if (!s.reduce) s.t += dt
        force()
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); io.disconnect() }
  }, [])

  const onDown = e => {
    const s = st.current
    s.drag = true; s.lx = e.clientX; s.last = performance.now()
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onMove = e => {
    const s = st.current
    if (!s.drag) return
    const now = performance.now()
    const dx = e.clientX - s.lx
    s.lx = e.clientX
    s.yaw += dx * 0.011
    s.vel = (dx * 0.011) / Math.max(0.008, (now - s.last) / 1000)
    s.vel = Math.max(-6, Math.min(6, s.vel))
    s.last = now
  }
  const onUp = () => { st.current.drag = false }
  const onKey = e => {
    if (e.key === 'ArrowLeft') st.current.yaw -= 0.2
    if (e.key === 'ArrowRight') st.current.yaw += 0.2
  }

  const s = st.current
  return (
    <div ref={host} className="cf-fig">
      <svg
        viewBox="-120 -150 240 210"
        role="img"
        aria-label={label}
        tabIndex={0}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onKeyDown={onKey}
      >
        <ellipse cx="0" cy="4" rx={extent * 1.15 * scale} ry={extent * 0.58 * scale} fill={INK} opacity="0.13" />
        <g transform={`scale(${scale})`}>{compose(parts, s.yaw, s.t, see)}</g>
      </svg>
    </div>
  )
}
