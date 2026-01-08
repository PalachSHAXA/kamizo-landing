import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="font-['Space_Grotesk'] font-bold text-xl text-gray-900">Kamizo</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              {t.nav.features}
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              {t.nav.pricing}
            </a>
            <a href="#faq" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              {t.nav.faq}
            </a>
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === 'ru'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => setLanguage('uz')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === 'uz'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                UZ
              </button>
            </div>

            <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              {t.nav.login}
            </a>

            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-all active:scale-[0.98]"
            >
              {t.nav.demo}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-4">
              <a
                href="#features"
                className="block text-gray-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.features}
              </a>
              <a
                href="#pricing"
                className="block text-gray-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.pricing}
              </a>
              <a
                href="#faq"
                className="block text-gray-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.faq}
              </a>

              {/* Language Switcher Mobile */}
              <div className="flex items-center gap-2 py-2">
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    language === 'ru'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Русский
                </button>
                <button
                  onClick={() => setLanguage('uz')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    language === 'uz'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  O'zbek
                </button>
              </div>

              <a
                href="#contact"
                className="block bg-orange-500 text-white text-center px-5 py-3 rounded-xl font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.demo}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
