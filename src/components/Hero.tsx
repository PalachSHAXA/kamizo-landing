import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="bg-gradient-hero min-h-screen flex items-center pt-24 pb-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="badge-brand">
              <Sparkles size={14} />
              {language === 'ru' ? 'Резидент IT Park Uzbekistan' : 'IT Park Uzbekistan rezidenti'}
            </span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero mb-6"
          >
            {t.hero.title}
            <br />
            <span className="text-zinc-400">{t.hero.subtitle}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-subheading max-w-2xl mx-auto mb-12"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
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
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 text-small"
          >
            {[t.hero.benefit1, t.hero.benefit2, t.hero.benefit3].map((benefit, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {benefit}
              </span>
            ))}
          </motion.div>
        </div>

        {/* UI Preview - Floating Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-transparent to-indigo-500/20 rounded-[32px] blur-3xl opacity-50" />

            {/* Main Card */}
            <div className="glass-card relative overflow-hidden">
              {/* Browser Chrome */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-100/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-200" />
                  <div className="w-3 h-3 rounded-full bg-zinc-200" />
                  <div className="w-3 h-3 rounded-full bg-zinc-200" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1.5 bg-zinc-50 rounded-lg text-xs text-zinc-400 font-medium">
                    app.kamizo.uz
                  </div>
                </div>
                <div className="w-14" />
              </div>

              {/* Dashboard Preview */}
              <div className="aspect-[16/9] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6 md:p-8">
                <div className="h-full grid grid-cols-12 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-2 hidden md:flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30" />
                    <div className="space-y-2 mt-4">
                      {[1, 0, 0, 0, 0].map((active, i) => (
                        <div
                          key={i}
                          className={`h-9 rounded-lg transition-colors ${
                            active ? 'bg-white/10 ring-1 ring-white/10' : 'bg-white/5'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="col-span-12 md:col-span-10 space-y-4">
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { value: '2,847', color: 'from-orange-500/20 to-orange-600/10' },
                        { value: '94%', color: 'from-emerald-500/20 to-emerald-600/10' },
                        { value: '156', color: 'from-blue-500/20 to-blue-600/10' },
                        { value: '4.8', color: 'from-violet-500/20 to-violet-600/10' },
                      ].map((stat, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur rounded-xl p-4 ring-1 ring-white/5">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} mb-3`} />
                          <div className="text-white font-semibold text-xl">{stat.value}</div>
                          <div className="h-2 w-16 bg-white/10 rounded mt-2" />
                        </div>
                      ))}
                    </div>

                    {/* Charts */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="md:col-span-2 bg-white/5 backdrop-blur rounded-xl p-5 ring-1 ring-white/5">
                        <div className="h-3 w-24 bg-white/10 rounded mb-5" />
                        <div className="flex items-end justify-between h-32 gap-1">
                          {[40, 65, 45, 80, 55, 70, 90, 60, 75, 95, 65, 85].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-gradient-to-t from-orange-500 to-orange-400 rounded-sm"
                              style={{ height: `${h}%`, opacity: 0.8 + (i * 0.015) }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="bg-white/5 backdrop-blur rounded-xl p-5 ring-1 ring-white/5">
                        <div className="h-3 w-20 bg-white/10 rounded mb-5" />
                        <div className="space-y-4">
                          {[85, 65, 45].map((w, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-700" />
                              <div className="flex-1 h-2.5 bg-white/10 rounded-full overflow-hidden">
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
        </motion.div>
      </div>
    </section>
  );
}
