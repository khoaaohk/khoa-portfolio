// Tiny synthesised sound kit (Web Audio, no files): every interaction calls play(name, arg). Muted state is remembered.
let ctx = null, master = null, noiseBuf = null
const subs = new Set()
let muted = false
try { muted = localStorage.getItem('cf-mute') === '1' } catch { /* storage blocked */ }

export const isMuted = () => muted
export function onMute(f) { subs.add(f); return () => subs.delete(f) }
export function setMuted(m) {
  muted = m
  try { localStorage.setItem('cf-mute', m ? '1' : '0') } catch { /* ignore */ }
  subs.forEach(f => f(m))
  if (!m) play('tick')
}

function ac() {
  if (!ctx) {
    const C = window.AudioContext || window.webkitAudioContext
    if (!C) return null
    ctx = new C()
    master = ctx.createGain(); master.gain.value = 0.5; master.connect(ctx.destination)
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate)
    const d = noiseBuf.getChannelData(0)
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1
  }
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

// one oscillator with a fast attack and exponential decay
function tone({ f, f2, type = 'sine', dur = 0.1, vol = 0.2, delay = 0, attack = 0.004 }) {
  const t0 = ctx.currentTime + delay
  const o = ctx.createOscillator(), g = ctx.createGain()
  o.type = type
  o.frequency.setValueAtTime(f, t0)
  if (f2) o.frequency.exponentialRampToValueAtTime(f2, t0 + dur)
  g.gain.setValueAtTime(0.0001, t0)
  g.gain.linearRampToValueAtTime(vol, t0 + attack)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
  o.connect(g); g.connect(master)
  o.start(t0); o.stop(t0 + dur + 0.02)
}
// filtered noise burst
function noise({ f = 2000, f2, q = 1, type = 'bandpass', dur = 0.05, vol = 0.2, delay = 0, attack = 0.003 }) {
  const t0 = ctx.currentTime + delay
  const s = ctx.createBufferSource(), fl = ctx.createBiquadFilter(), g = ctx.createGain()
  s.buffer = noiseBuf; s.loop = true
  fl.type = type; fl.Q.value = q
  fl.frequency.setValueAtTime(f, t0)
  if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t0 + dur)
  g.gain.setValueAtTime(0.0001, t0)
  g.gain.linearRampToValueAtTime(vol, t0 + attack)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
  s.connect(fl); fl.connect(g); g.connect(master)
  s.start(t0, Math.random()); s.stop(t0 + dur + 0.02)
}

const SOUNDS = {
  hover: () => { tone({ f: 2100, f2: 2500, dur: 0.025, vol: 0.045 }) },
  tick: () => { tone({ f: 1500, f2: 950, dur: 0.045, vol: 0.12 }); noise({ f: 4000, type: 'highpass', dur: 0.02, vol: 0.05 }) },
  // keyboard: a soft thock on the way down (deeper for wide keys), a lighter tick on release
  key: (w = 1) => {
    const low = w > 1.5 ? 0.78 : 1
    tone({ f: 240 * low, f2: 105 * low, type: 'triangle', dur: 0.075, vol: 0.3 })
    noise({ f: 2300 * low, q: 1.4, dur: 0.035, vol: 0.2 })
  },
  keyup: (w = 1) => { noise({ f: 3600 / (w > 1.5 ? 1.4 : 1), q: 1.2, dur: 0.02, vol: 0.09 }); tone({ f: 520, f2: 380, dur: 0.02, vol: 0.05 }) },
  mouseDown: () => { noise({ f: 3200, q: 2, dur: 0.018, vol: 0.34 }); tone({ f: 1900, f2: 1200, type: 'square', dur: 0.014, vol: 0.07 }) },
  mouseUp: () => { noise({ f: 2400, q: 2, dur: 0.014, vol: 0.18 }) },
  // assembly line: a small place-and-click for each piece, a heavier thunk for the case
  place: () => { tone({ f: 640, f2: 300, dur: 0.05, vol: 0.12 }); noise({ f: 1800, dur: 0.02, vol: 0.06 }) },
  thunk: () => { tone({ f: 130, f2: 52, dur: 0.22, vol: 0.55 }); noise({ f: 500, type: 'lowpass', dur: 0.12, vol: 0.3 }) },
  startup: () => {
    ;[130.8, 196, 261.6, 329.6, 392, 523.3].forEach((f, i) => tone({ f, type: 'triangle', dur: 1.4 - i * 0.05, vol: 0.09, delay: i * 0.04, attack: 0.03 }))
    tone({ f: 65.4, dur: 1.5, vol: 0.2, attack: 0.02 })
  },
  ready: () => { tone({ f: 880, dur: 0.12, vol: 0.12 }); tone({ f: 1320, dur: 0.18, vol: 0.12, delay: 0.09 }) },
  whoosh: (dir = 1) => noise({ f: dir > 0 ? 350 : 1900, f2: dir > 0 ? 1900 : 350, q: 0.9, dur: 0.55, vol: 0.2, attack: 0.15 }),
  turn: () => { noise({ f: 500, f2: 1500, q: 1, dur: 0.32, vol: 0.13, attack: 0.08 }); tone({ f: 300, f2: 420, dur: 0.1, vol: 0.06 }) },
  on: () => { tone({ f: 620, f2: 980, dur: 0.1, vol: 0.14 }); noise({ f: 3000, dur: 0.02, vol: 0.05 }) },
  off: () => { tone({ f: 980, f2: 560, dur: 0.1, vol: 0.14 }); noise({ f: 2400, dur: 0.02, vol: 0.05 }) },
  swatch: (i = 0) => { const f = 330 * Math.pow(1.122, i); tone({ f, dur: 0.12, vol: 0.14 }); tone({ f: f * 2, dur: 0.08, vol: 0.05, delay: 0.02 }) },
  // disk: slide in with a mechanical rasp, seat with a thunk and a latch click; eject is the reverse with a pop
  insert: () => {
    noise({ f: 700, f2: 1100, q: 3, dur: 0.55, vol: 0.14, attack: 0.05 })
    SOUNDS.thunk.call(null)
    tone({ f: 1100, f2: 700, dur: 0.03, vol: 0.12, delay: 0.04 })
  },
  eject: () => { noise({ f: 1100, f2: 700, q: 3, dur: 0.45, vol: 0.14, attack: 0.05 }); tone({ f: 420, f2: 900, dur: 0.07, vol: 0.2, delay: 0.42 }); noise({ f: 2200, dur: 0.03, vol: 0.12, delay: 0.42 }) },
  sparkle: (n = 3) => { for (let i = 0; i < n; i++) tone({ f: 2000 + Math.random() * 2200, dur: 0.22 + Math.random() * 0.12, vol: 0.06, delay: i * 0.045 + Math.random() * 0.03, attack: 0.002 }) },
  zoom: (rev = false) => { for (let i = 0; i < 4; i++) tone({ f: rev ? 900 - i * 120 : 520 + i * 120, dur: 0.035, vol: 0.07, delay: i * 0.045, type: 'square' }); tone({ f: rev ? 380 : 760, dur: 0.07, vol: 0.1, delay: 0.2 }) },
  paper: () => { noise({ f: 5000, type: 'highpass', dur: 0.06, vol: 0.09 }); tone({ f: 700, f2: 520, dur: 0.04, vol: 0.07 }) },
  ding: () => { tone({ f: 1320, dur: 0.45, vol: 0.16 }); tone({ f: 1980, dur: 0.3, vol: 0.06, delay: 0.01 }) },
  progress: (n = 8) => { for (let i = 0; i < n; i++) noise({ f: 1400 + i * 120, q: 4, dur: 0.03, vol: 0.07, delay: i * 0.17 }) },
}
SOUNDS.thunk = SOUNDS.thunk

export function play(name, arg) {
  if (muted || typeof window === 'undefined') return
  const c = ac()
  if (!c || c.state !== 'running') { c?.resume?.(); if (!c || c.state !== 'running') return }
  try { SOUNDS[name]?.(arg) } catch { /* audio must never break the page */ }
}

// every plain button/link on the portfolio and the Mac UI gets a click tick (richer sounds are played by their own handlers)
const TICKY = '.cf-hint-top, .mc-btn, .mc-back, .mc-close, .mcp-back-link, .mcp-close, .mcp-nav a, .mc-files button'
const HOVERY = '.cf-pill, .cf-tab, .cf-sw, .cf-hint-top, .cf-id, .mc-icon, .mc-trash, .mc-back, .mc-btn, .mc-close, .mc-files button, .mcp-back-link, .mcp-close, .mcp-nav a'
let lastHover = 0
if (typeof document !== 'undefined') {
  document.addEventListener('pointerover', e => {
    const el = e.target.closest?.(HOVERY)
    if (!el || el.contains(e.relatedTarget) || e.pointerType === 'touch') return
    const n = performance.now()
    if (n - lastHover > 70) { lastHover = n; play('hover') }
  }, true)
  document.addEventListener('pointerdown', e => { if (e.target.closest?.(TICKY)) play('tick') }, true)
}
