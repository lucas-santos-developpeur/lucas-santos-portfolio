import React from 'react'

const Header: React.FC = () => {
  return (
    <header className='fixed top-0 w-full bg-transparent dark:bg-slate-800 shadow'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold text-gray-800 dark:text-gray-200'>
          Logo
        </div>
        <nav className='flex space-x-4'>
          <a
            href='#hero'
            className='text-gray-800 dark:text-gray-200 cursor-pointer'
          >
            Home
          </a>
          <a
            href='#skills'
            className='text-gray-800 dark:text-gray-200 cursor-pointer'
          >
            Skills
          </a>
          <a
            href='#portfolio'
            className='text-gray-800 dark:text-gray-200 cursor-pointer'
          >
            Portfolio
          </a>
          <a
            href='#contact'
            className='text-gray-800 dark:text-gray-200 cursor-pointer'
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
