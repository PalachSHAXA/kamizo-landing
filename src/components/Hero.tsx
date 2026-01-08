import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-32 gradient-mesh overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl" />
      <div className="absolute top-60 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
          >
            <Sparkles size={14} className="text-orange-500" />
            <span className="text-sm font-medium text-gray-700">
              {language === 'ru' ? 'Резидент IT Park Uzbekistan' : 'IT Park Uzbekistan rezidenti'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-[1.1] tracking-tight"
          >
            {t.hero.title}
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              {t.hero.subtitle}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-500 max-w-xl mx-auto font-light leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="btn-primary flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-medium text-base group w-full sm:w-auto justify-center"
            >
              {t.hero.tryFree}
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#features"
              className="btn-secondary flex items-center gap-2 text-gray-700 px-7 py-3.5 rounded-xl font-medium text-base w-full sm:w-auto justify-center"
            >
              {t.nav.features}
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              {t.hero.benefit1}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              {t.hero.benefit2}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              {t.hero.benefit3}
            </span>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 md:mt-24 relative"
        >
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fafbfc] to-transparent z-10 pointer-events-none" />

          <div className="relative mx-auto max-w-4xl">
            <div className="glass-card rounded-2xl p-2 shadow-2xl shadow-black/[0.08]">
              <div className="bg-[#1a1a2e] rounded-xl overflow-hidden">
                {/* Browser Bar */}
                <div className="flex items-center gap-3 px-4 py-3 bg-[#16162a] border-b border-white/[0.04]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white/[0.06] rounded-lg px-4 py-1.5 text-gray-400 text-xs font-medium">
                      app.kamizo.uz
                    </div>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Dashboard Content */}
                <div className="aspect-[16/9] p-5 md:p-6">
                  <div className="h-full grid grid-cols-12 gap-4">
                    {/* Sidebar */}
                    <div className="col-span-2 bg-white/[0.03] rounded-xl p-3 hidden md:flex flex-col">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg mb-6 shadow-lg shadow-orange-500/20" />
                      <div className="space-y-2 flex-1">
                        {[1, 0, 0, 0, 0, 0].map((active, i) => (
                          <div
                            key={i}
                            className={`h-8 rounded-lg ${active ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-white/[0.04]'}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-span-12 md:col-span-10 space-y-4">
                      {/* Stats Row */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          { color: 'orange', value: '2,847' },
                          { color: 'emerald', value: '94%' },
                          { color: 'blue', value: '156' },
                          { color: 'purple', value: '4.8' },
                        ].map((stat, i) => (
                          <div key={i} className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.04]">
                            <div className={`w-8 h-8 rounded-lg bg-${stat.color}-500/20 mb-3`} />
                            <div className="text-white font-semibold text-lg">{stat.value}</div>
                            <div className="h-2 w-16 bg-white/10 rounded mt-1" />
                          </div>
                        ))}
                      </div>

                      {/* Chart Area */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="md:col-span-2 bg-white/[0.04] rounded-xl p-4 border border-white/[0.04]">
                          <div className="h-3 w-24 bg-white/10 rounded mb-4" />
                          <div className="flex items-end justify-between h-28 gap-1.5">
                            {[35, 55, 40, 70, 50, 65, 80, 55, 70, 85, 60, 75].map((h, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-gradient-to-t from-orange-500 to-orange-400 rounded-sm opacity-90"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.04]">
                          <div className="h-3 w-20 bg-white/10 rounded mb-4" />
                          <div className="space-y-3">
                            {[80, 60, 45, 30].map((w, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-600 to-gray-700" />
                                <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                                    style={{ width: `${w}%` }}
                                  />
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
