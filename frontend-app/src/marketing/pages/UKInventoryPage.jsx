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
    <div className="min-h-screen bg-slate-900 text-white selection:bg-amber-500 selection:text-white">
      {/* Product Suite Switcher Bar */}
      <ProductSuiteSwitcher activeSuiteId="inventory" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold mb-6"
          >
            <Package className="w-4 h-4 text-amber-400" />
            <span>Business Expansion Module — UK Inventory ERP</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight"
          >
            Smart Inventory &amp; Multi-Warehouse{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
              Stock Control
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Track stock in real-time, automate purchase orders, manage batch numbers, and integrate seamlessly with your Worklynx HRMS platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 font-bold text-white shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Book Inventory Demo</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/hrms"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/80 border border-slate-700 hover:bg-slate-800 font-semibold text-slate-200 hover:text-white transition-all text-center"
            >
              Explore HRMS Platform First
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Enterprise Inventory Features</h2>
            <p className="mt-4 text-slate-400 text-lg">Designed to keep UK stock counts accurate and supply chains moving.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inventoryFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-500 group-hover:text-white transition-all">
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
            <h3 className="text-2xl font-bold text-white">Integrated with Worklynx HRMS</h3>
            <p className="mt-2 text-slate-400">
              Warehouse managers, stock clerks, and procurement leads are managed directly through your HR employee database with role-based access permissions.
            </p>
            <div className="mt-6">
              <Link to="/hrms" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold text-sm">
                <span>See HRMS &amp; Staff Management</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
