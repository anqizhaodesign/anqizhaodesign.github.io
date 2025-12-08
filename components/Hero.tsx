import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-brand-black overflow-hidden pt-20">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none z-0"></div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 z-0 flex justify-between px-6 md:px-12 pointer-events-none opacity-10">
        <div className="w-px h-full bg-white"></div>
        <div className="w-px h-full bg-white"></div>
        <div className="w-px h-full bg-white hidden md:block"></div>
        <div className="w-px h-full bg-white hidden md:block"></div>
      </div>

      <div className="relative z-10 px-6 md:px-12 w-full max-w-[1920px] mx-auto">
        
        {/* Top Info Row */}
        <div className="flex justify-between items-start border-t border-white/20 pt-6 mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs font-mono text-brand-green uppercase tracking-widest max-w-[250px] whitespace-pre-line leading-relaxed"
          >
            {t.hero.description}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs font-mono text-brand-green uppercase tracking-widest text-right"
          >
            {t.hero.experience_years}
          </motion.div>
        </div>

        {/* Main Title - Massive Typography */}
        <div className="flex flex-col relative">
          <motion.h1 
            style={{ y: y1 }}
            className="text-[12vw] leading-[0.85] font-display font-bold text-white uppercase tracking-tighter mix-blend-exclusion"
          >
            Product
          </motion.h1>
          <motion.div 
            className="self-end"
            style={{ y: y2 }}
          >
            <h1 className="text-[12vw] leading-[0.85] font-display font-bold text-transparent text-outline uppercase tracking-tighter text-right">
              Thinker
            </h1>
          </motion.div>
        </div>

        {/* Floating Image/Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] md:w-[400px] md:h-[550px] bg-zinc-900 z-[-1] overflow-hidden opacity-40 md:opacity-100 mix-blend-screen grayscale"
        >
             <img src={t.hero.image} className="w-full h-full object-cover opacity-50" alt="Abstract" />
        </motion.div>

        {/* Bottom Info */}
        <div className="flex justify-between items-end border-b border-white/20 pb-6 mt-24 md:mt-32">
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
          >
            <h2 className="text-xl md:text-2xl font-display text-white">{t.hero.name_suffix} {t.hero.name_prefix}</h2>
            <p className="text-sm font-mono text-gray-500 mt-2">{t.hero.role}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-brand-gray-light">Scroll</span>
            <div className="w-8 h-8 rounded-full border border-brand-gray-light flex items-center justify-center text-brand-gray-light animate-bounce">
              <ArrowDown size={14} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;