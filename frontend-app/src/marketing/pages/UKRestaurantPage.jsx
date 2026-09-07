import { useEffect } from "react";
import {
    Utensils,
    QrCode,
    ChefHat,
    CreditCard,
    Clock,
    LineChart,
} from "lucide-react";

import ProductHero from "@/uk-components/product/ProductHero";
import ModuleRows from "@/uk-components/product/ModuleRows";
import FeatureGrid from "@/uk-components/product/FeatureGrid";
import CrossSell from "@/uk-components/product/CrossSell";
import ProductCta from "@/uk-components/product/ProductCta";
import { Section, SectionHeader } from "@/uk-components/product/Section";

const modules = [
    {
        title: "A counter your team can learn in a shift",
        description:
            "Take orders, split bills, transfer tables and apply discounts without hunting through menus. It keeps working when the internet does not.",
        image: "/rms.png",
        imageAlt: "Worklynx restaurant point of sale at a service counter",
        points: [
            "Fast touchscreen billing with offline mode",
            "Table transfers, splits and merges",
            "Discount and service charge rules",
        ],
    },
    {
        title: "Take payment wherever the guest is",
        description:
            "Card, contactless and QR payments at the table or the counter, with VAT-compliant receipts printed or emailed on the spot.",
        image: "/rmspos.png",
        imageAlt: "Handheld card terminal showing a Worklynx order summary",
        points: [
            "Card, Apple Pay and Google Pay",
            "Pay-at-table and QR ordering",
            "Automatic VAT receipts",
        ],
    },
    {
        title: "Kitchen and floor on the same ticket",
        description:
            "Orders reach the right station the moment they are sent, and the floor can see what is fired, plated and running late.",
        image: "/posmachine1.png",
        imageAlt: "Worklynx live order and sales dashboard",
        points: [
            "Kitchen display screens per station",
            "Live order and table status",
            "Daily sales and item performance",
        ],
    },
];

const features = [
    {
        icon: Utensils,
        title: "High-speed POS billing",
        desc: "Touchscreen billing with offline mode, bill splitting, table transfer and discount rules.",
    },
    {
        icon: QrCode,
        title: "Table QR ordering",
        desc: "Guests scan to browse the menu, customise their order and pay from their own phone.",
    },
    {
        icon: ChefHat,
        title: "Kitchen display system",
        desc: "Order tickets synced live across kitchen stations, bar counters and expediter screens.",
    },
    {
        icon: CreditCard,
        title: "Payments & VAT receipts",
        desc: "Cards, contactless, Apple and Google Pay, with compliant VAT receipts printed automatically.",
    },
    {
        icon: Clock,
        title: "Shifts & tip tracking",
        desc: "Server clock-ins, tip distribution and shift scheduling, shared with Worklynx HRMS.",
    },
    {
        icon: LineChart,
        title: "Live order dashboard",
        desc: "Active tables, pending orders, takeaway fulfilment and delivery integrations on one screen.",
    },
];

const crossSell = [
    {
        to: "/hrms",
        title: "HRMS & Payroll",
        description:
            "Chefs, servers and bartenders clock in on the POS, and those hours flow straight into payroll.",
    },
    {
        to: "/inventory-management",
        title: "Inventory Management",
        description:
            "Recipes draw from the same stock ledger, so ingredient counts and purchasing stay honest.",
    },
];

export default function UKRestaurantPage() {
    useEffect(() => {
        document.title = "Restaurant POS & Kitchen Management System | Worklynx";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">

            <ProductHero
                breadcrumb="Restaurant Management"
                title="Run every service"
                highlight="without the chaos."
                lead="Orders, tables, kitchen tickets and billing in one system — quick enough for a full house, and simple enough to train a new starter on."
                image="/rmspos1.png"
                imageAlt="Worklynx restaurant management running on a laptop, tablet and card terminal"
                points={["Order & table management", "Kitchen display", "Card & contactless payments"]}
                primaryCta={{ label: "Book a demo", href: "#contact-sales" }}
                secondaryCta={{ label: "Start free trial", href: "/signup" }}
            />

            <Section>
                <SectionHeader
                    eyebrow="How it works"
                    title="From the first order"
                    highlight="to the closing till."
                    lead="One flow from the table to the kitchen to the bill, so nothing is written twice and nothing gets lost between them."
                />

                <ModuleRows modules={modules} />
            </Section>

            <Section>
                <SectionHeader
                    eyebrow="Capabilities"
                    title="Built for restaurants,"
                    highlight="cafés and bars."
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
                title="See it running on your own menu."
                lead="Bring your menu and floor plan — we will show you the flow your team would actually use on a busy service."
            />
        </div>
    );
}
