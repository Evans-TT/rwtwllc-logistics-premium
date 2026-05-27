import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Fleet } from "@/components/site/Fleet";
import { WhyUs } from "@/components/site/WhyUs";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
