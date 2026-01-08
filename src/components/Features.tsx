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
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16"
        >
          {t.features.title}
        </motion.h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex overflow-x-auto pb-4 mb-8 md:mb-12 gap-2 md:gap-3 scrollbar-hide md:flex-wrap md:justify-center"
        >
          {features.map((feature) => {
            const Icon = featureIcons[feature.key as keyof typeof featureIcons];
            const isActive = activeTab === feature.key;

            return (
              <button
                key={feature.key}
                onClick={() => setActiveTab(feature.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon size={18} />
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
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Feature List */}
              <div className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {activeFeature.data.title}
                </h3>
                <ul className="space-y-4">
                  {activeFeature.data.items.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Feature Visual */}
              <div className="order-1 md:order-2">
                <div className="glass rounded-2xl p-3 shadow-xl">
                  <div className="bg-gray-900 rounded-xl overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 flex items-center justify-center">
                      {(() => {
                        const Icon = featureIcons[activeTab as keyof typeof featureIcons];
                        return (
                          <div className="text-center">
                            <div className="w-24 h-24 mx-auto bg-orange-500/20 rounded-2xl flex items-center justify-center mb-4">
                              <Icon className="w-12 h-12 text-orange-500" />
                            </div>
                            <div className="text-gray-400 text-lg">
                              {activeFeature.data.title}
                            </div>
                          </div>
                        );
                      })()}
                    </div>
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
