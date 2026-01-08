import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 mt-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-neutral-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-xs">K</span>
            </div>
            <span className="font-semibold text-neutral-900">Kamizo</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 glass rounded-full px-1 py-1">
            <a href="#features" className="px-4 py-1.5 text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium rounded-full hover:bg-neutral-100">
              {t.nav.features}
            </a>
            <a href="#pricing" className="px-4 py-1.5 text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium rounded-full hover:bg-neutral-100">
              {t.nav.pricing}
            </a>
            <a href="#faq" className="px-4 py-1.5 text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium rounded-full hover:bg-neutral-100">
              {t.nav.faq}
            </a>
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 text-sm">
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 rounded-md transition-all ${
                  language === 'ru'
                    ? 'text-neutral-900 font-medium'
                    : 'text-neutral-400 hover:text-neutral-600'
                }`}
              >
                RU
              </button>
              <span className="text-neutral-300">/</span>
              <button
                onClick={() => setLanguage('uz')}
                className={`px-2 py-1 rounded-md transition-all ${
                  language === 'uz'
                    ? 'text-neutral-900 font-medium'
                    : 'text-neutral-400 hover:text-neutral-600'
                }`}
              >
                UZ
              </button>
            </div>

            <a href="#contact" className="btn-primary">
              {t.nav.demo}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:bg-neutral-100 rounded-lg"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden absolute top-full left-0 right-0 px-6 pt-2"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 p-4">
              <nav className="space-y-1 mb-4">
                <a
                  href="#features"
                  className="block text-neutral-700 font-medium py-2.5 px-3 rounded-lg hover:bg-neutral-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.features}
                </a>
                <a
                  href="#pricing"
                  className="block text-neutral-700 font-medium py-2.5 px-3 rounded-lg hover:bg-neutral-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.pricing}
                </a>
                <a
                  href="#faq"
                  className="block text-neutral-700 font-medium py-2.5 px-3 rounded-lg hover:bg-neutral-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.faq}
                </a>
              </nav>

              <div className="pt-4 border-t border-neutral-100">
                <div className="flex items-center gap-2 mb-4">
                  <button
                    onClick={() => setLanguage('ru')}
                    className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      language === 'ru'
                        ? 'bg-neutral-900 text-white'
                        : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    Русский
                  </button>
                  <button
                    onClick={() => setLanguage('uz')}
                    className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      language === 'uz'
                        ? 'bg-neutral-900 text-white'
                        : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    O'zbek
                  </button>
                </div>

                <a
                  href="#contact"
                  className="block btn-primary w-full text-center"
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
