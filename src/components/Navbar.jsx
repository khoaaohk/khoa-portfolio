import { useState, useEffect, useRef } from 'react'

const hoverStyles = [
  { fontFamily: "'Playfair Display', serif", fontWeight: 700, fontStyle: 'italic', letterSpacing: '0.02em' },
  { fontFamily: "'Courier New', monospace", fontWeight: 700, fontStyle: 'normal', letterSpacing: '-0.03em' },
  { fontFamily: "Impact, 'Arial Narrow', sans-serif", fontWeight: 900, fontStyle: 'normal', letterSpacing: '0.12em', textTransform: 'uppercase' },
  { fontFamily: "Georgia, serif", fontWeight: 400, fontStyle: 'italic', letterSpacing: '0.05em' },
  { fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive", fontWeight: 400, fontStyle: 'normal', letterSpacing: '0.03em' },
  { fontFamily: "'Arial Black', 'Arial Bold', sans-serif", fontWeight: 900, fontStyle: 'normal', letterSpacing: '-0.04em' },
  { fontFamily: "'Inter', sans-serif", fontWeight: 100, fontStyle: 'normal', letterSpacing: '0.25em', textTransform: 'uppercase' },
  { fontFamily: "'Times New Roman', serif", fontWeight: 700, fontStyle: 'italic', letterSpacing: '0.01em' },
  { fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 400, fontStyle: 'normal', letterSpacing: '0.08em' },
  { fontFamily: "Palatino, 'Palatino Linotype', serif", fontWeight: 400, fontStyle: 'italic', letterSpacing: '0.04em' },
  { fontFamily: "'Inter', sans-serif", fontWeight: 900, fontStyle: 'normal', letterSpacing: '-0.06em', textTransform: 'lowercase' },
  { fontFamily: "'Courier New', monospace", fontWeight: 400, fontStyle: 'italic', letterSpacing: '0.06em' },
  { fontFamily: "Georgia, serif", fontWeight: 700, fontStyle: 'normal', letterSpacing: '-0.01em' },
  { fontFamily: "'Playfair Display', serif", fontWeight: 900, fontStyle: 'normal', letterSpacing: '-0.02em' },
  { fontFamily: "'Inter', sans-serif", fontWeight: 200, fontStyle: 'normal', letterSpacing: '0.28em', textTransform: 'uppercase' },
  { fontFamily: "Verdana, Geneva, sans-serif", fontWeight: 400, fontStyle: 'normal', letterSpacing: '-0.02em' },
  { fontFamily: "Monaco, 'Lucida Console', monospace", fontWeight: 400, fontStyle: 'normal', letterSpacing: '0.05em' },
  { fontFamily: "'Helvetica Neue', Helvetica, sans-serif", fontWeight: 300, fontStyle: 'italic', letterSpacing: '0.1em' },
  { fontFamily: "Arial, sans-serif", fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.03em' },
  { fontFamily: "'Inter', sans-serif", fontWeight: 500, fontStyle: 'normal', letterSpacing: '0.18em', textTransform: 'uppercase' },
]

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '0 2rem',
    height: '64px',
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'center',
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
  },
  logo: {
    fontSize: '1rem',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    fontStyle: 'normal',
    letterSpacing: '0',
    textTransform: 'none',
    color: 'var(--fg)',
    cursor: 'pointer',
    userSelect: 'none',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  link: {
    fontSize: '0.875rem',
    color: 'var(--muted)',
    transition: 'color 0.2s',
    cursor: 'pointer',
  },
  themeBtn: {
    background: 'none',
    border: '1px solid var(--border)',
    borderRadius: '100px',
    width: '36px',
    height: '36px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--fg)',
    fontSize: '1rem',
    transition: 'border-color 0.2s, background 0.2s',
  },
}

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [logoStyleIndex, setLogoStyleIndex] = useState(-1)
  const intervalRef = useRef(null)
  const counterRef = useRef(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const startCycling = () => {
    counterRef.current = 0
    intervalRef.current = setInterval(() => {
      setLogoStyleIndex(counterRef.current % hoverStyles.length)
      counterRef.current++
    }, 65)
  }

  const stopCycling = () => {
    clearInterval(intervalRef.current)
    setLogoStyleIndex(-1)
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const activeLogoStyle = logoStyleIndex >= 0 ? hoverStyles[logoStyleIndex] : {}

  return (
    <nav className="nav-bar" style={{
      ...styles.nav,
      backgroundColor: scrolled ? 'var(--bg)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    }}>
      <div
        style={{ ...styles.logo, transition: 'none', ...activeLogoStyle }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onMouseEnter={startCycling}
        onMouseLeave={stopCycling}
      >
        Khoa
      </div>
      <div className="nav-links" style={styles.links}>
        <span style={styles.link} onClick={() => scrollTo('ai-process')}
          onMouseEnter={e => e.target.style.color = 'var(--fg)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
          Process
        </span>
        <span style={styles.link} onClick={() => scrollTo('work')}
          onMouseEnter={e => e.target.style.color = 'var(--fg)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
          Work
        </span>
        <span style={styles.link} onClick={() => scrollTo('skills')}
          onMouseEnter={e => e.target.style.color = 'var(--fg)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
          Skills
        </span>
        <span style={styles.link} onClick={() => scrollTo('contact')}
          onMouseEnter={e => e.target.style.color = 'var(--fg)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
          Contact
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button style={styles.themeBtn} onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  )
}
