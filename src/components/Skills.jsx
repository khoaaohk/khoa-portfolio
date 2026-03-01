import { motion } from 'framer-motion'
import { SiFigma, SiGithub, SiVercel, SiMiro, SiAdobe, SiSlack } from 'react-icons/si'
import { BsTerminalFill } from 'react-icons/bs'
import { RiRobot2Fill } from 'react-icons/ri'

const tools = [
  { name: 'Claude', icon: <RiRobot2Fill size={13} /> },
  { name: 'Warp', icon: <BsTerminalFill size={13} /> },
  { name: 'GitHub', icon: <SiGithub size={13} /> },
  { name: 'Vercel', icon: <SiVercel size={13} /> },
  { name: 'Figma', icon: <SiFigma size={13} /> },
  { name: 'Slack', icon: <SiSlack size={13} /> },
  { name: 'Miro', icon: <SiMiro size={13} /> },
  { name: 'Adobe Creative Suite', icon: <SiAdobe size={13} /> },
]

const disciplines = [
  { label: 'User Research', desc: 'Talking to real users to understand what they actually need — not just what they say' },
  { label: 'Interaction Design', desc: 'Designing how a product feels to use, from first click to task complete' },
  { label: 'Visual Design', desc: 'Making products look polished, on-brand, and easy to understand at a glance' },
  { label: 'Accessibility', desc: 'Building products that work for everyone — regardless of ability or device' },
  { label: 'Design Systems', desc: 'Creating a shared visual language so teams build consistently at scale' },
  { label: 'Cross-functional', desc: 'Working directly with engineering, product, and leadership to align on outcomes' },
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
    <section className="section-pad" style={styles.section}>
      <div style={{ borderTop: '1px solid var(--border)' }} />
      <div id="skills" style={{ ...styles.header, borderTop: 'none', scrollMarginTop: '48px' }}>
        <span style={styles.sectionLabel}>Expertise</span>
        <motion.p
          style={styles.intro}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          A senior product designer who moves fast, works closely with engineering,
          and brings +10 years of experience shipping products that users love and businesses grow from.
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
              key={tool.name}
              style={{ ...styles.tool, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--fg)'
                e.currentTarget.style.color = 'var(--fg)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--muted)'
              }}
            >
              {tool.icon}
              {tool.name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
