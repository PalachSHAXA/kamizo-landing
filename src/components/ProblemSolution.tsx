import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function ProblemSolution() {
  const { language, t } = useLanguage();

  return (
    <section className="py-24 section-subtle">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading mb-4">{t.problem.title}</h2>
          <p className="text-subheading max-w-lg mx-auto">
            {language === 'ru'
              ? 'Проблемы, которые решает Kamizo'
              : 'Kamizo hal qiladigan muammolar'}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {t.problem.problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card p-6 group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Problem */}
                <div className="flex-1">
                  <div className="text-label text-red-500/80 mb-2">
                    {language === 'ru' ? 'Проблема' : 'Muammo'}
                  </div>
                  <p className="text-neutral-600 text-sm">{item.problem}</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center w-10">
                  <ArrowRight size={16} className="text-neutral-300" />
                </div>

                {/* Solution */}
                <div className="flex-1">
                  <div className="text-label text-green-600/80 mb-2">
                    {language === 'ru' ? 'Решение' : 'Yechim'}
                  </div>
                  <p className="text-neutral-900 font-medium text-sm">{item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
