import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Phone, FileX, Vote, UserX, CircleDollarSign } from 'lucide-react';

const problemIcons = [Phone, FileX, Vote, UserX, CircleDollarSign];

export default function ProblemSolution() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            {t.problem.title}
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            {language === 'ru'
              ? 'Проблемы, с которыми сталкиваются управляющие компании каждый день'
              : 'Boshqaruv kompaniyalari har kuni duch keladigan muammolar'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.problem.problems.map((item, index) => {
            const Icon = problemIcons[index % problemIcons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-6 card-hover group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {item.problem}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-orange-500 text-xs font-medium mb-3">
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  <span>{language === 'ru' ? 'Решение' : 'Yechim'}</span>
                </div>

                <p className="text-gray-900 font-medium text-sm leading-relaxed">
                  {item.solution}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
