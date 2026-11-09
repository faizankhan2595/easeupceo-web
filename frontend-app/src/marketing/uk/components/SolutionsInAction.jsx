import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/marketing/uk/components/product/Section";
import Marquee from "@/marketing/uk/components/Marquee";
import { PROJECTS } from "@/marketing/uk/content/clientProjects";

// Real client logo when we have one; otherwise a neutral industry icon
// (not a made-up brand mark).
function ClientLogo({ client, logo, icon }) {
  const Icon = icon;
  if (logo) {
    return <img src={logo} alt={`${client} logo`} loading="lazy" className="h-12 w-auto max-w-[150px] object-contain" />;
  }
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
      <Icon className="h-6 w-6" />
    </span>
  );
}

function ProjectCard({ project, hidden = false }) {
  const { client, logo, solution, summary, icon: Icon, to } = project;
  return (
    <Link
      to={to}
      tabIndex={hidden ? -1 : undefined}
      className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-2xl hover:shadow-black/40 md:p-8"
    >
      <div className="flex h-12 items-center">
        <ClientLogo client={client} logo={logo} icon={Icon} />
      </div>

      <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-600">
        <Icon className="h-4 w-4" />
        {solution}
      </p>
      <p className="mt-3 text-base leading-7 text-neutral-600">{summary}</p>

      <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-5 text-sm">
        <span className="font-semibold text-neutral-900">{client}</span>
        <ArrowUpRight className="h-5 w-5 text-neutral-300 transition-colors group-hover:text-accent-500" />
      </div>
    </Link>
  );
}

export default function SolutionsInAction() {
  return (
    <Section id="solutions-in-action" dark>
      <SectionHeader
        eyebrow="Client projects"
        title="Our solutions"
        highlight="in action"
        lead="How businesses use Worklynx to run inventory, payroll, HR and restaurant operations."
        dark
      />

      <Marquee
        className="mt-12 py-4"
        items={PROJECTS}
        itemClassName="w-[300px] pr-6 sm:w-[380px]"
        renderItem={(project, isCopy) => <ProjectCard project={project} hidden={isCopy} />}
      />
    </Section>
  );
}
