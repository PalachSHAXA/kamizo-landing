import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Settings, Rocket, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Phone,
      number: '1',
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
    },
    {
      icon: Settings,
      number: '2',
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
    },
    {
      icon: Rocket,
      number: '3',
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FEF3E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16"
        >
          {t.howItWorks.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-orange-200">
                    <ArrowRight className="absolute -right-2 -top-2.5 w-5 h-5 text-orange-400" />
                  </div>
                )}

                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-white rounded-2xl shadow-lg" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-orange-500" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
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
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all active:scale-[0.98]"
          >
            {t.howItWorks.cta}
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
