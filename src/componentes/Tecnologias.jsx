import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb, SiMysql, SiPostgresql, SiSpring, SiSpringboot } from 'react-icons/si'
import { FaNodeJs, FaJava } from 'react-icons/fa'
import { motion } from 'framer-motion'

// variante para movimiento suave con duración y delay
const iconsVariants = (duration, delay) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,  // velocidad de cada icono
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'mirror',
      delay: delay,        // cada icono arranca con distinto delay
    }
  }
})

const Tecnologias = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tecnologías
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {/* React */}
        <motion.div
          variants={iconsVariants(4, 0)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <span className="mt-2 text-sm text-white">React</span>
        </motion.div>

        {/* Next.js */}
        <motion.div
          variants={iconsVariants(4.5, 0.2)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <div className="bg-white rounded-full p-2">
            <TbBrandNextjs className="text-7xl text-black" />
          </div>
          <span className="mt-2 text-sm text-white">Next.js</span>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconsVariants(5, 0.4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-400" />
          <span className="mt-2 text-sm text-white">MongoDB</span>
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconsVariants(5.5, 0.6)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-400" />
          <span className="mt-2 text-sm text-white">Node.js</span>
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          variants={iconsVariants(6, 0.8)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostgresql className="text-7xl text-sky-400" />
          <span className="mt-2 text-sm text-white">PostgreSQL</span>
        </motion.div>

        {/* Java */}
        <motion.div
          variants={iconsVariants(6.5, 1)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-7xl text-orange-500" />
          <span className="mt-2 text-sm text-white">Java</span>
        </motion.div>

        {/* Spring */}
        <motion.div
          variants={iconsVariants(7, 1.2)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSpring className="text-7xl text-green-600" />
          <span className="mt-2 text-sm text-white">Spring</span>
        </motion.div>

        {/* Spring Boot */}
        <motion.div
          variants={iconsVariants(7.5, 1.4)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSpringboot className="text-7xl text-green-700" />
          <span className="mt-2 text-sm text-white">Spring Boot</span>
        </motion.div>

        {/* MySQL */}
        <motion.div
          variants={iconsVariants(8, 1.6)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-blue-600" />
          <span className="mt-2 text-sm text-white">MySQL</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Tecnologias
