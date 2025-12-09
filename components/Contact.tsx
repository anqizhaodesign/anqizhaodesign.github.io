import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="pt-24 pb-12 bg-brand-black text-white relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto">

        <div className="px-6 md:px-12 mb-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-brand-green">04 / {t.nav.contact}</h2>
        </div>

        {/* Marquee Section */}
        <div className="mb-24 w-full border-y border-white/10 py-8 bg-brand-black/50 backdrop-blur-sm">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 8
            }}
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center shrink-0 mx-8">
                <span className="text-[6vw] font-display font-bold uppercase tracking-tighter text-white mr-4">LET'S WORK</span>
                <span className="text-[6vw] font-display font-bold uppercase tracking-tighter text-brand-green mr-16">TOGETHER</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
            <div>
              <h4 className="font-mono text-xs uppercase text-gray-500 mb-4">Email</h4>
              <a href={`mailto:${t.contact.email}`} className="text-2xl font-display font-medium hover:text-brand-green transition-colors">
                {t.contact.email}
              </a>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase text-gray-500 mb-4">Phone</h4>
              <a href={`tel:${t.contact.phone}`} className="text-2xl font-display font-medium hover:text-brand-green transition-colors">
                {t.contact.phone}
              </a>
            </div>
            <div className="md:text-right">
              <h4 className="font-mono text-xs uppercase text-gray-500 mb-4">Socials</h4>
              <div className="flex flex-col md:items-end gap-2">
                {t.contact.socials.map(social => (
                  <a key={social.name} href={social.url} className="text-lg hover:text-brand-green transition-colors">{social.name}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end mt-24 border-t border-white/10 pt-8">
            <p className="text-sm font-mono text-gray-500">{t.contact.copyright}</p>
            <a href="#" onClick={scrollToTop} className="text-sm font-mono uppercase border-b border-white hover:text-brand-green hover:border-brand-green transition-colors">Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;