import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function SocialProof() {
  const { language, t } = useLanguage();

  // 12 Client companies - monochrome minimal style
  const clients = [
    { name: 'Tashkent City', abbr: 'TC' },
    { name: 'Mirabad Plaza', abbr: 'MP' },
    { name: 'Navruz Complex', abbr: 'NC' },
    { name: 'Green Park', abbr: 'GP' },
    { name: 'Ideal House', abbr: 'IH' },
    { name: 'Sergeli Mega', abbr: 'SM' },
    { name: 'Orient Tower', abbr: 'OT' },
    { name: 'Silk Road', abbr: 'SR' },
    { name: 'Atlas Residence', abbr: 'AR' },
    { name: 'Stellar Homes', abbr: 'SH' },
    { name: 'Prime Living', abbr: 'PL' },
    { name: 'Urban Estate', abbr: 'UE' },
  ];

  const stats = [
    { value: t.social.stat1, label: t.social.stat1Label },
    { value: t.social.stat2, label: t.social.stat2Label },
    { value: t.social.stat3, label: t.social.stat3Label },
  ];

  return (
    <section className="section-sm border-y border-zinc-100">
      <div className="container">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-label text-center mb-10"
        >
          {language === 'ru' ? 'Нам доверяют ведущие компании' : 'Yetakchi kompaniyalar bizga ishonadi'}
        </motion.p>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="flex items-center justify-center gap-2 py-4 px-3 rounded-2xl bg-zinc-50/80 hover:bg-zinc-100/80 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-200/80 flex items-center justify-center group-hover:bg-zinc-300/80 transition-colors">
                <span className="text-xs font-semibold text-zinc-500 group-hover:text-zinc-700 transition-colors">
                  {client.abbr}
                </span>
              </div>
              <span className="text-xs font-medium text-zinc-500 hidden lg:block group-hover:text-zinc-700 transition-colors">
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-16 md:gap-24"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
