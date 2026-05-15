import { motion } from "motion/react";
import { Share2, Target, Palette } from "lucide-react";

const services = [
  {
    icon: <Share2 size={32} />,
    title: "Social Media Management",
    features: [
      "Full Brand Growth System",
      "Content Strategy Planning",
      "Daily Post Management",
      "Engagement Optimization",
      "Audience Growth System",
      "Analytics & Performance Tracking",
    ],
  },
  {
    icon: <Target size={32} />,
    title: "Meta Ads Management",
    features: [
      "Performance-Based Ad System",
      "In-depth Audience Research",
      "Pixel & Conversion API Setup",
      "High-Converting Lead Funnels",
      "Dynamic Retargeting Strategy",
      "Scalable ROAS Optimization",
    ],
  },
  {
    icon: <Palette size={32} />,
    title: "Content & Branding",
    features: [
      "Creative Growth Systems",
      "Brand Identity Design",
      "Scroll-Stopping Ad Creatives",
      "Viral Reels & Video Content",
      "Conversion-Focused Visuals",
      "Branding Strategy & Guidelines",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 border-b border-white/5">
      <div className="grid-layout">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-neon-orange rounded-full" />
              <span className="tag">Services</span>
            </div>
            <h2 className="text-5xl font-bold uppercase tracking-tighter">Core Specialties</h2>
          </div>
          <p className="text-xl text-text-gray font-light max-w-sm">
            Strategic solutions tailored to scale your brand and maximize ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1" id="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border border-white/5 bg-bg-gray/20 hover:bg-bg-gray/40 transition-all group relative overflow-hidden"
            >
              <div className="text-neon-orange mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 group-hover:text-neon-orange transition-colors">
                {service.title}
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-text-gray font-light flex items-center gap-2">
                    <span className="w-1 h-1 bg-neon-orange/40 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              {/* Bottom orange line indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-neon-orange group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
