import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const commands = [
  { prompt: '~', cmd: 'claude "Design a product dashboard for enterprise users"', delay: 0 },
  { prompt: '~', cmd: 'git add . && git commit -m "Add dashboard component"', delay: 2.5 },
  { prompt: '~', cmd: 'git push origin main', delay: 5 },
  { prompt: '~', cmd: 'vercel --prod', delay: 7 },
]

const outputs = [
  { text: '✦ Claude  Generating component architecture...', color: '#a78bfa', delay: 0.8 },
  { text: '✦ Claude  Writing Dashboard.jsx with Tailwind...', color: '#a78bfa', delay: 1.4 },
  { text: '[main 4f2a1c] Add dashboard component', color: '#6ee7b7', delay: 3.2 },
  { text: 'To github.com/khoaaohk/project.git', color: '#6ee7b7', delay: 5.8 },
  { text: '✓  Deployed to production', color: '#6ee7b7', delay: 8.2 },
  { text: '⚡ https://ethos-dashboard-master.vercel.app/', color: '#60a5fa', delay: 8.8, url: 'https://ethos-dashboard-master.vercel.app/' },
]

const styles = {
  wrapper: {
    margin: '3rem 0 0',
  },
  terminal: {
    backgroundColor: '#0e0e0e',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #2a2a2a',
    fontFamily: "'SF Mono', 'Fira Code', monospace",
    fontSize: '0.8rem',
  },
  titleBar: {
    backgroundColor: '#1a1a1a',
    padding: '0.75rem 1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderBottom: '1px solid #2a2a2a',
  },
  dot: (color) => ({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: color,
  }),
  titleText: {
    marginLeft: '0.5rem',
    fontSize: '0.75rem',
    color: '#555',
    letterSpacing: '0.02em',
  },
  body: {
    padding: '1.25rem 1.5rem',
    minHeight: '220px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  line: {
    display: 'flex',
    gap: '0.5rem',
    lineHeight: 1.6,
  },
  promptSymbol: {
    color: '#6ee7b7',
    userSelect: 'none',
  },
  command: {
    color: '#e5e5e5',
  },
  output: (color) => ({
    color: color,
    paddingLeft: '1.1rem',
  }),
  cursor: {
    display: 'inline-block',
    width: '7px',
    height: '14px',
    backgroundColor: '#6ee7b7',
    marginLeft: '2px',
    verticalAlign: 'middle',
  },
}

function TerminalLine({ item, type }) {
  return (
    <motion.div
      style={type === 'cmd' ? styles.line : {}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {type === 'cmd' ? (
        <>
          <span style={styles.promptSymbol}>❯</span>
          <span className="terminal-cmd" style={styles.command}>{item.cmd}</span>
        </>
      ) : item.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.output(item.color), textDecoration: 'underline', cursor: 'pointer' }}
        >
          {item.text}
        </a>
      ) : (
        <span style={styles.output(item.color)}>{item.text}</span>
      )}
    </motion.div>
  )
}

export default function WarpVisual() {
  const [visibleLines, setVisibleLines] = useState([])
  const [running, setRunning] = useState(false)

  const allLines = [
    ...commands.map(c => ({ ...c, type: 'cmd' })),
    ...outputs.map(o => ({ ...o, type: 'out' })),
  ].sort((a, b) => a.delay - b.delay)

  const startAnimation = () => {
    setVisibleLines([])
    setRunning(true)
    allLines.forEach((line) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line])
      }, line.delay * 1000)
    })
    setTimeout(() => setRunning(false), (allLines[allLines.length - 1].delay + 1) * 1000)
  }

  useEffect(() => {
    const timer = setTimeout(startAnimation, 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      style={styles.wrapper}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div style={styles.terminal}>
        <div style={styles.titleBar}>
          <div style={styles.dot('#ff5f57')} />
          <div style={styles.dot('#febc2e')} />
          <div style={styles.dot('#28c840')} />
          <span style={styles.titleText}>warp — khoa-portfolio</span>
          <div style={{ marginLeft: 'auto' }}>
            <button
              onClick={startAnimation}
              style={{
                background: 'none',
                border: '1px solid #333',
                borderRadius: '4px',
                color: '#555',
                fontSize: '0.7rem',
                padding: '2px 8px',
                cursor: 'pointer',
              }}
            >
              ↺ replay
            </button>
          </div>
        </div>
        <div style={styles.body}>
          {visibleLines.map((line, i) => (
            <TerminalLine key={i} item={line} type={line.type} />
          ))}
          {running && (
            <motion.span
              style={styles.cursor}
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          )}
        </div>
      </div>
    </motion.div>
  )
}
