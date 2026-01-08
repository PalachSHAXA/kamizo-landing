import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <div className="max-w-6xl mx-auto glass rounded-2xl">
          <div className="flex items-center justify-between h-14 px-4 md:px-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-['Space_Grotesk'] font-semibold text-lg text-gray-900">Kamizo</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <a href="#features" className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium rounded-lg hover:bg-black/[0.03]">
                {t.nav.features}
              </a>
              <a href="#pricing" className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium rounded-lg hover:bg-black/[0.03]">
                {t.nav.pricing}
              </a>
              <a href="#faq" className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium rounded-lg hover:bg-black/[0.03]">
                {t.nav.faq}
              </a>
            </nav>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Switcher */}
              <div className="flex items-center bg-black/[0.03] rounded-lg p-0.5">
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                    language === 'ru'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  RU
                </button>
                <button
                  onClick={() => setLanguage('uz')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                    language === 'uz'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  UZ
                </button>
              </div>

              <a
                href="#contact"
                className="btn-primary text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                {t.nav.demo}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:bg-black/[0.03] rounded-lg"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2"
          >
            <div className="glass rounded-2xl p-4 space-y-2">
              <a
                href="#features"
                className="block text-gray-700 font-medium py-2.5 px-3 rounded-lg hover:bg-black/[0.03]"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.features}
              </a>
              <a
                href="#pricing"
                className="block text-gray-700 font-medium py-2.5 px-3 rounded-lg hover:bg-black/[0.03]"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.pricing}
              </a>
              <a
                href="#faq"
                className="block text-gray-700 font-medium py-2.5 px-3 rounded-lg hover:bg-black/[0.03]"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.faq}
              </a>

              <div className="pt-2 border-t border-black/[0.05]">
                {/* Language Switcher Mobile */}
                <div className="flex items-center gap-2 mb-3">
                  <button
                    onClick={() => setLanguage('ru')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      language === 'ru'
                        ? 'bg-orange-500 text-white'
                        : 'bg-black/[0.03] text-gray-600'
                    }`}
                  >
                    Русский
                  </button>
                  <button
                    onClick={() => setLanguage('uz')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      language === 'uz'
                        ? 'bg-orange-500 text-white'
                        : 'bg-black/[0.03] text-gray-600'
                    }`}
                  >
                    O'zbek
                  </button>
                </div>

                <a
                  href="#contact"
                  className="block btn-primary text-white text-center px-5 py-3 rounded-xl font-medium"
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
