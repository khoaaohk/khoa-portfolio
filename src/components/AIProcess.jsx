import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import WarpVisual from './WarpVisual'
import ProcessComparison from './ProcessComparison'

const words = ['Prototyping', 'Refining', 'Building']
const wordColors = ['#2c5faa', '#1e8a45', '#b85c20']
const TYPING_SPEED = 110
const ERASING_SPEED = 55
const PAUSE = 1800

const steps = [
  {
    tool: 'Warp',
    desc: 'Where I manage and run my projects — think of it as a smarter command center',
    icon: '⌨️',
  },
  {
    tool: 'Claude',
    desc: 'My AI design partner — I describe what to build, it builds it. I review, refine, and ship',
    icon: '🤖',
  },
  {
    tool: 'GitHub',
    desc: 'Every change is tracked and saved — full version history, easy collaboration with any team',
    icon: '🐙',
  },
  {
    tool: 'Vercel',
    desc: 'Instantly publishes a live, shareable link every time I make a change — no dev needed',
    icon: '▲',
  },
]

const styles = {
  section: {
    padding: '5rem 2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  intro: {
    marginBottom: '4rem',
  },
  mainHeadline: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    marginBottom: '1.5rem',
    color: 'var(--fg)',
  },
  italic: {
    fontStyle: 'italic',
  },
  bio: {
    fontSize: '1rem',
    color: 'var(--muted)',
    maxWidth: '540px',
    lineHeight: 1.8,
  },
  header: {
    borderTop: '1px solid var(--border)',
    paddingTop: '2rem',
    marginBottom: '3rem',
  },
  sectionLabel: {
    fontSize: '0.8rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    display: 'block',
    marginBottom: '1rem',
  },
  headline: {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    lineHeight: 1.5,
    maxWidth: '560px',
    color: 'var(--fg)',
  },
  flow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1px',
    backgroundColor: 'var(--border)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  step: {
    backgroundColor: 'var(--bg)',
    padding: '1.75rem 1.5rem',
    position: 'relative',
  },
  stepNumber: {
    fontSize: '0.7rem',
    color: 'var(--muted)',
    letterSpacing: '0.08em',
    marginBottom: '1rem',
    display: 'block',
  },
  icon: {
    fontSize: '1.4rem',
    marginBottom: '0.75rem',
    display: 'block',
  },
  toolName: {
    fontSize: '1rem',
    fontWeight: 500,
    marginBottom: '0.4rem',
    color: 'var(--fg)',
  },
  toolDesc: {
    fontSize: '0.78rem',
    color: 'var(--muted)',
    lineHeight: 1.6,
  },
  arrow: {
    position: 'absolute',
    right: '-10px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '0.75rem',
    color: 'var(--muted)',
    zIndex: 1,
  },
  secondary: {
    marginTop: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  secondaryLabel: {
    fontSize: '0.78rem',
    color: 'var(--muted)',
  },
  secondaryTag: {
    fontSize: '0.78rem',
    padding: '0.25rem 0.75rem',
    borderRadius: '100px',
    border: '1px solid var(--border)',
    color: 'var(--muted)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
}

export default function AIProcess() {
  const [displayedWord, setDisplayedWord] = useState('Prototyping')
  const s = useRef({ phase: 'pause', wordIndex: 0, charIndex: 'Prototyping'.length })

  useEffect(() => {
    let timeout

    const tick = () => {
      const state = s.current

      if (state.phase === 'pause') {
        state.phase = 'erasing'
        timeout = setTimeout(tick, PAUSE)
      } else if (state.phase === 'erasing') {
        state.charIndex--
        setDisplayedWord(words[state.wordIndex].slice(0, state.charIndex))
        if (state.charIndex === 0) {
          state.wordIndex = (state.wordIndex + 1) % words.length
          state.phase = 'typing'
        }
        timeout = setTimeout(tick, ERASING_SPEED)
      } else if (state.phase === 'typing') {
        state.charIndex++
        setDisplayedWord(words[state.wordIndex].slice(0, state.charIndex))
        if (state.charIndex >= words[state.wordIndex].length) {
          state.phase = 'pause'
        }
        timeout = setTimeout(tick, state.phase === 'pause' ? PAUSE : TYPING_SPEED)
      }
    }

    timeout = setTimeout(tick, PAUSE)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="process" className="process-section" style={{ ...styles.section, paddingTop: '10rem' }}>
      <div style={styles.intro}>
        <motion.p
          style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Product Designer · San Diego, CA
        </motion.p>
        <motion.h1
          style={styles.mainHeadline}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span style={{ color: wordColors[s.current.wordIndex] }}>{displayedWord}</span><span style={{ borderRight: `2px solid ${wordColors[s.current.wordIndex]}`, marginLeft: '1px', opacity: 0.7 }}>&thinsp;</span>{' '}
          products with AI —<br /><span style={styles.italic}>faster, leaner,</span> and closer to engineering.
        </motion.h1>
        <motion.p
          style={{ ...styles.bio, marginBottom: '1.25rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <strong style={{ color: 'var(--fg)', fontWeight: 500 }}>+10 years</strong> of turning complex problems into products people actually use —
          now working with an AI-native workflow that ships real, working prototypes in hours instead of weeks.
        </motion.p>
        <motion.a
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--fg)', borderBottom: '1px solid var(--fg)', paddingBottom: '2px', cursor: 'pointer', transition: 'opacity 0.2s', marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ opacity: 0.6 }}
        >
          View my work ↓
        </motion.a>
      </div>

      <div style={styles.header}>
        <span style={styles.sectionLabel}>AI Design Process</span>
      </div>

      <motion.div
        className="flow-grid"
        style={styles.flow}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {steps.map((step, i) => (
          <div key={step.tool} style={{ position: 'relative', display: 'flex' }}>
            <div
              style={{ ...styles.step, flex: 1 }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--tag-bg)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--bg)'}
            >
              <span style={styles.stepNumber}>0{i + 1}</span>
              <span style={styles.icon}>{step.icon}</span>
              <p style={styles.toolName}>{step.tool}</p>
              <p style={styles.toolDesc}>{step.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        style={{
          marginTop: '1.5rem',
          padding: '1.75rem',
          border: '1px solid var(--border)',
          borderRadius: '12px',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.75rem' }}>Engineering Alignment</p>
        <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '680px' }}>
          Design decisions are made with engineering in mind from day one — colors, spacing, and components
          are production-ready, not just mockups. This means fewer revision cycles, faster shipping,
          and no gap between what was designed and what users actually see.
        </p>
      </motion.div>

      <WarpVisual />
      <ProcessComparison />
    </section>
  )
}
