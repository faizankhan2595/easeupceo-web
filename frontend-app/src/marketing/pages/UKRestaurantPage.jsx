import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Utensils, 
  QrCode, 
  Monitor, 
  CreditCard, 
  ChefHat, 
  Clock, 
  ArrowRight, 
  ChevronRight,
  TrendingUp,
  Receipt
} from "lucide-react";
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
    title: "Integrated Payments & VAT Receipts",
    desc: "Accept cards, contactless Apple/Google Pay, QR payments, and print compliant VAT receipts automatically."
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
    document.title = "Restaurant POS & Kitchen Management System | Worklynx";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-rose-600 selection:text-white">
      
      {/* Aceternity UI Style Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-rose-50/40 via-white to-slate-50/40 border-b border-slate-200/60">
        
        {/* Subtle Radial Glow & Background Grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-rose-100/50 via-pink-100/30 to-transparent blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumb Ribbon */}
          <nav className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-rose-200/80 text-xs text-rose-900 shadow-xs mb-6 backdrop-blur-xs">
            <Link to="/" className="hover:text-rose-950 transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-rose-400" />
            <span className="font-semibold text-rose-800">Restaurant Management</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-800 max-w-4xl mx-auto leading-tight"
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
            Streamline billing, table QR ordering, kitchen display (KDS), and employee shift tracking in one integrated platform.
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

          {/* Aceternity UI POS Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-12 max-w-5xl mx-auto rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xl p-6 sm:p-8 text-left space-y-6"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs text-slate-500 font-medium">Worklynx POS Terminal</span>
                <h3 className="text-lg font-semibold text-slate-800">Covent Garden Bistro</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-medium border border-rose-200 flex items-center gap-1">
                  <ChefHat className="w-3.5 h-3.5 text-rose-700" /> KDS Synced
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Today's Revenue</span>
                  <TrendingUp className="w-4 h-4 text-rose-600" />
                </div>
                <p className="text-xl font-bold text-slate-900">£3,840.50</p>
                <p className="text-[11px] text-emerald-600 font-medium mt-1">Contactless &amp; Card Sync</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Active Tables</span>
                  <Utensils className="w-4 h-4 text-rose-600" />
                </div>
                <p className="text-xl font-bold text-slate-900">18 Seated</p>
                <p className="text-[11px] text-rose-700 font-medium mt-1">Table QR Ordering Active</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Avg Prep Time</span>
                  <Receipt className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-xl font-bold text-slate-900">11.4 Minutes</p>
                <p className="text-[11px] text-slate-500 font-medium mt-1">KDS Kitchen Expediter</p>
              </div>
            </div>
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
