import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl bg-white/95 p-1.5 flex items-center justify-center shadow-glow">
                <img src={logo} alt="RWTWLLC logo" className="w-full h-full object-contain" />
              </span>
              <span className="text-lg font-bold text-foreground">
                RWTW<span className="text-accent">LLC</span>
              </span>
            </a>
            <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
              A trusted American logistics and freight transportation company —
              delivering reliable, scalable transport solutions across local and
              international markets.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-gradient-brand hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Company"
            links={[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Fleet", href: "#fleet" },
              { label: "Why Us", href: "#why" },
            ]}
          />
          <FooterCol
            title="Contact"
            links={[
              { label: "+1 (707) 706-9902", href: "tel:+17077069902" },
              { label: "1643 Goodwin Dr", href: "#contact" },
              { label: "Vista, CA 92084", href: "#contact" },
              { label: "Get a Quote", href: "#contact" },
            ]}
          />
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RWTWLLC. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Moving America. Delivered with Precision.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
        {title}
      </h4>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
