import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Marketing Director",
    company: "EcoStyle Collective",
    content: "Working with Rajib was a game-changer for our Q4 campaigns. We saw a 150% increase in conversion rates within just three weeks of implementing his funnel strategy. His attention to detail and data-driven approach is unmatched.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Founder & CEO",
    company: "Nexus Tech Solutions",
    content: "I've worked with many digital marketers, but nobody understands the Meta algorithm like Rajib does. He doesn't just run ads; he builds systems that scale. Our CAC dropped by 40% while we doubled our monthly revenue.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Head of Growth",
    company: "Aura Skincare",
    content: "The level of professionalism and technical expertise Rajib brings to the table is incredible. He completely overhauled our tracking and attribution, giving us the clarity we needed to finally scale past our plateaus.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Reviews() {
  return (
    <section className="py-32 border-b border-white/5 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Decorative element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-orange/5 to-transparent pointer-events-none" />
      
      <div className="grid-layout relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-neon-orange rounded-full" />
              <span className="tag">Client Reviews</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
              What Real Experts <br /> <span className="text-neon-orange font-display italic">Say About Me</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-1 text-neon-orange mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="text-xs font-bold uppercase tracking-[4px] text-white/40">4.9/5 Average Rating</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border border-white/5 bg-white/[0.02] rounded-2xl relative hover:bg-white/[0.04] transition-all group"
            >
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-neon-orange/10 transition-colors">
                <Quote size={48} />
              </div>
              
              <div className="flex gap-1 text-neon-orange mb-8">
                {[...Array(review.rating)].map((_, starIndex) => (
                  <Star key={starIndex} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-lg text-text-gray font-light leading-relaxed mb-10 italic">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-8">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 grayscale group-hover:grayscale-0 transition-all shrink-0">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-bold uppercase tracking-tight">{review.name}</h4>
                    <span className="text-[8px] bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded-full border border-green-500/20 font-bold uppercase tracking-tighter">Verified</span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-neon-orange mt-1">{review.role}</p>
                  <p className="text-[10px] uppercase font-bold text-white/20 mt-1">{review.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
