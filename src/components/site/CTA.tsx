import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] glass-strong p-12 md:p-20 shadow-card"
        >
          <div
            aria-hidden
            className="absolute -top-32 -right-32 w-[30rem] h-[30rem] rounded-full"
            style={{ background: "var(--gradient-glow)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-40 -left-20 w-[28rem] h-[28rem] rounded-full opacity-70"
            style={{ background: "var(--gradient-glow)" }}
          />
          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold tracking-widest uppercase text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Ready When You Are
            </span>
            <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
              Let's move your freight — <br />
              <span className="text-gradient-brand">on time, every time.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Talk to a logistics specialist today and get a tailored quote for
              your next shipment, route, or long-term contract.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-brand text-white font-semibold shadow-glow hover:scale-[1.03] transition-transform"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+17077069902"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-foreground font-semibold hover:bg-white/5 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call +1 (707) 706-9902
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
