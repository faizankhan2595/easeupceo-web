"use client";

import { useState } from "react";
import HeroLaptop from "@/uk-components/HeroLaptop";
import DemoModal from "@/uk-components/DemoModal";

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative ">
     
      <HeroLaptop onWatchDemo={() => setDemoOpen(true)} />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
