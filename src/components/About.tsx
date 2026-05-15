import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-white/5">
      <div className="grid-layout grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-neon-orange rounded-full" />
            <span className="tag">The Marketer</span>
          </div>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-neon-orange/20 shrink-0">
               <img src="https://res.cloudinary.com/dc2m2bgok/image/upload/v1778841356/rajib_picture_sycjey.png" alt="AFIF ISLAM RAJIB" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">AFIF ISLAM RAJIB</h2>
          </div>
          <div className="space-y-6 text-xl text-text-gray font-light">
            <p>
              Hi, I’m Afif Islam Rajib, a Social Media Marketing Manager & Meta Ads Expert with 3+ years of experience in digital growth strategy.
            </p>
            <p>
              I specialize in building complete marketing systems that help businesses increase visibility, generate qualified leads, and improve conversion rates through data-driven analysis and creative mastery.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
               <p className="text-[10px] uppercase tracking-[2px] font-bold text-neon-orange mb-6">Skills Snapshot</p>
               <ul className="space-y-4">
                 {["Social Media Management", "Meta Ads Strategy", "Content Creation", "Funnel Optimization"].map((skill) => (
                   <li key={skill} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                     <div className="w-1.5 h-1.5 bg-neon-orange rounded-full" />
                     {skill}
                   </li>
                 ))}
               </ul>
            </div>
            <div>
               <p className="text-[10px] uppercase tracking-[2px] font-bold text-neon-orange mb-6">Tools Used</p>
               <ul className="space-y-4">
                 {["Meta Ads Manager", "Google Analytics", "Canva Pro", "CRM Solutions"].map((tool) => (
                   <li key={tool} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                     <div className="w-1.5 h-1.5 border border-neon-orange/50 rounded-full" />
                     {tool}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 relative">
          {[
            { label: "Years Exp", value: "3+" },
            { label: "Clients", value: "50+" },
            { label: "Ad Managed", value: "$300k" },
            { label: "ROI Avg", value: "4.5x" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 flex flex-col justify-center items-center text-center group hover:border-neon-orange/20 transition-all cursor-default"
            >
              <p className="text-5xl font-bold font-display mb-1 text-white group-hover:text-neon-orange transition-colors">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[3px] font-bold text-white/40">{stat.label}</p>
            </motion.div>
          ))}
          {/* Subtle accent corner */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-neon-orange/30 -z-10" />
        </div>
      </div>
    </section>
  );
}
