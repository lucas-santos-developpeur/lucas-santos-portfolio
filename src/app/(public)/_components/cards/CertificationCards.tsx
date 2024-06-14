import React from 'react'
import { FaCertificate } from 'react-icons/fa'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

type Props = {
  certification: any
}

export const certifications = [
  {
    name: 'Desenvolvimento web completo 2021',
    date: '2021',
    description:
      'Curso completo abordando HTML, CSS e JavaScript, com vários projetos práticos.',
    imageUrl: '/images/certificados/dev-web.jpg',
  },
  {
    name: 'Curso de TypeScript com projetos',
    date: '2023',
    description:
      'Aprendizado de TypeScript com foco em projetos práticos e avançados.',
    imageUrl: '/images/certificados/typescript.jpg',
  },
  {
    name: 'Análise e levantamento de requisitos',
    date: '2023',
    description:
      'Curso focado na análise e levantamento de requisitos para desenvolvimento de software.',
    imageUrl: '/images/certificados/requisitos.jpg',
  },
  {
    name: 'Curso de marketing digital',
    date: '2023',
    description:
      'Curso abrangente de marketing digital, incluindo SEO, SEM e mídias sociais.',
    imageUrl: '/images/certificados/marketing-digital.jpg',
  },
  {
    name: 'Figma design de interfaces',
    date: '2023',
    description:
      'Curso de design de interfaces utilizando Figma, do básico ao avançado.',
    imageUrl: '/images/certificados/figma.jpg',
  },
]

export default function CertificationCard({ certification }: Props) {
  return (
    <div className='relative min-h-60 card bg-gray-50 p-4 rounded-lg shadow-md dark:bg-gray-800'>
      <div className='flex items-center gap-2 mb-4'>
        <FaCertificate
          size={32}
          className='text-pink-500 mr-2'
        />
        <h4 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>
          {certification.name}
        </h4>
      </div>
      <p className='text-gray-600 dark:text-gray-400'>
        <strong>Data de Conclusão:</strong> {certification.date}
      </p>
      <p className='text-gray-600 dark:text-gray-400'>
        {certification.description}
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button className='absolute bottom-2 left-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
            Ver Certificado
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{certification.name}</DialogTitle>
          </DialogHeader>
          <div className='w-[450px]'>
            <AspectRatio ratio={16 / 9}>
              <Image
                src='/certificate/certificate.jpg'
                fill
                alt='Image'
                className='rounded-md object-cover'
              />
            </AspectRatio>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
