export default function Skills() {
  const technicalSkills = {
    'Frontend': ['React.js', 'HTML5', 'CSS3'],
    'Backend': ['Node.js', 'Express.js', 'PHP'],
    'Databases': ['MongoDB', 'PostgreSQL', 'SQL'],
    'Mobile': ['React Native'],
    'Programming Languages': ['JavaScript', 'Python', 'C++', 'Java'],
    'Tools & Platforms': ['Git', 'Docker', 'REST APIs', 'VS Code']
  }

  const softSkills = [
    'Teamwork',
    'Problem Solving',
    'Communication'
  ]

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div style={{ display: 'grid', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div className="card">
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary-color)', textAlign: 'center' }}>
              Technical Skills
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {Object.entries(technicalSkills).map(([category, skills], index) => (
                <div key={index}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>
                    {category}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        style={{
                          padding: '0.5rem 1rem',
                          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))',
                          border: '1px solid var(--primary-color)',
                          borderRadius: '0.5rem',
                          fontSize: '0.9rem',
                          color: 'var(--text-primary)',
                          fontWeight: '500'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary-color)', textAlign: 'center' }}>
              Soft Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  style={{
                    padding: '0.75rem 2rem',
                    background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                    borderRadius: '0.5rem',
                    fontSize: '1.1rem',
                    color: 'white',
                    fontWeight: '600',
                    boxShadow: '0 5px 20px rgba(99, 102, 241, 0.3)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

