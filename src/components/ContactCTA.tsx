import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, MessageCircle, Phone, Check, Sparkles } from 'lucide-react';

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
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 via-transparent to-indigo-500/10 rounded-[40px] blur-3xl" />

            <div className="glass-card p-8 md:p-12 relative">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left - Info */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-medium mb-6">
                    <Sparkles size={12} />
                    {language === 'ru' ? 'Бесплатная консультация' : 'Bepul konsultatsiya'}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4 tracking-tight">
                    {t.cta.title}
                  </h2>
                  <p className="text-zinc-500 mb-8 leading-relaxed">
                    {t.cta.subtitle}
                  </p>

                  <div className="space-y-4">
                    <a
                      href="https://t.me/kamizo_uz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#229ED9]/10 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-[#229ED9]" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-900 group-hover:text-zinc-700">Telegram</div>
                        <div className="text-sm text-zinc-500">@kamizo_uz</div>
                      </div>
                    </a>
                    <a
                      href="tel:+998901234567"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-medium text-zinc-900 group-hover:text-zinc-700">{language === 'ru' ? 'Позвонить' : 'Qo\'ng\'iroq qilish'}</div>
                        <div className="text-sm text-zinc-500">+998 90 123 45 67</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Right - Form */}
                <div>
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center py-8"
                    >
                      <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                        <Check className="w-8 h-8 text-emerald-600" />
                      </div>
                      <p className="text-xl font-semibold text-zinc-900 mb-2">
                        {language === 'ru' ? 'Заявка отправлена!' : 'Ariza yuborildi!'}
                      </p>
                      <p className="text-zinc-500">
                        {language === 'ru' ? 'Мы свяжемся с вами в ближайшее время' : 'Tez orada siz bilan bog\'lanamiz'}
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder={t.cta.form.name}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-200/50 placeholder-zinc-400 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-all"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder={t.cta.form.phone}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-200/50 placeholder-zinc-400 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-all"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder={t.cta.form.houses}
                          value={formData.houses}
                          onChange={(e) => setFormData({ ...formData, houses: e.target.value })}
                          className="w-full px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-200/50 placeholder-zinc-400 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-all"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary py-4 text-base disabled:opacity-60"
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
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
