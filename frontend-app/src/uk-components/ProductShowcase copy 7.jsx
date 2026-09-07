"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Boxes,
    BarChart3,
    PackageCheck,
    ShoppingCart,
    Receipt,
    LayoutGrid,
    Users,
    CalendarCheck,
    WalletCards,
} from "lucide-react";
import { href } from "react-router-dom";

const products = [
    {
        id: "inventory",
        eyebrow: "Inventory Management",
        title: "Inventory",
        description:
            "Take complete control of your inventory from one intelligent workspace. Track stock, manage products, monitor movement and make better purchasing decisions.",
        image: "/posmachine3.png",
        href: "/inventory-management",

        features: [
            {
                icon: Boxes,
                title: "Real-time stock",
                text: "Always know what is available.",
            },
            {
                icon: PackageCheck,
                title: "Smart purchasing",
                text: "Keep your stock levels balanced.",
            },
            {
                icon: BarChart3,
                title: "Inventory insights",
                text: "Turn stock data into useful decisions.",
            },
        ],

        stats: [
            "Stock tracking",
            "Purchase management",
            "Product analytics",
        ],
    },

    {
        id: "rms",
        eyebrow: "Restaurant Management",
        title: "RMS",
        description:
            "Everything your restaurant needs to run smoothly. Connect orders, tables, billing and daily operations in one simple and powerful system.",
        image: "/rmspos1.png",
        href: "/restaurant-management",

        features: [
            {
                icon: ShoppingCart,
                title: "Order management",
                text: "Keep every order moving.",
            },
            {
                icon: LayoutGrid,
                title: "Table management",
                text: "Manage your floor with clarity.",
            },
            {
                icon: Receipt,
                title: "Simple billing",
                text: "Fast and reliable checkout.",
            },
        ],

        stats: [
            "Order tracking",
            "Table operations",
            "POS & billing",
        ],
    },

    {
        id: "hrms",
        eyebrow: "Human Resource Management System",
        title: "HRMS",
        description:
            "Bring your people and HR operations together. Manage employees, attendance, leave and payroll while giving your team a better workplace experience.",
        image: "/inventorypos.png",
        href: "/hrms",

        features: [
            {
                icon: Users,
                title: "Employee management",
                text: "Keep employee information organized.",
            },
            {
                icon: CalendarCheck,
                title: "Attendance & leave",
                text: "Track time and leave effortlessly.",
            },
            {
                icon: WalletCards,
                title: "Payroll management",
                text: "Keep payroll simple and transparent.",
            },
        ],

        stats: [
            "Employee management",
            "Attendance tracking",
            "Payroll operations",
        ],
    },
];

export default function ProductsShowcaseNew1() {
    return (
        <section id="products" className="scroll-mt-24 bg-white py-24 md:py-32 lg:py-36">
            <div className="mx-auto max-w-7xl px-6">

                {/* ================= HEADER ================= */}

                <div className="mb-20 max-w-4xl md:mb-24">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        className="mb-6 flex items-center gap-3"
                    >
                        <span className="h-px w-8 bg-linear-to-r from-brand-600 to-brand-500" />

                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                            Our Products
                        </span>
                    </motion.div>


                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-neutral-900 md:text-6xl lg:text-7xl"
                    >
                        Powerful systems.
                        <br />

                        <span className="text-brand-600">
                            Built around your business.
                        </span>
                    </motion.h2>


                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                        }}
                        className="mt-7 max-w-2xl text-base leading-7 text-neutral-500 md:text-lg"
                    >
                        From inventory and restaurant operations to
                        people management, Worklynx gives your business
                        the tools to operate smarter every day.
                    </motion.p>
                </div>


                {/* ================= PRODUCTS ================= */}

                <div>
                    {products.map((product, index) => {

                        const imageRight = index % 2 === 0;

                        return (
                            <motion.article
                                key={product.title}
                                id={product.id}
                                initial={{
                                    opacity: 0,
                                    y: 50,
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
                                className="scroll-mt-24 border-t border-neutral-200"
                            >

                                <div
                                    className={`
                                        grid
                                        items-center
                                        gap-4
                                        py-10
                                        md:grid-cols-2
                                        md:gap-16
                                        lg:gap-24
                                        lg:py-28
                                    `}
                                >

                                    {/* ================= TEXT ================= */}

                                    <div
                                        className={
                                            imageRight
                                                ? "md:order-1"
                                                : "md:order-2"
                                        }
                                    >

                                        {/* Title */}

                                        <h3 className="max-w-xl text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-neutral-900 sm:text-4xl md:text-5xl">
                                            {product.eyebrow}
                                        </h3>


                                        {/* Description */}

                                        <p className="mt-5 max-w-xl text-base leading-7 text-neutral-500 md:mt-6 md:text-lg md:leading-8">
                                            {product.description}
                                        </p>


                                        {/* ================= FEATURES ================= */}

                                        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-7">

                                            {product.features.map(
                                                (feature) => {

                                                    const Icon =
                                                        feature.icon;

                                                    return (
                                                        <div
                                                            key={
                                                                feature.title
                                                            }
                                                            className="group"
                                                        >

                                                            {/* Icon */}

                                                            <div
                                                                className="
                                                                    mb-3
                                                                    flex
                                                                    h-10
                                                                    w-10
                                                                    items-center
                                                                    justify-center
                                                                    rounded-full
                                                                    border
                                                                    border-neutral-200
                                                                    bg-linear-to-r
                                                                    from-brand-600/10
                                                                    to-brand-500/10
                                                                    transition-all
                                                                    duration-300
                                                                    group-hover:border-brand-500/30
                                                                "
                                                            >

                                                                <Icon
                                                                    size={17}
                                                                    strokeWidth={
                                                                        1.6
                                                                    }
                                                                    className="text-brand-600"
                                                                />

                                                            </div>


                                                            {/* Feature title */}

                                                            <h4 className="text-sm font-medium text-neutral-900">
                                                                {
                                                                    feature.title 
                                                                }
                                                            </h4>


                                                            {/* Feature description */}

                                                            <p className="mt-1 text-xs leading-5 text-neutral-400">
                                                                {
                                                                    feature.text
                                                                }
                                                            </p>

                                                        </div>
                                                    );
                                                }
                                            )}

                                        </div>


                                        {/* ================= PRODUCT POINTS ================= */}

                                        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-neutral-200 pt-6">

                                            {product.stats.map(
                                                (stat) => (
                                                    <div
                                                        key={stat}
                                                        className="flex items-center gap-2 text-xs text-neutral-500"
                                                    >

                                                        <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-brand-600 to-brand-500" />

                                                        {stat}

                                                    </div>
                                                )
                                            )}

                                        </div>


                                        {/* ================= CTA ================= */}

                                        <button
                                            className="
                                                group
                                                mt-9
                                                inline-flex
                                                items-center
                                                gap-3
                                                text-sm
                                                font-medium
                                                text-neutral-900
                                            "
                                            onClick={() => {
                                                window.location.href = product.href;
                                            }}
                                        >

                                            Explore {product.title}

                                            <span
                                                className="
                                                    flex
                                                    h-9
                                                    w-9
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-linear-to-r
                                                    from-brand-600
                                                    to-brand-500
                                                    text-white
                                                    transition-all
                                                    duration-300
                                                    group-hover:translate-x-1
                                                "
                                            >
                                                <ArrowUpRight
                                                    size={15}
                                                />
                                            </span>

                                        </button>

                                    </div>


                                    {/* ================= IMAGE ================= */}

                                    <div
                                        className={
                                            imageRight
                                                ? "md:order-2"
                                                : "md:order-1"
                                        }
                                    >

                                        <div className="relative flex h-[360px] items-center justify-center md:h-[480px] lg:h-[560px]">

                                            {/* Subtle brand glow */}

                                            <div
                                                className="
                                                    absolute
                                                    h-[260px]
                                                    w-[260px]
                                                    rounded-full
                                                    bg-linear-to-r
                                                    from-brand-600/10
                                                    to-brand-500/10
                                                    blur-[90px]
                                                "
                                            />


                                           


                                            {/* Product image */}

                                            <motion.img
                                                src={product.image}
                                                alt={product.title}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.9,
                                                    y: 20,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    scale: 1,
                                                    y: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                }}
                                                whileHover={{
                                                    scale: 1.035,
                                                }}
                                                transition={{
                                                    duration: 0.75,
                                                    ease: [
                                                        0.22,
                                                        1,
                                                        0.36,
                                                        1,
                                                    ],
                                                }}
                                                className="
                                                    relative
                                                    z-10
                                                    h-full
                                                    w-full
                                                    object-contain
                                                "
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