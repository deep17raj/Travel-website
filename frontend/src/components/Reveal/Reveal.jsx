import React from 'react';
import { motion } from 'framer-motion';

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      // 1. Initial State (Invisible & Small)
      initial={{ opacity: 0, scale: 0.8, y: 50 }} 
      // 2. Animate when in view (Visible & Normal size)
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      // 3. Animation Settings
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.25, 0.25, 0.25, 0.75] // Smooth cubic-bezier
      }}
      // 4. Viewport Settings
      viewport={{ once: true, amount: 0.2 }} // Run once, start when 20% visible
    >
      {children}
    </motion.div>
  );
}

export default Reveal;