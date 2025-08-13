import { useState } from 'react'
import Home from './Home/Home'
import About from './About/About'
import Education from './Education/Education'
import Skills from './Skills/Skills'
import Project from './Project/Project'
import Contact from './Contact/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
      <Home />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
    </>
  )
}

export default App
