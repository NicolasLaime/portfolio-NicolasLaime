import React from 'react'
import pc from '/pc-programando.jpg'
import { SOBREMI } from '../data/constantes'
import { motion } from 'framer-motion'


const SobreMi = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>Sobre <span className='text-neutral-500'>Mi</span></h1>
            <div className='flex flex-wrap'>
                <motion.div whileInView={{x: 0 , opacity:1}} initial={{opacity:0, x: -100}} transition={{duration:2}} className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img src={pc} alt="pc" className='rounded-2xl' />
                    </div>

                </motion.div>
                <motion.div whileInView={{opacity: 1 , x:0}} initial={{opacity:0, x:100}} transition={{duration: 1}} className='w-full lg:w-1/2'>
                        <div className='flex justify-center lg:justify-start'>
                            <p className='my-2 max-w-xl py-6 text-xl font-light' >{SOBREMI}</p>
                        </div>
                </motion.div>
            </div>

        </div>
    )
}

export default SobreMi
