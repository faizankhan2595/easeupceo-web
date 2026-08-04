import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Utensils, QrCode, Monitor, CreditCard, ChefHat, Clock, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-white text-slate-800 selection:bg-rose-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 overflow-hidden bg-gradient-to-b from-rose-50/30 via-white to-slate-50/40 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Hero Breadcrumb Ribbon */}
          <nav className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/70 border border-rose-200/70 text-xs text-rose-800 mb-6">
            <Link to="/" className="hover:text-rose-950 transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
            <span className="font-semibold text-rose-900">Restaurant Management</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-800 max-w-4xl mx-auto leading-tight"
          >
            Modern Restaurant POS &amp;{" "}
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent italic font-serif">
              Kitchen System
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Streamline billing, table QR ordering, kitchen display (KDS), and employee shift tracking in one integrated UK platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 font-semibold text-white shadow-xs hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span>Book Restaurant Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/live-order"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white border border-slate-200/80 hover:bg-slate-50 font-medium text-slate-700 transition-all text-center text-sm shadow-xs"
            >
              Preview Live QR Ordering
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-slate-800">Built for Restaurants, Cafes &amp; Bars</h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">Fast, reliable POS &amp; order sync for high-volume hospitality venues.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {restaurantFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white/90 border border-slate-200/70 shadow-xs hover:border-rose-300 hover:shadow-xs transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-rose-100/80 border border-rose-200 flex items-center justify-center text-rose-700 mb-3 group-hover:bg-rose-600 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-800 mb-1.5">{feat.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HR Integration Callout */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 shadow-xs">
            <h3 className="text-xl font-semibold text-slate-800">Seamless HRMS Workforce Connection</h3>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm">
              Chefs, servers, and bartenders clock in on POS terminals, syncing attendance and tips directly into Worklynx HRMS payroll.
            </p>
            <div className="mt-5">
              <Link to="/hrms" className="inline-flex items-center gap-1.5 text-brand-700 hover:text-brand-800 font-semibold text-xs">
                <span>Discover Flagship HRMS Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
