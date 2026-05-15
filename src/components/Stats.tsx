import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";

const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Campaigns Managed", value: 100, suffix: "+" },
  { label: "Clients Worked With", value: 50, suffix: "+" },
  { label: "High ROI Focus", value: 98, suffix: "%" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-5xl md:text-7xl font-bold font-display text-white">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 border-b border-white/5">
      <div className="grid-layout">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[10px] uppercase tracking-[3px] font-bold text-white/40 group-hover:text-neon-orange transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
