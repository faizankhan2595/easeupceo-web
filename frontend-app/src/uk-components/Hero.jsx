"use client";

import { useState } from "react";
import HeroLaptop from "@/uk-components/HeroLaptop";
import DemoModal from "@/uk-components/DemoModal";

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative bg-linear-to-b from-brand-50 via-white to-white">
      <HeroLaptop onWatchDemo={() => setDemoOpen(true)} />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
