import { forwardRef, useEffect, useImperativeHandle, useMemo, useReducer, useRef, useState } from 'react'
import { compose, view, ISO, INK } from './engine'
import { DESK, iconAt, labelW } from './desk'
import { officeParts, MAC, LABELS, PIVOT, SWATCHES, START, lerpHex, BUILD } from './officeScene'
import AppIcon, { APPS } from './AppIcon'
import { play, isMuted, setMuted, onMute } from './sound'

const VB = { x: -200, y: -295, w: 400, h: 415 }
const TAU = Math.PI * 2
const k = MAC.w / 512
const y0 = -7
export const SCREEN_ORIGIN = { x: 50, y: 35 }
const world = (px, py) => [MAC.xc + (px - 256) * k, y0, MAC.zc - (py - 171) * k]
const camOf = b => ({ a: Math.PI / 4 + b * (Math.PI / 4), e: ISO.e + b * (0.12 - ISO.e) })
const ease = x => x * x * (3 - 2 * x)

// Maps the Mac's 512x342 screen onto the plane of its glass for any camera.
function screenMatrix(v) {
  const p0 = v(...world(0, 0)), p1 = v(...world(512, 0)), p2 = v(...world(0, 342))
  return [(p1.x - p0.x) / 512, (p1.y - p0.y) / 512, (p2.x - p0.x) / 342, (p2.y - p0.y) / 342, p0.x, p0.y]
}

function Folder({ x, y, c, label }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 10 h18 l6 -8 h22 v8 h24 v44 h-70z" fill={c} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d="M0 18 h70" stroke={INK} strokeWidth="3" />
      <rect x="-6" y="62" width="82" height="18" fill="#f8f6f0" />
      <text x="35" y="76" textAnchor="middle" fontSize="14" fontWeight="700" fontFamily="ui-monospace,Menlo,monospace" fill={INK}>{label}</text>
    </g>
  )
}

const e1 = x => { const k = Math.max(0, Math.min(1, x)); return k * k * (3 - 2 * k) }

function ScreenContent({ phase, el = 99, dEl = 99, clear = 0 }) {
  if (phase === 'off') {
    return (
      <g>
        <rect width="512" height="342" rx="12" fill="#1f2a24" />
        <polygon points="40,0 190,0 40,150" fill="#fff" opacity="0.07" />
        <polygon points="120,0 160,0 40,110 40,150" fill="#fff" opacity="0.05" />
      </g>
    )
  }
  if (phase === 'boot') {
    // 0-.5s CRT warm-up (a bright line opens into the picture) -> Happy Mac pops -> welcome types out -> boot log -> loading row -> flash
    const ease = x => x * x * (3 - 2 * x), clamp = x => Math.max(0, Math.min(1, x))
    const open = ease(clamp((el - 0.12) / 0.4)), lineW = ease(clamp(el / 0.14))
    const h = Math.max(3, 342 * open), lineGlow = 1 - clamp((el - 0.35) / 0.3)
    const pop = ease(clamp((el - 0.6) / 0.35)), bounce = pop < 1 ? 1 + Math.sin(pop * Math.PI) * 0.12 : 1
    const msg = "Welcome to Khoa's Mac", typed = msg.slice(0, Math.floor(clamp((el - 1.0) / 0.9) * msg.length))
    const bar = clamp((el - 1.2) / 2.1), steps = Math.floor(bar * 28) / 28
    const log = [[1.5, 'Memory test .......... 4096K OK'], [2.1, 'Mounting disk ........ OK'], [2.7, 'Loading Finder ....... OK']]
    const flash = el > 3.35 ? Math.sin(clamp((el - 3.35) / 0.45) * Math.PI) * 0.85 : 0
    const mono = { fontFamily: 'ui-monospace,Menlo,monospace', fontWeight: 700, fill: INK }
    return (
      <g>
        <rect width="512" height="342" rx="12" fill="#1f2a24" />
        <rect y={171 - h / 2} width="512" height={h} fill="#f6f5ee" />
        <rect x={256 - 256 * lineW} y="169.5" width={512 * lineW} height="3" fill="#fff" opacity={lineGlow} />
        {open > 0.6 && (
          <g opacity={clamp((open - 0.6) / 0.4)}>
            <g transform={`translate(256 128) scale(${pop * bounce || 0.001}) translate(-50 -50)`}>
              <rect width="100" height="100" rx="12" fill="#e3d9c0" stroke={INK} strokeWidth="6" />
              <rect x="16" y="16" width="68" height="46" rx="4" fill="#cfe3d4" stroke={INK} strokeWidth="5" />
              <rect x="34" y="28" width="6" height="14" fill={INK} />
              <rect x="62" y="28" width="6" height="14" fill={INK} />
              <path d="M30 50 q20 14 40 0" fill="none" stroke={INK} strokeWidth="5" strokeLinecap="round" />
              <rect x="26" y="74" width="48" height="6" fill={INK} />
            </g>
            <text x="256" y="212" textAnchor="middle" fontSize="24" {...mono}>{typed}{typed.length < msg.length && Math.floor(el * 5) % 2 === 0 ? '▌' : ''}</text>
            <rect x="156" y="226" width="200" height="14" fill="none" stroke={INK} strokeWidth="3" />
            <rect x="158" y="228" width={steps * 196} height="10" fill={INK} />
            {log.map(([at, line]) => el > at && <text key={line} x="156" y={254 + log.findIndex(l => l[1] === line) * 15} fontSize="10.5" {...mono} fontWeight="500">{line}</text>)}
            {['#ef6a4c', '#e9b43c', '#8fd3b6', '#4a63b8', '#a05fb5', '#5aa27f'].map((c, i) => el > 1.9 + i * 0.22 && (
              <rect key={c} x={196 + i * 21} y="308" width="15" height="15" rx="2" fill={c} stroke={INK} strokeWidth="2" />
            ))}
          </g>
        )}
        {flash > 0 && <rect width="512" height="342" rx="12" fill="#fff" opacity={flash} />}
      </g>
    )
  }
  const { colors: C } = DESK
  const time = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  const mono = { fontFamily: 'ui-monospace,Menlo,monospace', fontWeight: 700, fill: INK }
  return (
    <g>
      <defs>
        <pattern id="cfdither" width={DESK.dither} height={DESK.dither} patternUnits="userSpaceOnUse">
          <rect width={DESK.dither} height={DESK.dither} fill={C.dark} />
          <rect width={DESK.dither / 2} height={DESK.dither / 2} fill={C.light} />
          <rect x={DESK.dither / 2} y={DESK.dither / 2} width={DESK.dither / 2} height={DESK.dither / 2} fill={C.light} />
        </pattern>
      </defs>
      <rect width="512" height="342" rx="12" fill="#f6f5ee" />
      <rect width="512" height="342" rx="12" fill="url(#cfdither)" opacity={e1(dEl / 0.35)} />
      {/* menu bar slides down */}
      <g opacity={1 - clear} transform={`translate(0 ${-(1 - e1((dEl - 0.1) / 0.35)) * DESK.menu})`}>
      <rect width="512" height={DESK.menu} fill={C.paper} />
      <rect y={DESK.menu - 3} width="512" height="3" fill={INK} />
      {DESK.rainbow.map((c, i) => <rect key={c} x="16" y={9 + i * 2.7} width="14" height="2.7" fill={c} />)}
      <text x="38" y="22" fontSize="14" {...mono}>Khoa's Mac</text>
      <text x="140" y="22" fontSize="14" {...mono}>← Back</text>
      <text x="496" y="22" fontSize="14" textAnchor="end" {...mono}>{time}</text>
      </g>
      {/* the desktop: just About and Résumé; projects arrive on disks */}
      {APPS.map((app, i) => {
        const { cx, top } = iconAt(i), w = labelW(app.name)
        const k = e1((dEl - 0.45 - i * 0.18) / 0.3), icx = cx, icy = top + DESK.figH / 2
        return (
          <g key={app.id} opacity={k * (1 - clear)} transform={`translate(${icx} ${icy}) scale(${0.5 + 0.5 * k}) translate(${-icx} ${-icy})`}>
            <svg x={cx - DESK.figW / 2} y={top} width={DESK.figW} height={DESK.figH} viewBox="0 0 100 88"><AppIcon id={app.id} /></svg>
            <rect x={cx - w / 2} y={top + DESK.figH + DESK.labelGap} width={w} height={DESK.labelH} fill={C.paper} />
            <text x={cx} y={top + DESK.figH + DESK.labelGap + 12.5} textAnchor="middle" fontSize="12.5" {...mono}>{app.name}</text>
          </g>
        )
      })}
      <g opacity={e1((dEl - 0.9) / 0.35) * (1 - clear)}>
      <rect x={DESK.trash.x} y={DESK.trash.y} width={DESK.trash.w} height={DESK.trash.h} fill={C.paper} stroke={INK} strokeWidth="3" />
      <text x={DESK.trash.x + DESK.trash.w / 2} y={DESK.trash.y + DESK.trash.h / 2 + 5} textAnchor="middle" fontSize="13" {...mono}>Trash</text>
      <rect x={DESK.hint.x} y={DESK.hint.y} width="372" height={DESK.hint.h} fill={C.paper} stroke={INK} strokeWidth="1.5" />
      <text x={DESK.hint.x + 8} y={DESK.hint.y + 14} fontSize="10.5" style={{ fontFamily: 'ui-monospace,Menlo,monospace' }} fill={INK}>Pick a project disk to load it</text>
      </g>
    </g>
  )
}

const Office = forwardRef(function Office({ phase, focus, desk = false, onPower, onOpen, onTint, build = false }, ref) {
  const [, force] = useReducer(x => x + 1, 0)
  const [see, setSee] = useState(false)
  const [mute, setMute] = useState(isMuted())
  useEffect(() => onMute(setMute), [])
  const [body, setBody] = useState(START.c)      // chosen colour
  const [shown, setShown] = useState(START.c)    // what's drawn: eases towards the chosen colour so changes blend
  useEffect(() => {
    const from = shown, t0 = performance.now(), D = 550
    if (from === body) return
    let raf
    const step = now => {
      const k = Math.min(1, (now - t0) / D), e = k * k * (3 - 2 * k)
      setShown(lerpHex(from, body, e))
      if (k < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [body])
  const st = useRef({ press: {}, sfx: {}, t: 0, inView: true, yaw: 0, yawT: 0, b: 0, drag: false, moved: 0, lx: 0 })
  const host = useRef(null)
  const parts = useMemo(() => officeParts(phase !== 'off', shown), [phase !== 'off', shown])
  const wantFront = focus   // front view is only used when the camera pushes in on the screen
  const showInside = see && !focus   // always a clean case when the camera pushes in
  st.current.wantSee = showInside
  // first-load build-in: pieces drop into place one by one (shell, then keyboard, then mouse)
  if (st.current.mountAt == null) st.current.mountAt = performance.now() / 1000
  const bEl = build ? performance.now() / 1000 - st.current.mountAt : 99
  const built = bEl >= BUILD.done
  // pieces arrive from above (or slide in from the side), easing to a stop; the case starts ghosted so the internals show, then turns solid as it lands
  const drawn = built ? parts : parts.filter(p => bEl >= (p.bt ?? 0)).map(p => {
    const dur = p.dur ?? 0.3, k = Math.min(1, (bEl - (p.bt ?? 0)) / dur), e = 1 - Math.pow(1 - k, 3)
    if (k >= 1) return p
    const side = p.from === 'side'
    return { ...p, z: p.z + (side ? 0 : (1 - e) * (p.drop ?? 70)), y: p.y + (side ? (1 - e) * 40 : 0), fade: Math.min(1, k * 2.5) }
  })
  // keys and the mouse button sink while pressed
  const lit = built ? drawn.map(p => { const a = p.press && st.current.press[p.kid]?.a; return a > 0.01 ? { ...p, z: p.z - p.press * a } : p }) : drawn
  const buildSee = bEl < BUILD.seeOutFrom ? 1 : Math.max(0, 1 - (bEl - BUILD.seeOutFrom) / (BUILD.seeOutTo - BUILD.seeOutFrom))
  {
    // when the screen last changed phase, so the boot and desktop build-in can animate from that moment
    const s0 = st.current, now = performance.now() / 1000
    if (s0.ph !== phase) {
      if (phase === 'boot') { s0.bootAt = now; play('startup') }
      if (phase === 'desk' && s0.ph === 'boot') play('ready')
      s0.deskAt = phase === 'desk' && s0.ph === 'boot' ? now : null
      s0.ph = phase
    }
  }

  useEffect(() => {
    const s = st.current
    s.bT = wantFront ? 1 : 0
    if (wantFront) s.yawT = Math.round(s.yaw / TAU) * TAU
  }, [wantFront])

  useEffect(() => {
    const s = st.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(([e]) => { s.inView = e.isIntersecting })
    io.observe(host.current)
    let raf, prev = performance.now()
    const loop = now => {
      const dt = Math.min(0.05, (now - prev) / 1000); prev = now
      if (s.inView) {
        const f = reduce ? 1 : Math.min(1, dt * 7)
        if (!s.drag) s.yaw += (s.yawT - s.yaw) * f
        s.b += ((s.bT ?? 0) - s.b) * f
        s.seeK = (s.seeK ?? 0) + ((s.wantSee ? 1 : 0) - (s.seeK ?? 0)) * (reduce ? 1 : Math.min(1, dt * 8))   // fade the see-through in and out
        if (!reduce) s.t += dt
        for (const id in s.press) { const p = s.press[id]; p.a += ((p.on ? 1 : 0) - p.a) * Math.min(1, dt * 32); if (!p.on && p.a < 0.01) delete s.press[id] }
        if (build && !s.sfx.done) {
          const be = performance.now() / 1000 - s.mountAt
          ;[[0.05, 'place'], [0.3, 'place'], [0.5, 'place'], [0.7, 'place'], [0.9, 'place'], [BUILD.caseAt, 'thunk'], [1.2, 'place'], [1.5, 'place'], [1.75, 'place'], [2.1, 'place'], [BUILD.mouse, 'place']].forEach(([at, n], i) => { if (be >= at && !s.sfx[i]) { s.sfx[i] = 1; play(n) } })
          if (be >= BUILD.done) s.sfx.done = 1
        }
        force()
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); io.disconnect() }
  }, [])

  const s = st.current
  const cam = camOf(s.b)
  const v = view(s.yaw, cam, PIVOT)

  useImperativeHandle(ref, () => ({
    box(final) {
      const q = final ? view(Math.round(s.yaw / TAU) * TAU, camOf(1), PIVOT) : view(s.yaw, camOf(s.b), PIVOT)
      const ps = [world(0, 0), world(512, 0), world(0, 342), world(512, 342)].map(w => q(...w))
      const xs = ps.map(p => p.x), ys = ps.map(p => p.y)
      return { cx: (Math.min(...xs) + Math.max(...xs)) / 2, cy: (Math.min(...ys) + Math.max(...ys)) / 2, w: Math.max(...xs) - Math.min(...xs), h: Math.max(...ys) - Math.min(...ys), vb: VB }
    },
    // the floppy slot at the final (square-on) yaw: SVG-space origin plus per-unit x / depth axes, so a disk can be drawn sliding in
    slot() {
      const yaw = Math.round(s.yaw / TAU) * TAU
      s.yawT = yaw
      const q = view(yaw, camOf(s.b), PIVOT), o = q(0, 0, 0)
      const at = (x, y, z) => q(x, y, z)
      const ax = a => ({ x: a.x - o.x, y: a.y - o.y })
      return { o: at(MAC.xc - 4, 0, 65), ex: ax(at(1, 0, 0)), ey: ax(at(0, 1, 0)), vb: VB }
    },
  }))

  // once the full-window desktop is up, the Mac's own little desktop clears behind it; it returns after the window has closed
  const nowS = performance.now() / 1000
  if (desk) { if (s.fAt == null) { s.fAt = nowS; s.uAt = null } } else if (s.fAt != null) { s.fAt = null; s.uAt = nowS }
  const sm = x => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x) }
  const clearK = desk ? sm((nowS - s.fAt) / 0.2) : s.uAt != null ? 1 - sm((nowS - s.uAt - 0.4) / 0.4) : 0
  const facing = -Math.sin(s.yaw) * v.cx + Math.cos(s.yaw) * v.cy > 0.05
  const click = () => {
    if (s.moved > 4) return
    if (phase === 'off') onPower()
    else if (phase === 'desk') { play('tick'); onOpen() }
  }
  const down = e => {
    const kEl = e.target.closest?.('[data-k]')
    if (kEl) {
      const id = kEl.getAttribute('data-k'), w = parseFloat(id.split('_')[2]) || 1
      s.press[id] = { a: s.press[id]?.a || 0, on: true }; s.keyId = id; s.down = false
      play(id.startsWith('m_') ? 'mouseDown' : 'key', w)
      return
    }
    s.drag = false; s.moved = 0; s.lx = e.clientX; s.pid = e.pointerId; s.down = true
  }
  const move = e => {
    if (!s.down) return
    const dx = e.clientX - s.lx
    s.moved += Math.abs(dx); s.lx = e.clientX
    if (s.moved > 4 && !s.drag) { s.drag = true; e.currentTarget.setPointerCapture(s.pid) }
    if (s.drag) { s.yaw += dx * 0.012; s.yawT = s.yaw }
  }
  const release = () => {
    if (!s.keyId) return
    const id = s.keyId; s.keyId = null
    if (s.press[id]) s.press[id].on = false
    play(id.startsWith('m_') ? 'mouseUp' : 'keyup', parseFloat(id.split('_')[2]) || 1)
  }
  const up = () => { release(); s.down = false; s.drag = false; if (s.moved > 4) s.yawT = s.yaw }
  const turn = d => { play('turn');  s.yawT = Math.round(s.yawT / (Math.PI / 2)) * (Math.PI / 2) + d * (Math.PI / 2) }
  const t = s.t

  return (
    <div ref={host} className="cf-office">
      <svg viewBox={`${VB.x} ${VB.y} ${VB.w} ${VB.h}`} role="img" aria-label="A compact Macintosh with keyboard and mouse. Click the screen to power on, drag to turn it."
        onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onPointerLeave={release}>
        <ellipse cx="0" cy="2" rx="170" ry={170 * cam.e * 0.52} fill={INK} opacity="0.1" />
        {compose(lit, s.yaw, t, !built ? buildSee : Math.abs((s.seeK ?? 0) - (showInside ? 1 : 0)) < 0.004 ? (showInside ? 1 : 0) : s.seeK, cam, PIVOT)}
        {facing && bEl >= BUILD.glassAt && (
          <g transform={`matrix(${screenMatrix(v).join(' ')})`} style={{ cursor: phase === 'boot' ? 'progress' : 'pointer' }} onClick={click}>
            <clipPath id="cfscr"><rect width="512" height="342" rx="12" /></clipPath>
            <g clipPath="url(#cfscr)"><ScreenContent clear={clearK} phase={phase} el={s.bootAt != null ? performance.now() / 1000 - s.bootAt : 99} dEl={s.deskAt != null ? performance.now() / 1000 - s.deskAt : 99} /></g>
            <rect width="512" height="342" fill="transparent" />
          </g>
        )}
        {(s.seeK ?? 0) > 0.02 && <g opacity={s.seeK}>{LABELS.map((l, i) => {
          const d = v(...l.dot)
          const w = l.name.length * 4.6 + 8
          const ax = l.lx < 0 ? l.lx + w : l.lx
          return (
            <g key={l.name} className="cf-label" style={{ animationDelay: `${i * 70}ms` }}>
              <line x1={ax} y1={l.ly} x2={d.x} y2={d.y} stroke={INK} strokeWidth="0.8" />
              <circle cx={d.x} cy={d.y} r="2.4" fill="#ef6a4c" stroke={INK} strokeWidth="0.9" />
              <rect x={l.lx} y={l.ly - 6} width={w} height="12" rx="6" fill="#f8f6f0" stroke={INK} strokeWidth="0.9" />
              <text x={l.lx + w / 2} y={l.ly + 2.6} textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="ui-monospace,Menlo,monospace" fill={INK}>{l.name}</text>
            </g>
          )
        })}
        </g>}
      </svg>
      <div className={`cf-ctrls${built ? ' ready' : ''}`}>
        <button className="cf-tab" onClick={() => turn(1)} aria-label="Turn the Mac a quarter turn">Turn ↻</button>
        <button className={`cf-tab cf-see${see ? ' on' : ''}`} onClick={() => { play(see ? 'off' : 'on'); setSee(x => !x) }} aria-pressed={see}>{see ? 'See-through: on' : 'See-through: off'}</button>
        <span className="cf-swatches" role="group" aria-label="Body colour">
          {SWATCHES.map(sw => (
            <button key={sw.name} className={`cf-sw${body === sw.c ? ' on' : ''}`} style={{ background: sw.c }}
              onClick={() => { play('swatch', SWATCHES.indexOf(sw)); setBody(sw.c); onTint?.(sw.bg) }} aria-label={sw.name} aria-pressed={body === sw.c} title={sw.name} />
          ))}
        </span>
        <button className={`cf-tab cf-mute${mute ? ' on' : ''}`} onClick={() => setMuted(!mute)} aria-pressed={mute} aria-label={mute ? 'Sound off, turn on' : 'Sound on, mute'} title={mute ? 'Sound off' : 'Sound on'}>
          <svg viewBox="0 0 24 20" width="20" height="17" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7.5h4l5-4v13l-5-4H3z" fill="currentColor" />
            {mute ? <path d="M16 7l5 6M21 7l-5 6" /> : <><path d="M15.5 7.5a4 4 0 0 1 0 5" /><path d="M18 5a7.5 7.5 0 0 1 0 10" /></>}
          </svg>
        </button>
      </div>
    </div>
  )
})

export default Office
