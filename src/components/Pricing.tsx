import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';

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
    <section id="pricing" className="py-24">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading">{t.pricing.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-2xl p-6 ${
                plan.featured
                  ? 'bg-neutral-900 text-white ring-2 ring-neutral-900'
                  : 'glass-card'
              }`}
            >
              {/* Badge */}
              {plan.featured && (
                <div className="text-label text-orange-400 mb-4">
                  {t.pricing.popular}
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-1 ${plan.featured ? 'text-white' : 'text-neutral-900'}`}>
                  {plan.data.name}
                </h3>
                <p className={`text-sm ${plan.featured ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {plan.data.limit}
                </p>
              </div>

              <div className="mb-6">
                <div className={`text-3xl font-semibold ${plan.featured ? 'text-white' : 'text-neutral-900'}`}>
                  {plan.data.price}
                </div>
                {plan.data.currency && (
                  <div className={`text-sm ${plan.featured ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {plan.data.currency}
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {plan.data.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.featured ? 'text-orange-400' : 'text-neutral-400'}`} />
                    <span className={`text-sm ${plan.featured ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-2.5 rounded-lg text-sm font-medium transition-all ${
                  plan.featured
                    ? 'bg-white text-neutral-900 hover:bg-neutral-100'
                    : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
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
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500"
        >
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-green-500 rounded-full" />
            {t.pricing.note1}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-green-500 rounded-full" />
            {t.pricing.note2}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
