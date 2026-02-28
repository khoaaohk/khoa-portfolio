import { motion } from 'framer-motion'

const oldProcess = [
  { step: '01', label: 'Brief', icon: '📋', desc: 'Stakeholder meetings, requirements docs' },
  { step: '02', label: 'Wireframes', icon: '✏️', desc: 'Low-fi sketches, whiteboard sessions' },
  { step: '03', label: 'Figma', icon: '🎨', desc: 'High-fidelity mockups, component builds' },
  { step: '04', label: 'Handoff', icon: '📦', desc: 'Zeplin specs, dev handoff docs' },
  { step: '05', label: 'Testing', icon: '🧪', desc: 'Usability tests, feedback rounds' },
  { step: '06', label: 'Revisions', icon: '🔁', desc: 'Multiple iteration cycles' },
  { step: '07', label: 'Deploy', icon: '🚀', desc: 'Weeks or months later' },
]

const newProcess = [
  { step: '01', label: 'Prompt', icon: '⌨️', desc: 'Describe the product in Warp + Claude' },
  { step: '02', label: 'Generate', icon: '🤖', desc: 'Claude writes components instantly' },
  { step: '03', label: 'Refine', icon: '🎨', desc: 'Figma for visual polish if needed' },
  { step: '04', label: 'Ship', icon: '▲', desc: 'Push to GitHub, live on Vercel in seconds' },
]

const gains = [
  { label: 'Faster delivery', old: 'Weeks to months', new: 'Hours to days' },
  { label: 'Iteration speed', old: 'One round at a time', new: 'Real-time, unlimited' },
  { label: 'Handoff friction', old: 'High — specs, docs, meetings', new: 'None — code is the design' },
  { label: 'Design fidelity', old: 'Static mockups', new: 'Live, interactive components' },
]

const styles = {
  section: {
    marginTop: '4rem',
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
    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    color: 'var(--fg)',
    marginBottom: '3rem',
    lineHeight: 1.4,
  },
  columns: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  column: (isNew) => ({
    borderRadius: '12px',
    overflow: 'hidden',
    border: isNew ? '1px solid rgba(45,107,50,0.2)' : '1px solid rgba(139,74,30,0.2)',
    backgroundColor: isNew ? '#edf7ee' : '#fff4ec',
    display: 'flex',
    flexDirection: 'column',
  }),
  colHeader: (isNew) => ({
    padding: '1rem 1.25rem',
    borderBottom: isNew ? '1px solid rgba(45,107,50,0.15)' : '1px solid rgba(139,74,30,0.15)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: isNew ? '#c8eaca' : '#fde0c8',
  }),
  colTitle: (isNew) => ({
    fontSize: '0.8rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: isNew ? '#2d6b32' : '#8a4a1e',
  }),
  colBadge: (isNew) => ({
    fontSize: '0.65rem',
    padding: '2px 8px',
    borderRadius: '100px',
    backgroundColor: isNew ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.5)',
    color: isNew ? '#2d6b32' : '#8a4a1e',
    marginLeft: 'auto',
  }),
  stepList: {
    padding: 0,
  },
  stepItem: (isNew) => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    padding: '0.75rem 1.25rem',
    borderBottom: isNew ? '1px solid rgba(45,107,50,0.12)' : '1px solid rgba(139,74,30,0.12)',
    backgroundColor: isNew ? '#edf7ee' : '#fff4ec',
  }),
  stepIcon: {
    fontSize: '1rem',
    minWidth: '1.5rem',
    marginTop: '1px',
  },
  stepContent: {
    flex: 1,
  },
  stepLabel: {
    fontSize: '0.825rem',
    fontWeight: 500,
    color: 'var(--fg)',
    marginBottom: '2px',
  },
  stepDesc: {
    fontSize: '0.75rem',
    color: 'var(--muted)',
    lineHeight: 1.5,
  },
  stepNum: {
    fontSize: '0.65rem',
    color: 'var(--muted)',
    minWidth: '1.5rem',
    marginTop: '3px',
  },
  gainsTable: {
    border: '1px solid var(--border)',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  gainsHeader: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    backgroundColor: 'var(--tag-bg)',
    borderBottom: '1px solid var(--border)',
    padding: '0.75rem 1.25rem',
    gap: '1rem',
  },
  gainsHeaderCell: {
    fontSize: '0.7rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
  },
  gainsRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    padding: '0.875rem 1.25rem',
    gap: '1rem',
    borderBottom: '1px solid var(--border)',
    alignItems: 'center',
    backgroundColor: 'var(--bg)',
  },
  gainsLabel: {
    fontSize: '0.825rem',
    fontWeight: 500,
    color: 'var(--fg)',
  },
  gainsOld: {
    fontSize: '0.8rem',
    color: 'var(--muted)',
    textDecoration: 'line-through',
  },
  gainsNew: {
    fontSize: '0.8rem',
    color: 'var(--fg)',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
  },
}

export default function ProcessComparison() {
  return (
    <motion.div
      style={styles.section}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <span style={styles.sectionLabel}>Then vs Now</span>
      <p style={styles.headline}>
        The old process was thorough — but slow.<br />
        The new one is faster without sacrificing quality.
      </p>

      <div className="comparison-cols" style={styles.columns}>
        {/* Old Process */}
        <div style={styles.column(false)}>
          <div style={styles.colHeader(false)}>
            <span style={styles.colTitle(false)}>Old Process</span>
            <span style={styles.colBadge(false)}>Weeks → Months</span>
          </div>
          <div style={styles.stepList}>
            {oldProcess.map((s, i) => (
              <div key={s.step} style={{ ...styles.stepItem(false), borderBottom: i < oldProcess.length - 1 ? '1px solid rgba(139,74,30,0.12)' : 'none' }}>
                <span style={styles.stepNum}>{s.step}</span>
                <span style={styles.stepIcon}>{s.icon}</span>
                <div style={styles.stepContent}>
                  <p style={styles.stepLabel}>{s.label}</p>
                  <p style={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Process */}
        <div style={styles.column(true)}>
          <div style={styles.colHeader(true)}>
            <span style={styles.colTitle(true)}>AI-Native Process</span>
            <span style={styles.colBadge(true)}>Hours → Days</span>
          </div>
          <div style={styles.stepList}>
            {newProcess.map((s, i) => (
              <div key={s.step} style={{ ...styles.stepItem(true), borderBottom: '1px solid rgba(45,107,50,0.12)' }}>
                <span style={styles.stepNum}>{s.step}</span>
                <span style={styles.stepIcon}>{s.icon}</span>
                <div style={styles.stepContent}>
                  <p style={styles.stepLabel}>{s.label}</p>
                  <p style={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* AI World Visual */}
          <div style={{
            flex: 1,
            backgroundColor: '#edf7ee',
            padding: '1.5rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
          }}>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1rem',
              fontStyle: 'italic',
              color: '#2d6b32',
              lineHeight: 1.5,
            }}>
              "We are living through the biggest shift in how products are designed and built since the internet."
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { stat: '10×', label: 'faster from idea to live product' },
                { stat: '0', label: 'handoff gaps between design & code' },
              ].map(item => (
                <div key={item.stat} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: '#2d6b32',
                    minWidth: '2rem',
                  }}>{item.stat}</span>
                  <span style={{
                    fontSize: '0.75rem',
                    color: '#2d6b32',
                    opacity: 0.7,
                    lineHeight: 1.4,
                  }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gains Table */}
      <div style={styles.gainsTable}>
        <div className="gains-header" style={styles.gainsHeader}>
          <span style={styles.gainsHeaderCell}>What changed</span>
          <span className="gains-col-before" style={styles.gainsHeaderCell}>Before</span>
          <span style={styles.gainsHeaderCell}>Now</span>
        </div>
        {gains.map((g, i) => (
          <div key={g.label} className="gains-row" style={{ ...styles.gainsRow, borderBottom: i < gains.length - 1 ? '1px solid var(--border)' : 'none' }}>
            <span style={styles.gainsLabel}>{g.label}</span>
            <span className="gains-col-before" style={styles.gainsOld}>{g.old}</span>
            <span style={styles.gainsNew}>✦ {g.new}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
