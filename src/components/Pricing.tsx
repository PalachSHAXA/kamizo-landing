import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Check, Sparkles } from 'lucide-react';

export default function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      key: 'start',
      data: t.pricing.start,
      featured: false,
    },
    {
      key: 'business',
      data: t.pricing.business,
      featured: true,
    },
    {
      key: 'premium',
      data: t.pricing.premium,
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading">{t.pricing.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.featured
                  ? 'bg-zinc-900 text-white shadow-2xl shadow-zinc-900/20 scale-[1.02]'
                  : 'glass-card'
              }`}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-medium">
                    <Sparkles size={12} />
                    {t.pricing.popular}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-semibold mb-2 ${plan.featured ? 'text-white' : 'text-zinc-900'}`}>
                  {plan.data.name}
                </h3>
                <p className={`text-sm ${plan.featured ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {plan.data.limit}
                </p>
              </div>

              <div className="mb-8">
                <div className={`text-4xl font-semibold tracking-tight ${plan.featured ? 'text-white' : 'text-zinc-900'}`}>
                  {plan.data.price}
                </div>
                {plan.data.currency && (
                  <div className={`text-sm mt-1 ${plan.featured ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {plan.data.currency}
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.data.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.featured ? 'bg-orange-500/20' : 'bg-emerald-100'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.featured ? 'text-orange-400' : 'text-emerald-600'}`} />
                    </div>
                    <span className={`text-sm leading-relaxed ${plan.featured ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-xl text-sm font-medium transition-all ${
                  plan.featured
                    ? 'bg-white text-zinc-900 hover:bg-zinc-100 shadow-lg shadow-white/10'
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                {plan.data.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            {t.pricing.note1}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            {t.pricing.note2}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
