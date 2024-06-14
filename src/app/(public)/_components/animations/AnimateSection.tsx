'use client'
// components/AnimateSection.tsx
import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
}

const AnimateSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimateSection
