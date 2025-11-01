import Navigation from '@/components/Navigation'
import Profile from '@/components/Profile'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Web3D from '@/components/Web3D'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Profile />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Web3D />
      <Footer />
    </main>
  )
}

