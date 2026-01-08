import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Check, Sparkles, Lightbulb } from 'lucide-react';

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
    <section id="pricing" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16"
        >
          {t.pricing.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 md:p-8 ${
                plan.popular
                  ? 'bg-gray-900 text-white shadow-2xl shadow-gray-900/20 md:-mt-4 md:mb-[-16px]'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                    <Sparkles size={14} />
                    {t.pricing.popular}
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.data.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.data.limit}
                </p>
              </div>

              <div className="text-center mb-6">
                <div className={`text-4xl md:text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.data.price}
                </div>
                {plan.data.currency && (
                  <div className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.data.currency}
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.data.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? 'bg-orange-500' : 'bg-green-100'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                    </div>
                    <span className={plan.popular ? 'text-gray-300' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all active:scale-[0.98] ${
                  plan.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-gray-600"
        >
          <div className="flex items-center gap-2">
            <Lightbulb size={18} className="text-orange-500" />
            <span>{t.pricing.note1}</span>
          </div>
          <div className="flex items-center gap-2">
            <Lightbulb size={18} className="text-orange-500" />
            <span>{t.pricing.note2}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
