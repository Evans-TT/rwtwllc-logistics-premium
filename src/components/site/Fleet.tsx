import { motion } from "framer-motion";
import { SectionHeader } from "./Section";
import trucks from "@/assets/fleet-trucks.png";
import team from "@/assets/team.png";
import office from "@/assets/office.png";
import f2 from "@/assets/fleet-2.jpg";
import f3 from "@/assets/fleet-3.jpg";
import f4 from "@/assets/fleet-4.jpg";

const items = [
  { src: trucks, label: "Branded RWTWLLC Fleet", span: "lg:col-span-2 lg:row-span-2" },
  { src: office, label: "Corporate Headquarters", span: "" },
  { src: team, label: "Professional Team", span: "" },
  { src: f2, label: "Distribution Terminals", span: "" },
  { src: f3, label: "Long Haul Operations", span: "" },
  { src: f4, label: "Intermodal & Cargo", span: "lg:col-span-2" },
];

export function Fleet() {
  return (
    <section id="fleet" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our Fleet"
          title={
            <>
              A modern fleet, <span className="text-gradient-brand">moving without compromise</span>.
            </>
          }
          description="Maintained, monitored, and ready to roll — every vehicle in our fleet is built for safety, efficiency, and performance."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:auto-rows-[18rem]">
          {items.map((item, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl glass shadow-card ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="w-full h-full object-cover min-h-[18rem] transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
              <figcaption className="absolute bottom-5 left-5 right-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Fleet
                </span>
                <h3 className="mt-1 text-xl md:text-2xl font-bold text-foreground">
                  {item.label}
                </h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
