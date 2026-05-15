import { motion, useScroll, useTransform } from "motion/react";
import { Share2, TrendingUp, Palette, Target, BarChart3, Users, Zap, Layers, ArrowUpRight, Search, Activity, Cpu, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Week 1', value: 1200 },
  { name: 'Week 2', value: 1900 },
  { name: 'Week 3', value: 3200 },
  { name: 'Week 4', value: 4800 },
  { name: 'Week 5', value: 6400 },
  { name: 'Week 6', value: 8900 },
];

const serviceDetails = [
  {
    icon: <Share2 size={48} />,
    id: "smm",
    title: "Social Media Management",
    desc: "A full-scale brand growth system designed to build authority and community engagement organically.",
    points: [
      { title: "Strategy Development", desc: "Defining your brand voice, target audience, and content pillars for long-term growth and resonance." },
      { title: "Content Planning & Production", desc: "A 30-day granular calendar focus on viral potential, audience retention, and trend integration." },
      { title: "Active Community Management", desc: "Proactive management of comments, DMs, and mentions to turn followers into loyal fans." },
      { title: "Growth Benchmarking", desc: "Detailed monthly insights into engagement rates, reach efficacy, and competitor analysis." }
    ],
    deliverables: ["Organic Growth Strategy", "30 Reels/Posts Monthly", "Custom Engagement Plan", "Monthly Performance Audit"]
  },
  {
    icon: <TrendingUp size={48} />,
    id: "ads",
    title: "Meta Ads Management",
    desc: "Performance-powered advertising system focused on lead generation and direct sales with scalable results.",
    points: [
      { title: "Scaleable Account Architecture", desc: "Precision setup designed for the Meta algorithm to find your winning buyers profitably." },
      { title: "Interest & LAL Research", desc: "Leveraging hidden interests and high-value lookalike audiences for surgical targeting." },
      { title: "Technical Tracking (CAPI)", desc: "Full setup of Conversion API and Pixel to ensure data integrity in the post-iOS14 era." },
      { title: "Creative Fatigue Management", desc: "Continuous testing of ad creatives to prevent stagnation and maintain healthy ROAS." }
    ],
    deliverables: ["Full Meta Ads Manager Setup", "Weekly A/B Creative Testing", "Conversion API Integration", "Daily Budget Optimization"]
  },
  {
    icon: <Palette size={48} />,
    id: "branding",
    title: "Content & Branding",
    desc: "Visual growth system focused on producing scroll-stopping assets that drive measurable conversion.",
    points: [
      { title: "Visual Branding Systems", desc: "Cohesive visual languages that make your brand recognizable at first glance in any feed." },
      { title: "Conversion-Focused Creative", desc: "Static and video ads designed specifically to lower CPC and increase Click-Through Rates." },
      { title: "Short-Form Video Mastery", desc: "End-to-end Reels and TikTok production focusing on the first 3-second 'Hook'." },
      { title: "Landing Page Visuals", desc: "Optimizing the visual flow of your conversion pages to reduce bounce rates." }
    ],
    deliverables: ["Brand Style Guidelines", "8 Custom High-Performace Ad Videos", "Statics Ad Set (15+ Assets)", "Landing Page UI Audit"]
  }
];

export default function Services() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="page-fade-in pt-32 overflow-hidden bg-bg-dark text-white">
      {/* Abstract Background Particles */}
      <div className="fixed inset-0 pointer-events-none -z-50">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-orange/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <section className="py-24 border-b border-white/5 relative">
        <div className="grid-layout relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-2 h-2 bg-neon-orange rounded-full shadow-[0_0_10px_rgba(255,106,0,1)]" />
              <span className="tag">Strategic Solutions</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-12 leading-[1.1] md:leading-[0.85]"
            >
              World-Class <br /> <span className="text-neon-orange italic font-display">Performance.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl text-text-gray font-light leading-snug max-w-2xl italic opacity-80"
            >
              We don't just "manage" accounts. We engineer scalable growth systems that dominate competitive landscapes.
            </motion.p>
          </div>
        </div>

        {/* Floating background text */}
        <div className="absolute -bottom-10 right-0 text-[20vw] font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap hidden lg:block uppercase tracking-tighter italic">
          High Performance
        </div>
      </section>

      {/* Main Services Detail */}
      {serviceDetails.map((service, i) => (
        <section key={service.id} id={service.id} className={`py-40 border-b border-white/5 relative overflow-hidden ${i % 2 !== 0 ? 'bg-white/[0.02]' : ''}`}>
          <div className={`absolute top-0 ${i % 2 === 0 ? 'right-0' : 'left-0'} w-1/3 h-full bg-neon-orange/[0.02] -z-10`} />
          
          <div className="grid-layout">
            <div className={`grid lg:grid-cols-2 gap-24 items-start mb-20`}>
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={i % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="text-neon-orange mb-10 flex items-center gap-6">
                   <motion.div 
                     whileHover={{ scale: 1.1, rotate: 5 }}
                     className="p-6 bg-neon-orange/10 rounded-2xl border border-neon-orange/20 shadow-2xl shadow-neon-orange/5"
                   >
                     {service.icon}
                   </motion.div>
                   <div>
                     <span className="text-[10px] uppercase font-bold tracking-[8px] text-white/20 block mb-1">Methodology</span>
                     <span className="text-xl font-bold font-display text-neon-orange">Module 0{i+1}</span>
                   </div>
                </div>
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tighter mb-10 leading-[1] md:leading-[0.9]">{service.title}</h2>
                <p className="text-2xl text-text-gray font-light mb-16 leading-relaxed max-w-xl opacity-80">{service.desc}</p>
                
                <div className="space-y-10">
                  {service.points.map((point, idx) => (
                    <motion.div 
                      key={point.title} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group border-l-2 border-white/5 pl-10 py-2 hover:border-neon-orange transition-all duration-500"
                    >
                      <h4 className="text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-neon-orange transition-colors flex items-center gap-3">
                        <span className="text-neon-orange font-display">/</span> {point.title}
                      </h4>
                      <p className="text-lg text-text-gray font-light leading-relaxed max-w-md">{point.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative ${i % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <div className="aspect-[4/5] bg-white/[0.01] rounded-[40px] border border-white/10 flex flex-col p-12 md:p-16 overflow-hidden group backdrop-blur-sm shadow-2xl">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-neon-orange/10 rounded-full blur-3xl -z-10 group-hover:bg-neon-orange/20 transition-all duration-700" />
                   
                   <div className="mb-auto">
                      <div className="flex items-center gap-4 mb-12">
                         <div className="w-2 h-2 rounded-full bg-neon-orange animate-pulse" />
                         <h4 className="text-[10px] uppercase font-bold tracking-[6px] text-white/40">Core Deliverables</h4>
                      </div>
                      
                      <div className="space-y-8">
                        {service.deliverables.map((d, dIdx) => (
                          <motion.div 
                            key={d} 
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-5 group/item cursor-default"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-neon-orange transition-colors shadow-[0_0_8px_rgba(255,106,0,0)] group-hover/item:shadow-[0_0_8px_rgba(255,106,0,0.8)]" />
                            <span className="text-xl font-bold text-white/40 group-hover/item:text-white transition-colors uppercase tracking-tight">/ {d}</span>
                          </motion.div>
                        ))}
                      </div>
                   </div>

                   <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-end">
                      <div>
                        <p className="text-[10px] uppercase tracking-[4px] font-bold text-white/10 mb-2">Service ID</p>
                        <p className="text-8xl font-bold font-display opacity-10 leading-none">{service.id?.toUpperCase()}</p>
                      </div>
                      <div className="flex gap-1 mb-2">
                        {[1, 2, 3].map(dot => (
                          <div key={dot} className="w-1 h-1 rounded-full bg-neon-orange" />
                        ))}
                      </div>
                   </div>
                </div>
              </motion.div>
            </div>
            
            <div className="flex justify-end pt-12 border-t border-white/5">
               <motion.div whileHover={{ x: 5 }}>
                 <Link to="/contact" className="inline-flex items-center gap-6 text-[10px] font-bold uppercase tracking-[6px] text-white/40 hover:text-neon-orange transition-all group">
                    Inquire about {service.title} <Zap size={16} className="group-hover:scale-125 group-hover:rotate-12 transition-transform text-neon-orange" />
                 </Link>
               </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Data Scaling Showcase */}
      <section className="py-40 border-b border-white/5 relative overflow-hidden bg-white/[0.01]">
         <div className="grid-layout">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                  <div className="flex items-center gap-3 mb-8">
                    <Activity className="text-neon-orange" size={20} />
                    <span className="text-[10px] font-bold uppercase tracking-[8px] text-white/40">Performance Tracking</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-10 leading-[0.9]">
                    Deep Data <br /> <span className="text-neon-orange">Standard</span> Analysis
                  </h2>
                  <p className="text-2xl text-text-gray font-light mb-12 leading-relaxed italic opacity-70">
                    "Scaling is easy when your creative testing is scientific. We track every micro-interaction to ensure zero ad spend is wasted."
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8">
                     <div>
                        <p className="text-4xl font-bold text-white mb-2">18.4%</p>
                        <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Avg. Conversion Lift</p>
                     </div>
                     <div>
                        <p className="text-4xl font-bold text-white mb-2">4.2x</p>
                        <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Scaling Velocity</p>
                     </div>
                  </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="p-10 border border-white/10 bg-bg-dark/50 rounded-[40px] shadow-2xl relative group"
               >
                  <div className="absolute inset-0 bg-neon-orange/5 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="h-[300px] w-full relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FF6A00" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#FF6A01" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff0a" vertical={false} />
                        <XAxis dataKey="name" stroke="#ffffff20" fontSize={10} tickLine={false} axisLine={false} />
                        <YAxis hide />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0A0A0B', border: '1px solid #ffffff10', borderRadius: '12px' }}
                          itemStyle={{ color: '#FF6A00', fontWeight: 'bold' }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#FF6A00" 
                          strokeWidth={3}
                          fillOpacity={1} 
                          fill="url(#colorValue)" 
                          animationDuration={2000}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="mt-8 flex justify-between items-center relative z-10">
                     <span className="text-[10px] uppercase font-bold tracking-[4px] text-white/20">Monthly ROAS Scale Factor</span>
                     <div className="py-2 px-4 bg-neon-orange/10 border border-neon-orange/20 rounded-full text-neon-orange text-[10px] font-bold animate-pulse">
                        LIVE PERFORMANCE
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Operational Excellence System */}
      <section className="py-40 border-b border-white/5 bg-[#080b10] relative overflow-hidden group/section">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
        
        <div className="grid-layout">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
              <div className="max-w-2xl">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="w-12 h-[1px] bg-neon-orange shadow-[0_0_8px_rgba(255,106,0,0.8)]" />
                  <span className="text-[10px] uppercase font-bold tracking-[6px] text-neon-orange">Standard Performance Lab</span>
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[1] md:leading-[0.85]"
                >
                  Standard <br /> <span className="text-neon-orange italic font-display">Deep Recharge</span> System
                </motion.h2>
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-text-gray max-w-sm text-xl font-light leading-relaxed border-l border-white/10 pl-10 group-hover/section:border-neon-orange transition-colors duration-700"
              >
                Our proprietary framework for turning stagnating ad accounts into high-velocity revenue engines.
              </motion.p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Audit", subtitle: "Deep Research", desc: "Surgical analysis of your historical data and existing conversion blockers.", icon: <Search size={32} /> },
                { step: "02", title: "Architecture", subtitle: "System Design", desc: "Designing a robust funnel structure that Meta's AI can actually optimize.", icon: <Cpu size={32} /> },
                { step: "03", title: "Blastoff", subtitle: "Execution Layer", desc: "Technical launch with synchronized assets and tracking calibration.", icon: <Rocket size={32} /> },
                { step: "04", title: "Iterate", subtitle: "Aggressive Scale", desc: "Relentless A/B testing of hooks, angles, and audience segments.", icon: <TrendingUp size={32} /> },
                { step: "05", title: "Expansion", subtitle: "Market Dominance", desc: "Scaling winners to the moon while maintaining target efficiency metrics.", icon: <ArrowUpRight size={32} /> }
              ].map((process, i) => (
                <motion.div 
                  key={process.step}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -20, scale: 1.02 }}
                  className="relative p-10 border border-white/5 bg-white/[0.01] transition-all duration-700 group rounded-[40px] overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute top-10 left-10 w-1 h-1 bg-neon-orange/20 rounded-full animate-ping" />
                    <div className="absolute bottom-20 right-10 w-2 h-2 bg-neon-orange/10 rounded-full animate-pulse" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute -top-6 -right-4 text-9xl font-display font-bold text-white/[0.01] group-hover:text-neon-orange/[0.03] transition-colors duration-1000 italic rotate-6">
                    {process.step}
                  </div>
                  <div className="relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="text-neon-orange mb-12 p-5 w-fit bg-neon-orange/5 rounded-[24px] group-hover:bg-neon-orange group-hover:text-white transition-all duration-700 shadow-2xl shadow-neon-orange/0 group-hover:shadow-neon-orange/30 group-hover:border-white/20 border border-transparent"
                    >
                      {process.icon}
                    </motion.div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] font-bold text-white/10 uppercase tracking-[6px] group-hover:text-neon-orange/60 transition-colors">{process.subtitle}</span>
                    </div>
                    <h3 className="text-3xl font-bold uppercase tracking-tighter mb-6 group-hover:text-neon-orange transition-colors duration-500">
                      {process.title}
                    </h3>
                    <p className="text-text-gray font-light text-base leading-relaxed opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                      {process.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-neon-orange w-0 group-hover:w-full transition-all duration-1000 shadow-[0_0_20px_rgba(255,106,0,1)]" />
                  <div className="absolute right-0 top-0 w-[1px] bg-neon-orange/10 h-full group-hover:bg-neon-orange transition-colors duration-1000" />
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 bg-bg-dark relative overflow-hidden">
        <div className="grid-layout grid lg:grid-cols-2 gap-32">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-orange" />
                <span className="text-[10px] font-bold uppercase tracking-[8px] text-white/40">Clarifications</span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tighter mb-10 italic leading-none group">
                Common <br /> <span className="text-neon-orange group-hover:line-through decoration-white/20">Inquiries</span>
              </h2>
              <p className="text-text-gray text-2xl font-light leading-relaxed max-w-sm mb-12">Frequently asked questions about my management style and expectations.</p>
              
              <div className="p-10 border border-white/5 rounded-3xl bg-white/[0.01]">
                 <p className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2 italic">Still have questions?</p>
                 <Link to="/contact" className="text-neon-orange font-bold text-lg hover:underline underline-offset-8">Schedule a 15-min discovery call →</Link>
              </div>
           </motion.div>

           <div className="space-y-6">
             {[
               { q: "What is your typical monthly ad spend requirement?", a: "I usually work with clients spending at least $1,000/month to ensure we have enough data to optimize efficiently, though I specialize in scaling accounts to $10k+ levels." },
               { q: "How quickly will we see results from Meta Ads?", a: "Initial data gathering takes 7-14 days. We typically see a positive trend in ROAS within the first 30 days as we identify winning creative hooks." },
               { q: "Do you handle the actual content creation?", a: "Yes, for full-service SMM and Ads clients, I provide ad creatives and video editing based on the strategy we define together." },
               { q: "What communication tools do you use?", a: "I primary use Slack for daily comms, WhatsApp for urgent updates, and Trello or Notion for project management tracking." }
             ].map((faq, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="group p-8 border border-white/5 bg-white/[0.01] rounded-2xl hover:bg-white/[0.03] transition-all"
               >
                 <h4 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-neon-orange transition-colors flex items-start gap-4">
                   <span className="text-neon-orange font-display mt-1">/</span> {faq.q}
                 </h4>
                 <p className="text-text-gray font-light leading-relaxed text-lg pl-8 border-l border-white/5 group-hover:border-neon-orange/20 transition-colors uppercase italic text-sm">{faq.a}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      <section className="py-40 text-center relative overflow-hidden">
         <div className="grid-layout relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-10 max-w-4xl mx-auto leading-tight md:leading-[0.9]">
              Scale Your Brand <br className="hidden sm:block" /> Beyond the <span className="text-neon-orange italic">Plateau.</span>
            </h2>
            <Link to="/contact" className="px-16 py-8 btn-primary rounded-sm uppercase tracking-[4px] text-sm font-bold inline-block">
               Configure My Growth System
            </Link>
         </div>
         <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neon-orange/10 to-transparent -z-10" />
      </section>
    </div>
  );
}
