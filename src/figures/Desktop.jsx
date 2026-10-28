import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Figure } from './engine'
import { figures } from './objects'
import AppIcon, { APPS } from './AppIcon'
import { DESK, iconAt } from './desk'
import DiskIcon from './DiskIcon'
import { play } from './sound'

const PAGES = {
  trash: { title: 'Trash' },
  resume: { title: 'Résumé', cat: 'Product designer who also ships', body: '12 years of product design across SaaS, e-commerce and enterprise, with a habit of building what I design.', tags: ['PDF', 'One page'], actions: [{ label: 'Open résumé ↗', href: '/khoa_do_resume.html' }] },
  about: { title: 'About', cat: 'Khoa Do', body: "Looking for a product designer who also ships? Let's talk.", tags: ['Product design', 'Prototyping', 'Front-end'], actions: [{ label: 'khoa0aohk@gmail.com', href: 'mailto:khoa0aohk@gmail.com' }, { label: 'LinkedIn ↗', href: 'https://linkedin.com/in/khoado', ext: true }] },
}

// classic Mac "zoom rects": a few outlines race between the icon and the window, then the window appears (and the reverse on close)
function zoomRects(from, to, reverse, done) {
  play('zoom', reverse)
  const N = 4, D = 300, els = []
  for (let i = 0; i < N; i++) {
    const g = document.createElement('div')
    g.className = 'mc-zr'
    document.body.appendChild(g)
    const a = reverse ? to : from, b = reverse ? from : to
    const f = t => ({ left: a.left + (b.left - a.left) * t + 'px', top: a.top + (b.top - a.top) * t + 'px', width: a.width + (b.width - a.width) * t + 'px', height: a.height + (b.height - a.height) * t + 'px' })
    const an = g.animate([{ ...f(0), opacity: 1 }, { ...f(1), opacity: 1 }], { duration: D, delay: i * 45, easing: 'steps(6, end)', fill: 'both' })
    els.push(g)
    an.onfinish = () => { g.remove(); if (i === N - 1) done?.() }
  }
  return () => els.forEach(g => g.remove())
}

const TRASH = [
  ['final_FINAL_v7_actually_final.fig', 'Was not final.'],
  ['make_the_logo_bigger.png', '14 rounds of feedback. It was big enough in round 1.'],
  ['client_feedback_make_it_pop.txt', 'Pop: undefined.'],
  ['button_color_debate_2019.doc', 'Blue won. Then green. Then blue.'],
  ['untitled folder 14', 'Contains untitled folder 13.'],
  ['hamburger_menu_v3_(rejected).sketch', 'Gone but not forgotten.'],
  ['DO_NOT_OPEN.zip', 'Nobody opened it. Nobody knows.'],
  ['lorem_ipsum_final_copy.docx', 'Dolor sit amet, consectetur regret.'],
  ['ship_it_friday_4pm.mov', 'The deploy that taught me things.'],
  ['TODO_sleep.txt', 'Still pending.'],
]

function TrashBody() {
  const [pick, setPick] = useState(null)
  return (
    <div className="mc-trash-win">
      <ul className="mc-files">
        {TRASH.map(([n], i) => (
          <li key={n}><button className={pick === i ? 'on' : ''} onClick={() => { setPick(i); play('paper') }}><span className="mc-fdoc" />{n}</button></li>
        ))}
      </ul>
      <p className="mc-fnote">{pick == null ? `${TRASH.length} items · click one to peek` : TRASH[pick][1]}</p>
    </div>
  )
}

function Win({ id, from, closing, onClose, onGone }) {
  const p = PAGES[id]
  const ref = useRef(null)
  const [shown, setShown] = useState(!from)
  useLayoutEffect(() => {
    if (!from || !ref.current) { setShown(true); return }
    return zoomRects(from, ref.current.getBoundingClientRect(), false, () => setShown(true))
  }, [])
  useEffect(() => {
    if (!closing || !ref.current) return
    setShown(false)
    return zoomRects(from, ref.current.getBoundingClientRect(), true, onGone)
  }, [closing])
  return (
    <div className="mc-win" ref={ref} style={{ visibility: shown ? 'visible' : 'hidden' }} role="dialog" aria-label={p.title}>
      <div className="mc-title"><button className="mc-close" onClick={onClose} aria-label="Close" /><span>{p.title}</span></div>
      {id === 'trash' ? <TrashBody /> : <div className="mc-win-body">
        <div className="mc-win-fig"><svg viewBox="0 0 100 88"><AppIcon id={id} /></svg></div>
        <div>
          <p className="mc-cat">{p.cat}</p>
          <p>{p.body}</p>
          <p className="mc-tags">{p.tags.map(t => <i key={t}>{t}</i>)}</p>
          <p className="mc-acts">{p.actions.map(a => (
            <a key={a.label} className="mc-btn" href={a.href} target={a.ext || a.href.startsWith('/') ? '_blank' : undefined} rel="noreferrer">{a.label}</a>
          ))}</p>
        </div>
      </div>}
    </div>
  )
}

export default function Desktop({ rect, leaving, onClose, initial }) {
  const navigate = useNavigate()
  const [sel, setSel] = useState(null)
  const [from, setFrom] = useState(null)       // icon rect the open window zooms from
  const [shut, setShut] = useState(false)
  const pick = (id, el) => { play('tick'); setFrom(el.getBoundingClientRect()); setShut(false); setSel(id) }
  const shutWin = () => (from ? setShut(true) : setSel(null))
  const [opening, setOpening] = useState(initial || null)   // slug being loaded
  const [time, setTime] = useState(() => new Date())
  // The desktop is always laid out full-window; opening and closing just scale that one layer between the glass and the window (no layout swap, so nothing ghosts).
  const [flat, setFlat] = useState(true)
  useEffect(() => {
    if (leaving) { setFlat(true); return }
    const id = setTimeout(() => setFlat(false), 40)
    return () => clearTimeout(id)
  }, [leaving])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') (sel ? shutWin() : onClose()) }
    window.addEventListener('keydown', onKey)
    const iv = setInterval(() => setTime(new Date()), 15000)
    return () => { window.removeEventListener('keydown', onKey); clearInterval(iv) }
  }, [sel, onClose])

  // A frame grows from the glass to the whole window (its rounded corners drop away quickly); the full-size desktop inside it is scaled uniformly from the glass size to 1.
  const vw = window.innerWidth, vh = window.innerHeight
  const sc = Math.max(rect.width / vw, rect.height / vh)
  const CURVE = 'cubic-bezier(.5, 0, .15, 1)'
  const frameStyle = flat
    ? { left: rect.left, top: rect.top, width: rect.width, height: rect.height, borderRadius: rect.width * 0.024, transition: `left .5s ${CURVE}, top .5s ${CURVE}, width .5s ${CURVE}, height .5s ${CURVE}, border-radius .2s ease-in .5s` }
    : { left: 0, top: 0, width: '100vw', height: '100dvh', borderRadius: 0, transition: `left .5s ${CURVE}, top .5s ${CURVE}, width .5s ${CURVE}, height .5s ${CURVE}, border-radius .14s ease-out` }
  // Phase 3 of the open: every piece morphs from its size and place on the Mac's little screen (big icons) to its real size on the full desktop.
  const U = (rect.width / 512) / sc, phone = vw < 720, T = `all .5s ${CURVE}`
  const pad = Math.max(18, Math.min(54, vw * 0.031))
  const F = phone
    ? { menu: 48, gap: 16, font: 16, apple: [20, 24], lefts: [6, 92], top: 14, w: 76, fig: 60, trash: [76, 50] }
    : { menu: 62, gap: 28, font: 22, apple: [28, 34], lefts: [16, 176], top: 26, w: 140, fig: 116, trash: [85, 50] }
  const screenStyle = { left: 0, top: 0, width: '100vw', height: '100dvh', transformOrigin: '0 0', transform: `scale(${flat ? sc : 1})`, backgroundSize: `${flat ? 8 * U : 28}px ${flat ? 8 * U : 28}px, auto`, transition: `transform .5s ${CURVE}, background-size .5s ${CURVE}` }
  const M = flat ? 34 * U : F.menu
  const mst = {
    menu: { height: M, padding: `0 ${flat ? 16 * U : pad}px`, gap: flat ? 18 * U : F.gap, fontSize: flat ? 14 * U : F.font, borderBottomWidth: flat ? 3 * U : 5, transition: T },
    apple: { width: flat ? 14 * U : F.apple[0], height: flat ? 16.2 * U : F.apple[1], marginRight: flat ? -10 * U : 0, transition: T },
    icons: { top: M, transition: T },
    icon: i => { const { cx, top } = iconAt(i); return { left: flat ? (cx - 50) * U : F.lefts[i], top: flat ? (top - 34) * U : F.top, width: flat ? 100 * U : F.w, transition: T } },
    fig: { width: flat ? 100 * U : F.fig, transition: T },
    lbl: { fontSize: flat ? 12.5 * U : (phone ? 13 : 16), padding: `0 ${flat ? 6 * U : 8}px`, transition: T },
    trash: { left: flat ? 401 * U : vw - 28 - F.trash[0], top: flat ? (205 - 34) * U : vh - F.menu - 36 - F.trash[1], width: flat ? 70 * U : F.trash[0], height: flat ? 52 * U : F.trash[1], right: 'auto', bottom: 'auto', fontSize: flat ? 13 * U : 13, borderWidth: flat ? 3 * U : 3, transition: T },
    hint: { left: 14 * U, top: 306 * U, width: 372 * U, height: 20 * U, fontSize: 10.5 * U, lineHeight: `${20 * U}px`, borderWidth: 1.5 * U, opacity: flat ? 1 : 0, pointerEvents: 'none', transition: T },
  }
  const loading = figures.find(x => x.slug === opening)
  const diskRef = useRef(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    if (!opening) return
    // the inserted disk mounts as an icon at the top right, then the project window zooms open from it
    const a = setTimeout(() => { setMounted(true); play('ding') }, 900)
    const b = setTimeout(() => {
      const r = diskRef.current?.getBoundingClientRect()
      if (r) zoomRects(r, { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight }, false, () => navigate(`/work/${opening}`))
      else navigate(`/work/${opening}`)
    }, 1750)
    return () => { clearTimeout(a); clearTimeout(b) }
  }, [opening, navigate])
  return (
    <div className={`mc-shade${leaving ? ' out' : ''}`}>
      <div className="mc-frame" style={frameStyle}>
      <div className="mc-screen full" style={screenStyle}>
          <div className="mc-menu" style={mst.menu}>
            <span className="mc-apple" style={mst.apple} />
            <b>Khoa's Mac</b>
            <button className="mc-back" onClick={onClose}>← Back</button>
            <span className="mc-clock">{time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
          </div>
          <div className="mc-icons" style={mst.icons}>
            {APPS.map((x, i) => {
              const { cx, top } = iconAt(i)
              return (
                <button key={x.id} className={`mc-icon${sel === x.id ? ' on' : ''}`}
                  style={mst.icon(i)}
                  onClick={e => pick(x.id, e.currentTarget.querySelector('.mc-ico-fig'))}>
                  <span className="mc-ico-fig" style={mst.fig}><svg viewBox="0 0 100 88"><AppIcon id={x.id} /></svg></span>
                  <span className="mc-lbl" style={mst.lbl}>{x.name}</span>
                </button>
              )
            })}
            {loading && mounted && <span ref={diskRef} className="mc-icon mc-disk"><span className="mc-ico-fig"><DiskIcon color={loading.bg} /></span><span className="mc-lbl">{loading.title}</span></span>}
            <button className="mc-trash" style={mst.trash} onClick={e => pick('trash', e.currentTarget)}>Trash</button>
          </div>
          <p className="mc-hint" style={mst.hint}>Pick a project disk to load it</p>
          {sel && <Win key={sel} id={sel} from={from} closing={shut} onClose={shutWin} onGone={() => { setSel(null); setShut(false) }} />}
      </div>
      </div>
    </div>
  )
}
