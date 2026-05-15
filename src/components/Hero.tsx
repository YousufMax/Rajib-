import { motion } from "motion/react";
import { ArrowRight, Play, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden border-b border-white/5">
      <div className="grid-layout grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 bg-neon-orange rounded-full shadow-[0_0_8px_rgba(255,106,0,0.8)]" />
            <span className="tag !text-white/60">Creative & Data-Driven</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-[1] sm:leading-[0.95] mb-8 tracking-tighter uppercase">
            Creative Social Media <br />
            <span className="text-neon-orange">& Meta Ads Expert</span>
          </h1>
          <p className="text-xs font-bold tracking-[8px] uppercase text-white/40 mb-12">Afif Islam Rajib</p>
          
          <p className="text-xl text-text-gray mb-12 max-w-[600px] leading-relaxed font-light">
            Helping businesses grow with strategic social media management, high-performance Meta Ads campaigns, and conversion-focused digital marketing solutions. I combine creative content with data analysis to deliver measurable ROI.
          </p>

          <div className="flex flex-wrap gap-5 mb-16">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              className="px-10 py-5 btn-primary rounded-sm uppercase text-[11px] tracking-widest"
            >
              Let's Work Together
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ borderColor: "rgba(255,106,0,0.5)" }}
              className="px-10 py-5 btn-outline rounded-sm uppercase text-[11px] tracking-widest"
            >
              View Portfolio
            </motion.a>
            <motion.a
              href="#contact"
              className="px-10 py-5 btn-ghost rounded-sm uppercase text-[11px] tracking-widest"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Meta Ads", "Branding", "Lead Generation", "Social Media", "Content Strategy"].map((tag) => (
              <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-4 py-2 border border-white/5 rounded-full text-white/40">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative order-1 md:order-2 mb-12 md:mb-0"
        >
          <div className="relative aspect-[4/5] max-w-[450px] mx-auto md:ml-auto overflow-hidden rounded-2xl border border-white/10 group shadow-2xl shadow-neon-orange/5">
            <img 
              src="https://res.cloudinary.com/dc2m2bgok/image/upload/v1778841356/rajib_picture_sycjey.png" 
              alt="AFIF ISLAM RAJIB - Digital Marketing Expert" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass p-5 rounded-2xl border border-white/10 backdrop-blur-md"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full border border-bg-dark overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/60">Trusted by 50+ Clients</span>
                </div>
                <p className="text-xs uppercase tracking-widest font-bold text-neon-orange mb-1">Based in Bangladesh</p>
                <p className="text-lg font-bold font-display uppercase tracking-tight leading-none">Available for Global Projects</p>
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-6 right-6 bg-neon-orange text-white px-3 py-3 rounded-full flex flex-col items-center justify-center border-4 border-bg-dark shadow-xl"
            >
              <span className="text-[8px] font-bold uppercase leading-none">ROI</span>
              <span className="text-sm font-bold leading-none tracking-tighter">4.5x</span>
            </motion.div>
          </div>
          
          {/* Decorative accents */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-neon-orange/10 rounded-full blur-[100px] -z-10" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-[60px] -z-10" />
          
          {/* Glass floating card (Data visual) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block glass p-4 rounded-xl border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500">
                <TrendingUp size={16} />
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-widest font-bold text-white/40">Ads Growth</p>
                <p className="text-xs font-bold text-white">+124% Monthly</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
