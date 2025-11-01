'use client'

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="logo">Mohamed Benaissa</div>
        <ul className="nav-links">
          <li><a href="#profile" onClick={(e) => { e.preventDefault(); scrollToSection('profile') }}>Profile</a></li>
          <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education') }}>Education</a></li>
          <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}>Experience</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Projects</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>Skills</a></li>
          <li><a href="#web3d" onClick={(e) => { e.preventDefault(); scrollToSection('web3d') }}>Web 3D</a></li>
        </ul>
      </div>
    </nav>
  )
}

