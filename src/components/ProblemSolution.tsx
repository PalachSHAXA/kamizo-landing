import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ProblemSolution() {
  const { language, t } = useLanguage();

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
          <h2 className="text-heading mb-4">{t.problem.title}</h2>
          <p className="text-subheading max-w-xl mx-auto">
            {language === 'ru'
              ? 'Превращаем хаос в порядок'
              : 'Tartibsizlikni tartibga aylantiramiz'}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {t.problem.problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card p-6 md:p-8"
            >
              <div className="grid md:grid-cols-[1fr,auto,1fr] gap-6 items-start">
                {/* Problem */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <span className="text-label text-red-500 block mb-2">
                      {language === 'ru' ? 'Проблема' : 'Muammo'}
                    </span>
                    <p className="text-body">{item.problem}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center h-full pt-6">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                    <ArrowRight size={16} className="text-zinc-400" />
                  </div>
                </div>

                {/* Solution */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <span className="text-label text-emerald-600 block mb-2">
                      {language === 'ru' ? 'Решение' : 'Yechim'}
                    </span>
                    <p className="text-zinc-900 font-medium text-[15px]">{item.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
