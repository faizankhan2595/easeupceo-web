"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Inventory",
    description: "Smart inventory management",
  },
  {
    name: "RMS",
    description: "Complete retail management",
  },
  {
    name: "HRMS",
    description: "Modern human resource management",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-white px-6">
      {/* Very subtle background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#343384]/[0.04] blur-[120px]" />

      <div className="relative z-10 w-full max-w-6xl text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[#343384]/60">
            Our Products
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-6xl lg:text-7xl">
            Built for the way
            <span className="block text-brand">
              businesses work.
            </span>
          </h1>
        </motion.div>

        {/* Three Products */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-16 flex max-w-5xl flex-col items-center justify-center md:flex-row"
        >
          {products.map((product, index) => (
            <div
              key={product.name}
              className="flex items-center"
            >
              {/* Product */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="group cursor-pointer px-8 py-4 sm:px-12"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[#343384] sm:text-3xl">
                  {product.name}
                </h2>

                <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                  {product.description}
                </p>

                {/* Hover line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="mx-auto mt-4 h-[2px] rounded-full bg-[#343384]"
                />
              </motion.div>

              {/* Separator */}
              {index !== products.length - 1 && (
                <div className="hidden h-16 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent md:block" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}