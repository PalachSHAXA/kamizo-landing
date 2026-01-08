import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function SocialProof() {
  const { language, t } = useLanguage();

  const stats = [
    { value: t.social.stat1, label: t.social.stat1Label },
    { value: t.social.stat2, label: t.social.stat2Label },
    { value: t.social.stat3, label: t.social.stat3Label },
  ];

  // Client companies - monochrome minimal style
  const clients = [
    { name: 'Tashkent City', abbr: 'TC' },
    { name: 'Mirabad Plaza', abbr: 'MP' },
    { name: 'Navruz Complex', abbr: 'NC' },
    { name: 'Green Park', abbr: 'GP' },
    { name: 'Ideal House', abbr: 'IH' },
    { name: 'Sergeli Mega', abbr: 'SM' },
    { name: 'Orient Tower', abbr: 'OT' },
    { name: 'Silk Road', abbr: 'SR' },
  ];

  return (
    <section className="py-20 border-y border-neutral-100">
      <div className="container-main">
        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-label mb-8">
            {language === 'ru' ? 'Нам доверяют' : 'Bizga ishonishadi'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                <span className="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center text-xs font-semibold text-neutral-500">
                  {client.abbr}
                </span>
                <span className="hidden sm:block text-sm font-medium">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="divider my-12" />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-12 md:gap-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
