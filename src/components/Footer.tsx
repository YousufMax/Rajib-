import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="py-24 border-t border-white/5 bg-bg-dark/50">
      <div className="grid-layout grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="mb-6 block h-14 w-auto w-fit">
            <img 
              src="https://res.cloudinary.com/dc2m2bgok/image/upload/v1778841609/rajib_logo_pae4xk.png" 
              alt="RAJIB logo" 
              className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="text-white/40 text-sm font-light leading-relaxed mb-8 max-w-[240px]">
            Digital marketing expert focused on performance-driven growth systems and scalable ROI for global brands.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-white/60">System Online</span>
          </div>
        </div>
        
        <div>
          <p className="text-[10px] uppercase tracking-[3px] font-bold text-neon-orange mb-8 text-white/30 truncate">Services</p>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-tight text-white/60">
            <li><Link to="/services" className="hover:text-neon-orange transition-colors">Social Management</Link></li>
            <li><Link to="/services" className="hover:text-neon-orange transition-colors">Meta Ads</Link></li>
            <li><Link to="/services" className="hover:text-neon-orange transition-colors">Content Strategy</Link></li>
            <li><Link to="/services" className="hover:text-neon-orange transition-colors">Branding Systems</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[3px] font-bold text-neon-orange mb-8 text-white/30 truncate">Connect</p>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-tight text-white/60">
            <li><a href="#" className="hover:text-neon-orange transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-neon-orange transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-neon-orange transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-neon-orange transition-colors">YouTube</a></li>
          </ul>
        </div>

        <div>
           <p className="text-[10px] uppercase tracking-[3px] font-bold text-neon-orange mb-8 text-white/30 truncate">Contact</p>
           <ul className="space-y-4 text-sm font-light text-white/60">
             <li>Rajib Fakir</li>
             <li><a href="mailto:afifislamrajib1122@gmail.com" className="hover:text-white transition-colors">afifislamrajib1122@gmail.com</a></li>
             <li><a href="tel:01581385557" className="hover:text-white transition-colors">+880 1581-385557</a></li>
             <li className="pt-4"><span className="tag !text-white/20">EST 2021</span></li>
           </ul>
        </div>
      </div>
      
      <div className="grid-layout mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p className="text-[10px] uppercase font-bold tracking-widest opacity-30">
          © {new Date().getFullYear()} MD RAJIB FAKIR. ALL RIGHTS RESERVED.
        </p>
        <p className="text-[10px] uppercase font-bold tracking-widest opacity-30">
          DESIGNED FOR HIGH PERFORMANCE
        </p>
      </div>
    </footer>
  );
}
