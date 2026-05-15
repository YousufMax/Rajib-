import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[0.22,1,0.36,1] ${
        isScrolled 
          ? "py-6 flex justify-center px-4" 
          : "py-10 bg-gradient-to-b from-bg-dark/80 to-transparent"
      }`}
    >
      <div className={`grid-layout flex justify-between items-center transition-all duration-500 ease-[0.22,1,0.36,1] ${
        isScrolled 
          ? "bg-bg-dark/60 backdrop-blur-2xl border border-white/10 py-3 px-8 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-5xl" 
          : "w-full"
      }`}>
        <Link
          to="/"
          id="logo"
          className="flex items-center gap-3 sm:gap-4 group shrink-0"
        >
          <div className="h-10 sm:h-12 w-auto overflow-hidden relative">
            <img 
              src="https://res.cloudinary.com/dc2m2bgok/image/upload/v1778841609/rajib_logo_pae4xk.png" 
              alt="RAJIB Logo" 
              className="h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3" 
            />
            {/* Logo shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </div>
          <span className={`font-bold font-display tracking-tight hidden xs:block transition-all duration-500 ${
            isScrolled ? "text-lg" : "text-2xl"
          }`}>
            RAJIB<span className="text-neon-orange">.</span>
          </span>
        </Link>

        {/* Desktop Menu - Floating Pill */}
        <div className={`hidden md:flex gap-1 items-center bg-white/[0.03] border border-white/5 transition-all duration-500 ${
           isScrolled ? "p-1 scale-90" : "p-1.5"
        } rounded-full backdrop-blur-md`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`px-5 py-2.5 text-[10px] font-bold uppercase tracking-[2px] transition-all relative rounded-full group ${
                location.pathname === link.href ? "text-white" : "text-white/40 hover:text-white"
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {location.pathname === link.href && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              {/* Hover effect indicator */}
              <div className="absolute inset-0 bg-white/[0.05] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100" />
            </Link>
          ))}
        </div>

        <div className="hidden md:block shrink-0">
          <Link
            to="/contact"
            className={`group relative inline-flex items-center gap-3 bg-neon-orange text-white text-[10px] font-bold uppercase tracking-[4px] rounded-full overflow-hidden shadow-2xl shadow-neon-orange/20 transition-all duration-500 ${
              isScrolled ? "py-2.5 px-6" : "py-3.5 px-10"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer transition-transform duration-1000" />
            <span className="relative">Let's Talk</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:animate-pulse" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none bg-white/5 rounded-full border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span 
            animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-white origin-center transition-all"
          />
          <motion.span 
            animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="w-5 h-0.5 bg-white transition-all"
          />
          <motion.span 
            animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-3 h-0.5 bg-neon-orange origin-center self-end mr-2.5 transition-all"
          />
        </button>
      </div>

      {/* World-Class Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-50 bg-bg-dark/95 backdrop-blur-3xl flex flex-col items-center justify-center p-8 overflow-hidden"
          >
            {/* Advanced Background Decoration - Standard Deep Recharge */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-neon-orange/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-[100px] -z-10" />
            
            <motion.div 
              animate={{ y: ["0%", "100%", "0%"], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] pointer-events-none opacity-20 -z-10"
            />
            
            <div className="absolute top-10 left-10 flex items-center gap-3 opacity-20">
               <div className="w-1.5 h-1.5 rounded-full bg-neon-orange animate-ping" />
               <span className="text-[10px] font-bold uppercase tracking-[4px]">System Online</span>
            </div>

            <div className="flex flex-col items-center gap-12 w-full max-w-sm">
               <div className="text-center w-full">
                  <span className="text-[10px] font-bold text-white/20 uppercase tracking-[8px] block mb-8">Navigation Layer</span>
                  <div className="space-y-1">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Link
                          to={link.href}
                          className="group relative flex items-center justify-center gap-6 py-4 overflow-hidden"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="text-neon-orange font-display text-sm absolute left-0 opacity-0 group-hover:opacity-100 transition-all -translate-x-10 group-hover:translate-x-0 font-bold italic">
                            0{i+1}
                          </span>
                          <span className="text-2xl font-bold uppercase tracking-tight transition-all group-hover:text-neon-orange group-hover:italic">
                            {link.name}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
               </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-8 border-t border-white/5 w-full flex flex-col items-center gap-8"
              >
                <div className="flex flex-col items-center gap-4 w-full px-8">
                   <Link
                      to="/contact"
                      className="group relative w-full py-5 bg-neon-orange text-white text-[10px] font-bold uppercase tracking-[4px] rounded-full text-center shadow-2xl shadow-neon-orange/40 overflow-hidden"
                      onClick={() => setIsMobileMenuOpen(false)}
                   >
                      <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <span className="relative z-10">Scale Now</span>
                   </Link>
                   <p className="text-[10px] font-bold uppercase tracking-[4px] text-white/20">Active Growth Protocols Enabled</p>
                </div>

                <div className="flex gap-8">
                   {[
                     { name: 'FB', url: '#' },
                     { name: 'IG', url: '#' },
                     { name: 'LI', url: '#' }
                   ].map((s, idx) => (
                     <motion.a 
                        key={idx}
                        href={s.url}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + (idx * 0.1) }}
                        className="text-[10px] font-bold tracking-[4px] text-white/40 hover:text-neon-orange transition-colors"
                      >
                        {s.name}
                      </motion.a>
                   ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
