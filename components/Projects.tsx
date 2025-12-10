import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import collectionPdf from '../assets/COLLECTION.pdf';

const Projects: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [currentDraftIndex, setCurrentDraftIndex] = useState(0);
  const { t, projects, language } = useLanguage();

  const selectedProject = selectedProjectId ? projects.find(p => p.id === selectedProjectId) : null;

  /* New State for Auto-play */
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Reset carousel when project changes
  useEffect(() => {
    setCurrentDraftIndex(0);
    setIsAutoPlaying(false);
  }, [selectedProjectId]);

  // Auto-play Effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying && selectedProject?.designDrafts) {
      interval = setInterval(() => {
        setCurrentDraftIndex((prev) => (prev + 1) % selectedProject.designDrafts!.length);
      }, 2000); // Change slide every 2 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, selectedProject]);

  const nextDraft = () => {
    if (selectedProject?.designDrafts) {
      setCurrentDraftIndex((prev) => (prev + 1) % selectedProject.designDrafts!.length);
    }
  };

  const prevDraft = () => {
    if (selectedProject?.designDrafts) {
      setCurrentDraftIndex((prev) => (prev - 1 + selectedProject.designDrafts!.length) % selectedProject.designDrafts!.length);
    }
  };

  return (
    <section id="projects" className="py-24 bg-brand-black text-white relative">
      <div className="px-6 md:px-12 max-w-[1920px] mx-auto">

        <div className="flex justify-between items-end border-b border-white/20 pb-8 mb-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-brand-green">03 / {t.nav.project}</h2>
          <a
            href={collectionPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl font-display text-white hover:text-brand-green hover:underline transition-colors duration-300"
          >
            {language === 'zh' ? <>合集 <span className="font-mono">↗</span></> : <>COLLECTION <span className="font-mono">↗</span></>}
          </a>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProjectId(project.id)}
              className="group relative border-b border-white/10 py-12 cursor-pointer transition-all duration-500 overflow-hidden"
            >
              {/* Dynamic Blurred Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-center justify-between relative z-10 px-4">
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <h3 className="text-4xl md:text-6xl font-display font-bold text-white group-hover:text-brand-green transition-colors duration-500">
                    {project.title}
                  </h3>
                </div>

                <div className="md:w-1/4 flex flex-col justify-center">
                  <span className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">{project.category}</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs border border-white/20 px-2 py-1 rounded-full text-gray-400">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="md:w-1/6 flex justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-10 group-hover:translate-x-0">
                  <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center bg-white text-black">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Hover Image Reveal - Floating */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: -30, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -30, rotate: 2 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed pointer-events-none z-20 hidden lg:flex items-center justify-center w-[600px] h-[450px] shadow-2xl bg-black/50 rounded-2xl overflow-hidden"
                    style={{ top: '20%', right: '15%' }}
                  >
                    <img src={project.image} alt={project.title} className="w-auto h-auto max-w-full max-h-full object-contain rounded-2xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative min-h-screen bg-brand-dark text-white p-6 md:p-12 lg:p-24"
            >
              <button
                onClick={() => setSelectedProjectId(null)}
                className="fixed top-8 right-8 z-50 p-4 bg-white text-black rounded-full hover:scale-110 transition-transform"
              >
                <X size={24} />
              </button>

              <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-16 border-b border-white/10 pb-12">
                  <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-[0.9]">{selectedProject.title}</h1>
                  <div className="flex flex-wrap gap-8 font-mono text-sm uppercase tracking-widest text-gray-500">
                    <div>
                      <span className="text-brand-green mr-2">//</span>
                      {selectedProject.role}
                    </div>
                    <div>
                      <span className="text-brand-green mr-2">//</span>
                      {selectedProject.category}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 md:gap-24 mb-24">
                  {/* Left Column: Summary & Stats */}
                  <div className="lg:w-1/3 space-y-12">
                    <div>
                      <h4 className="text-xs font-mono text-brand-green uppercase tracking-widest mb-6">{t.projects.modal_labels.situation} & {t.projects.modal_labels.task}</h4>
                      <p className="text-xl md:text-2xl font-light text-white leading-relaxed">
                        {selectedProject.summary}
                      </p>
                    </div>

                    {/* Context Blocks with Visual Hierarchy */}
                    <div className="space-y-6">
                      {/* Situation - Background & Muted Text */}
                      <div className="p-6 bg-white/5 rounded-lg border-l-4 border-gray-600">
                        <h5 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Situation</h5>
                        <p className="text-gray-300 leading-relaxed font-light">{selectedProject.star.situation}</p>
                      </div>

                      {/* Task - Highlighted, Gradient or Outline, Brighter Text */}
                      <div className="p-6 bg-gradient-to-br from-brand-green/10 to-transparent rounded-lg border-l-4 border-brand-green relative overflow-hidden">
                        <h5 className="text-xs font-mono text-brand-green uppercase tracking-wider mb-2 relative z-10">Task</h5>
                        <p className="text-white font-medium leading-relaxed relative z-10">{selectedProject.star.task}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visuals & Process */}
                  <div className="lg:w-2/3">
                    <motion.img
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      src={selectedProject.image}
                      alt="Hero"
                      className="w-full h-auto aspect-video md:h-[500px] object-cover rounded-lg mb-16 shadow-2xl"
                    />

                    {/* STAR Method - Action & Result */}
                    <div className="grid gap-16">

                      {/* Actions Section */}
                      <div>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-px bg-brand-green"></div>
                          <h3 className="text-2xl font-display font-bold">{t.projects.modal_labels.action}</h3>
                        </div>
                        <div className="grid gap-6">
                          {selectedProject.star.action.map((action, i) => (
                            <div key={i} className="group flex gap-6 p-6 border border-white/5 rounded-xl hover:bg-white/5 transition-colors duration-300">
                              <span className="text-4xl font-display font-bold text-brand-green/40 group-hover:text-brand-green transition-colors">0{i + 1}</span>
                              <p className="text-lg text-gray-300 leading-relaxed pt-2">{action}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Results Section */}
                      <div>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-px bg-brand-green"></div>
                          <h3 className="text-2xl font-display font-bold">{t.projects.modal_labels.result}</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          {selectedProject.star.result.map((res, i) => (
                            <div key={i} className="bg-brand-gray/50 p-6 rounded-lg border-l-4 border-brand-green">
                              <p className="text-lg font-medium text-white">{res}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Design Drafts Carousel */}
                    {selectedProject.designDrafts && selectedProject.designDrafts.length > 0 && (
                      <div className="mt-24 pt-12 border-t border-white/10">
                        <div className="mb-8">
                          <h3
                            onClick={() => {
                              if (selectedProject.designDraftLink) {
                                window.open(selectedProject.designDraftLink, '_blank');
                              }
                            }}
                            className={`text-xs font-mono uppercase tracking-widest text-gray-500 transition-colors ${selectedProject.designDraftLink ? 'cursor-pointer hover:text-brand-green hover:underline' : ''}`}
                          >
                            {t.projects.modal_labels.drafts} {selectedProject.designDraftLink && '↗'}
                          </h3>
                        </div>

                        <div
                          className="relative overflow-hidden rounded-xl bg-white/5 aspect-[16/9]"
                          onMouseEnter={() => setIsAutoPlaying(true)}
                          onMouseLeave={() => setIsAutoPlaying(false)}
                        >
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={currentDraftIndex}
                              src={selectedProject.designDrafts[currentDraftIndex]}
                              alt={`Draft ${currentDraftIndex + 1}`}
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -50 }}
                              transition={{ duration: 0.3 }}
                              onClick={() => {
                                if (selectedProject.designDraftLink) {
                                  window.open(selectedProject.designDraftLink, '_blank');
                                }
                              }}
                              className={`w-full h-full object-contain ${selectedProject.designDraftLink ? 'cursor-pointer' : 'cursor-grab active:cursor-grabbing'}`}
                              drag="x"
                              dragConstraints={{ left: 0, right: 0 }}
                              dragElastic={0.2}
                              onDragEnd={(e, { offset, velocity }) => {
                                const swipe = offset.x;
                                if (swipe < -50 || velocity.x < -500) {
                                  nextDraft();
                                } else if (swipe > 50 || velocity.x > 500) {
                                  prevDraft();
                                }
                              }}
                            />
                          </AnimatePresence>

                          {/* Pagination Dots */}
                          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                            {selectedProject.designDrafts.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentDraftIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentDraftIndex ? 'bg-brand-green w-6' : 'bg-white/50 hover:bg-white'
                                  }`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="mt-4 text-right font-mono text-xs text-gray-500">
                          {currentDraftIndex + 1} / {selectedProject.designDrafts.length}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </motion.div >
          </div >
        )}
      </AnimatePresence >
    </section >
  );
};

export default Projects;