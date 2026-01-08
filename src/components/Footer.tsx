import { useLanguage } from '../context/LanguageContext';
import { Send, Instagram, Linkedin, Sparkles } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1a1a2e] text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-['Space_Grotesk'] font-semibold text-lg">Kamizo</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              CRM-ecosystem for property management companies
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-medium text-sm mb-4">{t.footer.product}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t.footer.features}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t.footer.pricing}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t.footer.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-medium text-sm mb-4">{t.footer.company}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t.footer.blog}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t.footer.careers}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-sm mb-4">{t.footer.contacts}</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+998901234567" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +998 90 123 45 67
                </a>
              </li>
              <li>
                <a href="mailto:hello@kamizo.uz" className="text-gray-400 hover:text-white transition-colors text-sm">
                  hello@kamizo.uz
                </a>
              </li>
              <li>
                <a href="https://t.me/kamizo_uz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  @kamizo_uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* IT Park Badge */}
            <div className="flex items-center gap-2 text-gray-400">
              <Sparkles size={14} className="text-orange-500" />
              <span className="text-xs">{t.footer.itPark}</span>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Kamizo. {t.footer.rights}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://t.me/kamizo_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Send size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
