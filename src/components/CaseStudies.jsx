import { motion } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    number: '01',
    title: 'Thycotic',
    category: 'Privileged Access Management',
    description: 'Redesigned the core PAM experience to reduce friction for enterprise security teams managing sensitive credentials across large organizations.',
    tags: ['UX Research', 'Enterprise', 'Security'],
    color: '#e8f0e8',
    colorDark: '#1a2a1a',
  },
  {
    number: '02',
    title: 'Honest Paws',
    category: 'Ecommerce · Pet CBD',
    description: 'Improved conversion and trust signals for a DTC pet wellness brand — from product discovery through checkout and post-purchase.',
    tags: ['Ecommerce', 'Conversion', 'DTC'],
    color: '#f0ece8',
    colorDark: '#2a221a',
  },
  {
    number: '03',
    title: 'Floracracy',
    category: 'Floral Arrangement Builder',
    description: 'Built an interactive floral configuration experience that lets customers express creativity while streamlining the ordering process.',
    tags: ['Product Design', 'Interactive', 'Builder'],
    color: '#e8eaf0',
    colorDark: '#1a1c2a',
  },
  {
    number: '04',
    title: 'Usana',
    category: 'Dashboard Redesign',
    description: 'Redesigned the distributor dashboard to surface key metrics and actions, improving daily engagement and reducing support requests.',
    tags: ['Dashboard', 'Data Viz', 'B2B'],
    color: '#f0e8f0',
    colorDark: '#2a1a2a',
  },
]

const styles = {
  section: {
    padding: '8rem 2rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: '4rem',
    borderTop: '1px solid var(--border)',
    paddingTop: '2rem',
  },
  sectionLabel: {
    fontSize: '0.8rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
  },
  count: {
    fontSize: '0.8rem',
    color: 'var(--muted)',
  },
  card: {
    padding: '2.5rem',
    borderRadius: '12px',
    marginBottom: '1.5rem',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  cardTop: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
  number: {
    fontSize: '0.75rem',
    color: 'var(--muted)',
    fontVariantNumeric: 'tabular-nums',
  },
  arrow: {
    fontSize: '1.2rem',
    color: 'var(--muted)',
    transition: 'transform 0.2s',
  },
  title: {
    fontSize: '1.5rem',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 400,
    marginBottom: '0.25rem',
    color: 'var(--fg)',
  },
  category: {
    fontSize: '0.8rem',
    color: 'var(--muted)',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '0.9rem',
    color: 'var(--muted)',
    lineHeight: 1.7,
    marginBottom: '1.5rem',
  },
  tags: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  tag: {
    fontSize: '0.75rem',
    padding: '0.25rem 0.75rem',
    borderRadius: '100px',
    backgroundColor: 'var(--tag-bg)',
    color: 'var(--muted)',
  },
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      style={styles.card}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.01 }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = `var(--card-hover, var(--tag-bg))`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = 'var(--card)'
      }}
    >
      <div style={styles.cardTop}>
        <span style={styles.number}>{project.number}</span>
        <span style={styles.arrow}>↗</span>
      </div>
      <h3 style={styles.title}>{project.title}</h3>
      <p style={styles.category}>{project.category}</p>
      <p style={styles.description}>{project.description}</p>
      <div style={styles.tags}>
        {project.tags.map(tag => (
          <span key={tag} style={styles.tag}>{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function CaseStudies() {
  return (
    <section id="work" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.sectionLabel}>Selected Work</span>
        <span style={styles.count}>4 projects</span>
      </div>
      {projects.map((project, i) => (
        <ProjectCard key={project.title} project={project} index={i} />
      ))}
    </section>
  )
}
