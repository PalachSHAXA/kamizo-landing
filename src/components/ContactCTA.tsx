import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Send, MessageCircle, Phone } from 'lucide-react';

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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', phone: '', houses: '' });

    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                {t.cta.title}
              </h2>
              <p className="text-white/90 text-lg mb-8">
                {t.cta.subtitle}
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/20 rounded-2xl p-8 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-orange-500" />
                  </div>
                  <p className="text-white text-xl font-semibold">
                    {language === 'ru' ? 'Заявка отправлена!' : 'Ariza yuborildi!'}
                  </p>
                  <p className="text-white/80 mt-2">
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
                    className="w-full px-5 py-4 rounded-xl bg-white/90 placeholder-gray-500 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <input
                    type="tel"
                    placeholder={t.cta.form.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/90 placeholder-gray-500 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <input
                    type="text"
                    placeholder={t.cta.form.houses}
                    value={formData.houses}
                    onChange={(e) => setFormData({ ...formData, houses: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/90 placeholder-gray-500 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        {t.cta.form.submit}
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/80 mb-4">{t.cta.or}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://t.me/kamizo_uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-5 py-3 rounded-xl font-medium transition-all"
                  >
                    <MessageCircle size={20} />
                    {t.cta.telegram}
                  </a>
                  <a
                    href="tel:+998901234567"
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-5 py-3 rounded-xl font-medium transition-all"
                  >
                    <Phone size={20} />
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
