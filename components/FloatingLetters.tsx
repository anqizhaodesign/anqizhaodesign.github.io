import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingLetters: React.FC = () => {
  const letters = "ANQI DESIGN".split('');
  const [items, setItems] = useState<Array<{ id: number; char: string; left: number; duration: number; delay: number; scale: number; blur: number }>>([]);

  useEffect(() => {
    const newItems = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      char: letters[i % letters.length],
      left: Math.random() * 100, // Random horizontal position 0-100%
      duration: 10 + Math.random() * 20, // Slow falling speed between 10s and 30s
      delay: Math.random() * 5,
      scale: 0.5 + Math.random() * 1.5, // Random size for depth perception
      blur: Math.random() * 4, // Blur for depth perception
    }));
    setItems(newItems);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ y: -100, opacity: 0, scale: 0 }}
          animate={{ 
            y: '120vh', 
            opacity: [0, 0.4, 0], // Fade in then out
            scale: [0, item.scale] // Grow as it falls ("far to near")
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear",
            repeatDelay: Math.random() * 5
          }}
          style={{
            left: `${item.left}%`,
            position: 'absolute',
            color: '#0FD799',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '4rem',
            filter: `blur(${item.blur}px)`,
            textShadow: '0 0 20px rgba(15, 215, 153, 0.3)'
          }}
        >
          {item.char}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingLetters;