import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Building2, Users, Wrench, Check } from 'lucide-react';

export default function ForWho() {
  const { t } = useLanguage();

  const audiences = [
    {
      icon: Building2,
      title: t.forWho.uk.title,
      features: t.forWho.uk.features,
      gradient: 'from-orange-500 to-orange-600',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-500',
    },
    {
      icon: Users,
      title: t.forWho.residents.title,
      features: t.forWho.residents.features,
      gradient: 'from-blue-500 to-indigo-600',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
    {
      icon: Wrench,
      title: t.forWho.staff.title,
      features: t.forWho.staff.features,
      gradient: 'from-emerald-500 to-teal-600',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-500',
    },
  ];

  return (
    <section className="py-20 md:py-28 gradient-mesh">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            {t.forWho.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 card-hover relative overflow-hidden"
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${audience.gradient}`} />

                <div className={`w-12 h-12 ${audience.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${audience.iconColor}`} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-5">
                  {audience.title}
                </h3>

                <ul className="space-y-3">
                  {audience.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
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
