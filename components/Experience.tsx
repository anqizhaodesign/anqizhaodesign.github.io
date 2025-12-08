import React from 'react';
import { useLanguage } from '../LanguageContext';

const Experience: React.FC = () => {
  const { t, experience } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-brand-black text-white">
      <div className="px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="mb-12">
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand-green">02 / {t.nav.experience}</h2>
        </div>

        <div className="flex flex-col border-b border-white/20">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="group relative border-t border-white/20 h-[200px] md:h-[240px] overflow-hidden cursor-none transition-colors duration-500 hover:bg-white/5"
            >
                {/* Default State: Aligned Left. Shows Period and Company. */}
                <div className="absolute inset-0 flex flex-col justify-center px-0 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:-translate-y-4">
                     <span className="font-mono text-sm text-brand-green tracking-widest uppercase mb-3">{exp.period}</span>
                     <h4 className="text-4xl md:text-6xl font-display font-bold text-white">{exp.company}</h4>
                </div>

                {/* Hover State: Hides Default. Shows Description (Left) and Role (Right, Enlarged). */}
                <div className="absolute inset-0 flex items-center justify-between opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                     <div className="hidden md:block w-1/3 pr-12">
                        <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed line-clamp-4">
                            {exp.description}
                        </p>
                     </div>
                     <div className="w-full md:w-2/3 flex justify-end items-center">
                         <h4 className="text-3xl md:text-5xl font-display font-bold text-white text-right leading-tight">
                            {exp.role}
                         </h4>
                     </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;