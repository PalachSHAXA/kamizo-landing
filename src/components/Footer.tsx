import { useLanguage } from '../context/LanguageContext';
import { Send, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-16 border-t border-neutral-100">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-neutral-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-xs">K</span>
              </div>
              <span className="font-semibold text-neutral-900">Kamizo</span>
            </a>
            <p className="text-neutral-500 text-sm leading-relaxed">
              CRM-ecosystem for property management companies
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-label mb-4">{t.footer.product}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm">
                  {t.footer.features}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm">
                  {t.footer.pricing}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm">
                  {t.footer.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-label mb-4">{t.footer.company}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm">
                  {t.footer.blog}
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm">
                  {t.footer.careers}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-label mb-4">{t.footer.contacts}</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+998901234567" className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm">
                  +998 90 123 45 67
                </a>
              </li>
              <li>
                <a href="mailto:hello@kamizo.uz" className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm">
                  hello@kamizo.uz
                </a>
              </li>
              <li>
                <a href="https://t.me/kamizo_uz" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm">
                  @kamizo_uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* IT Park Badge */}
          <div className="text-neutral-400 text-xs">
            {t.footer.itPark}
          </div>

          {/* Copyright */}
          <p className="text-neutral-400 text-xs">
            © {new Date().getFullYear()} Kamizo. {t.footer.rights}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://t.me/kamizo_uz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-neutral-100 hover:bg-neutral-200 rounded-lg flex items-center justify-center transition-colors text-neutral-500"
            >
              <Send size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-neutral-100 hover:bg-neutral-200 rounded-lg flex items-center justify-center transition-colors text-neutral-500"
            >
              <Instagram size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-neutral-100 hover:bg-neutral-200 rounded-lg flex items-center justify-center transition-colors text-neutral-500"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
