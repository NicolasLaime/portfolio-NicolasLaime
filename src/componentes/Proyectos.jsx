import { useState } from 'react'
import { PROYECTOS } from '../data/constantes'
import { motion } from 'framer-motion'

const CATEGORIAS = ['Fullstack', 'Frontend']  // Eliminamos 'Backend' de las categorías

const Proyectos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Fullstack')

  // Filtrar proyectos por la categoría seleccionada
  const proyectosFiltrados = PROYECTOS.filter(proyecto => proyecto.categoria === categoriaSeleccionada)

  return (
    <div className='border-b border-neutral-900'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -100 }} 
        transition={{ duration: 0.5 }} 
        className='my-20 text-center text-4xl'
      >
        Proyectos
      </motion.h1>

      {/* Botones de categoría */}
      <div className='flex justify-center mb-8'>
        {CATEGORIAS.map(cat => (
          <button
            key={cat}
            className={`mx-4 px-4 py-2 text-lg font-semibold rounded-md ${
              categoriaSeleccionada === cat ? 'bg-purple-600 text-white' : 'bg-neutral-800 text-gray-300'
            }`}
            onClick={() => setCategoriaSeleccionada(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lista de proyectos */}
      <div>
        {proyectosFiltrados.length > 0 ? (
          proyectosFiltrados.map((proyecto, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }} 
                initial={{ opacity: 0, x: -100 }} 
                transition={{ duration: 1 }} 
                className='w-full lg:w-1/4'
              >
                <img src={proyecto.imagen} alt={proyecto.titulo} width={500} height={500} className='mb-6 rounded-md' />
              </motion.div>
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }} 
                initial={{ opacity: 0, x: 100 }} 
                transition={{ duration: 2 }} 
                className='w-full max-w-xl lg:w-3/4 px-4'
              >
                <h6 className='mb-2 font-semibold'>{proyecto.titulo}</h6>
                <p className='mb-4 text-neutral-400'>{proyecto.descripcion}</p>
                {/* Evitar error: si `Tecnologias` no existe, usar array vacío */}
                {(proyecto.Tecnologias || []).map((tech, i) => (
                  <span key={i} className='mr-3 rounded bg-neutral-900  px-3 py-1  text-sm font-medium text-purple-400'>
                    {tech}
                  </span>
                ))}
                <div className='mt-4'>
                  <a 
                    href={proyecto.url} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='text-blue-500 underline'
                  >
                    Ver la aplicación
                  </a>
                </div>
              </motion.div>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-400'>No hay proyectos en esta categoría.</p>
        )}
      </div>
    </div>
  )
}

export default Proyectos
