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
    <section id="features" className="py-24 section-subtle">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading">{t.features.title}</h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex overflow-x-auto pb-4 mb-12 gap-2 md:flex-wrap md:justify-center"
        >
          {features.map((feature) => {
            const Icon = featureIcons[feature.key as keyof typeof featureIcons];
            const isActive = activeTab === feature.key;

            return (
              <button
                key={feature.key}
                onClick={() => setActiveTab(feature.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200'
                }`}
              >
                <Icon size={15} />
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto"
            >
              {/* Feature List */}
              <div>
                <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                  {activeFeature.data.title}
                </h3>
                <ul className="space-y-4">
                  {activeFeature.data.items.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-5 h-5 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                      </span>
                      <span className="text-neutral-600 text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Feature Visual */}
              <div className="glass-card p-1 rounded-2xl">
                <div className="bg-neutral-900 rounded-xl aspect-[4/3] flex items-center justify-center">
                  {(() => {
                    const Icon = featureIcons[activeTab as keyof typeof featureIcons];
                    return (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-center"
                      >
                        <div className="w-16 h-16 mx-auto bg-neutral-800 rounded-2xl flex items-center justify-center mb-4">
                          <Icon className="w-8 h-8 text-neutral-400" />
                        </div>
                        <div className="text-neutral-500 text-sm font-medium">
                          {activeFeature.data.title}
                        </div>
                      </motion.div>
                    );
                  })()}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
