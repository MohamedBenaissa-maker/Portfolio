export default function Projects() {
  const projects = [
    {
      title: 'Codo File — Code Editor',
      type: 'Web-based code editor',
      location: 'Sétif, 2023–2024',
      description: 'Developed a web app supporting multiple languages (Python, JavaScript, Dart).',
      features: [
        'Multiple language support (Python, JavaScript, Dart)',
        'Image-to-Text feature for accessibility',
        'Voice-to-Text feature for accessibility',
        'Modern web-based interface'
      ]
    },
    {
      title: 'StudyNotion — EdTech Platform',
      type: 'Online Education Platform',
      location: 'Sétif, 2023–2024',
      description: 'Built a full-stack education platform for course management and user authentication.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Judge0 API', 'React Native'],
      features: [
        'Full-stack MERN stack application',
        'Course management system',
        'User authentication',
        'Additional mobile applications using React Native'
      ]
    }
  ]

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Selected Projects</h2>
        <div style={{ display: 'grid', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
          {projects.map((project, index) => (
            <div key={index} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '0.5rem' }}>
                    {project.type}
                  </p>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                  {project.location}
                </p>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.8' }}>
                {project.description}
              </p>

              {project.tech && (
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Technologies:</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          padding: '0.4rem 0.8rem',
                          background: 'rgba(99, 102, 241, 0.2)',
                          border: '1px solid var(--primary-color)',
                          borderRadius: '0.5rem',
                          fontSize: '0.85rem',
                          color: 'var(--primary-color)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Features:</p>
                <ul style={{ listStyle: 'none', paddingLeft: '0', color: 'var(--text-secondary)' }}>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '0', color: 'var(--primary-color)' }}>▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

