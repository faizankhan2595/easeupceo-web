import { useEffect } from "react";
import {
    Boxes,
    Layers,
    Truck,
    BarChart3,
    BellRing,
    ShoppingBag,
} from "lucide-react";

import ProductHero from "@/uk-components/product/ProductHero";
import ModuleRows from "@/uk-components/product/ModuleRows";
import FeatureGrid from "@/uk-components/product/FeatureGrid";
import CrossSell from "@/uk-components/product/CrossSell";
import ProductCta from "@/uk-components/product/ProductCta";
import { Section, SectionHeader } from "@/uk-components/product/Section";

const modules = [
    {
        title: "One stock ledger across every location",
        description:
            "Warehouses, shops and storage bins stay in sync. Move stock between locations and the count updates everywhere at once.",
        image: "/inventory1.png",
        imageAlt: "Warehouse shelves managed from a Worklynx stock dashboard",
        points: [
            "Real-time stock levels per location",
            "Transfers, adjustments and stock takes",
            "Batch and serial number traceability",
        ],
    },
    {
        title: "Barcodes, SKUs and purchase orders",
        description:
            "Scan goods in, print labels, and raise purchase orders from the same product record — no re-keying between systems.",
        image: "/posmachine2.png",
        imageAlt: "Barcode scanning and SKU labelling in Worklynx Inventory",
        points: [
            "Barcode scanning and label printing",
            "Supplier purchase orders and goods received notes",
            "Reorder points with low stock alerts",
        ],
    },
    {
        title: "Sell from any counter, on any device",
        description:
            "Counter sales, B2B orders and online channels all draw from the same stock, so what you sell is what you actually have.",
        image: "/pos.png",
        imageAlt: "Handheld point of sale device running Worklynx",
        points: [
            "Till, handheld and tablet checkout",
            "Multi-channel stock sync",
            "FIFO valuation and margin reporting",
        ],
    },
];

const features = [
    {
        icon: Boxes,
        title: "Multi-warehouse stock control",
        desc: "Manage inventory across locations, warehouses and storage bins with real-time sync.",
    },
    {
        icon: Layers,
        title: "Batch & serial tracking",
        desc: "Full traceability for perishable goods, electronics and regulated items, with expiry alerts.",
    },
    {
        icon: Truck,
        title: "Purchase orders & suppliers",
        desc: "Requisitions, PO approvals, goods received notes and VAT bills in one workflow.",
    },
    {
        icon: BarChart3,
        title: "FIFO costing & valuation",
        desc: "Automatic FIFO costing, landed cost adjustments, valuation reports and margin analysis.",
    },
    {
        icon: BellRing,
        title: "Reorder points & alerts",
        desc: "Automated reorder thresholds and demand signals so lines stop running dry.",
    },
    {
        icon: ShoppingBag,
        title: "Multi-channel sales sync",
        desc: "Stores, B2B orders and e-commerce channels reading from a single source of stock truth.",
    },
];

const crossSell = [
    {
        to: "/hrms",
        title: "HRMS & Payroll",
        description:
            "Warehouse staff, stock clerks and buyers are managed from the same employee database, with role-based access.",
    },
    {
        to: "/restaurant-management",
        title: "Restaurant Management",
        description:
            "Kitchens draw ingredients from the same stock ledger, so recipes and purchasing stay accurate.",
    },
];

export default function UKInventoryPage() {
    useEffect(() => {
        document.title = "Inventory Management & Multi-Warehouse ERP | Worklynx";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">

            <ProductHero
                breadcrumb="Inventory Management"
                title="Complete control of"
                highlight="your stock."
                lead="Track stock across every location in real time, automate purchasing, and keep sales, returns and transfers in one ledger your team can trust."
                image="/posmachine3.png"
                imageAlt="Worklynx Inventory running on a till, laptop and tablet"
                points={["Multi-location stock", "Purchase orders", "Barcode & SKU control"]}
                primaryCta={{ label: "Book a demo", href: "#contact-sales" }}
                secondaryCta={{ label: "Start free trial", href: "/signup" }}
            />

            <Section>
                <SectionHeader
                    eyebrow="How it works"
                    title="Stock that stays accurate"
                    highlight="without the chasing."
                    lead="Every movement — a sale, a delivery, a transfer, a correction — lands in the same place, so the number on screen is the number on the shelf."
                />

                <ModuleRows modules={modules} />
            </Section>

            <Section>
                <SectionHeader
                    eyebrow="Capabilities"
                    title="Everything an inventory team"
                    highlight="actually needs."
                />

                <FeatureGrid features={features} />
            </Section>

            <Section>
                <SectionHeader
                    eyebrow="One platform"
                    title="Works with the rest"
                    highlight="of Worklynx."
                />

                <CrossSell links={crossSell} />
            </Section>

            <ProductCta
                title="See it running on your own stock."
                lead="We will walk you through a setup based on your locations, suppliers and product range — no scripted demo."
            />
        </div>
    );
}
