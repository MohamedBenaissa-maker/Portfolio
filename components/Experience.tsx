export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div style={{ display: 'grid', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                  Employee
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontWeight: '600' }}>
                  SOCOEMOD SARL
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Industrial Plastic Packaging Company
                </p>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                Sétif, 2023–2024
              </p>
            </div>
            <ul style={{ listStyle: 'none', paddingLeft: '0', color: 'var(--text-secondary)' }}>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', color: 'var(--primary-color)' }}>▸</span>
                Contributed to process optimization and quality assurance.
              </li>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', color: 'var(--primary-color)' }}>▸</span>
                Supported production coordination across multiple industrial sectors.
              </li>
            </ul>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                  Factory Worker
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontWeight: '600' }}>
                  Plastic Bicycle Manufacturing
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Production and Assembly Department
                </p>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                Sétif, 2019–2022
              </p>
            </div>
            <ul style={{ listStyle: 'none', paddingLeft: '0', color: 'var(--text-secondary)' }}>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', color: 'var(--primary-color)' }}>▸</span>
                Assisted in production, assembly, and quality control.
              </li>
              <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '0', color: 'var(--primary-color)' }}>▸</span>
                Collaborated with technical teams to maintain product standards.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

