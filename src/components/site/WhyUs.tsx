import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import {
  Truck,
  UserCheck,
  Cog,
  HeadphonesIcon,
  ShieldCheck,
  MapPinned,
} from "lucide-react";

const features = [
  { icon: Truck, title: "Reliable Delivery", value: "99.6%", label: "On-time rate" },
  { icon: UserCheck, title: "Professional Drivers", value: "250+", label: "CDL-certified pros" },
  { icon: Cog, title: "Modern Fleet", value: "180+", label: "Late-model units" },
  { icon: HeadphonesIcon, title: "24/7 Support", value: "24/7", label: "Live dispatch" },
  { icon: ShieldCheck, title: "Safety Focused", value: "A+", label: "DOT safety rating" },
  { icon: MapPinned, title: "Nationwide Coverage", value: "48", label: "States served" },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={
            <>
              Built on numbers. <span className="text-gradient-brand">Proven in motion.</span>
            </>
          }
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden group"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-4xl font-bold text-gradient-brand">
                  {f.value}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
