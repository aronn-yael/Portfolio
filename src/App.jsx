import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Engagement from './components/Engagement'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Engagement />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
