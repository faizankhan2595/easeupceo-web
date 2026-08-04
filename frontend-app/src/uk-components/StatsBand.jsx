import { FadeIn } from "@/uk-components/motion/FadeIn";

const stats = [
  { value: 500, suffix: "+", label: "businesses run on Worklynx" },
  { value: 99.8, suffix: "%", label: "on-time payroll accuracy" },
  { value: 24, suffix: "h", label: "saved per manager every month" },
];

export default function StatsBand() {
  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="space-y-1">
                <p className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-sm font-medium text-slate-600">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
