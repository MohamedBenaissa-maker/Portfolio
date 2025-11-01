'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Profile() {
  const [imageError, setImageError] = useState(false)
  
  return (
    <section id="profile" style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="card" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              margin: '0 auto 2rem',
              border: '4px solid var(--primary-color)',
              padding: '4px',
              background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}>
              {!imageError ? (
                <Image
                  src="/photo.jpg"
                  alt="Mohamed Benaissa"
                  width={200}
                  height={200}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'var(--bg-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  color: 'var(--primary-color)',
                  fontWeight: 'bold'
                }}>
                  MB
                </div>
              )}
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700' }}>
              Mohamed Benaissa
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Master's IDTW student in Informatique
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Université de Sétif 1 (Ferhat Abbas) | Sétif, Algeria
            </p>
          </div>
          
          <div style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              Motivated and detail-oriented Master's student in Computer Science (IDTW) at Université Ferhat Abbas 
              Sétif 1, passionate about full-stack development, artificial intelligence, and cloud technologies. 
              Experienced in modern frameworks and software engineering tools with strong problem-solving and teamwork skills.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center',
            marginTop: '2rem'
          }}>
            <a href="mailto:mohamedbenaissa735@gmail.com" className="btn" style={{ fontSize: '0.95rem' }}>
              📧 Email
            </a>
            <a href="tel:+2130796352552" className="btn" style={{ fontSize: '0.95rem' }}>
              📱 +213 0796352552
            </a>
            <a href="https://github.com/MohamedBenaissa" target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: '0.95rem' }}>
              💻 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

