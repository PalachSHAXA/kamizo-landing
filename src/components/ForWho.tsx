import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Building2, Users, Wrench } from 'lucide-react';

export default function ForWho() {
  const { t } = useLanguage();

  const audiences = [
    {
      icon: Building2,
      title: t.forWho.uk.title,
      features: t.forWho.uk.features,
      gradient: 'from-orange-500 to-amber-500',
      bg: 'bg-orange-50',
    },
    {
      icon: Users,
      title: t.forWho.residents.title,
      features: t.forWho.residents.features,
      gradient: 'from-blue-500 to-indigo-500',
      bg: 'bg-blue-50',
    },
    {
      icon: Wrench,
      title: t.forWho.staff.title,
      features: t.forWho.staff.features,
      gradient: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-50',
    },
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
          <h2 className="text-heading">{t.forWho.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-8 relative overflow-hidden group"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${audience.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className={`w-14 h-14 rounded-2xl ${audience.bg} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-zinc-600" />
                </div>

                <h3 className="text-xl font-semibold text-zinc-900 mb-5">
                  {audience.title}
                </h3>

                <ul className="space-y-3">
                  {audience.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2 flex-shrink-0" />
                      <span className="text-body">{feature}</span>
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
