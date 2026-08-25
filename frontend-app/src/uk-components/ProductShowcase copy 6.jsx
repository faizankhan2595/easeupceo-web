"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Package,
    BarChart3,
    Boxes,
    ShoppingCart,
    ClipboardCheck,
    Users,
    CalendarCheck,
    WalletCards,
} from "lucide-react";

const products = [
    {
        number: "01",
        title: "Inventory",
        eyebrow: "Inventory Management",
        description:
            "Take complete control of your inventory with a smarter way to manage products, stock levels, purchases and daily movement.",
        image: "/posmachine.png",

        features: [
            {
                icon: Boxes,
                title: "Stock Control",
                text: "Know what's available in real time.",
            },
            {
                icon: BarChart3,
                title: "Smart Insights",
                text: "Understand your inventory performance.",
            },
            {
                icon: Package,
                title: "Product Management",
                text: "Organize products from one place.",
            },
        ],
    },

    {
        number: "02",
        title: "RMS",
        eyebrow: "Restaurant Management",
        description:
            "Run your restaurant with less complexity. Manage orders, tables, billing and everyday operations through one connected system.",
        image: "/rmspos.png",

        features: [
            {
                icon: ShoppingCart,
                title: "Order Management",
                text: "Keep every order moving smoothly.",
            },
            {
                icon: ClipboardCheck,
                title: "Table Operations",
                text: "Stay on top of your restaurant floor.",
            },
            {
                icon: WalletCards,
                title: "Fast Billing",
                text: "Make payments simple and reliable.",
            },
        ],
    },

    {
        number: "03",
        title: "HRMS",
        eyebrow: "Human Resource Management",
        description:
            "Bring your entire workforce together with simple tools for employees, attendance, leave, payroll and everyday HR operations.",
        image: "/inventorypos.png",

        features: [
            {
                icon: Users,
                title: "Employee Management",
                text: "Everything about your people in one place.",
            },
            {
                icon: CalendarCheck,
                title: "Attendance & Leave",
                text: "Track attendance without the paperwork.",
            },
            {
                icon: WalletCards,
                title: "Payroll",
                text: "Keep payroll organized and transparent.",
            },
        ],
    },
];

export default function ProductsShowcaseNew() {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-20 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-5 flex items-center gap-3"
                    >
                        <span className="h-px w-8 bg-neutral-400" />

                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                            Our Products
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-neutral-900 md:text-6xl"
                    >
                        Everything your business needs.
                    </motion.h2>

                    <p className="mt-6 max-w-xl text-base leading-7 text-neutral-500">
                        Powerful tools designed to simplify your operations,
                        connect your teams and give you more control over
                        your business.
                    </p>
                </div>


                {/* Products */}
                <div>
                    {products.map((product, index) => {
                        const imageRight = index % 2 === 0;

                        return (
                            <motion.article
                                key={product.title}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.12,
                                }}
                                transition={{
                                    duration: 0.7,
                                }}
                                className="border-t border-neutral-200"
                            >
                                <div className="grid min-h-[620px] items-center gap-12 py-20 md:grid-cols-2 md:gap-16 lg:gap-24">

                                    {/* Text */}
                                    <div
                                        className={
                                            imageRight
                                                ? "md:order-1"
                                                : "md:order-2"
                                        }
                                    >

                                        {/* Product number */}
                                        <div className="mb-7 flex items-center gap-4">
                                            <span className="text-xs font-medium text-neutral-400">
                                                {product.number}
                                            </span>

                                            <span className="h-px w-10 bg-neutral-300" />

                                            <span className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-400">
                                                {product.eyebrow}
                                            </span>
                                        </div>


                                        {/* Title */}
                                        <h3 className="text-4xl font-semibold tracking-[-0.045em] text-neutral-900 md:text-5xl lg:text-6xl">
                                            {product.title}
                                        </h3>


                                        {/* Description */}
                                        <p className="mt-6 max-w-lg text-base leading-7 text-neutral-500 md:text-lg">
                                            {product.description}
                                        </p>


                                        {/* Features */}
                                        <div className="mt-10 space-y-5">
                                            {product.features.map(
                                                (feature) => {
                                                    const Icon = feature.icon;

                                                    return (
                                                        <div
                                                            key={
                                                                feature.title
                                                            }
                                                            className="flex items-start gap-4"
                                                        >
                                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200">
                                                                <Icon
                                                                    size={16}
                                                                    strokeWidth={
                                                                        1.7
                                                                    }
                                                                    className="text-neutral-700"
                                                                />
                                                            </div>

                                                            <div>
                                                                <h4 className="text-sm font-medium text-neutral-900">
                                                                    {
                                                                        feature.title
                                                                    }
                                                                </h4>

                                                                <p className="mt-1 text-sm leading-5 text-neutral-400">
                                                                    {
                                                                        feature.text
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>


                                        {/* CTA */}
                                        <button className="group mt-10 inline-flex items-center gap-3 text-sm font-medium text-neutral-900">
                                            Explore {product.title}

                                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:translate-x-1 group-hover:border-neutral-900">
                                                <ArrowUpRight
                                                    size={15}
                                                />
                                            </span>
                                        </button>
                                    </div>


                                    {/* Image */}
                                    <div
                                        className={
                                            imageRight
                                                ? "md:order-2"
                                                : "md:order-1"
                                        }
                                    >
                                        <div className="relative flex h-[350px] items-center justify-center md:h-[480px] lg:h-[540px]">

                                            {/* Subtle number */}
                                            <span
                                                className="
                                                    absolute
                                                    bottom-0
                                                    right-0
                                                    select-none
                                                    text-[120px]
                                                    font-semibold
                                                    leading-none
                                                    tracking-[-0.08em]
                                                    text-neutral-100
                                                    md:text-[180px]
                                                "
                                            >
                                                {product.number}
                                            </span>

                                            <motion.img
                                                src={product.image}
                                                alt={product.title}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.92,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                viewport={{
                                                    once: true,
                                                }}
                                                whileHover={{
                                                    scale: 1.03,
                                                }}
                                                transition={{
                                                    duration: 0.7,
                                                    ease: [
                                                        0.22,
                                                        1,
                                                        0.36,
                                                        1,
                                                    ],
                                                }}
                                                className="relative z-10 h-full w-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}