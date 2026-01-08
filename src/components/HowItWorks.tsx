import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, MessageSquare, Cog, Zap } from 'lucide-react';

const stepIcons = [MessageSquare, Cog, Zap];

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
    },
    {
      number: '02',
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
    },
    {
      number: '03',
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
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
          <h2 className="text-heading">{t.howItWorks.title}</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-zinc-200" />
                  )}

                  <div className="text-center">
                    {/* Number badge */}
                    <div className="relative inline-flex mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center shadow-xl shadow-zinc-900/20">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-semibold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-primary">
            {t.howItWorks.cta}
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
