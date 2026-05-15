import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Business Analysis",
    desc: "I deep dive into your business model, target audience, and market competition.",
  },
  {
    num: "02",
    title: "Strategy Planning",
    desc: "Crafting a customized digital roadmap focused on conversions and sustainable ROI.",
  },
  {
    num: "03",
    title: "Content Creation",
    desc: "Designing high-impact visuals and ad copy that stops the scroll and drives action.",
  },
  {
    num: "04",
    title: "Campaign Execution",
    desc: "Launching performance-driven Meta Ads with precision targeting and pixel setup.",
  },
  {
    num: "05",
    title: "Optimization",
    desc: "Continuous A/B testing and data analysis to squeeze maximum value from your budget.",
  },
  {
    num: "06",
    title: "Reporting & Scaling",
    desc: "Transperant reports on performance and aggressive scaling of winning strategies.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 border-b border-white/5">
      <div className="grid-layout">
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-neon-orange rounded-full" />
            <span className="tag">Workflow</span>
          </div>
          <h2 className="text-5xl font-bold uppercase tracking-tighter">My Working Process</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border-r border-b border-white/5 hover:bg-white/5 transition-all group"
            >
              <span className="text-4xl font-bold font-display text-white/10 group-hover:text-neon-orange/20 transition-colors mb-6 block">
                {step.num}
              </span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{step.title}</h3>
              <p className="text-text-gray font-light text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
