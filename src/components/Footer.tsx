import { useLanguage } from '../context/LanguageContext';
import { Send, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-20 border-t border-zinc-100">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-700 flex items-center justify-center shadow-lg shadow-zinc-900/10">
                <span className="text-white font-semibold text-sm">K</span>
              </div>
              <span className="font-semibold text-zinc-900">Kamizo</span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed">
              CRM-ecosystem for property management companies
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-label mb-5">{t.footer.product}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm">
                  {t.footer.features}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm">
                  {t.footer.pricing}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm">
                  {t.footer.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-label mb-5">{t.footer.company}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm">
                  {t.footer.blog}
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm">
                  {t.footer.careers}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-label mb-5">{t.footer.contacts}</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+998901234567" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm">
                  +998 90 123 45 67
                </a>
              </li>
              <li>
                <a href="mailto:hello@kamizo.uz" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm">
                  hello@kamizo.uz
                </a>
              </li>
              <li>
                <a href="https://t.me/kamizo_uz" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm">
                  @kamizo_uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-100 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* IT Park Badge */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-zinc-100 flex items-center justify-center">
              <span className="text-[10px] font-bold text-zinc-500">IT</span>
            </div>
            <span className="text-zinc-400 text-xs">
              {t.footer.itPark}
            </span>
          </div>

          {/* Copyright */}
          <p className="text-zinc-400 text-xs">
            © {new Date().getFullYear()} Kamizo. {t.footer.rights}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://t.me/kamizo_uz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-zinc-100 hover:bg-zinc-200 rounded-xl flex items-center justify-center transition-colors text-zinc-500 hover:text-zinc-700"
            >
              <Send size={15} />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-zinc-100 hover:bg-zinc-200 rounded-xl flex items-center justify-center transition-colors text-zinc-500 hover:text-zinc-700"
            >
              <Instagram size={15} />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-zinc-100 hover:bg-zinc-200 rounded-xl flex items-center justify-center transition-colors text-zinc-500 hover:text-zinc-700"
            >
              <Linkedin size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
