import { motion } from 'framer-motion'

const tools = [
  'Figma', 'Sketch', 'InVision', 'Adobe XD',
  'Abstract', 'Zeplin', 'Principle', 'Overflow',
  'Miro', 'Adobe Creative Suite',
]

const disciplines = [
  { label: 'User Research', desc: 'Interviews, usability testing, synthesis' },
  { label: 'Interaction Design', desc: 'Flows, prototypes, micro-interactions' },
  { label: 'Visual Design', desc: 'Typography, color, layout systems' },
  { label: 'Accessibility', desc: 'WCAG compliance, inclusive patterns' },
  { label: 'Design Systems', desc: 'Component libraries, documentation' },
  { label: 'Cross-functional', desc: 'Engineering, PM, and stakeholder collab' },
]

const styles = {
  section: {
    padding: '8rem 2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  header: {
    borderTop: '1px solid var(--border)',
    paddingTop: '2rem',
    marginBottom: '4rem',
  },
  sectionLabel: {
    fontSize: '0.8rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    display: 'block',
    marginBottom: '1.5rem',
  },
  intro: {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    lineHeight: 1.5,
    maxWidth: '600px',
    color: 'var(--fg)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1px',
    backgroundColor: 'var(--border)',
    marginBottom: '4rem',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  disciplineItem: {
    padding: '1.5rem',
    backgroundColor: 'var(--bg)',
  },
  disciplineLabel: {
    fontSize: '0.875rem',
    fontWeight: 500,
    marginBottom: '0.25rem',
    color: 'var(--fg)',
  },
  disciplineDesc: {
    fontSize: '0.8rem',
    color: 'var(--muted)',
  },
  toolsHeader: {
    fontSize: '0.8rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    marginBottom: '1.5rem',
  },
  toolsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  tool: {
    fontSize: '0.875rem',
    padding: '0.4rem 1rem',
    borderRadius: '100px',
    border: '1px solid var(--border)',
    color: 'var(--muted)',
    transition: 'border-color 0.2s, color 0.2s',
    cursor: 'default',
  },
}

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.sectionLabel}>Expertise</span>
        <motion.p
          style={styles.intro}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          An iterative, cross-functional designer focused on user research,
          problem reframing, rapid prototyping, and close developer collaboration.
        </motion.p>
      </div>

      <motion.div
        style={styles.grid}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {disciplines.map(d => (
          <div key={d.label} style={styles.disciplineItem}>
            <p style={styles.disciplineLabel}>{d.label}</p>
            <p style={styles.disciplineDesc}>{d.desc}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p style={styles.toolsHeader}>Tools</p>
        <div style={styles.toolsList}>
          {tools.map(tool => (
            <span
              key={tool}
              style={styles.tool}
              onMouseEnter={e => {
                e.target.style.borderColor = 'var(--fg)'
                e.target.style.color = 'var(--fg)'
              }}
              onMouseLeave={e => {
                e.target.style.borderColor = 'var(--border)'
                e.target.style.color = 'var(--muted)'
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
