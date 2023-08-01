'use client'

import Image from 'next/image'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import  './Components/Navbar.css'
import './globals.css'

export default function Home() {
  return (
    <main  className=" pad min-h-screen">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
