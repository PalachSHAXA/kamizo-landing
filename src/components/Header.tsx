import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container pt-5">
        <nav className="glass rounded-2xl px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-700 flex items-center justify-center shadow-lg shadow-zinc-900/10">
              <span className="text-white font-semibold text-sm">K</span>
            </div>
            <span className="font-semibold text-zinc-900 text-[15px]">Kamizo</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
              {t.nav.features}
            </a>
            <a href="#pricing" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
              {t.nav.pricing}
            </a>
            <a href="#faq" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
              {t.nav.faq}
            </a>
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language */}
            <div className="flex items-center text-sm text-zinc-400">
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 transition-colors ${language === 'ru' ? 'text-zinc-900 font-medium' : 'hover:text-zinc-600'}`}
              >
                RU
              </button>
              <span>/</span>
              <button
                onClick={() => setLanguage('uz')}
                className={`px-2 py-1 transition-colors ${language === 'uz' ? 'text-zinc-900 font-medium' : 'hover:text-zinc-600'}`}
              >
                UZ
              </button>
            </div>

            <a href="#contact" className="btn-primary h-9 px-4 text-[13px] rounded-lg">
              {t.nav.demo}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 text-zinc-600 hover:text-zinc-900"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden absolute top-full left-0 right-0 px-4 pt-3"
          >
            <div className="glass rounded-2xl p-5">
              <nav className="space-y-1 mb-5">
                <a
                  href="#features"
                  className="block py-2.5 text-zinc-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.features}
                </a>
                <a
                  href="#pricing"
                  className="block py-2.5 text-zinc-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.pricing}
                </a>
                <a
                  href="#faq"
                  className="block py-2.5 text-zinc-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.faq}
                </a>
              </nav>

              <div className="pt-5 border-t border-zinc-100">
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setLanguage('ru')}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      language === 'ru' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    Русский
                  </button>
                  <button
                    onClick={() => setLanguage('uz')}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      language === 'uz' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    O'zbek
                  </button>
                </div>
                <a
                  href="#contact"
                  className="btn-primary w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.demo}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
