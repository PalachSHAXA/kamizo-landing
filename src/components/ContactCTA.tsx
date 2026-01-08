import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, MessageCircle, Phone, Check } from 'lucide-react';

export default function ContactCTA() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    houses: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', phone: '', houses: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                  {t.cta.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  {t.cta.subtitle}
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-14 h-14 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-7 h-7 text-green-500" />
                  </div>
                  <p className="text-gray-900 font-medium text-lg">
                    {language === 'ru' ? 'Заявка отправлена!' : 'Ariza yuborildi!'}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {language === 'ru' ? 'Мы свяжемся с вами в ближайшее время' : 'Tez orada siz bilan bog\'lanamiz'}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder={t.cta.form.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-100 placeholder-gray-400 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                  <input
                    type="tel"
                    placeholder={t.cta.form.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-100 placeholder-gray-400 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                  <input
                    type="text"
                    placeholder={t.cta.form.houses}
                    value={formData.houses}
                    onChange={(e) => setFormData({ ...formData, houses: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-100 placeholder-gray-400 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-white px-6 py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        {t.cta.form.submit}
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-400 text-xs text-center mb-4">{t.cta.or}</p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="https://t.me/kamizo_uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
                  >
                    <MessageCircle size={16} />
                    Telegram
                  </a>
                  <a
                    href="tel:+998901234567"
                    className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
                  >
                    <Phone size={16} />
                    +998 90 123 45 67
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
