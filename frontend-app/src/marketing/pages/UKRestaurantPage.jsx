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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-rose-600 selection:text-white">
      {/* Product Suite Switcher Bar */}
      <ProductSuiteSwitcher activeSuiteId="restaurant" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-b from-rose-50/40 via-white to-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-sm font-bold mb-6"
          >
            <Utensils className="w-4 h-4 text-rose-700" />
            <span>Business Expansion Module — UK Restaurant POS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight"
          >
            Modern Restaurant POS &amp;{" "}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent">
              Kitchen System
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
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
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-rose-600 hover:bg-rose-700 font-bold text-white shadow-md shadow-rose-600/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Book Restaurant Demo</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/live-order"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 font-bold text-slate-800 transition-all text-center shadow-xs"
            >
              Preview Live QR Ordering
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Built for Restaurants, Cafes &amp; Bars</h2>
            <p className="mt-4 text-slate-600 text-lg">Fast, reliable POS &amp; order sync for high-volume hospitality venues.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurantFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-rose-300 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-700 mb-4 group-hover:bg-rose-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HR Integration Callout */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs">
            <h3 className="text-2xl font-extrabold text-slate-900">Seamless HRMS Workforce Connection</h3>
            <p className="mt-2 text-slate-600">
              Chefs, servers, and bartenders clock in on POS terminals, syncing attendance and tips directly into Worklynx HRMS payroll.
            </p>
            <div className="mt-6">
              <Link to="/hrms" className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-800 font-bold text-sm">
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
