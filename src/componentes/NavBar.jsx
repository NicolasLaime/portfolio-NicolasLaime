import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <h1 className='mx-2 w-10 text-[40px]'>NL</h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-xl'>
        <a href="https://github.com/NicolasLaime" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/nico.laime/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
       
        <a href="https://www.linkedin.com/in/nicolaslaime2023/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  )
}

export default NavBar
