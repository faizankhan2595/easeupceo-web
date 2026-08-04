import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Package, Layers, BarChart, Truck, ShieldCheck, ArrowRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import ProductSuiteSwitcher from "@/uk-components/ProductSuiteSwitcher";

const inventoryFeatures = [
  {
    icon: Package,
    title: "Multi-Warehouse Stock Control",
    desc: "Manage physical inventory across multiple UK locations, warehouses, and storage bins with real-time sync."
  },
  {
    icon: Layers,
    title: "Batch & Serial Number Tracking",
    desc: "Complete traceability for perishable goods, electronics, and regulated items with batch expiry alerts."
  },
  {
    icon: Truck,
    title: "Purchase Orders & Supplier Workflows",
    desc: "Automate purchase requisitions, supplier PO approvals, goods received notes (GRN), and UK VAT bills."
  },
  {
    icon: BarChart,
    title: "FIFO & Valuation Accounting",
    desc: "Automatic FIFO product costing, landed cost adjustments, stock valuation reports, and margin analysis."
  },
  {
    icon: ShieldCheck,
    title: "Low Stock Alerts & Reorder Points",
    desc: "Prevent stockouts with automated reorder threshold triggers and intelligent demand forecasting."
  },
  {
    icon: ShoppingBag,
    title: "Multi-Channel Sales Sync",
    desc: "Connect physical UK stores, B2B orders, and e-commerce channels to maintain single-source stock levels."
  }
];

export default function UKInventoryPage() {
  useEffect(() => {
    document.title = "UK Inventory Management & Multi-Warehouse ERP | Worklynx UK";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-amber-600 selection:text-white">
      {/* Product Suite Switcher Bar */}
      <ProductSuiteSwitcher activeSuiteId="inventory" />

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 overflow-hidden bg-gradient-to-b from-amber-50/30 via-white to-slate-50/40 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-xs font-semibold mb-5"
          >
            <Package className="w-3.5 h-3.5 text-amber-700" />
            <span>Business Expansion Module — UK Inventory ERP</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-800 max-w-4xl mx-auto leading-tight"
          >
            Smart Inventory &amp; Multi-Warehouse{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent italic font-serif">
              Stock Control
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Track stock in real-time, automate purchase orders, manage batch numbers, and integrate seamlessly with your Worklynx HRMS platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 font-semibold text-white shadow-xs hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span>Book Inventory Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/hrms"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white border border-slate-200/80 hover:bg-slate-50 font-medium text-slate-700 transition-all text-center text-sm shadow-xs"
            >
              Explore HRMS Platform First
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-slate-800">Enterprise Inventory Features</h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">Designed to keep UK stock counts accurate and supply chains moving.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {inventoryFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white/90 border border-slate-200/70 shadow-xs hover:border-amber-300 hover:shadow-xs transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-100/80 border border-amber-200 flex items-center justify-center text-amber-700 mb-3 group-hover:bg-amber-600 group-hover:text-white transition-all">
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
            <h3 className="text-xl font-semibold text-slate-800">Integrated with Worklynx HRMS</h3>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm">
              Warehouse managers, stock clerks, and procurement leads are managed directly through your HR employee database with role-based access permissions.
            </p>
            <div className="mt-5">
              <Link to="/hrms" className="inline-flex items-center gap-1.5 text-brand-700 hover:text-brand-800 font-semibold text-xs">
                <span>See HRMS &amp; Staff Management</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
