import Marquee from "@/marketing/uk/components/Marquee";
import { PROJECTS } from "@/marketing/uk/content/clientProjects";

// Only clients with a logo, repeated until the strip is wider than the
// screen (a short list would leave a gap while it scrolls).
const LOGOS = PROJECTS.filter((project) => project.logo);
const MIN_LOGOS = 8;
const LOGO_STRIP = LOGOS.length
  ? Array.from({ length: Math.max(MIN_LOGOS, LOGOS.length) }, (_, i) => LOGOS[i % LOGOS.length])
  : [];

// "Trusted by" logo band shown under the homepage hero.
export default function ClientLogoStrip() {
  if (!LOGO_STRIP.length) return null;

  return (
    <section aria-label="Our clients" className="border-y border-neutral-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
          Trusted by growing businesses
        </p>
        <Marquee
          className="mt-6"
          items={LOGO_STRIP}
          itemClassName="px-10"
          renderItem={(project) => (
            <img
              src={project.logo}
              alt={`${project.client} logo`}
              loading="lazy"
              className="h-10 w-auto max-w-[160px] object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            />
          )}
        />
      </div>
    </section>
  );
}
