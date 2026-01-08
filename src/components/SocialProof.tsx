import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Award } from 'lucide-react';

export default function SocialProof() {
  const { t } = useLanguage();

  const stats = [
    { value: t.social.stat1, label: t.social.stat1Label },
    { value: t.social.stat2, label: t.social.stat2Label },
    { value: t.social.stat3, label: t.social.stat3Label },
  ];

  const logos = [
    'Tashkent City',
    'Green Park',
    'Navruz',
    'Ideal House',
  ];

  return (
    <section className="py-16 bg-[#FEF3E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-600 font-medium mb-8"
        >
          {t.social.title}
        </motion.p>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 md:w-40 h-12 bg-white/60 rounded-lg px-4"
            >
              <span className="font-semibold text-gray-500">{logo}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl p-4 md:p-6 shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* IT Park Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-gray-600"
        >
          <Award size={20} className="text-orange-500" />
          <span className="font-medium">{t.social.itPark}</span>
        </motion.div>
      </div>
    </section>
  );
}
