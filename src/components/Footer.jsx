const styles = {
  footer: {
    borderTop: '1px solid var(--border)',
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '900px',
    margin: '0 auto',
  },
  left: {
    fontSize: '0.8rem',
    color: 'var(--muted)',
  },
  right: {
    fontSize: '0.8rem',
    color: 'var(--muted)',
  },
}

export default function Footer() {
  return (
    <footer>
      <div style={styles.footer}>
        <span style={styles.left}>© {new Date().getFullYear()} Khoa Do</span>
        <span style={styles.right}>Product Designer · San Diego, CA</span>
      </div>
    </footer>
  )
}
