"use client";
// components/AnimateSection.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

type Props = {
  children: React.ReactNode;
  sectionId: string;
};

const AnimateSection = ({ children, sectionId }: Props) => {
  const ref = useRef<HTMLElement>(null);
  //
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  //
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.section
      id={sectionId}
      style={{ scale: scaleProgress, opacity: scrollYProgress }}
      ref={ref}
    >
      {children}
    </motion.section>
  );
};

export default AnimateSection;
