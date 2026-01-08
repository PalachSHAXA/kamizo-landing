import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function SocialProof() {
  const { t } = useLanguage();

  const stats = [
    { value: t.social.stat1, label: t.social.stat1Label },
    { value: t.social.stat2, label: t.social.stat2Label },
    { value: t.social.stat3, label: t.social.stat3Label },
  ];

  // Real-looking client companies
  const clients = [
    { name: 'Tashkent City Residence', abbr: 'TC' },
    { name: 'Mirabad Plaza', abbr: 'MP' },
    { name: 'Navruz Complex', abbr: 'NC' },
    { name: 'Green Park Towers', abbr: 'GP' },
    { name: 'Ideal House', abbr: 'IH' },
    { name: 'Sergeli Mega', abbr: 'SM' },
  ];

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-400 text-sm font-medium uppercase tracking-wider mb-10"
        >
          {t.social.title}
        </motion.p>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-14"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="glass-card flex items-center gap-3 px-5 py-3 rounded-xl card-hover cursor-default"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-600 text-sm">{client.abbr}</span>
              </div>
              <span className="font-medium text-gray-700 text-sm hidden sm:block">{client.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
