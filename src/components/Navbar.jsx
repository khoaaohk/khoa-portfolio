import { useState, useEffect } from 'react'

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
    color: 'var(--fg)',
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav-bar" style={{
      ...styles.nav,
      backgroundColor: scrolled ? 'var(--bg)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    }}>
      <div style={{ ...styles.logo, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Khoa</div>
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
