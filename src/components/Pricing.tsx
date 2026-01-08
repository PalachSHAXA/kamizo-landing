import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Check, Sparkles } from 'lucide-react';

export default function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      key: 'start',
      data: t.pricing.start,
      popular: false,
    },
    {
      key: 'business',
      data: t.pricing.business,
      popular: true,
    },
    {
      key: 'premium',
      data: t.pricing.premium,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            {t.pricing.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 ${
                plan.popular
                  ? 'bg-[#1a1a2e] text-white ring-2 ring-orange-500 md:scale-105'
                  : 'glass-card'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg shadow-orange-500/30">
                    <Sparkles size={12} />
                    {t.pricing.popular}
                  </div>
                </div>
              )}

              <div className="text-center mb-5">
                <h3 className={`text-lg font-semibold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.data.name}
                </h3>
                <p className={`text-xs ${plan.popular ? 'text-gray-400' : 'text-gray-400'}`}>
                  {plan.data.limit}
                </p>
              </div>

              <div className="text-center mb-6">
                <div className={`text-3xl font-semibold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.data.price}
                </div>
                {plan.data.currency && (
                  <div className={`text-xs ${plan.popular ? 'text-gray-400' : 'text-gray-400'}`}>
                    {plan.data.currency}
                  </div>
                )}
              </div>

              <ul className="space-y-2.5 mb-6">
                {plan.data.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? 'bg-orange-500' : 'bg-green-50'
                    }`}>
                      <Check className={`w-2.5 h-2.5 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-2.5 px-5 rounded-xl text-sm font-medium transition-all ${
                  plan.popular
                    ? 'btn-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
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
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            {t.pricing.note1}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            {t.pricing.note2}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
