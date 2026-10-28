import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { figures } from './objects'
import Office from './Office'
import Desktop from './Desktop'
import { START } from './officeScene'
import { play } from './sound'
import './portfolio.css'

const BOOT = 3900   // ms the screen spends booting before the desktop builds itself

export default function Portfolio() {
  const [phase, setPhase] = useState('off')   // off | boot | desk
  const [zoom, setZoom] = useState(false)       // camera pushed in on the screen
  const [open, setOpen] = useState(false)       // flat desktop shown
  const [camera, setCamera] = useState(null)
  const card = useRef(null)
  const timers = useRef([])
  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms))

  const office = useRef(null)
  const [focus, setFocus] = useState(false)
  const aim = () => {
    const b = office.current.box(true)
    const svg = card.current.querySelector('svg')
    const r = svg.getBoundingClientRect(), c = card.current.getBoundingClientRect()
    const ppu = Math.min(r.width / b.vb.w, r.height / b.vb.h)
    const px = r.left + r.width / 2 + (b.cx - (b.vb.x + b.vb.w / 2)) * ppu
    const py = r.top + r.height / 2 + (b.cy - (b.vb.y + b.vb.h / 2)) * ppu
    const vw = window.innerWidth, vh = window.innerHeight
    const scale = Math.min((vw * 0.92) / (b.w * ppu), (vh * 0.88) / (b.h * ppu))
    const w = b.w * ppu * scale, h = b.h * ppu * scale
    setCamera({
      origin: `${px - c.left}px ${py - c.top}px`,
      transform: `translate(${vw / 2 - px}px, ${vh / 2 - py}px) scale(${scale})`,
      rect: { left: vw / 2 - w / 2, top: vh / 2 - h / 2, width: w, height: h },
    })
  }
  // swing round to face the screen, then pan + zoom in, then show the flat desktop
  const [leaving, setLeaving] = useState(false)
  const openDesktop = () => {
    play('whoosh')
    setFocus(true)          // the Mac swings round to face us ...
    aim()                   // ... while the camera pans and zooms onto the glass
    setZoom(true)
    later(() => setOpen(true), 430)
  }
  const close = () => {
    play('whoosh', -1)
    setDisk(null)
    setLeaving(true)
    later(() => { setZoom(false); setFocus(false) }, 200)   // the camera starts easing back while the desktop is still shrinking
    later(() => { setOpen(false); setLeaving(false) }, 560)
  }
  // a disk picked from the tray: slide it in, boot, and open that project
  const [disk, setDisk] = useState(null)
  const [tint, setTint] = useState(START.bg)   // page background follows the Mac's body colour
  const [fly, setFly] = useState(null)
  const flyRef = useRef(null)
  // a disk travelling between its button and the floppy slot: 'in' flies to the slot and slides in, 'out' is the same path run backwards
  const flyDisk = (slug, el, dir, done) => {
    const f = figures.find(x => x.slug === slug), r = el.getBoundingClientRect()
    const sl = office.current.slot()
    const svg = card.current.querySelector('svg'), sr = svg.getBoundingClientRect()
    const ppu = Math.min(sr.width / sl.vb.w, sr.height / sl.vb.h)
    const px = p => ({ x: sr.left + sr.width / 2 + (p.x - (sl.vb.x + sl.vb.w / 2)) * ppu, y: sr.top + sr.height / 2 + (p.y - (sl.vb.y + sl.vb.h / 2)) * ppu })
    const o = px(sl.o), ex = { x: sl.ex.x * ppu, y: sl.ex.y * ppu }, ey = { x: sl.ey.x * ppu, y: sl.ey.y * ppu }
    const H = 46, FACE = -7.4
    setFly({ bg: f.bg, title: f.title })
    // phase 1: swing between the button and a spot square in front of the slot; phase 2: slide along the depth axis, clipped by the front face
    const T1 = 650, T2 = 700, t0 = performance.now(), s0 = 0.92
    const ease = x => x * x * (3 - 2 * x), lerp = (a, b, t) => a + (b - a) * t
    let burst = 0, entry = null
    const tick = now => {
      const el = flyRef.current
      if (!el) { requestAnimationFrame(tick); return }   // the disk element mounts a frame after setFly
      const el_t = Math.min(T1 + T2, now - t0), t = dir === 'out' ? T1 + T2 - el_t : el_t
      let m, clip = 0
      // the Mac's front faces +y, so a disk goes in towards -y: yt is the world y of its leading (shutter) edge
      if (t < T1) {
        const k = ease(t / T1), yt = FACE + 46
        const m1 = [ex.x, ex.y, ey.x, ey.y, o.x + ey.x * yt, o.y + ey.y * yt]
        // the disk starts hidden under its pill (centred on it, at its own size) and slides out from beneath it
        const m0 = [s0, 0, 0, s0, r.left + r.width / 2 - 22 * s0, r.top + r.height / 2 - 23 * s0]
        m = m0.map((v, i) => lerp(v, m1[i], k))
        m[5] -= Math.sin(Math.PI * Math.min(1, k * 1.15)) * 70 * Math.min(1, k * 1.6)
        el.style.zIndex = k < 0.28 ? 4 : 60      // under the pill while it slides out, over everything once clear
      } else {
        el.style.zIndex = 60
        const k = ease(Math.min(1, (t - T1) / T2)), yt = lerp(FACE + 46, FACE - 52, k)
        m = [ex.x, ex.y, ey.x, ey.y, o.x + ey.x * yt, o.y + ey.y * yt]
        clip = Math.min(H, Math.max(0, FACE - yt))   // hide whatever has passed behind the front face
      }
      el.style.transform = `matrix(${m.join(',')})`
      if (dir === 'in' && t >= T1) {
        if (!entry) { const b = el.getBoundingClientRect(); entry = { x: b.left + b.width / 2 - ey.x * 69, y: b.top + b.height / 2 - ey.y * 69 } }
        const k2 = (t - T1) / T2
        if (!el.dataset.snd) { el.dataset.snd = 1; play('insert') }
        while (burst < 3 && k2 >= [0.15, 0.5, 0.9][burst]) { play('sparkle', burst === 2 ? 5 : 3); sparkle(entry.x + (Math.random() - 0.5) * 36, entry.y + (Math.random() - 0.5) * 10, burst === 2 ? 10 : 6); burst++ }
      }
      el.style.clipPath = `inset(${clip}px 0 0 0)`
      if (el_t < T1 + T2) requestAnimationFrame(tick); else { setFly(null); done?.() }
    }
    requestAnimationFrame(tick)
    return T1 + T2
  }
  // little four-point sparkles bursting from the slot as a disk goes in
  const sparkle = (x, y, n) => {
    for (let i = 0; i < n; i++) {
      const s = document.createElement('i')
      s.className = 'cf-spark'
      s.textContent = '✦'
      s.style.cssText = `left:${x}px;top:${y}px;color:${['#f2c230', '#fffbe8', '#ef6a4c', '#8fd3b6'][i % 4]};font-size:${10 + Math.random() * 12}px`
      document.body.appendChild(s)
      const a = -Math.PI / 2 + (Math.random() - 0.5) * 3.6, d = 14 + Math.random() * 24
      s.animate([
        { transform: 'translate(-50%,-50%) scale(0) rotate(0deg)', opacity: 1 },
        { transform: `translate(calc(-50% + ${Math.cos(a) * d * 0.6}px), calc(-50% + ${Math.sin(a) * d * 0.6}px)) scale(1.15) rotate(70deg)`, opacity: 1, offset: 0.4 },
        { transform: `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d + 14}px)) scale(0) rotate(160deg)`, opacity: 0 },
      ], { duration: 650 + Math.random() * 300, delay: Math.random() * 120, easing: 'ease-out', fill: 'both' }).onfinish = () => s.remove()
    }
  }
  const pickDisk = (slug, el) => {
    if (disk || zoom || phase === 'off') return
    play('tick'); play('whoosh')
    setDisk(slug)
    const T = flyDisk(slug, el, 'in') + 100
    if (phase === 'off') { later(() => setPhase('boot'), T); later(() => setPhase('desk'), T + BOOT); later(openDesktop, T + BOOT + 1400) }
    else later(openDesktop, T + 300)
  }
  // coming back from a case study: the Mac is still on, and its disk slides out and returns to its button
  const loc = useLocation()
  useEffect(() => {
    const slug = loc.state?.eject
    if (!slug) return
    window.history.replaceState({}, '')
    setPhase('desk')
    later(() => { const el = document.querySelector(`[data-slug="${slug}"]`); if (el) { play('eject'); flyDisk(slug, el, 'out') } }, 350)
  }, [])
  const power = () => {
    if (phase !== 'off') return openDesktop()
    setPhase('boot')
    later(() => setPhase('desk'), BOOT)
    later(openDesktop, 3600)
  }
  useEffect(() => () => timers.current.forEach(clearTimeout), [])
  // the Mac switches itself on when the page loads (unless we're back from a case study, where it's already on)
  useEffect(() => {
    if (loc.state?.eject) return
    // the Mac builds itself first (see BUILD in officeScene.js), then switches on
    later(() => setPhase('boot'), 2500)
    later(() => setPhase('desk'), 2500 + BOOT)
  }, [])
  // lock page scroll while zoomed in, and always release it when leaving (navigating to a case study kept it locked)
  useEffect(() => { document.body.style.overflow = zoom ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [zoom])
  return (
    <div className="cf" style={tint ? { '--paper': tint } : undefined}>
      <div className="cf-wrap">
        <header className="cf-bar">
          <a className="cf-id" href="#top">
            <span className="cf-logo" />
            <span className="cf-id-text">
              <span className="cf-name">Khoa Do</span>
              <span className="cf-role">Product designer</span>
            </span>
          </a>
          {phase === 'desk' ? <button className="cf-hint-top" onClick={openDesktop}>About and Resume</button> : <span className="cf-hint-top" />}
        </header>

        <section className="cf-hero" id="top">
          <div className={`cf-stagecard${zoom ? ' zoomed' : ''}`} ref={card} style={zoom && camera ? { transformOrigin: camera.origin, transform: camera.transform } : undefined}>
            <Office ref={office} build={!loc.state?.eject} onTint={setTint} focus={focus} phase={phase} onPower={power} onOpen={openDesktop} />
          </div>
          <div className="cf-pills" role="group" aria-label="Project disks">
            <p className="cf-pills-h">Projects</p>
            <div className="cf-pills-scroll">
            {figures.map((f, i) => (
              <button key={f.slug} className={`cf-pill${disk === f.slug ? ' on' : ''}`} data-slug={f.slug} onClick={e => pickDisk(f.slug, e.currentTarget)} aria-label={`Load ${f.title} disk`}>
                <i>{String(i + 1).padStart(2, '0')}</i>{f.title}
              </button>
            ))}
            </div>
          </div>
          {fly && <span className="cf-fly" ref={flyRef}><span className="cf-dlabel" style={{ '--c': fly.bg }}>{fly.title}</span><span className="cf-shutter" /></span>}
        </section>


        <div className={`cf-zoom-bg${zoom ? ' on' : ''}`} />
        {open && camera && <Desktop rect={camera.rect} leaving={leaving} onClose={close} initial={disk} />}
      </div>
    </div>
  )
}
