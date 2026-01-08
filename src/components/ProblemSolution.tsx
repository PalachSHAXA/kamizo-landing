import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Angry, FileSpreadsheet, Vote, HardHat, Users } from 'lucide-react';

const icons = [Angry, FileSpreadsheet, Vote, HardHat, Users];

export default function ProblemSolution() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16"
        >
          {t.problem.title}
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          {t.problem.problems.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Problem */}
                  <div className="flex-1 flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium text-base md:text-lg">
                        {item.problem}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center px-4">
                    <ArrowRight className="w-6 h-6 text-orange-500 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Solution */}
                  <div className="flex-1 md:pl-4 md:border-l border-gray-100">
                    <p className="text-green-700 font-medium text-base md:text-lg">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
