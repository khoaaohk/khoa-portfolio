// Compact Macintosh + extended keyboard + mouse (yaw 0, front faces +y).
const P = {
  tom: '#ef6a4c', mus: '#e9b43c', mint: '#8fd3b6', cob: '#4a63b8',
  cream: '#f8f6f0', ink: '#231e16', beige: '#e3d9c0', beige2: '#d2c7a8', beige3: '#c4b894',
}
const box = o => ({ t: 'box', ...o })
const ball = o => ({ t: 'ball', ...o })

// body colour + the page tint that complements it
export const SWATCHES = [
  { name: 'Classic', c: '#e3d9c0', bg: '#f2efe7' }, { name: 'Tomato', c: '#ef6a4c', bg: '#dfe9e4' }, { name: 'Mustard', c: '#e9b43c', bg: '#e4e5f0' },
  { name: 'Mint', c: '#8fd3b6', bg: '#f3e4e1' }, { name: 'Cobalt', c: '#4a63b8', bg: '#f4e6d3' }, { name: 'Blush', c: '#f3c3bd', bg: '#e1e9df' },
]
// each page load starts with a random body colour (kept while you move between pages)
export const START = SWATCHES[Math.floor(Math.random() * SWATCHES.length)]
export const lerpHex = (a, b, t) => {
  const A = parseInt(a.slice(1), 16), B = parseInt(b.slice(1), 16)
  const f = sh => Math.round(((A >> sh) & 255) + (((B >> sh) & 255) - ((A >> sh) & 255)) * t).toString(16).padStart(2, '0')
  return `#${f(16)}${f(8)}${f(0)}`
}
// lighten (t > 0) or darken (t < 0) a #rrggbb colour
export const shade = (hex, t) => {
  const n = parseInt(hex.slice(1), 16), to = t < 0 ? 0 : 255, a = Math.abs(t)
  const f = c => Math.round(c + (to - c) * a).toString(16).padStart(2, '0')
  return `#${f(n >> 16)}${f((n >> 8) & 255)}${f(n & 255)}`
}

export const DZ = 0
export const MAC = { xc: -15, yf: -7, zc: 130, w: 95, h: 63.5 }

const KB = [-15, 40]   // keyboard + mouse sort as one group
const U = 10   // key pitch

// Each row: widths in key units, and which are modifiers (darker keys).
const MAIN = [
  { w: [...Array(13).fill(1), 2], mod: [13] },
  { w: [1.5, ...Array(12).fill(1), 1.5], mod: [0, 13] },
  { w: [1.75, ...Array(11).fill(1), 2.25], mod: [0, 12] },
  { w: [2.25, ...Array(10).fill(1), 2.75], mod: [0, 11] },
  { w: [2, 2, 7, 2, 2], mod: [0, 1, 3, 4] },
]

function keyboard() {
  const left = -121, y0 = 14, z = 6.2
  const out = [
    box({ x: -15, y: 40, z: 0, w: 212, d: 68, h: 5, c: P.beige, g: KB, gk: 0, shell: true }),
    box({ x: -15, y: 40, z: 5, w: 208, d: 64, h: 1.2, c: P.beige2, g: KB, gk: 0.5, shell: true }),
    box({ x: -15, y: 40, z: 1.5, w: 200, d: 56, h: 1.6, c: P.mint, g: KB, gk: 0.8, inner: true }),
    ...[-70, -30, 10, 50, 80].map(x => box({ x, y: 40, z: 3.1, w: 10, d: 8, h: 2, c: P.ink, g: KB, gk: 1, inner: true })),
  ]
  const key = (x, r, w, c, rows = 1) => out.push(box({
    x, y: y0 + 4.5 + r * U + ((rows - 1) * U) / 2, z, w: w * U - 1.2, d: rows * U - 1.2, h: 3, c, g: KB, gk: 2, shell: true, kid: `k${r}_${Math.round(x)}_${w}`, press: 1.8,
  }))
  MAIN.forEach((row, r) => {
    let cx = left + 7
    row.w.forEach((w, i) => {
      key(cx + (w * U) / 2, r, w, row.mod.includes(i) ? P.beige3 : P.cream)
      cx += w * U
    })
  })
  // numeric keypad: 4 columns, tall enter and wide zero
  const kx = left + 7 + 15 * U + 8
  const pad = [
    [[1, P.beige3], [1, P.beige3], [1, P.beige3], [1, P.beige3]],
    [[1, P.cream], [1, P.cream], [1, P.cream], [1, P.beige3]],
    [[1, P.cream], [1, P.cream], [1, P.cream], [1, P.beige3]],
  ]
  pad.forEach((row, r) => row.forEach(([w, c], i) => key(kx + i * U + U / 2, r, w, c)))
  ;[0, 1, 2].forEach(i => key(kx + i * U + U / 2, 3, 1, P.cream))
  key(kx + 3 * U + U / 2, 3, 1, P.beige3, 2)
  key(kx + U, 4, 2, P.cream)
  key(kx + 2 * U + U / 2, 4, 1, P.cream)
  return out
}


// A hamster running in a wheel inside the case. Wheel axis runs along x.
const WX = MAC.xc, WY = -80, WR = 26, WZ = 14.5 + WR, OMEGA = 3.2
function hamster() {
  const out = []
  out.push({ t: 'wheel', x: WX, y: WY, z: WZ, r: WR, w: 14, n: 12, a: 0, c: P.mus, inner: true, anim: t => ({ da: -OMEGA * t }) })
  out.push(
    box({ x: WX - 8, y: WY, z: 12, w: 1.6, d: 3, h: WZ - 12, c: P.ink, inner: true }),
    box({ x: WX + 8, y: WY, z: 12, w: 1.6, d: 3, h: WZ - 12, c: P.ink, inner: true }),
  )
  // the hamster: runs in place at the bottom of the wheel, facing +y
  const my = WY, base = 16, tan = '#e9b987', dark = '#c98a55', belly = '#fbeed8', pink = '#f3a6a0'
  const rate = OMEGA * 2
  const bob = t => Math.sin(t * rate) * 0.6
  const B = (dx, dy, dz, r, c, anim) => ball({ x: WX + dx, y: my + dy, z: base + dz, r, c, inner: true, anim })
  const body = t => ({ dz: bob(t) })
  const leg = (sx, dy0, ph, r) => B(sx * 3.6, dy0, 1.6, r, pink, t => ({
    dy: Math.sin(t * rate + ph) * 4.2, dz: Math.max(0, Math.cos(t * rate + ph)) * 1.8,
  }))
  // few big, clean shapes so it still reads as a hamster at a few dozen pixels
  const foot = (sx, dy0, ph, r, c) => B(sx * 5, dy0, 2.4, r, c, t => ({ dy: Math.sin(t * rate + ph) * 5, dz: Math.max(0, Math.cos(t * rate + ph)) * 2.4 }))
  out.push(
    B(0, -3, 10, 11.5, tan, body),                              // body
    B(0, 1, 6.5, 9.5, belly, body),                             // belly
    B(0, -4, 17, 6.5, dark, body),                              // back patch
    B(0, 9.5, 12.5, 8.4, tan, body),                            // head
    B(-6.2, 12, 10.2, 3.6, belly, body), B(6.2, 12, 10.2, 3.6, belly, body),    // cheeks
    B(-5.6, 7.5, 19.4, 3.8, dark, body), B(5.6, 7.5, 19.4, 3.8, dark, body),    // ears
    B(-5.6, 8.6, 19.2, 2.2, pink, body), B(5.6, 8.6, 19.2, 2.2, pink, body),
    B(-3.6, 16.2, 15, 1.9, P.ink, body), B(3.6, 16.2, 15, 1.9, P.ink, body),    // eyes
    B(0, 17.6, 11.8, 2, pink, body),                            // nose
    B(0, -12.5, 6.6, 1.7, pink, t => ({ dz: bob(t) + Math.sin(t * 6) * 0.8 })), // tail
    foot(-1, 8, Math.PI, 2.8, pink), foot(1, 8, 0, 2.8, pink), foot(-1, -7, 0, 3.4, dark), foot(1, -7, Math.PI, 3.4, dark),
  )
  // everything here sits on the logic board: paint it after the board, hamster after the wheel
  return out.map(p => ({ ...p, k: p.t === 'wheel' || p.t === 'box' ? 6 : 7 }))
}


export function officeParts(on, body = SWATCHES[0].c) {
  // the case, keyboard and mouse take the chosen body colour (two darker tones for bezel and edges)
  P.beige = body; P.beige2 = shade(body, -0.08); P.beige3 = shade(body, -0.17)
  const xc = MAC.xc
  const vents = Array.from({ length: 7 }, (_, i) => box({ x: xc + 64.6, y: -92 + i * 6, z: 142, w: 0.8, d: 1.6, h: 18, c: P.beige3, n: [1, 0, 0] }))
  const stripes = [P.tom, P.mus, P.mint, P.cob, '#a05fb5', '#5aa27f'].map((c, i) => box({ x: xc - 50, y: -7.4, z: 71 - i * 1.7, w: 10, d: 0.8, h: 1.7, c, n: [0, 1, 0] }))
  return withBuild([
    box({ x: xc, y: -69, z: 0, w: 134, d: 124, h: 4, c: P.beige3, shell: true, floor: true }),
    // one body: flat front, flat top, back tapering down to a deeper base
    { t: 'prism', x: xc, y: -53, z: 0, w: 130, h: 180, c: P.beige, shell: true,
      pts: [[-7, 4], [-7, 180], [-100, 180], [-120, 110], [-131, 38], [-131, 4]] },
    box({ x: xc, y: -50, z: 180, w: 52, d: 26, h: 5, c: P.beige3, k: 3 }),   // handle recess
    ...vents,
    ...hamster(),
    // inside the case
    box({ x: xc, y: -14, z: 97, w: 96, d: 12, h: 66, c: '#3a342b', inner: true }),
    box({ x: xc, y: -36, z: 106, w: 70, d: 30, h: 48, c: '#6e665a', inner: true }),
    box({ x: xc, y: -66, z: 122, w: 16, d: 30, h: 16, c: '#9a8f7a', inner: true }),
    ball({ x: xc, y: -66, z: 130, r: 1.8, c: P.mint, inner: true, anim: t => ({ dy: (t * 26) % 52 }) }),
    box({ x: xc - 45, y: -65, z: 62, w: 22, d: 60, h: 50, c: P.tom, inner: true }),
    box({ x: xc + 10, y: -30, z: 62, w: 60, d: 50, h: 22, c: '#9a8f7a', inner: true }),
    box({ x: xc + 10, y: -22, z: 68, w: 40, d: 30, h: 1.4, c: P.ink, inner: true, anim: t => ({ dy: Math.max(0, Math.sin(t * 0.7)) * -16 }) }),
    box({ x: xc, y: -75, z: 8, w: 100, d: 80, h: 2.5, c: P.mint, inner: true }),
    ...[[-30, -88], [-8, -62], [14, -90], [34, -70], [-26, -52]].map(([dx, y]) => box({ x: xc + dx, y, z: 10.5, w: 12, d: 8, h: 3, c: P.ink, inner: true })),
    ball({ x: xc - 38, y: -45, z: 24, r: 8, c: P.cream, inner: true, anim: t => ({ dz: Math.sin(t * 4) * 0.6 }) }),
    // screen bezel + glass
    { ...box({ x: xc, y: -7.4, z: 94, w: 105, d: 0.8, h: 72, c: P.beige2 , n: [0, 1, 0] }), onCase: true },
    { ...box({ x: xc, y: -7.4, z: MAC.zc - MAC.h / 2, w: MAC.w, d: 0.8, h: MAC.h, c: '#1f2a24' , n: [0, 1, 0] }), onCase: true },   // the screen cut-out arrives with the case
    // floppy drive, logo, LED
    { ...box({ x: xc + 18, y: -7.4, z: 61, w: 58, d: 0.8, h: 9, c: P.beige2 , n: [0, 1, 0] }), onCase: true },
    { ...box({ x: xc + 18, y: -7.4, z: 64, w: 48, d: 0.8, h: 2.6, c: P.ink, k: 1 , n: [0, 1, 0] }), onCase: true },
    { ...box({ x: xc + 52, y: -7.4, z: 63, w: 5, d: 0.8, h: 4, k: 1, c: on ? P.mint : '#8b3a2b' , n: [0, 1, 0] }), onCase: true },
    ...stripes,
    ...keyboard(),
    box({ x: 112, y: 40, z: 0, w: 17, d: 26, h: 6, c: P.beige, g: KB, gk: 1, kid: 'm_0_1' }),
    box({ x: 112, y: 46, z: 6, w: 11, d: 5, h: 1.2, c: P.beige2, g: KB, gk: 3, kid: 'm_0_1', press: 0.9 }),
  ])
}

// First-load build order (seconds), like an assembly line: base -> internals one by one (while the case is still ghosted) -> the case lowers over them ->
// vents -> bezel, glass and front details -> handle -> power on -> keyboard (plate, then keys one by one) -> mouse.
export const BUILD = { insideFrom: 0.2, insideTo: 1.0, caseAt: 1.05, seeOutFrom: 1.05, seeOutTo: 1.6, glassAt: 2.1, powerAt: 2.5, kb: 1.2, mouse: 2.1, done: 2.8 }
function withBuild(list) {
  const inner = list.filter(p => p.inner && !p.g).length
  let ni = 0, nv = 0, nf = 0, nk = 0
  return list.map(p => {
    if (p.inner && p.g) return { ...p, bt: BUILD.kb - 0.05, drop: 30 }   // the keyboard's own PCB arrives with the keyboard
    if (p.inner) return { ...p, bt: BUILD.insideFrom + (ni++) * ((BUILD.insideTo - BUILD.insideFrom) / inner), from: p.t === 'wheel' || p.anim ? 'above' : (ni % 2 ? 'above' : 'side') }
    if (p.floor) return { ...p, bt: 0, drop: 40 }
    if (p.t === 'prism') return { ...p, bt: BUILD.caseAt, drop: 230, dur: 0.5 }
    if (p.x === 112 && p.g) return { ...p, bt: BUILD.mouse + (p.y > 42 ? 0.15 : 0), drop: 30 }
    if (p.g) return { ...p, bt: BUILD.kb + (nk++) * 0.008, drop: 30 }
    if (p.onCase) return { ...p, kx: MAC.xc, bt: BUILD.caseAt, drop: 230, dur: 0.5 }   // part of the front panel: lowers with the case
    if (p.n && p.n[0] === 1) return { ...p, ky: -69, bt: 1.5 + (nv++) * 0.035, drop: 25 }
    if (p.n) return { ...p, kx: MAC.xc, bt: 1.75 + (nf++) * 0.055, drop: 25 }
    return { ...p, bt: 2.4, drop: 60 }     // handle recess on top
  })
}

export const PIVOT = [4, -28]
// Dot sits on the part (world coords); the label hangs at (lx, ly) in drawing units.
export const LABELS = [
  { name: 'CRT tube', dot: [MAC.xc, -30, 130], lx: -196, ly: -236 },
  { name: 'Analog board', dot: [MAC.xc - 45, -65, 90], lx: -196, ly: -196 },
  { name: 'Floppy drive', dot: [MAC.xc + 10, -30, 73], lx: -196, ly: -156 },
  { name: 'Speaker', dot: [MAC.xc - 38, -45, 24], lx: -196, ly: -116 },
  { name: 'Hamster power!', dot: [WX, WY - 1, 24], lx: 112, ly: -22 },
  { name: 'Logic board', dot: [MAC.xc, -75, 10], lx: 112, ly: 20 },
  { name: 'Keyboard PCB', dot: [70, 40, 3], lx: 112, ly: 48 },
]
