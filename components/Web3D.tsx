'use client'

import { useState } from 'react'

export default function Web3D() {
  const [projects, setProjects] = useState<Array<{
    id: number
    title: string
    description: string
    url: string
    thumbnail?: string
  }>>([])

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
    thumbnail: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.title && formData.url) {
      setProjects([...projects, {
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        url: formData.url,
        thumbnail: formData.thumbnail
      }])
      setFormData({ title: '', description: '', url: '', thumbnail: '' })
    }
  }

  const handleDelete = (id: number) => {
    setProjects(projects.filter(p => p.id !== id))
  }

  return (
    <section id="web3d" style={{ paddingBottom: '5rem' }}>
      <div className="container">
        <h2 className="section-title">Web 3D Projects</h2>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="card" style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
              Upload Your 3D Projects
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Add your Web 3D projects here. Provide the project URL (hosted on Vercel or other platforms) 
              and it will be displayed in your portfolio.
            </p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  Project Title *
                </label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem',
                    color: 'var(--text-primary)',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter project title"
                />
              </div>

              <div>
                <label htmlFor="description" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  placeholder="Enter project description"
                />
              </div>

              <div>
                <label htmlFor="url" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  Project URL (Vercel/Other) *
                </label>
                <input
                  type="url"
                  id="url"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem',
                    color: 'var(--text-primary)',
                    fontSize: '1rem'
                  }}
                  placeholder="https://your-project.vercel.app"
                />
              </div>

              <div>
                <label htmlFor="thumbnail" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                  Thumbnail URL (Optional)
                </label>
                <input
                  type="url"
                  id="thumbnail"
                  value={formData.thumbnail}
                  onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem',
                    color: 'var(--text-primary)',
                    fontSize: '1rem'
                  }}
                  placeholder="https://example.com/thumbnail.jpg"
                />
              </div>

              <button type="submit" className="btn" style={{ alignSelf: 'flex-start' }}>
                Add Project
              </button>
            </form>
          </div>

          {projects.length > 0 && (
            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--primary-color)', textAlign: 'center' }}>
                My 3D Projects
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {projects.map((project) => (
                  <div key={project.id} className="card" style={{ position: 'relative' }}>
                    {project.thumbnail ? (
                      <div style={{
                        width: '100%',
                        height: '200px',
                        marginBottom: '1rem',
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        background: 'var(--bg-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none'
                          }}
                        />
                      </div>
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '200px',
                        marginBottom: '1rem',
                        borderRadius: '0.5rem',
                        background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem'
                      }}>
                        🎨
                      </div>
                    )}
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                      {project.title}
                    </h4>
                    {project.description && (
                      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                        {project.description}
                      </p>
                    )}
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ fontSize: '0.9rem', padding: '0.6rem 1.5rem' }}
                      >
                        View Project
                      </a>
                      <button
                        onClick={() => handleDelete(project.id)}
                        style={{
                          padding: '0.6rem 1.5rem',
                          background: 'rgba(239, 68, 68, 0.2)',
                          border: '1px solid #ef4444',
                          borderRadius: '0.5rem',
                          color: '#ef4444',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(239, 68, 68, 0.4)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {projects.length === 0 && (
            <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎨</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                No 3D projects added yet. Use the form above to add your first project!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

