import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="hero-gradient pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-6">
              {language === 'ru' ? 'Резидент IT Park' : 'IT Park rezidenti'}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-display mb-6"
          >
            {t.hero.title}
            <br />
            <span className="text-neutral-400">{t.hero.subtitle}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-subheading max-w-xl mx-auto mb-10"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              {t.hero.tryFree}
              <ArrowRight size={16} />
            </a>
            <a href="#features" className="btn-secondary w-full sm:w-auto">
              {t.nav.features}
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-small"
          >
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-green-500 rounded-full" />
              {t.hero.benefit1}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-green-500 rounded-full" />
              {t.hero.benefit2}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-green-500 rounded-full" />
              {t.hero.benefit3}
            </span>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 md:mt-24"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent rounded-3xl blur-3xl" />

            <div className="relative bg-white rounded-2xl border border-neutral-200 shadow-2xl shadow-neutral-900/5 overflow-hidden">
              {/* Browser Bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-neutral-50 border-b border-neutral-100">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white rounded-md px-4 py-1 text-xs text-neutral-400 border border-neutral-100">
                    app.kamizo.uz
                  </div>
                </div>
                <div className="w-12" />
              </div>

              {/* Dashboard Content */}
              <div className="aspect-[16/9] bg-neutral-900 p-6">
                <div className="h-full grid grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-2 space-y-3 hidden md:block">
                    <div className="w-8 h-8 bg-neutral-800 rounded-lg" />
                    <div className="space-y-2 pt-4">
                      {[1, 0, 0, 0, 0].map((active, i) => (
                        <div
                          key={i}
                          className={`h-8 rounded-lg ${active ? 'bg-neutral-700' : 'bg-neutral-800/50'}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Main */}
                  <div className="col-span-12 md:col-span-10 space-y-4">
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['2,847', '94%', '156', '4.8'].map((value, i) => (
                        <div key={i} className="bg-neutral-800 rounded-xl p-4">
                          <div className="w-8 h-8 rounded-lg bg-neutral-700 mb-3" />
                          <div className="text-white font-semibold text-lg">{value}</div>
                          <div className="h-2 w-16 bg-neutral-700 rounded mt-2" />
                        </div>
                      ))}
                    </div>

                    {/* Chart */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="md:col-span-2 bg-neutral-800 rounded-xl p-4">
                        <div className="h-3 w-20 bg-neutral-700 rounded mb-4" />
                        <div className="flex items-end justify-between h-24 gap-1">
                          {[35, 55, 40, 70, 50, 65, 80, 55, 70, 85, 60, 75].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-gradient-to-t from-orange-500/80 to-orange-400/60 rounded-sm"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="bg-neutral-800 rounded-xl p-4">
                        <div className="h-3 w-16 bg-neutral-700 rounded mb-4" />
                        <div className="space-y-3">
                          {[80, 60, 45].map((w, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-neutral-700" />
                              <div className="flex-1 h-2 bg-neutral-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-orange-500/70 rounded-full"
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
        </motion.div>
      </div>
    </section>
  );
}
