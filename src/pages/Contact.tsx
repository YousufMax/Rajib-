import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Mail, Phone, ExternalLink, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <div className="page-fade-in pt-32">
      <section className="py-24 border-b border-white/5">
        <div className="grid-layout">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="w-2 h-2 bg-neon-orange rounded-full shadow-[0_0_8px_rgba(255,106,0,0.8)]" />
              <span className="tag">Strategic Partnership</span>
            </motion.div>
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold uppercase tracking-tighter mb-12 leading-[0.85] break-words">
              Let's Scale <br /> 
              <span className="text-neon-orange italic font-display inline-block hover:scale-105 transition-transform cursor-default">Together.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-12 items-start">
               <p className="text-xl md:text-3xl text-text-gray font-light max-w-2xl italic opacity-80 leading-snug">
                 Every major growth story starts with a simple conversation. I am currently accepting strategic partnerships for Q3-Q4 2026.
               </p>
               <div className="shrink-0 flex items-center gap-4 p-4 border border-white/5 rounded-2xl bg-white/[0.02]">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-bg-dark overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="Client" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white">Join 120+ Businesses</p>
                    <div className="flex gap-1 text-neon-orange mt-1">
                      {[...Array(5)].map((_, i) => <CheckCircle key={i} size={10} fill="currentColor" />)}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Workflow - Enhanced */}
      <section className="py-32 border-b border-white/5 bg-[#080b10] relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-neon-orange/5 rounded-full blur-[120px] -z-10" />
         <div className="grid-layout">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
               <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-3 bg-neon-orange" />
                    <span className="text-[10px] font-bold uppercase tracking-[4px] text-white/40">Our Blueprint</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">The Roadmap <br /> <span className="text-neon-orange">To Success</span></h2>
               </div>
               <p className="text-text-gray max-w-sm text-sm font-light uppercase tracking-widest leading-loose border-l border-white/10 pl-8">A high-performance framework designed to ensure absolute alignment before we scale your ads.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
               {[
                 { step: "01", title: "Inquiry & Audit", desc: "Data extraction and gap analysis. I perform a deep-dive audit of your current conversion funnels and ad account structure." },
                 { step: "02", title: "Growth Strategy", desc: "A precision roadmap call. We define target CPA/ROAS, content strategy, and your unique competitive advantage." },
                 { step: "03", title: "Dynamic Launch", desc: "Implementation and optimization. Your custom growth system goes live, followed by daily scaling and monitoring." }
               ].map((item, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-12 border border-white/5 bg-white/[0.01] rounded-3xl relative group hover:bg-white/[0.03] transition-all"
                 >
                    <div className="absolute top-8 right-12 text-6xl font-display font-bold text-white/[0.03] italic group-hover:text-neon-orange/[0.05] transition-colors">{item.step}</div>
                    <div className="w-12 h-1 bg-white/5 mb-10 group-hover:bg-neon-orange transition-colors duration-500" />
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 flex items-center gap-3">
                      <span className="text-neon-orange font-display">/</span> {item.title}
                    </h3>
                    <p className="text-text-gray font-light text-lg leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-24 border-b border-white/5 relative">
        <div className="grid-layout grid lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Direct Connection</h2>
              <p className="text-text-gray font-light">Choose your preferred method of communication.</p>
            </div>
            
            <div className="space-y-8">
               <motion.div whileHover={{ x: 10 }} className="flex gap-8 group cursor-pointer">
                  <div className="w-20 h-20 bg-bg-gray/30 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-neon-orange/40 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.1)] transition-all duration-500">
                    <Mail size={28} className="text-neon-orange" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[10px] uppercase font-bold tracking-[4px] text-white/20 mb-2">Priority Inbox</p>
                    <a href="mailto:afifislamrajib1122@gmail.com" className="text-xl md:text-2xl font-bold hover:text-neon-orange transition-colors break-all">
                      afifislamrajib1122@gmail.com
                    </a>
                  </div>
               </motion.div>

               <motion.div whileHover={{ x: 10 }} className="flex gap-8 group cursor-pointer">
                  <div className="w-20 h-20 bg-bg-gray/30 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-neon-orange/40 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.1)] transition-all duration-500">
                    <Phone size={28} className="text-neon-orange" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[10px] uppercase font-bold tracking-[4px] text-white/20 mb-2">Voice / Direct</p>
                    <a href="tel:01581385557" className="text-xl md:text-2xl font-bold hover:text-neon-orange transition-colors">
                      +880 1581-385557
                    </a>
                  </div>
               </motion.div>

               <motion.div whileHover={{ x: 10 }} className="flex gap-8 group cursor-pointer">
                  <div className="w-20 h-20 bg-bg-gray/30 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-neon-orange/40 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.1)] transition-all duration-500">
                    <MessageSquare size={28} className="text-neon-orange" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[10px] uppercase font-bold tracking-[4px] text-white/20 mb-2">Instant Response</p>
                    <a href="https://wa.me/8801581385557" target="_blank" rel="noreferrer" className="text-xl md:text-2xl font-bold hover:text-neon-orange transition-colors flex items-center gap-2">
                       WhatsApp Message <ExternalLink size={18} />
                    </a>
                  </div>
               </motion.div>
            </div>

            {/* Availability Indicator */}
            <div className="p-10 border border-white/5 rounded-3xl bg-white/[0.02] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl" />
               <p className="text-[10px] uppercase tracking-[4px] font-bold text-white/20 mb-6">Real-time Availability</p>
               <div className="flex items-center gap-4 mb-6">
                 <div className="relative">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute inset-0 opacity-40" />
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10" />
                 </div>
                 <p className="text-lg font-bold uppercase tracking-widest text-white">Currently Open for Audit</p>
               </div>
               <p className="text-sm text-white/40 leading-relaxed max-w-sm">I typically respond to inquiries within 12-24 business hours. Strategy calls are scheduled via Zoom or Google Meet.</p>
            </div>
          </div>

          {/* Contact Form - Refined */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-white/[0.01] p-10 md:p-20 rounded-[40px] relative backdrop-blur-sm shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <div className="w-24 h-24 bg-neon-orange/10 border border-neon-orange/20 rounded-full flex items-center justify-center text-neon-orange mb-10 shadow-[0_0_30px_rgba(255,106,0,0.1)]">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-4xl font-bold mb-6 uppercase tracking-tight text-white">Inquiry Received</h3>
                  <p className="text-xl text-text-gray font-light max-w-sm leading-relaxed">Thank you for your interest. Rajib will complete your preliminary audit and contact you shortly.</p>
                  <button 
                    onClick={() => setFormState("idle")}
                    className="mt-16 py-4 px-10 border border-neon-orange text-neon-orange text-[10px] font-bold uppercase tracking-[5px] hover:bg-neon-orange hover:text-white transition-all rounded-full"
                  >
                    Send another query
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-12"
                >
                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase font-bold tracking-[4px] text-white/30 ml-1 group-focus-within:text-neon-orange transition-colors">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-transparent border-b border-white/10 px-0 py-6 focus:outline-none focus:border-neon-orange transition-all text-2xl font-light placeholder:text-white/5"
                      placeholder="e.g. Michael Jordan"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase font-bold tracking-[4px] text-white/30 ml-1 group-focus-within:text-neon-orange transition-colors">Business Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-transparent border-b border-white/10 px-0 py-6 focus:outline-none focus:border-neon-orange transition-all text-2xl font-light placeholder:text-white/5"
                      placeholder="e.g. CEO@corporation.com"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase font-bold tracking-[4px] text-white/30 ml-1 group-focus-within:text-neon-orange transition-colors">Monthly Ad Spend</label>
                    <select className="w-full bg-transparent border-b border-white/10 px-0 py-6 focus:outline-none focus:border-neon-orange transition-all text-2xl font-light appearance-none [&>option]:bg-bg-dark flex items-center cursor-pointer">
                      <option value="">Choose Range</option>
                      <option value="1k-3k">$1,000 - $3,000</option>
                      <option value="3k-10k">$3,000 - $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase font-bold tracking-[4px] text-white/30 ml-1 group-focus-within:text-neon-orange transition-colors">Your Objectives</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-white/10 px-0 py-6 focus:outline-none focus:border-neon-orange transition-all text-2xl font-light resize-none placeholder:text-white/5"
                      placeholder="Briefly describe your goals..."
                    ></textarea>
                  </div>
                  <div className="pt-10">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={formState === "sending"}
                      className="relative w-full py-10 bg-neon-orange text-white rounded-2xl uppercase text-[13px] tracking-[6px] disabled:opacity-50 font-bold overflow-hidden shadow-2xl shadow-neon-orange/40 group overflow-hidden"
                    >
                      {/* Animated gradient background overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer transition-transform duration-1000" />
                      
                      <div className="relative flex items-center justify-center gap-4">
                        {formState === "sending" ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Initiating Audit...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles size={18} className="text-white/80 group-hover:rotate-12 transition-transform" />
                            <span>Request Strategic Audit</span>
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                          </>
                        )}
                      </div>
                    </motion.button>
                    <p className="text-[10px] text-center text-white/20 uppercase tracking-widest mt-6">Secure Cloud Connection • No Credit Card Required</p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
            
            {/* Design accents */}
            <div className="absolute top-10 right-10 flex gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-neon-orange animate-pulse" />
               <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - New */}
      <section className="py-32 bg-[#06080c]">
         <div className="grid-layout">
            <div className="max-w-3xl mx-auto">
               <div className="text-center mb-24">
                  <span className="text-[10px] font-bold uppercase tracking-[6px] text-neon-orange block mb-6">Clarifications</span>
                  <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Common Inquiries</h2>
               </div>

               <div className="space-y-4">
                  {[
                    { q: "What is your typical ROAS for Meta Ads?", a: "While ROAS varies by industry, our average client sees a 3.5x to 6.2x return on ad spend within the first 90 days." },
                    { q: "Do you handle creative production?", a: "Yes. We manage static graphics, video editing for Reels/TikTok, and conversion-focused copywriting as part of our full-service management." },
                    { q: "Is there a minimum monthly ad spend?", a: "To ensure statistical significance and proper algorithm learning, I typically recommend a minimum starting spend of $1,500/month." },
                    { q: "How do you track attribution accurately?", a: "We implement server-side tracking via Meta Conversions API and use third-party analytics tools to ensure data integrity despite iOS tracking limitations." }
                  ].map((faq, i) => (
                    <div key={i} className="p-8 border border-white/5 bg-white/[0.01] rounded-2xl">
                       <h4 className="text-lg font-bold uppercase tracking-tight text-white mb-4 flex items-center gap-4">
                          <span className="text-neon-orange">Q.</span> {faq.q}
                       </h4>
                       <p className="text-text-gray font-light leading-relaxed pl-8 border-l border-neon-orange/20">{faq.a}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
