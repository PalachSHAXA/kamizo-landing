import { useLanguage } from '../context/LanguageContext';
import { Award, Send, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="font-['Space_Grotesk'] font-bold text-xl">Kamizo</span>
            </a>
            <p className="text-gray-400 text-sm">
              CRM-ecosystem for property management companies
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.product}</h4>
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
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t.footer.login}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.company}</h4>
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
            <h4 className="font-semibold mb-4">{t.footer.contacts}</h4>
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
                  Telegram: @kamizo_uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* IT Park Badge */}
            <div className="flex items-center gap-2 text-gray-400">
              <Award size={18} className="text-orange-500" />
              <span className="text-sm">{t.footer.itPark}</span>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Kamizo. {t.footer.rights}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/kamizo_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Send size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
