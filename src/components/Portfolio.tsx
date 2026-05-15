import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X, ArrowRight, TrendingUp, Target, Users } from "lucide-react";

interface Project {
  title: string;
  type: string;
  result: string;
  image: string;
  desc: string;
  category: "Ads" | "Social" | "Branding";
  problem: string;
  strategy: string;
  kpis: string[];
}

const projects: Project[] = [
  {
    title: "Eco-Fashion Scaling",
    type: "E-commerce Growth",
    result: "5.2x ROAS",
    category: "Ads",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800",
    desc: "Scaled a sustainable fashion brand globally using conversion-optimized Meta Ads and retargeting funnels.",
    problem: "High customer acquisition cost and low repeat purchase rate.",
    strategy: "Implemented multi-stage funnel targeting with lookalike audiences and dynamic product ads.",
    kpis: ["+40% Conversion Rate", "-25% CPA", "5.2x Lifetime ROAS"]
  },
  {
    title: "Skyline Properties",
    type: "Real Estate Lead Gen",
    result: "120+ Leads/Mo",
    category: "Ads",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    desc: "Implemented a hyper-local lead generation system for luxury villas, reducing cost per lead by 40%.",
    problem: "Low-quality leads that didn't convert into property viewings.",
    strategy: "Created high-quality video walkthrough ads and implemented a qualifying lead form process.",
    kpis: ["120+ Monthly Leads", "40% Cost Reduction", "15% Sales Increase"]
  },
  {
    title: "The Urban Grill",
    type: "Restaurant Brand",
    result: "200% Booking Rise",
    category: "Social",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
    desc: "Revitalized a local restaurant's digital presence through influencer collaborations and viral Reels content.",
    problem: "Stagnant social media growth and low weekend foot traffic.",
    strategy: "Leveraged local food influencers and high-energy video content showcasing the dining experience.",
    kpis: ["200% Booking Increase", "50k+ Local Reach", "10k New Followers"]
  },
  {
    title: "CloudFlow SaaS",
    type: "B2B Market Entry",
    result: "15k Signups",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    desc: "Executed a multi-channel digital marketing plan to drive adoption for a project management software.",
    problem: "Unknown brand in a crowded project management market.",
    strategy: "Built a strong brand identity focused on 'simplicity' and targeted small business owners with educational content.",
    kpis: ["15k Beta Signups", "Zero to 50k Reach", "8% Signup Rate"]
  },
];

const categories = ["All", "Ads", "Social", "Branding"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <section id="portfolio" className="py-24 border-b border-white/5">
      <div className="grid-layout">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-neon-orange rounded-full" />
              <span className="tag">Full Case Studies</span>
            </div>
            <h2 className="text-5xl font-bold uppercase tracking-tighter text-white">Selected Portfolio</h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-sm text-[10px] uppercase tracking-widest font-bold transition-all ${
                  filter === cat ? "bg-neon-orange text-white" : "bg-white/5 text-white/40 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[16/10] overflow-hidden rounded-xl border border-white/5 bg-bg-gray/40">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" 
                  />
                </div>
                <div className="mt-8 flex justify-between items-start">
                  <div>
                    <span className="text-neon-orange text-[10px] uppercase tracking-[2px] mb-2 block font-bold">{project.category} / {project.type}</span>
                    <h3 className="text-3xl font-bold uppercase tracking-tight group-hover:text-neon-orange transition-colors">{project.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold opacity-30 block mb-1">Impact</span>
                    <span className="text-2xl font-bold font-display text-white">{project.result}</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100 group-hover:text-neon-orange transition-all">
                  View Case Study <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-bg-dark/95 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="relative w-full max-w-5xl glass-card overflow-hidden h-full max-h-[90vh] flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 h-64 md:h-full bg-bg-dark">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-8 md:p-12 overflow-y-auto">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
                >
                  <X size={32} />
                </button>

                <span className="tag mb-4 block">{selectedProject.category} Case Study</span>
                <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 leading-none">
                  {selectedProject.title}
                </h3>
                
                <div className="grid grid-cols-3 gap-4 mb-12">
                   <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                      <TrendingUp className="text-neon-orange mb-2" size={20} />
                      <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Impact</p>
                      <p className="text-xl font-bold">{selectedProject.result}</p>
                   </div>
                   <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                      <Target className="text-neon-orange mb-2" size={20} />
                      <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Target</p>
                      <p className="text-xl font-bold">Scaling</p>
                   </div>
                   <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                      <Users className="text-neon-orange mb-2" size={20} />
                      <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Audience</p>
                      <p className="text-xl font-bold">Global</p>
                   </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-neon-orange mb-3">The Problem</h4>
                    <p className="text-text-gray font-light leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-neon-orange mb-3">The Strategy</h4>
                    <p className="text-text-gray font-light leading-relaxed">{selectedProject.strategy}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-neon-orange mb-3">Key Performance Indicators</h4>
                    <ul className="space-y-4">
                      {selectedProject.kpis.map((kpi, i) => (
                        <li key={i} className="flex items-center gap-4 border-l-2 border-white/10 pl-4 py-2 hover:border-neon-orange transition-colors">
                          <span className="text-white font-bold">{kpi}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  <button className="btn-primary flex-1 py-5 rounded-sm uppercase text-[10px] tracking-widest">
                    View Results Link
                  </button>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="btn-outline flex-1 py-5 rounded-sm uppercase text-[10px] tracking-widest"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
