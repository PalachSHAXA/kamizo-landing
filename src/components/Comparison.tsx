import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { X, Check, ArrowRight } from 'lucide-react';

export default function Comparison() {
  const { t } = useLanguage();

  return (
    <section className="section bg-gradient-soft">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading">{t.comparison.title}</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-[1fr,auto,1fr] gap-4 mb-8"
          >
            <div className="text-center py-4 rounded-2xl bg-red-50/80 backdrop-blur border border-red-100/50">
              <span className="text-red-600 text-sm font-medium">{t.comparison.without}</span>
            </div>
            <div className="w-12" />
            <div className="text-center py-4 rounded-2xl bg-emerald-50/80 backdrop-blur border border-emerald-100/50">
              <span className="text-emerald-600 text-sm font-medium">{t.comparison.with}</span>
            </div>
          </motion.div>

          {/* Items */}
          <div className="space-y-4">
            {t.comparison.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                className="grid grid-cols-[1fr,auto,1fr] gap-4 items-stretch"
              >
                {/* Without */}
                <div className="glass-card p-5 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-zinc-500 text-[15px] leading-relaxed">{item.without}</span>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                    <ArrowRight size={14} className="text-zinc-400" />
                  </div>
                </div>

                {/* With */}
                <div className="glass-card p-5 flex items-start gap-4 border-emerald-100/50">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-zinc-900 font-medium text-[15px] leading-relaxed">{item.with}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
