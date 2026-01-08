import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import {
  FileText,
  Vote,
  MessageCircle,
  Users,
  QrCode,
  Car,
  BarChart3,
  Smartphone,
  Check,
} from 'lucide-react';

const featureIcons = {
  requests: FileText,
  meetings: Vote,
  communications: MessageCircle,
  staff: Users,
  guest: QrCode,
  carSearch: Car,
  analytics: BarChart3,
  mobile: Smartphone,
};

export default function Features() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('requests');

  const features = [
    { key: 'requests', data: t.features.requests },
    { key: 'meetings', data: t.features.meetings },
    { key: 'communications', data: t.features.communications },
    { key: 'staff', data: t.features.staff },
    { key: 'guest', data: t.features.guest },
    { key: 'carSearch', data: t.features.carSearch },
    { key: 'analytics', data: t.features.analytics },
    { key: 'mobile', data: t.features.mobile },
  ];

  const activeFeature = features.find((f) => f.key === activeTab);

  return (
    <section id="features" className="section bg-gradient-soft">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading">{t.features.title}</h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex overflow-x-auto pb-4 mb-16 gap-2 md:flex-wrap md:justify-center scrollbar-hide"
        >
          {features.map((feature) => {
            const Icon = featureIcons[feature.key as keyof typeof featureIcons];
            const isActive = activeTab === feature.key;

            return (
              <button
                key={feature.key}
                onClick={() => setActiveTab(feature.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-zinc-900 text-white shadow-lg shadow-zinc-900/20'
                    : 'bg-white text-zinc-600 hover:bg-zinc-50 border border-zinc-200'
                }`}
              >
                <Icon size={16} />
                {feature.data.title}
              </button>
            );
          })}
        </motion.div>

        {/* Feature Content */}
        <AnimatePresence mode="wait">
          {activeFeature && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
            >
              {/* Feature List */}
              <div>
                <h3 className="text-2xl font-semibold text-zinc-900 mb-8">
                  {activeFeature.data.title}
                </h3>
                <ul className="space-y-5">
                  {activeFeature.data.items.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <span className="text-body">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Feature Visual */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-indigo-500/10 rounded-3xl blur-2xl" />
                <div className="glass-card relative overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center">
                    {(() => {
                      const Icon = featureIcons[activeTab as keyof typeof featureIcons];
                      return (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-center"
                        >
                          <div className="w-20 h-20 mx-auto rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-4 ring-1 ring-white/10">
                            <Icon className="w-10 h-10 text-white/80" />
                          </div>
                          <div className="text-white/60 text-sm font-medium">
                            {activeFeature.data.title}
                          </div>
                        </motion.div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
