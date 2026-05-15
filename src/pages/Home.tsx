import { motion } from "motion/react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Reviews from "../components/Reviews";
import { ArrowRight, BarChart3, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-fade-in">
      <Hero />
      
      {/* Strategic Partners / Trusted By */}
      <section className="py-12 border-b border-white/5 bg-white/[0.02]">
        <div className="grid-layout">
          <p className="text-[10px] uppercase font-bold tracking-[4px] text-white/20 mb-8 text-center">Brands I've Helped Scale</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
            {["MARKET", "ELITE", "NEXUS", "AURA", "TECH", "CORE"].map((logo) => (
              <span key={logo} className="text-xl font-bold font-display tracking-tighter">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Brief Intro Section + Core Focus */}
      <section className="py-32 border-b border-white/5 relative overflow-hidden">
        <div className="grid-layout grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-neon-orange rounded-full" />
              <span className="tag">Performance Expert</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-10 leading-[1] md:leading-[0.85]">
              Turning <span className="text-neon-orange">Vanity Metrics</span> <br className="hidden sm:block" />
              Into Real Business <span className="italic font-display font-light">Growth.</span>
            </h2>
            <div className="space-y-8 text-xl text-text-gray font-light">
              <p>
                In an era of digital noise, I help brands cut through with precision-engineered Facebook & Instagram ad strategies. My approach integrates psychological triggers with advanced algorithmic targeting.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-6 border border-white/5 bg-white/5 rounded-lg">
                  <h4 className="text-white font-bold mb-2 uppercase tracking-tight">Direct ROI</h4>
                  <p className="text-sm">Focused on cost-per-acquisition and lifetime value scaling.</p>
                </div>
                <div className="p-6 border border-white/5 bg-white/5 rounded-lg">
                  <h4 className="text-white font-bold mb-2 uppercase tracking-tight">Brand Authority</h4>
                  <p className="text-sm">Building trust systems that make your business the obvious choice.</p>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-[3px] text-xs group pt-4">
                Explore the methodology <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-neon-orange" />
              </Link>
            </div>
          </motion.div>
          <div className="relative">
             <div className="glass-card aspect-[4/5] overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                  alt="Strategy" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="p-6 bg-neon-orange text-white rounded-sm inline-block mb-4">
                      <p className="text-xs uppercase font-bold tracking-widest leading-none">Scale Record</p>
                      <p className="text-4xl font-bold font-display mt-2">12.5x ROAS</p>
                   </div>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -top-10 -right-10 w-40 h-40 border border-neon-orange/20 rounded-full animate-spin-slow -z-10" />
          </div>
        </div>
      </section>

      <Stats />

      {/* Why Choose Me - New Section */}
      <section className="py-32 border-b border-white/5 relative bg-[#090D12]">
        <div className="grid-layout">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="tag mb-6 block mx-auto w-fit">Competitive Edge</span>
            <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tighter">Why Brands Choose My <br className="hidden sm:block" /> <span className="text-neon-orange italic">Growth Systems</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Data-First Logic", 
                desc: "I don't guess. I test. Every campaign is backed by granular data analysis and creative testing frameworks that eliminate waste.",
                icon: <BarChart3 size={32} />
              },
              { 
                title: "Scaleable Funnels", 
                desc: "I build end-to-end conversion systems, not just ads. From the first click to the final sale, every touchpoint is optimized.",
                icon: <Zap size={32} />
              },
              { 
                title: "Transparent Profit", 
                desc: "You'll always know your numbers. My reporting focuses on metrics that matter: Revenue, Profit, and Customer Acquisition Cost.",
                icon: <TrendingUp size={32} />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border border-white/5 bg-white/[0.03] rounded-xl hover:border-neon-orange/30 transition-all hover:-translate-y-2 group"
              >
                <div className="text-neon-orange mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-text-gray font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview (Expanded) */}
      <section className="py-32 border-b border-white/5">
        <div className="grid-layout">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
               <h2 className="text-5xl font-bold uppercase tracking-tighter mb-6 leading-none">Core Expert <br /> <span className="text-neon-orange">Service Pillars</span></h2>
               <p className="text-text-gray font-light italic">Specialized solutions tailored for high-growth e-commerce and lead-gen businesses.</p>
            </div>
            <Link to="/services" className="px-8 py-4 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-bg-dark transition-all rounded-sm">
               View Full Service Sheet
            </Link>
          </div>
          <Services />
        </div>
      </section>

      <Reviews />

      {/* CTA Banner (Extended) */}
      <section className="py-32 bg-neon-orange overflow-hidden relative group">
        <div className="grid-layout relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-3xl md:text-6xl font-bold text-white uppercase tracking-tighter leading-tight md:leading-none text-center md:text-left">
              Let’s Grow Your <br className="hidden sm:block" /> Business Together
            </h2>
            <Link to="/contact" className="px-12 py-6 bg-white text-neon-orange font-bold uppercase tracking-[3px] text-xs rounded-sm hover:scale-105 transition-transform active:scale-95">
              Get Started Now
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
      </section>
    </div>
  );
}
