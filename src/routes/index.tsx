import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Fleet } from "@/components/site/Fleet";
import { WhyUs } from "@/components/site/WhyUs";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RWTWLLC — Premium American Logistics & Freight Transportation" },
      {
        name: "description",
        content:
          "RWTWLLC delivers reliable freight transportation, long haul trucking, logistics management, and supply chain coordination across the US.",
      },
      { property: "og:title", content: "RWTWLLC — Premium Logistics & Freight" },
      {
        property: "og:description",
        content:
          "Trusted American freight transportation and logistics — moving America, delivered with precision.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
