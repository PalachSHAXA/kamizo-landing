import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Cog, Zap, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
    },
    {
      icon: Cog,
      number: '02',
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
    },
    {
      icon: Zap,
      number: '03',
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
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
            {t.howItWorks.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 relative"
              >
                {/* Step number */}
                <div className="text-6xl font-bold text-gray-100 absolute top-4 right-4">
                  {step.number}
                </div>

                <div className="relative">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-white rounded-full border border-gray-100 flex items-center justify-center z-10 shadow-sm">
                    <ArrowRight className="w-3 h-3 text-orange-500" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-medium"
          >
            {t.howItWorks.cta}
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
