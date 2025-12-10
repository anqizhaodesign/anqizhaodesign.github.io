import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t.about.cards.role.title, value: t.about.cards.role.desc },
    { label: t.about.cards.edu.title, value: t.about.cards.edu.desc },
    { label: t.about.cards.focus.title, value: t.about.cards.focus.desc },
  ];

  return (
    <section id="about" className="py-24 bg-brand-black text-white relative">
      <div className="px-6 md:px-12 max-w-[1920px] mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start border-t border-white/20 py-24 md:py-36">
          <h2 className="text-sm font-mono uppercase tracking-widest text-brand-green mb-8 md:mb-0">01 / {t.nav.about}</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-12">
              {t.about.p1_start} <span className="text-brand-green">{t.about.p1_strong}</span> {t.about.p1_end}
            </h3>

            <div className="flex flex-col gap-8 text-lg text-gray-400 font-light leading-relaxed">
              <p>
                {t.about.p2_start}
              </p>

              {/* Render Tags */}
              <div className="flex flex-wrap gap-3 mt-4">
                {t.about.tags && t.about.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 border border-white/10 rounded-full text-sm font-mono text-brand-green bg-white/5 hover:bg-brand-green hover:text-black transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats / Details Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`py-24 px-6 flex flex-col items-center justify-center text-center ${index !== 2 ? 'md:border-r border-white/20' : ''} border-b md:border-b-0 border-white/20 hover:bg-white/5 transition-colors duration-300`}
            >
              <h4 className="text-xs font-mono uppercase tracking-widest text-brand-green mb-4">{stat.label}</h4>
              <p className="text-xl md:text-2xl font-display">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-32 w-full md:w-2/3 mx-auto h-[400px] md:h-[600px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
          <img src={t.about.image} alt="Portrait" className="w-full h-full object-cover object-center" />
        </div> */}

      </div>
    </section>
  );
};

export default About;