import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Calendar, Briefcase, Award, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="page-fade-in pt-32">
      <section className="py-24 border-b border-white/5">
        <div className="grid-layout">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-neon-orange rounded-full" />
              <span className="tag">Biography</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-12 leading-[1.1] md:leading-[0.8]">
              About <span className="text-neon-orange italic font-display">RAJIB.</span>
            </h1>
            <div className="text-3xl text-text-gray font-light leading-relaxed italic border-l-4 border-neon-orange/20 pl-10 py-4 mb-20">
              <p>
                "I believe digital marketing is more than just running ads—it's about building trust-based systems that connect brands with their ideal customers synchronously."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 border-b border-white/5">
        <div className="grid-layout grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter leading-tight md:leading-none">Strategic <br className="hidden sm:block" /> Storyteller & <br className="hidden sm:block" /> <span className="text-neon-orange">Data Scientist.</span></h2>
            <div className="space-y-8 text-xl text-text-gray font-light">
              <p>
                With over 3 years in the trenches of Meta Ads and Social Media Management, I’ve seen the landscape evolve from simple posting to complex algorithmic performance marketing. My journey began with a curiosity for human behavior and evolved into a technical obsession with ad delivery systems.
              </p>
              <p>
                I don't just "post content." I engineer attention. I don't just "run ads." I manage investment. My role is to act as your growth partner, identifying the leanest path to your business goals.
              </p>
              <p>
                Based in Bangladesh, I work with global brands to dominate their niches through strategic paid media and high-converting content frameworks.
              </p>
            </div>
            
            <div className="pt-10 grid grid-cols-2 gap-8">
               <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Location</h4>
                  <p className="text-text-gray text-lg">Dhaka, Bangladesh</p>
               </div>
               <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Languages</h4>
                  <p className="text-text-gray text-lg">English, Bengali</p>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 content-start">
            <div className="glass-card p-10 flex flex-col justify-center border-neon-orange/10 hover:border-neon-orange/30 transition-all cursor-default group">
              <TrendingUp className="text-neon-orange mb-6 group-hover:scale-110 transition-transform" size={40} />
              <p className="text-4xl font-bold mb-1 leading-none">ROI Focus</p>
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold mt-2">Maximum Efficiency</p>
            </div>
            <div className="glass-card p-10 flex flex-col justify-center hover:bg-white/5 transition-all cursor-default">
              <Award className="text-neon-orange mb-6" size={40} />
              <p className="text-4xl font-bold mb-1 leading-none">3+ Years</p>
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold mt-2">Market Stability</p>
            </div>
            <div className="glass-card p-10 flex flex-col justify-center hover:bg-white/5 transition-all cursor-default">
              <Briefcase className="text-neon-orange mb-6" size={40} />
              <p className="text-4xl font-bold mb-1 leading-none">50+</p>
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold mt-2">Active Successes</p>
            </div>
            <div className="glass-card p-10 flex flex-col justify-center border-neon-orange/10 hover:border-neon-orange/30 transition-all cursor-default group">
              <Calendar className="text-neon-orange mb-6 group-hover:scale-110 transition-transform" size={40} />
              <p className="text-4xl font-bold mb-1 leading-none">Active</p>
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold mt-2">H1 2026 Season</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Detailed - New Section */}
      <section className="py-32 border-b border-white/5 bg-[#090D12]">
         <div className="grid-layout">
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter mb-20 text-center">Core Marketing Pillars</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
               {[
                 { title: "Psychological Targeting", desc: "Understanding the 'Why' behind the buy to craft resonance." },
                 { title: "Technical Scalability", desc: "Pixel integration, CAPI, and backend performance tracking." },
                 { title: "Creative Velocity", desc: "High-volume asset testing to find the winning ad hooks." },
                 { title: "Funnel Engineering", desc: "Optimizing the entire journey from awareness to referral." }
               ].map((pillar, i) => (
                 <div key={i} className="p-12 border border-white/5 bg-white/[0.02] rounded-lg">
                    <p className="text-neon-orange font-bold font-display text-2xl mb-6">0{i+1}</p>
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{pillar.title}</h3>
                    <p className="text-text-gray font-light text-sm leading-relaxed">{pillar.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Experience Timeline (Expanded) */}
      <section className="py-32 border-b border-white/5">
        <div className="grid-layout">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter leading-tight md:leading-none">Professional <br className="hidden sm:block" /> Journey</h2>
             <p className="text-text-gray max-w-xs text-sm font-light uppercase tracking-widest">A chronological view of my growth in the digital marketplace.</p>
          </div>
          <div className="max-w-5xl mx-auto">
            {[
              { year: "2021 - 2022", title: "Social Media Strategist", company: "Local Agency Group", desc: "Pioneered organic growth systems for 20+ local business accounts. Developed initial expertise in community engagement and content feedback loops." },
              { year: "2022 - 2023", title: "Senior Meta Ads Manager", company: "Direct Response Firm", desc: "Managed $100k+ in quarterly ad spend safely. Specialized in high-ticket lead generation and attribution modeling for B2B clients." },
              { year: "2023 - Present", title: "Independent Growth Consultant", company: "RAJIB Digital", desc: "Providing high-end performance marketing for 7-figure e-commerce brands. Focused on end-to-end ROAS optimization and creative strategy." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-12 p-12 border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors group relative"
              >
                <div className="absolute top-0 right-0 w-1 h-0 group-hover:h-full bg-neon-orange transition-all duration-500" />
                <span className="text-neon-orange font-bold font-display text-2xl w-48 shrink-0">{item.year}</span>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold uppercase tracking-tight">{item.title}</h3>
                    <span className="text-white/40 font-bold uppercase tracking-[4px] text-[10px] mt-2 md:mt-0">{item.company}</span>
                  </div>
                  <p className="text-text-gray font-light max-w-2xl text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical proficiency - New Section */}
      <section className="py-32 border-b border-white/5 bg-[#0B0F14]">
         <div className="grid-layout">
            <div className="grid lg:grid-cols-3 gap-20">
               <div className="lg:col-span-1">
                  <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter mb-8 leading-tight md:leading-none">Technical <br className="hidden sm:block" /> Proficiency</h2>
                  <p className="text-text-gray font-light text-lg">My capability extends beyond marketing buttons into the actual plumbing of modern ad tech.</p>
               </div>
               <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-neon-orange font-bold uppercase tracking-widest text-xs mb-8 pb-4 border-b border-white/10">Ad Platforms</h4>
                    <ul className="space-y-6">
                      {["Meta Ads Manager", "Instagram Business", "TikTok Ads", "Google Search Ads"].map(s => (
                        <li key={s} className="flex items-center justify-between group">
                          <span className="text-xl font-bold text-white/80 group-hover:text-white transition-colors uppercase tracking-tight">{s}</span>
                          <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Expert</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-neon-orange font-bold uppercase tracking-widest text-xs mb-8 pb-4 border-b border-white/10">Analysis & Creative</h4>
                    <ul className="space-y-6">
                      {["Google Analytics 4", "Conversion API", "Canva Pro", "CapCut / Video Edit"].map(s => (
                        <li key={s} className="flex items-center justify-between group">
                          <span className="text-xl font-bold text-white/80 group-hover:text-white transition-colors uppercase tracking-tight">{s}</span>
                          <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Master</span>
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Tools Section (Marquee Style - New Feature) */}
      <section className="py-24 border-b border-white/5 overflow-hidden">
        <div className="grid-layout mb-12">
           <p className="text-[10px] uppercase font-bold tracking-[4px] text-white/20 text-center">Industry Standard Toolkit</p>
        </div>
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
           {[...Array(2)].map((_, j) => (
             <div key={j} className="flex gap-24 items-center shrink-0 py-8">
                {["METAManager", "ANALYTICS", "CANVA", "NOTION", "SLACK", "TRELLO", "PIXEL", "KLAVIYO"].map((tool) => (
                  <span key={tool} className="text-6xl font-bold font-display opacity-10 uppercase tracking-tighter hover:opacity-100 hover:text-neon-orange transition-all cursor-default">
                    {tool}
                  </span>
                ))}
             </div>
           ))}
        </div>
      </section>

      {/* Final Call */}
      <section className="py-24 text-center">
        <div className="grid-layout">
          <h2 className="text-4xl font-bold uppercase tracking-tighter mb-8">Ready to work with Rajib?</h2>
          <Link to="/contact" className="px-12 py-6 btn-primary rounded-sm uppercase tracking-[3px] text-xs font-bold inline-block">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
