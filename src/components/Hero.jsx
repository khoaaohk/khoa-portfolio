import { motion } from 'framer-motion'

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  label: {
    fontSize: '0.8rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    marginBottom: '2rem',
  },
  headline: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    marginBottom: '2rem',
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
    marginBottom: '3rem',
  },
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'var(--fg)',
    borderBottom: '1px solid var(--fg)',
    paddingBottom: '2px',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  location: {
    position: 'absolute',
    bottom: '2rem',
    left: '2rem',
    fontSize: '0.8rem',
    color: 'var(--muted)',
    letterSpacing: '0.05em',
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section style={{ position: 'relative' }}>
      <div style={styles.section}>
        <motion.p style={styles.label} variants={fadeUp} custom={0} initial="hidden" animate="visible">
          Product Designer · San Diego, CA
        </motion.p>

        <motion.h1 style={styles.headline} variants={fadeUp} custom={1} initial="hidden" animate="visible">
          I research and design software products to{' '}
          <span style={styles.italic}>empower users</span>{' '}
          and increase business growth.
        </motion.h1>

        <motion.p style={styles.bio} variants={fadeUp} custom={2} initial="hidden" animate="visible">
          Passionate about solving technical problems through thoughtful design.
          I bridge the gap between user needs and business goals — with a deep
          interest in accessibility and delightful interactions.
        </motion.p>

        <motion.a
          style={styles.cta}
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ opacity: 0.6 }}
        >
          View my work ↓
        </motion.a>
      </div>
    </section>
  )
}
