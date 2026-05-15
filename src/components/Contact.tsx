import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Mail, Phone, MapPin, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-orange/5 rounded-full blur-[100px] -z-10" />
      
      <div className="grid-layout grid lg:grid-cols-2 gap-20 xl:gap-32">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 bg-neon-orange rounded-full shadow-[0_0_8px_rgba(255,106,0,0.8)]" />
            <span className="tag">Growth Audit</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
            Let's Scale Your <br />
            <span className="text-neon-orange italic font-display">Revenue</span>
          </h2>
          <p className="text-xl text-text-gray font-light max-w-lg mb-16 leading-relaxed">
            Ready to dominate your niche? Request a free ad account audit and strategy session to identify your untapped growth opportunities.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mt-auto">
             <div className="p-6 border border-white/5 bg-white/[0.02] rounded-2xl">
                <p className="text-[10px] uppercase tracking-[3px] font-bold text-white/20 mb-4">Direct Channel</p>
                <a href="mailto:afifislamrajib1122@gmail.com" className="text-lg font-bold hover:text-neon-orange transition-colors break-all">
                  afifislamrajib1122@gmail.com
                </a>
             </div>
             <div className="p-6 border border-white/5 bg-white/[0.02] rounded-2xl">
                <p className="text-[10px] uppercase tracking-[3px] font-bold text-white/20 mb-4">Urgent Inquiries</p>
                <a href="tel:01581385557" className="text-lg font-bold hover:text-neon-orange transition-colors">
                  +880 1581-385557
                </a>
             </div>
          </div>

          <div className="mt-12 flex items-center gap-4">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border border-bg-dark overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="User" />
                  </div>
                ))}
             </div>
             <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Verified Industry Expert</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
             </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:p-12 md:p-16 p-8 border border-white/10 bg-white/[0.02] rounded-[32px] relative backdrop-blur-md shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {formState === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 bg-neon-orange/10 border border-neon-orange/20 rounded-full flex items-center justify-center text-neon-orange mb-8">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">Audit Requested</h3>
                <p className="text-text-gray font-light">I'll review your details and reach out within 24 hours.</p>
                <button 
                  onClick={() => setFormState("idle")}
                  className="mt-8 py-3 px-8 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white hover:text-bg-dark transition-all"
                >
                  New Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold tracking-[2px] text-white/30 ml-1">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-neon-orange transition-all text-xl font-light placeholder:text-white/5"
                    placeholder="e.g. Elon Musk"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold tracking-[2px] text-white/30 ml-1">Business Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-neon-orange transition-all text-xl font-light placeholder:text-white/5"
                    placeholder="e.g. name@company.com"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold tracking-[2px] text-white/30 ml-1">Your Objective</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 px-0 py-4 focus:outline-none focus:border-neon-orange transition-all text-xl font-light resize-none placeholder:text-white/5"
                    placeholder="Tell me what you're looking to scale..."
                  ></textarea>
                </div>
                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={formState === "sending"}
                    className="relative w-full py-7 bg-neon-orange text-white rounded-2xl uppercase text-[11px] tracking-[4px] disabled:opacity-50 font-bold overflow-hidden shadow-xl shadow-neon-orange/30 group"
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer transition-transform duration-1000" />
                    
                    <div className="relative flex items-center justify-center gap-3">
                      {formState === "sending" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                          <span>Get Free Audit</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
          
          <div className="absolute top-6 right-8 flex gap-1">
             <div className="w-1 h-1 rounded-full bg-neon-orange" />
             <div className="w-1 h-1 rounded-full bg-neon-orange/30" />
             <div className="w-1 h-1 rounded-full bg-neon-orange/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
