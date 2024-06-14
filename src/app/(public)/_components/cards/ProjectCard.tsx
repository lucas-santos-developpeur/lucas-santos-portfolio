import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { FaExternalLinkAlt } from 'react-icons/fa'

type Props = {
  project: {
    name: string
    description: string
    link: string
    imageUrl: string
  }
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className='relative group'>
      <div
        className='bg-cover bg-top h-64 rounded-lg shadow-md group-hover:animate-vertical-scroll'
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-8'>
          <h3 className='text-yellow-800 font-black'>{project.name}</h3>
          <Dialog>
            <DialogTrigger asChild>
              <Button className='text-white text-lg px-4 py-2 bg-pink-500 rounded-lg'>
                Ver Mais
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{project.name}</DialogTitle>
              </DialogHeader>
              <div className='w-[450px]'>
                <p className='mb-4'>{project.description}</p>
                {project.link != 'https://wa.me/5591991149177' ? (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 flex items-center mt-4'
                  >
                    Ver Projeto <FaExternalLinkAlt className='ml-2' />
                  </a>
                ) : (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 flex items-center mt-4'
                  >
                    Vamos criar seu projeto{' '}
                    <FaExternalLinkAlt className='ml-2' />
                  </a>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
