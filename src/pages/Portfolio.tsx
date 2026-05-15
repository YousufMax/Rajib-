import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X, ArrowRight, TrendingUp, Target, Users, BarChart3, Filter } from "lucide-react";
import Reviews from "../components/Reviews";

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
  {
    title: "Aura Skincare",
    type: "Instagram Ad Launch",
    result: "3.8x ROI",
    category: "Ads",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
    desc: "Launch strategy and campaign management for a new organic skincare line, focusing on aesthetic visuals.",
    problem: "Zero market visibility at launch.",
    strategy: "Created a 'Coming Soon' buzz campaign followed by a heavy micro-influencer gifting program and conversion ads.",
    kpis: ["3.8x Initial ROI", "5k Initial Sales", "45% Profile Growth"]
  },
  {
    title: "TechNova Branding",
    type: "SaaS Visual ID",
    result: "High Market Fit",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    desc: "Complete visual rebranding for a developer-focused tech agency to attract high-ticket B2B clients.",
    problem: "Existing branding looked 'too amateur' for 6-7 figure contracts.",
    strategy: "Implemented a premium minimalist dark-mode visual system through all ad channels and social profiles.",
    kpis: ["+60% Lead Quality", "Higher Contract Value", "Consistent Brand Voice"]
  }
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
    <div className="page-fade-in pt-32">
      <section className="py-24 border-b border-white/5">
        <div className="grid-layout">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-neon-orange rounded-full" />
              <span className="tag">Exhibition</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-12 leading-[1.1] md:leading-[0.85]">
              Proven <span className="text-neon-orange italic font-display">Success.</span>
            </h1>
            <p className="text-3xl text-text-gray font-light max-w-3xl italic opacity-80 leading-snug">
              Every project is a deep-dive into performance engineering. Here is a curated selection of brands I've helped scale through strategic digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Real-time KPI Bar - New Feature */}
      <section className="py-12 border-b border-white/5 bg-white/[0.01]">
         <div className="grid-layout">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { label: "Avg. Client ROAS", val: "4.8x" },
                 { label: "Total Ad Spend Managed", val: "$1.2M+" },
                 { label: "Leads Generated", val: "15,000+" },
                 { label: "Success Rate", val: "94%" }
               ].map((kpi, i) => (
                 <div key={i} className="text-center lg:text-left">
                    <p className="text-[10px] uppercase font-bold tracking-[4px] text-white/20 mb-2">{kpi.label}</p>
                    <p className="text-4xl font-bold font-display text-white">{kpi.val}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Portfolio Grid with Detailed Filter */}
      <section className="py-24 border-b border-white/5">
        <div className="grid-layout">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-20 gap-8">
              <div className="flex items-center gap-4">
                 <Filter size={18} className="text-neon-orange" />
                 <span className="text-xs uppercase font-bold tracking-widest text-white/40">Filter Projects</span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-4 rounded-sm text-[10px] uppercase tracking-widest font-bold transition-all border ${
                    filter === cat ? "bg-neon-orange border-neon-orange text-white" : "border-white/10 text-white/40 hover:border-white/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                  <div className="aspect-[4/5] overflow-hidden rounded-xl border border-white/5 bg-bg-gray/40">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" 
                    />
                  </div>
                  <div className="mt-8">
                    <span className="text-neon-orange text-[10px] uppercase tracking-[2px] mb-2 block font-bold">{project.category} / {project.type}</span>
                    <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-neon-orange transition-colors mb-4">{project.title}</h3>
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                       <span className="text-[10px] uppercase font-bold opacity-30">Best Result</span>
                       <span className="text-xl font-bold font-display text-white">{project.result}</span>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-neon-orange shadow-2xl">
                        <ArrowRight size={20} />
                     </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

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
              className="relative w-full max-w-6xl glass-card overflow-hidden h-full max-h-[90vh] flex flex-col lg:flex-row"
            >
              <div className="w-full lg:w-1/2 h-64 lg:h-full bg-bg-dark">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6 md:p-12 overflow-y-auto">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 lg:top-8 lg:right-8 text-white/40 hover:text-white transition-colors z-10"
                >
                  <X size={28} className="md:w-8 md:h-8" />
                </button>

                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-neon-orange rounded-full" />
                  <span className="tag">{selectedProject.category} Case Study</span>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
                  {selectedProject.title}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                   <div className="p-6 bg-white/5 rounded-lg border border-white/5">
                      <TrendingUp className="text-neon-orange mb-4" size={24} />
                      <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Result</p>
                      <p className="text-xl font-bold">{selectedProject.result}</p>
                   </div>
                   <div className="p-6 bg-white/5 rounded-lg border border-white/5">
                      <Target className="text-neon-orange mb-4" size={24} />
                      <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Target</p>
                      <p className="text-xl font-bold">Scaling</p>
                   </div>
                   <div className="p-6 bg-white/5 rounded-lg border border-white/5">
                      <Users className="text-neon-orange mb-4" size={24} />
                      <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Audience</p>
                      <p className="text-xl font-bold">Global</p>
                   </div>
                   <div className="p-6 bg-white/5 rounded-lg border border-white/5">
                      <BarChart3 className="text-neon-orange mb-4" size={24} />
                      <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Status</p>
                      <p className="text-xl font-bold">Done</p>
                   </div>
                </div>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-neon-orange mb-4 pb-2 border-b border-white/5">The Problem</h4>
                    <p className="text-lg text-text-gray font-light leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-neon-orange mb-4 pb-2 border-b border-white/5">The Strategy</h4>
                    <p className="text-lg text-text-gray font-light leading-relaxed">{selectedProject.strategy}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-neon-orange mb-6 pb-2 border-b border-white/5">Performance Metrics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {selectedProject.kpis.map((kpi, i) => (
                        <div key={i} className="flex flex-col gap-1">
                          <span className="text-4xl font-bold font-display text-white">{kpi.split(' ')[0]}</span>
                          <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">{kpi.split(' ').slice(1).join(' ')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-16 flex flex-col md:flex-row gap-6">
                  <button className="flex-1 py-6 btn-primary rounded-sm uppercase text-[10px] tracking-[3px] font-bold">
                    View Case Study Site
                  </button>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 py-6 btn-outline rounded-sm uppercase text-[10px] tracking-[3px] font-bold"
                  >
                    Return to Portfolio
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Reviews />
    </div>
  );
}
