import { motion } from 'framer-motion';
import { Play, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
          >
            {t.hero.title}
            <br />
            <span className="text-orange-500">{t.hero.subtitle}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#demo-video"
              className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3.5 rounded-xl font-semibold transition-all active:scale-[0.98] group"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              {t.hero.watchDemo}
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 rounded-xl font-semibold transition-all active:scale-[0.98] group"
            >
              {t.hero.tryFree}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600"
          >
            <span className="flex items-center gap-2">
              <Check size={18} className="text-green-500" />
              {t.hero.benefit1}
            </span>
            <span className="flex items-center gap-2">
              <Check size={18} className="text-green-500" />
              {t.hero.benefit2}
            </span>
            <span className="flex items-center gap-2">
              <Check size={18} className="text-green-500" />
              {t.hero.benefit3}
            </span>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 md:mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative mx-auto max-w-5xl">
            <div className="glass rounded-2xl md:rounded-3xl p-2 md:p-3 shadow-2xl shadow-orange-500/10">
              <div className="bg-gray-900 rounded-xl md:rounded-2xl overflow-hidden">
                {/* Browser Bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-gray-700 rounded-lg px-4 py-1.5 text-gray-400 text-sm">
                      app.kamizo.uz
                    </div>
                  </div>
                </div>
                {/* Dashboard Content Placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 md:p-8">
                  <div className="h-full grid grid-cols-12 gap-4">
                    {/* Sidebar */}
                    <div className="col-span-2 bg-gray-800/50 rounded-xl p-4 hidden md:block">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg mb-6" />
                      <div className="space-y-3">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className={`h-8 rounded-lg ${i === 0 ? 'bg-orange-500/20' : 'bg-gray-700/50'}`} />
                        ))}
                      </div>
                    </div>
                    {/* Main Content */}
                    <div className="col-span-12 md:col-span-10 space-y-4">
                      {/* Stats Row */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="glass-dark rounded-xl p-4">
                            <div className="w-8 h-8 rounded-lg bg-orange-500/20 mb-3" />
                            <div className="h-6 w-16 bg-gray-600 rounded mb-2" />
                            <div className="h-3 w-24 bg-gray-700 rounded" />
                          </div>
                        ))}
                      </div>
                      {/* Chart Area */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="md:col-span-2 glass-dark rounded-xl p-4 h-40 md:h-48">
                          <div className="h-4 w-32 bg-gray-600 rounded mb-4" />
                          <div className="flex items-end justify-between h-24 md:h-32 gap-2">
                            {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 65, 80].map((h, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-gradient-to-t from-orange-500 to-orange-400 rounded-t"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="glass-dark rounded-xl p-4">
                          <div className="h-4 w-24 bg-gray-600 rounded mb-4" />
                          <div className="space-y-3">
                            {[...Array(4)].map((_, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-600" />
                                <div className="flex-1">
                                  <div className="h-3 w-full bg-gray-600 rounded" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
