import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb, SiMysql, SiPostgresql, SiSpring, SiSpringboot } from 'react-icons/si'
import { FaNodeJs, FaJava } from 'react-icons/fa'
import { motion } from 'framer-motion'

const iconsVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    }
  }
})

const Tecnologias = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl'>
        Tecnologías
      </motion.h1>
      <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className='flex flex-wrap items-center justify-center gap-4'>
        {/* React */}
        <motion.div variants={iconsVariants(2.5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>

        {/* Next.js */}
        <motion.div variants={iconsVariants(3)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
          <TbBrandNextjs className='text-7xl text-black' />
        </motion.div>

        {/* MongoDB */}
        <motion.div variants={iconsVariants(5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className='text-7xl text-green-400' />
        </motion.div>

        {/* Node.js */}
        <motion.div variants={iconsVariants(2)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-7xl text-green-400' />
        </motion.div>

        {/* PostgreSQL */}
        <motion.div variants={iconsVariants(6)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiPostgresql className='text-7xl text-sky-400' />
        </motion.div>

        {/* Java */}
        <motion.div variants={iconsVariants(4)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaJava className='text-7xl text-orange-500' />
        </motion.div>

        {/* Spring */}
        <motion.div variants={iconsVariants(4.5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiSpring className='text-7xl text-green-600' />
        </motion.div>

        {/* Spring Boot */}
        <motion.div variants={iconsVariants(4.8)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiSpringboot className='text-7xl text-brown-600' />
        </motion.div>

        {/* MySQL */}
        <motion.div variants={iconsVariants(5.2)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMysql className='text-7xl text-blue-600' />
        </motion.div>

        

      </motion.div>
    </div>
  )
}

export default Tecnologias
