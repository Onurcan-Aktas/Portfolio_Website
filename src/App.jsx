import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HeaderLeft from './components/HeaderLeft'
import Home from './components/Home'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Projects from './components/Projects'



function App() {
  

  return (
    <>
      <div className='flex min-h-screen w-full subpixel-antialiased'>

        <HeaderLeft/>
        <main className='flex-[3]'>
          <Home/>
          <Experience/>
          <Projects/>
          <Contact/>

        </main>

      </div>

      </>
  );
}

export default App
