import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Building2, Home, HardHat, Check } from 'lucide-react';

export default function ForWho() {
  const { t } = useLanguage();

  const audiences = [
    {
      icon: Building2,
      title: t.forWho.uk.title,
      features: t.forWho.uk.features,
      color: 'orange',
    },
    {
      icon: Home,
      title: t.forWho.residents.title,
      features: t.forWho.residents.features,
      color: 'blue',
    },
    {
      icon: HardHat,
      title: t.forWho.staff.title,
      features: t.forWho.staff.features,
      color: 'green',
    },
  ];

  const colorClasses = {
    orange: {
      bg: 'bg-orange-100',
      icon: 'text-orange-500',
      check: 'text-orange-500',
    },
    blue: {
      bg: 'bg-blue-100',
      icon: 'text-blue-500',
      check: 'text-blue-500',
    },
    green: {
      bg: 'bg-green-100',
      icon: 'text-green-500',
      check: 'text-green-500',
    },
  };

  return (
    <section className="py-16 md:py-24 bg-[#FFFBEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16"
        >
          {t.forWho.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            const colors = colorClasses[audience.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  {audience.title}
                </h3>

                <ul className="space-y-3">
                  {audience.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${colors.check} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
