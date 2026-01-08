import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { TrendingUp, Clock, Star, Quote } from 'lucide-react';

export default function Results() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: TrendingUp,
      value: t.results.stat1,
      label: t.results.stat1Label,
      color: 'green',
    },
    {
      icon: Clock,
      value: t.results.stat2,
      label: t.results.stat2Label,
      color: 'blue',
    },
    {
      icon: Star,
      value: t.results.stat3,
      label: t.results.stat3Label,
      color: 'orange',
    },
  ];

  const colorClasses = {
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      icon: 'text-green-500',
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      icon: 'text-blue-500',
    },
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-600',
      icon: 'text-orange-500',
    },
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16"
        >
          {t.results.title}
        </motion.h2>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-12 md:mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = colorClasses[stat.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto ${colors.bg} rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold ${colors.text} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-500">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />

            <Quote className="w-12 h-12 text-orange-500/30 mb-6" />

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              "{t.results.testimonial}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                А
              </div>
              <div>
                <div className="text-white font-semibold">
                  {t.results.author}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
