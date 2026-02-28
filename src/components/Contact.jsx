import { motion } from 'framer-motion'

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
  headline: {
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    lineHeight: 1.3,
    marginBottom: '1.5rem',
    color: 'var(--fg)',
  },
  sub: {
    fontSize: '1rem',
    color: 'var(--muted)',
    maxWidth: '480px',
    lineHeight: 1.7,
    marginBottom: '3rem',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  link: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'var(--fg)',
    borderBottom: '1px solid var(--fg)',
    paddingBottom: '2px',
    transition: 'opacity 0.2s',
    cursor: 'pointer',
  },
}

export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.sectionLabel}>Contact</span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={styles.headline}>
          Available for senior<br />product design roles.
        </h2>
        <p style={styles.sub}>
          Open to full-time opportunities with product teams who move fast and care about craft.
          I bring 15 years of experience, an AI-native workflow, and a track record of shipping work that drives real results.
        </p>
        <div style={styles.links}>
          <a
            href="mailto:khoa@khoas.work"
            style={styles.link}
            onMouseEnter={e => e.target.style.opacity = '0.5'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            khoa@khoas.work ↗
          </a>
          <a
            href="https://linkedin.com/in/khoado"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            onMouseEnter={e => e.target.style.opacity = '0.5'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            LinkedIn ↗
          </a>
          <a
            href="https://read.cv/khoa"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            onMouseEnter={e => e.target.style.opacity = '0.5'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Read.cv ↗
          </a>
        </div>
      </motion.div>
    </section>
  )
}
