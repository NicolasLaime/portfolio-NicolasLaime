import React from 'react'
import { PROYECTOS } from '../data/constantes'
import { motion } from 'framer-motion'

const Proyectos = () => {
  return (
    <div className='border-b border-neutral-900'>
        <motion.h1 whileInView={{opacity:1 , y:0}} initial={{opacity:0, y: -100}} transition={{duration:0.5}} className='my-20 text-center text-4xl'>Proyectos</motion.h1>

        <div>
            {PROYECTOS.map((proyecto, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0, x: -100}} transition={{duration:1}} className='w-full lg:w-1/4'>
                    <img src={proyecto.imagen} alt={proyecto.titulo} width={500} height={500} className='mb-6 rounded-md' />
                    </motion.div>
                    <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0, x: 100}} transition={{duration:2}} className='w-full max-w-xl lg:w-3/4 px-4'>
                             <h6 className='mb-2 font-semibold'>{proyecto.titulo}</h6>
                             <p className='mb-4 font-neutral-400'>{proyecto.descripcion}</p>
                             {proyecto.Tecnologias.map((tech,index) => (
                                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400'>{tech}</span>
                             ))}
                             <div className='mt-4'>
                                <a 
                                  href={proyecto.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className='text-blue-500 underline'>
                                  Ver la aplicación
                                </a>
                             </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Proyectos
