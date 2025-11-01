export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(15, 23, 42, 0.8)',
      borderTop: '1px solid var(--border-color)',
      padding: '2rem 0',
      textAlign: 'center',
      marginTop: '4rem'
    }}>
      <div className="container">
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
          © {new Date().getFullYear()} Mohamed Benaissa. All rights reserved.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <a
            href="mailto:mohamedbenaissa735@gmail.com"
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            📧 mohamedbenaissa735@gmail.com
          </a>
          <a
            href="tel:+2130796352552"
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            📱 +213 0796352552
          </a>
          <a
            href="https://github.com/MohamedBenaissa"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

