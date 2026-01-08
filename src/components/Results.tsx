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
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Clock,
      value: t.results.stat2,
      label: t.results.stat2Label,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Star,
      value: t.results.stat3,
      label: t.results.stat3Label,
      gradient: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            {t.results.title}
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-14">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-semibold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 md:p-10 relative">
            <Quote className="w-10 h-10 text-orange-200 mb-4" />

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              "{t.results.testimonial}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg shadow-orange-500/20">
                А
              </div>
              <div>
                <div className="font-medium text-gray-900">
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
