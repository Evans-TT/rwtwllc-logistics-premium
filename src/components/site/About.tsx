import { FadeIn, SectionHeader } from "./Section";
import { Target, Compass, Handshake } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Precision",
    body: "Every shipment is tracked, planned, and executed with operational rigor.",
  },
  {
    icon: Compass,
    title: "Reach",
    body: "Local routes to interstate freight — coast-to-coast coverage you can rely on.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    body: "We build lasting relationships across industries through customer-first service.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="About RWTWLLC"
          title={
            <>
              Trusted American logistics, <br className="hidden md:block" />
              built on <span className="text-gradient-brand">discipline</span>.
            </>
          }
        />

        <FadeIn delay={0.1} className="mt-10 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            RWTWLLC is a trusted American logistics and freight transportation
            company dedicated to delivering reliable, efficient, and scalable
            transport solutions across local and international markets. Our
            mission is to provide dependable logistics services backed by
            professionalism, operational excellence, and customer-first support.
            With a commitment to safety, precision, and timely delivery,
            RWTWLLC continues to build strong partnerships across industries
            while maintaining the highest standards in transportation and
            freight management.
          </p>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div className="glass rounded-3xl p-8 h-full hover:bg-white/[0.04] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow">
                  <p.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
