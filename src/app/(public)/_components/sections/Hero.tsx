import React from 'react'
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'
import AnimateSection from '../animations/AnimateSection'
import Image from 'next/image'

export const heroLinks = {
  whatsapp: 'https://wa.me/5591991149177',
  github: 'https://github.com/lucas-santos-developpeur  ',
  linkedin: 'https://www.linkedin.com/in/lucas-santos-developer',
}

const Hero: React.FC = () => {
  return (
    <AnimateSection>
      <section
        id='hero'
        className='flex justify-center items-center bg-blue-100 dark:bg-slate-900 min-h-screen'
      >
        <div className='h-1/2 max-w-4xl mx-auto px-6 text-center'>
          <h1 className='text-5xl font-bold text-gray-950 dark:text-gray-50 mb-6'>
            Olá! sou o Lucas Santos
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-200 mb-8'>
            Sou um desenvolvedor apaixonado por criar soluções inovadoras e
            impactantes. <br />
            Vamos construir algo incrível juntos?
          </p>
          <p className='mb-4'>Entre em contato e vamos conversar!</p>
          <div className='gap-4'>
            <a
              href={heroLinks.whatsapp}
              target='_blank'
              rel='noopener noreferrer'
              className='w-fit mx-auto flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300'
            >
              <FaWhatsapp className='text-xl' />
              <span>Whatsapp</span>
            </a>
            <div className='flex gap-4 justify-center mt-8'>
              <a
                href={heroLinks.github}
                target='_blank'
                rel='noopener noreferrer'
                className='h-fit rounded-full'
              >
                <FaGithub size={32} />
              </a>
              <a
                href={heroLinks.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='h-fit transition-colors duration-300'
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </AnimateSection>
  )
}

export default Hero
