import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import {
  Truck,
  Route,
  Boxes,
  PackageCheck,
  Warehouse,
  Container,
  Map,
  Network,
  Building2,
  MapPinned,
} from "lucide-react";

const services = [
  { icon: Truck, title: "Freight Transportation", desc: "End-to-end freight solutions tailored to load size, route, and timeline." },
  { icon: Route, title: "Long Haul Trucking", desc: "Cross-country deliveries with experienced drivers and modern equipment." },
  { icon: Network, title: "Logistics Management", desc: "Strategic planning and coordination from origin to final destination." },
  { icon: PackageCheck, title: "Distribution Services", desc: "Efficient distribution networks ensuring fast, accurate delivery." },
  { icon: Boxes, title: "Fleet Operations", desc: "Optimized fleet management for maximum uptime and performance." },
  { icon: Container, title: "Cargo Handling", desc: "Safe, secure handling of cargo across every transfer point." },
  { icon: Warehouse, title: "Warehousing Solutions", desc: "Secure storage facilities with inventory visibility and control." },
  { icon: Map, title: "Supply Chain Coordination", desc: "Integrated supply chain orchestration that scales with your business." },
  { icon: Building2, title: "Commercial Transport", desc: "Dependable B2B transport for enterprises across industries." },
  { icon: MapPinned, title: "Interstate Freight", desc: "Compliant, cost-effective freight across all 48 contiguous states." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full opacity-30"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Services"
          title={
            <>
              Full-spectrum freight, <span className="text-gradient-brand">delivered</span>.
            </>
          }
          description="From single shipments to enterprise supply chains — a complete service portfolio engineered for reliability."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl p-6 hover:bg-white/[0.04] transition-colors relative overflow-hidden"
            >
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"
                style={{ background: "var(--gradient-glow)" }}
                aria-hidden
              />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl glass-strong flex items-center justify-center group-hover:bg-gradient-brand transition-all">
                  <s.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="mt-5 text-base font-bold text-foreground leading-snug">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
