import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Utensils, QrCode, Monitor, CreditCard, ChefHat, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ProductSuiteSwitcher from "@/uk-components/ProductSuiteSwitcher";

const restaurantFeatures = [
  {
    icon: Utensils,
    title: "High-Speed POS Billing",
    desc: "Lightning-fast touchscreen POS billing with offline mode, bill splitting, table transfer, and discount rules."
  },
  {
    icon: QrCode,
    title: "Table QR Code Ordering",
    desc: "Dine-in guests scan QR codes on tables to browse digital menus, customize orders, and pay directly from smartphones."
  },
  {
    icon: ChefHat,
    title: "Kitchen Display System (KDS)",
    desc: "Real-time kitchen order tickets (KOT) synced instantly across kitchen stations, bar counters, and expediter screens."
  },
  {
    icon: CreditCard,
    title: "Integrated Payments & UK VAT",
    desc: "Accept cards, contactless Apple/Google Pay, QR payments, and print compliant UK VAT receipts automatically."
  },
  {
    icon: Clock,
    title: "Staff Shift & Tip Tracking",
    desc: "Integrated with Worklynx HRMS for server clock-ins, tip distribution reporting, and shift scheduling."
  },
  {
    icon: Monitor,
    title: "Live Order Dashboard",
    desc: "Track active tables, pending orders, takeaway fulfillment, and delivery app integrations from one screen."
  }
];

export default function UKRestaurantPage() {
  useEffect(() => {
    document.title = "UK Restaurant POS & Kitchen Management System | Worklynx UK";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-rose-500 selection:text-white">
      {/* Product Suite Switcher Bar */}
      <ProductSuiteSwitcher activeSuiteId="restaurant" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm font-semibold mb-6"
          >
            <Utensils className="w-4 h-4 text-rose-400" />
            <span>Business Expansion Module — UK Restaurant POS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight"
          >
            Modern Restaurant POS &amp;{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-rose-200 bg-clip-text text-transparent">
              Kitchen System
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Streamline billing, table QR ordering, kitchen display (KDS), and employee shift tracking in one integrated UK platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 font-bold text-white shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Book Restaurant Demo</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/live-order"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/80 border border-slate-700 hover:bg-slate-800 font-semibold text-slate-200 hover:text-white transition-all text-center"
            >
              Preview Live QR Ordering
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for Restaurants, Cafes &amp; Bars</h2>
            <p className="mt-4 text-slate-400 text-lg">Fast, reliable POS &amp; order sync for high-volume hospitality venues.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurantFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-rose-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 group-hover:bg-rose-500 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HR Integration Callout */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800">
            <h3 className="text-2xl font-bold text-white">Seamless HRMS Workforce Connection</h3>
            <p className="mt-2 text-slate-400">
              Chefs, servers, and bartenders clock in on POS terminals, syncing attendance and tips directly into Worklynx HRMS payroll.
            </p>
            <div className="mt-6">
              <Link to="/hrms" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold text-sm">
                <span>Discover Flagship HRMS Platform</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
