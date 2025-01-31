import React from 'react'
import NavBar from './componentes/NavBar'
import Hero from './componentes/Hero'
import SobreMi from './componentes/SobreMi'
import Tecnologias from './componentes/Tecnologias'
import Experiencia from './componentes/Experiencia'
import Proyectos from './componentes/Proyectos'
import Contacto from './componentes/Contacto'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#7d7497_100%)]" />

      </div>

      <div className='container mx-auto px-8'>
        <NavBar />
        <Hero />
        <SobreMi />
        <Tecnologias/>
        <Experiencia/>
        <Proyectos/>
        <Contacto/>
      </div>


    </div>

  )
}

export default App
