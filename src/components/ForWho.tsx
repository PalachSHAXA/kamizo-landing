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
    },
    {
      icon: Users,
      title: t.forWho.residents.title,
      features: t.forWho.residents.features,
    },
    {
      icon: Wrench,
      title: t.forWho.staff.title,
      features: t.forWho.staff.features,
    },
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
          <h2 className="text-heading">{t.forWho.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="icon-box mb-5">
                  <Icon className="w-5 h-5 text-neutral-600" />
                </div>

                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  {audience.title}
                </h3>

                <ul className="space-y-3">
                  {audience.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-neutral-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-neutral-600 text-sm">{feature}</span>
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
