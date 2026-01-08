import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { X, Check } from 'lucide-react';

export default function Comparison() {
  const { t } = useLanguage();

  return (
    <section className="py-24 section-subtle">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading">{t.comparison.title}</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-4 mb-6"
          >
            <div className="text-center py-3 rounded-xl bg-red-50 text-red-600 text-sm font-medium">
              {t.comparison.without}
            </div>
            <div className="text-center py-3 rounded-xl bg-green-50 text-green-600 text-sm font-medium">
              {t.comparison.with}
            </div>
          </motion.div>

          {/* Items */}
          <div className="space-y-3">
            {t.comparison.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                className="grid grid-cols-2 gap-4"
              >
                {/* Without */}
                <div className="glass-card p-4 flex items-start gap-3">
                  <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-neutral-500 text-sm">{item.without}</span>
                </div>

                {/* With */}
                <div className="glass-card p-4 flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-neutral-900 text-sm font-medium">{item.with}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
