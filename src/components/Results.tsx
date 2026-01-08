import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Quote } from 'lucide-react';

export default function Results() {
  const { t } = useLanguage();

  const stats = [
    { value: t.results.stat1, label: t.results.stat1Label },
    { value: t.results.stat2, label: t.results.stat2Label },
    { value: t.results.stat3, label: t.results.stat3Label },
  ];

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading">{t.results.title}</h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-semibold text-zinc-900 tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500">
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
          <div className="glass-card p-10 relative">
            {/* Quote icon */}
            <div className="absolute -top-4 left-10">
              <div className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>
            </div>

            <p className="text-xl text-zinc-700 leading-relaxed mb-8 mt-2">
              "{t.results.testimonial}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-full flex items-center justify-center text-zinc-600 font-semibold">
                А
              </div>
              <div>
                <div className="font-medium text-zinc-900">
                  {t.results.author}
                </div>
                <div className="text-sm text-zinc-500">
                  Директор УК
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
