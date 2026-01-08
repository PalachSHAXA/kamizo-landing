import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Results() {
  const { t } = useLanguage();

  const stats = [
    { value: t.results.stat1, label: t.results.stat1Label },
    { value: t.results.stat2, label: t.results.stat2Label },
    { value: t.results.stat3, label: t.results.stat3Label },
  ];

  return (
    <section className="py-24">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading">{t.results.title}</h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 text-center">
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              "{t.results.testimonial}"
            </p>

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600 font-semibold text-sm">
                А
              </div>
              <div className="text-sm text-neutral-600 font-medium">
                {t.results.author}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
