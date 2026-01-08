import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { X, Check } from 'lucide-react';

export default function Comparison() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 gradient-mesh">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            {t.comparison.title}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-3 mb-4"
          >
            <div className="glass-card rounded-xl p-3 text-center border-l-4 border-l-red-400">
              <span className="font-medium text-gray-600 text-sm">{t.comparison.without}</span>
            </div>
            <div className="glass-card rounded-xl p-3 text-center border-l-4 border-l-green-400">
              <span className="font-medium text-gray-600 text-sm">{t.comparison.with}</span>
            </div>
          </motion.div>

          {/* Comparison Items */}
          <div className="space-y-2">
            {t.comparison.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                className="grid grid-cols-2 gap-3"
              >
                {/* Without */}
                <div className="glass-card rounded-xl p-4 flex items-start gap-3">
                  <div className="w-5 h-5 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-gray-500 text-sm">{item.without}</span>
                </div>

                {/* With */}
                <div className="glass-card rounded-xl p-4 flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{item.with}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
