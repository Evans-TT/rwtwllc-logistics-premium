import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader, FadeIn } from "./Section";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="Contact Us"
          title={
            <>
              Get in touch with our <span className="text-gradient-brand">dispatch team</span>.
            </>
          }
          description="Reach out anytime — our logistics team responds 24/7."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          {/* Info column */}
          <FadeIn className="lg:col-span-2 space-y-5">
            <InfoCard icon={Phone} title="Phone" lines={["+1 (707) 706-9902"]} href="tel:+17077069902" />
            <InfoCard
              icon={MapPin}
              title="Headquarters"
              lines={["1643 Goodwin Dr", "Vista, California 92084, USA"]}
            />
            <InfoCard
              icon={Clock}
              title="Business Hours"
              lines={["Mon – Fri: 7:00 AM – 8:00 PM", "Sat – Sun: 9:00 AM – 5:00 PM", "Dispatch: 24/7"]}
            />
            <div className="glass rounded-2xl p-6">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Follow Us
              </h4>
              <div className="mt-4 flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="w-11 h-11 rounded-xl glass-strong flex items-center justify-center hover:bg-gradient-brand hover:text-white transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1} className="lg:col-span-3">
            <motion.form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 3500);
              }}
              className="glass-strong rounded-3xl p-8 md:p-10 shadow-card"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" placeholder="John Carter" />
                <Field label="Email" name="email" type="email" placeholder="john@company.com" />
                <Field label="Phone" name="phone" placeholder="+1 (___) ___-____" />
                <Field label="Company" name="company" placeholder="Acme Corp" />
              </div>
              <div className="mt-5">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your shipment, route, or freight needs..."
                  className="mt-2 w-full rounded-2xl bg-background/60 border border-border px-5 py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/60 transition"
                />
              </div>
              <button
                type="submit"
                className="mt-7 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-brand text-white font-semibold shadow-glow hover:scale-[1.02] transition-transform"
              >
                {sent ? "Message Sent ✓" : (<>Send Message <Send className="w-4 h-4" /></>)}
              </button>
              <p className="mt-4 text-xs text-muted-foreground flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" /> We typically reply within a few hours.
              </p>
            </motion.form>
          </FadeIn>
        </div>

        {/* Map */}
        <FadeIn delay={0.1} className="mt-10">
          <div className="rounded-3xl overflow-hidden glass shadow-card aspect-[16/7]">
            <iframe
              title="RWTWLLC headquarters location"
              src="https://www.google.com/maps?q=1643+Goodwin+Dr,+Vista,+California+92084&output=embed"
              className="w-full h-full grayscale-[0.4] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: React.ElementType;
  title: string;
  lines: string[];
  href?: string;
}) {
  const Body = (
    <div className="glass rounded-2xl p-6 hover:bg-white/[0.04] transition-colors h-full">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow shrink-0">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {title}
          </h4>
          {lines.map((l) => (
            <p key={l} className="mt-1 text-foreground font-medium">
              {l}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href}>{Body}</a> : Body;
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl bg-background/60 border border-border px-5 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/60 transition"
      />
    </div>
  );
}
