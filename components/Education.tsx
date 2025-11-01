export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div style={{ display: 'grid', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          <div className="card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
              Master 2 en Informatique — IDTW
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: '600' }}>
              Université Ferhat Abbas Sétif 1
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Sétif, Algeria
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              2024 – 2026
            </p>
          </div>

          <div className="card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
              Licence en Informatique
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: '600' }}>
              Université Ferhat Abbas Sétif 1
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Sétif, Algeria
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              2021 – 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

