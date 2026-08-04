import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Package, 
  Layers, 
  BarChart, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  ShoppingBag, 
  ChevronRight,
  Boxes,
  AlertTriangle,
  FileCheck
} from "lucide-react";
import { motion } from "framer-motion";

const inventoryFeatures = [
  {
    icon: Package,
    title: "Multi-Warehouse Stock Control",
    desc: "Manage physical inventory across multiple locations, warehouses, and storage bins with real-time sync."
  },
  {
    icon: Layers,
    title: "Batch & Serial Number Tracking",
    desc: "Complete traceability for perishable goods, electronics, and regulated items with batch expiry alerts."
  },
  {
    icon: Truck,
    title: "Purchase Orders & Supplier Workflows",
    desc: "Automate purchase requisitions, supplier PO approvals, goods received notes (GRN), and VAT bills."
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
    desc: "Connect physical stores, B2B orders, and e-commerce channels to maintain single-source stock levels."
  }
];

export default function UKInventoryPage() {
  useEffect(() => {
    document.title = "Inventory Management & Multi-Warehouse ERP | Worklynx";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-amber-600 selection:text-white">
      
      {/* Aceternity UI Style Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-slate-50/40 border-b border-slate-200/60">
        
        {/* Subtle Radial Glow & Background Grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-amber-100/50 via-orange-100/30 to-transparent blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumb Ribbon */}
          <nav className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-amber-200/80 text-xs text-amber-900 shadow-xs mb-6 backdrop-blur-xs">
            <Link to="/" className="hover:text-amber-950 transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-amber-800">Inventory Management</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-800 max-w-4xl mx-auto leading-tight"
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

          {/* Aceternity UI Inventory Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-12 max-w-5xl mx-auto rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xl p-6 sm:p-8 text-left space-y-6"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs text-slate-500 font-medium">Worklynx Inventory ERP</span>
                <h3 className="text-lg font-semibold text-slate-800">Multi-Warehouse Operations</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-medium border border-amber-200 flex items-center gap-1">
                  <Boxes className="w-3.5 h-3.5 text-amber-700" /> 3 Warehouses Live
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Total Stock Valuation</span>
                  <BarChart className="w-4 h-4 text-amber-600" />
                </div>
                <p className="text-xl font-bold text-slate-900">£142,800.00</p>
                <p className="text-[11px] text-emerald-600 font-medium mt-1">FIFO Costing Synced</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Reorder Alerts</span>
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                </div>
                <p className="text-xl font-bold text-slate-900">2 Items Low</p>
                <p className="text-[11px] text-amber-700 font-medium mt-1">Auto PO Created</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Supplier Purchase Orders</span>
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-xl font-bold text-slate-900">4 Goods Received</p>
                <p className="text-[11px] text-slate-500 font-medium mt-1">VAT Compliant</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-slate-800">Enterprise Inventory Features</h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">Designed to keep stock counts accurate and supply chains moving.</p>
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
