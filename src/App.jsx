import { useCallback, useEffect, useState } from 'react'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Credentials from './components/Credentials.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Clients from './components/Clients.jsx'
import Testimonials from './components/Testimonials.jsx'
import ProjectHope from './components/ProjectHope.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useRevealOnScroll } from './hooks/useRevealOnScroll.js'
import { useSmoothScroll } from './hooks/useSmoothScroll.js'

const INTRO_KEY = 'esther-intro-played'

// The intro curtain plays once per browser session, and never for
// visitors who have asked their device for reduced motion.
function shouldPlayIntro() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  try {
    return sessionStorage.getItem(INTRO_KEY) !== 'true'
  } catch {
    return true
  }
}

// App is the top-level layout: it decides the ORDER of sections and
// owns the one piece of shared state, whether the intro has finished.
function App() {
  const [showLoader, setShowLoader] = useState(shouldPlayIntro)
  const [isHeroReady, setIsHeroReady] = useState(false)

  useSmoothScroll()
  useRevealOnScroll()

  // Without the intro, start the hero animation right after first paint.
  useEffect(() => {
    if (showLoader) return
    const frame = requestAnimationFrame(() => setIsHeroReady(true))
    return () => cancelAnimationFrame(frame)
  }, [showLoader])

  // useCallback keeps these functions identical between renders, so the
  // Loader's effect (which depends on onReveal) doesn't restart.
  const handleReveal = useCallback(() => setIsHeroReady(true), [])
  const handleLoaderFinish = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, 'true')
    } catch {
      // Storage blocked (e.g. private mode): the intro simply plays again.
    }
    setShowLoader(false)
  }, [])

  return (
    <>
      {showLoader && <Loader onReveal={handleReveal} onFinish={handleLoaderFinish} />}

      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero isReady={isHeroReady} />
        <Credentials />
        <About />
        <Services />
        <Clients />
        <Testimonials />
        <ProjectHope />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
