import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Clock, Award } from "lucide-react";
import hero from "@/assets/hero-fleet.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center pt-28 pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="RWTWLLC premium logistics fleet on highway at dusk"
          width={1920}
          height={1280}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Glow accents */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full"
        style={{ background: "var(--gradient-glow)" }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute bottom-0 right-0 w-[35rem] h-[35rem] rounded-full blur-3xl"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-foreground/80"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            American Freight & Logistics Excellence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-foreground"
          >
            Moving America.
            <br />
            <span className="text-gradient-brand">Delivered with Precision.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            RWTWLLC delivers reliable, efficient, and scalable freight
            transportation across local and international markets — powered by a
            modern fleet, professional drivers, and a relentless commitment to
            on-time delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-brand text-white font-semibold shadow-glow hover:scale-[1.03] transition-transform"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+17077069902"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass-strong text-foreground font-semibold hover:bg-white/5 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +1 (707) 706-9902
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-14 grid grid-cols-3 gap-4 max-w-xl"
          >
            {[
              { icon: ShieldCheck, label: "Fully Insured" },
              { icon: Clock, label: "24/7 Dispatch" },
              { icon: Award, label: "DOT Certified" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="glass rounded-2xl px-4 py-4 flex flex-col items-center text-center"
              >
                <Icon className="w-5 h-5 text-accent" />
                <span className="mt-2 text-xs font-semibold text-foreground/80">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
