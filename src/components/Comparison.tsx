import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { X, Check } from 'lucide-react';

export default function Comparison() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-[#FFFBEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16"
        >
          {t.comparison.title}
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4 mb-6"
          >
            <div className="bg-red-100 rounded-xl p-4 text-center">
              <span className="font-bold text-red-700">{t.comparison.without}</span>
            </div>
            <div className="bg-green-100 rounded-xl p-4 text-center">
              <span className="font-bold text-green-700">{t.comparison.with}</span>
            </div>
          </motion.div>

          {/* Comparison Items */}
          <div className="space-y-3">
            {t.comparison.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="grid grid-cols-2 gap-4"
              >
                {/* Without */}
                <div className="bg-white rounded-xl p-4 border border-red-100 flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{item.without}</span>
                </div>

                {/* With */}
                <div className="bg-white rounded-xl p-4 border border-green-100 flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{item.with}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
