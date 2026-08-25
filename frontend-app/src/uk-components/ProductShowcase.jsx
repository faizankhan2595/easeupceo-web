// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { ArrowUpRight, Check } from "lucide-react";

// const products = [
//     {
//         number: "01",
//         label: "INVENTORY",
//         title: "Smart inventory management",
//         description:
//             "Keep stock accurate, organized, and always under control with smarter inventory operations.",
//         image: "/inventory1.png",
//         features: ["Real-time stock", "Smart tracking", "Inventory analytics"],
//     },
//     {
//         number: "02",
//         label: "RMS",
//         title: "Complete retail management",
//         description:
//             "Manage sales, products, customers, and daily retail operations from one powerful platform.",
//         image: "/rms1.png",
//         features: ["Point of sale", "Sales analytics", "Product management"],
//     },
//     {
//         number: "03",
//         label: "HRMS",
//         title: "Modern human resource management",
//         description:
//             "Simplify employee management, attendance, leave, and everyday HR operations effortlessly.",
//         image: "/hrms1.png",
//         features: ["Employee management", "Attendance", "Leave management"],
//     },
// ];

// export default function ProductShowcase() {
//     const sectionRef = useRef(null);

//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start start", "end end"],
//     });

//     return (
//         <section
//             ref={sectionRef}
//             className="relative bg-[#f6f8f7]"
//             style={{ height: `${products.length * 80}vh` }}
//         >
//             <div className="sticky top-[72px] h-[calc(100vh-72px)] overflow-hidden">
//                 {/* Background decoration */}
//                 <div className="pointer-events-none absolute inset-0 overflow-hidden">
//                     <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#dcece5] opacity-50 blur-3xl" />

//                     <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#e7eee9] opacity-60 blur-3xl" />
//                 </div>

//                 <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 py-8 lg:px-10">
//                     {/* Heading */}
//                     <div className="mb-8 lg:mb-10">


//                         <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-[#15231d] sm:text-4xl lg:text-5xl">
//                             Three systems.
//                             <br />
//                             <span className="text-[#1c6b4d]">
//                                 One smarter business.
//                             </span>
//                         </h2>


//                     </div>

//                     {/* Showcase */}
//                     <div className="relative min-h-0 flex-1">
//                         {products.map((product, index) => (
//                             <ProductSlide
//                                 key={product.label}
//                                 product={product}
//                                 index={index}
//                                 total={products.length}
//                                 progress={scrollYProgress}
//                             />
//                         ))}
//                     </div>

//                     {/* Progress */}
//                     <ProgressIndicator progress={scrollYProgress} />
//                 </div>
//             </div>
//         </section>
//     );
// }

// function ProductSlide({ product, index, total, progress }) {
//     const start = index / total;
//     const middle = start + 0.5 / total;
//     const end = (index + 1) / total;

//     const opacity = useTransform(
//         progress,
//         [start, middle, end],
//         [0, 1, 0]
//     );

//     const x = useTransform(
//         progress,
//         [start, middle, end],
//         [
//             index === 0 ? -60 : 60,
//             0,
//             index === total - 1 ? 60 : -60,
//         ]
//     );

//     const scale = useTransform(
//         progress,
//         [start, middle, end],
//         [0.94, 1, 0.96]
//     );

//     const imageScale = useTransform(
//         progress,
//         [start, middle, end],
//         [0.92, 1, 1.04]
//     );

//     return (
//         <motion.div
//             style={{
//                 opacity,
//                 x,
//                 scale,
//                 pointerEvents: "none",
//             }}
//             className="absolute inset-0 flex items-center"
//         >
//             <div className="grid w-full items-center gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
//                 {/* Text */}
//                 <div className="order-2 lg:order-1">
//                     <div className="mb-5 flex items-center gap-3">
//                         <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1c6b4d] text-xs font-semibold text-white">
//                             {product.number}
//                         </span>

//                         <span className="text-xs font-bold tracking-[0.18em] text-[#1c6b4d]">
//                             {product.label}
//                         </span>
//                     </div>

//                     <h3 className="max-w-lg text-3xl font-semibold leading-[1.05] tracking-tight text-[#16221d] sm:text-4xl lg:text-5xl">
//                         {product.title}
//                     </h3>

//                     <p className="mt-5 max-w-md text-sm leading-7 text-[#68736e] sm:text-base">
//                         {product.description}
//                     </p>

//                     {/* Features */}
//                     <div className="mt-7 space-y-3">
//                         {product.features.map((feature) => (
//                             <div
//                                 key={feature}
//                                 className="flex items-center gap-3 text-sm text-[#34423b]"
//                             >
//                                 <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#dcece5]">
//                                     <Check
//                                         size={12}
//                                         strokeWidth={2.5}
//                                         className="text-[#1c6b4d]"
//                                     />
//                                 </span>

//                                 {feature}
//                             </div>
//                         ))}
//                     </div>

//                     {/* CTA */}
//                     <button className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1c6b4d]">
//                         Explore {product.label}

//                         <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#cbdad3] transition-all group-hover:bg-[#1c6b4d] group-hover:text-white">
//                             <ArrowUpRight
//                                 size={15}
//                                 className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                             />
//                         </span>
//                     </button>
//                 </div>

//                 {/* Image */}
//                 <motion.div
//                     style={{ scale: imageScale }}
//                     className="order-1 lg:order-2"
//                 >
//                     <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white p-2 shadow-[0_30px_80px_rgba(27,61,47,0.14)] sm:p-3">
//                         <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] bg-[#edf3f0]">
//                             <img
//                                 src={product.image}
//                                 alt={product.title}
//                                 className="absolute inset-0 h-full w-full object-cover"
//                             />

//                             <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0d4d38]/10 via-transparent to-white/10" />
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </motion.div>
//     );
// }

// function ProgressIndicator({ progress }) {
//     const active1 = useTransform(progress, [0, 0.32], [1, 0]);

//     const active2 = useTransform(
//         progress,
//         [0.28, 0.36, 0.64, 0.72],
//         [0, 1, 1, 0]
//     );

//     const active3 = useTransform(
//         progress,
//         [0.66, 1],
//         [0, 1]
//     );

//     const items = [
//         {
//             label: "Inventory",
//             active: active1,
//         },
//         {
//             label: "RMS",
//             active: active2,
//         },
//         {
//             label: "HRMS",
//             active: active3,
//         },
//     ];

//     return (
//         <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col gap-5 lg:flex">
//             {items.map((item, index) => (
//                 <div
//                     key={item.label}
//                     className="flex items-center gap-3"
//                 >
//                     <motion.span
//                         style={{ opacity: item.active }}
//                         className="h-1.5 w-1.5 rounded-full bg-[#1c6b4d]"
//                     />

//                     <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8a9690]">
//                         {item.label}
//                     </span>

//                     {index !== items.length - 1 && (
//                         <span className="absolute ml-[3px] mt-10 h-5 w-px bg-[#d6dfda]" />
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const products = [
    {
        number: "01",
        label: "INVENTORY",
        title: "Smart inventory management",
        description:
            "Keep stock accurate, organized, and always under control with smarter inventory operations.",
        image: "/inventory1.png",
        features: [
            "Real-time stock",
            "Smart tracking",
            "Inventory analytics",
        ],
    },
    {
        number: "02",
        label: "RMS",
        title: "Complete retail management",
        description:
            "Manage sales, products, customers, and daily retail operations from one powerful platform.",
        image: "/rms1.png",
        features: [
            "Point of sale",
            "Sales analytics",
            "Product management",
        ],
    },
    {
        number: "03",
        label: "HRMS",
        title: "Modern human resource management",
        description:
            "Simplify employee management, attendance, leave, and everyday HR operations effortlessly.",
        image: "/hrms1.png",
        features: [
            "Employee management",
            "Attendance",
            "Leave management",
        ],
    },
];

export default function ProductShowcase() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            ref={sectionRef}
            className="relative bg-slate-50"
            style={{
                height: `${products.length * 100}dvh`,
            }}
        >
            <div className="sticky top-0 h-dvh overflow-hidden">
                {/* Background */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div
                        className="
                            absolute
                            -left-40
                            top-1/3
                            h-[350px]
                            w-[350px]
                            rounded-full
                            bg-brand-50
                            opacity-50
                            blur-3xl
                            sm:h-[450px]
                            sm:w-[450px]
                            lg:h-[550px]
                            lg:w-[550px]
                        "
                    />

                    <div
                        className="
                            absolute
                            -right-40
                            bottom-0
                            h-[350px]
                            w-[350px]
                            rounded-full
                            bg-indigo-50/40
                            opacity-60
                            blur-3xl
                            sm:h-[450px]
                            sm:w-[450px]
                            lg:h-[550px]
                            lg:w-[550px]
                        "
                    />
                </div>

                <div
                    className="
                        relative
                        mx-auto
                        flex
                        h-full
                        max-w-[1440px]
                        flex-col
                        px-5
                        pt-[82px]
                        pb-5
                        sm:px-7
                        sm:pt-[92px]
                        sm:pb-6
                        lg:px-10
                        lg:pt-[96px]
                        lg:pb-7
                        xl:px-12
                    "
                >
                    {/* ================= HEADING ================= */}
                    <div
                        className="
                            relative
                            z-10
                            shrink-0
                            text-center
                            pb-4
                            sm:pb-5
                            lg:pb-6

                            max-[800px]:pb-3
                        "
                    >
                        <h2
                            className="
                                mx-auto
                                max-w-3xl
                                text-[30px]
                                font-semibold
                                leading-[1.05]
                                tracking-[-0.04em]
                                text-slate-900

                                sm:text-[38px]
                                md:text-[44px]
                                lg:text-[48px]
                                xl:text-[54px]

                                max-[1100px]:max-[800px]:text-[38px]
                            "
                        >
                            Three systems.
                            <br />

                            <span className="text-brand-600">
                                One smarter business.
                            </span>
                        </h2>
                    </div>

                    {/* ================= SHOWCASE ================= */}
                    <div
                        className="
                            relative
                            min-h-0
                            flex-1
                        "
                    >
                        {products.map((product, index) => (
                            <ProductSlide
                                key={product.label}
                                product={product}
                                index={index}
                                total={products.length}
                                progress={scrollYProgress}
                            />
                        ))}
                    </div>

                    <ProgressIndicator
                        progress={scrollYProgress}
                    />
                </div>
            </div>
        </section>
    );
}

function ProductSlide({
    product,
    index,
    total,
    progress,
}) {
    const start = index / total;
    const middle = start + 0.5 / total;
    const end = (index + 1) / total;

    const opacity = useTransform(
        progress,
        [start, middle, end],
        [0, 1, 0]
    );

    const x = useTransform(
        progress,
        [start, middle, end],
        [
            index === 0 ? -50 : 50,
            0,
            index === total - 1 ? 50 : -50,
        ]
    );

    const scale = useTransform(
        progress,
        [start, middle, end],
        [0.96, 1, 0.98]
    );

    const imageScale = useTransform(
        progress,
        [start, middle, end],
        [0.96, 1, 1.03]
    );

    return (
        <motion.div
            style={{
                opacity,
                x,
                scale,
                pointerEvents: "none",
            }}
            className="
                absolute
                inset-0
                flex
                items-center
            "
        >
            <div
                className="
                    grid
                    w-full
                    items-center
                    gap-5

                    sm:gap-7

                    lg:grid-cols-[0.78fr_1.22fr]
                    lg:gap-10

                    xl:gap-14

                    /* Short laptop */
                    max-[1100px]:max-[800px]:gap-4
                "
            >
                {/* ================= TEXT ================= */}
                <div className="order-2 lg:order-1">
                    <div
                        className="
                            mb-3
                            flex
                            items-center
                            gap-2.5

                            sm:mb-4
                            sm:gap-3

                            max-[800px]:mb-2
                        "
                    >
                        <span
                            className="
                                flex
                                h-8
                                w-8
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-brand-600
                                text-[10px]
                                font-semibold
                                text-white

                                sm:h-9
                                sm:w-9
                                sm:text-xs

                                max-[800px]:h-7
                                max-[800px]:w-7
                            "
                        >
                            {product.number}
                        </span>

                        <span
                            className="
                                text-[10px]
                                font-bold
                                tracking-[0.16em]
                                text-brand-600

                                sm:text-xs
                            "
                        >
                            {product.label}
                        </span>
                    </div>

                    <h3
                        className="
                            max-w-xl
                            text-[26px]
                            font-semibold
                            leading-[1.06]
                            tracking-[-0.03em]
                            text-slate-900

                            sm:text-3xl
                            md:text-4xl
                            lg:text-[42px]
                            xl:text-[48px]

                            max-[1100px]:max-[800px]:text-[30px]
                        "
                    >
                        {product.title}
                    </h3>

                    <p
                        className="
                            mt-3
                            max-w-md
                            text-[13px]
                            leading-6
                            text-slate-600

                            sm:mt-4
                            sm:text-sm
                            sm:leading-7

                            lg:text-base

                            max-[800px]:mt-2
                            max-[800px]:leading-5
                        "
                    >
                        {product.description}
                    </p>

                    {/* Features */}
                    <div
                        className="
                            mt-4
                            space-y-2.5

                            sm:mt-5

                            lg:mt-6

                            max-[800px]:mt-3
                            max-[800px]:space-y-1.5
                        "
                    >
                        {product.features.map((feature) => (
                            <div
                                key={feature}
                                className="
                                    flex
                                    items-center
                                    gap-2.5
                                    text-xs
                                    text-slate-700

                                    sm:text-sm
                                "
                            >
                                <span
                                    className="
                                        flex
                                        h-5
                                        w-5
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-brand-50

                                        max-[800px]:h-[18px]
                                        max-[800px]:w-[18px]
                                    "
                                >
                                    <Check
                                        size={11}
                                        strokeWidth={2.5}
                                        className="text-brand-600"
                                    />
                                </span>

                                {feature}
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <button
                        className="
                            group
                            mt-5
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            text-brand-600

                            lg:mt-6

                            max-[800px]:mt-3
                        "
                    >
                        Explore {product.label}

                        <span
                            className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-slate-200
                                transition-all
                                group-hover:bg-brand-600
                                group-hover:text-white
                            "
                        >
                            <ArrowUpRight
                                size={15}
                                className="
                                    transition-transform
                                    group-hover:translate-x-0.5
                                    group-hover:-translate-y-0.5
                                "
                            />
                        </span>
                    </button>
                </div>

                {/* ================= IMAGE ================= */}
                <motion.div
                    style={{
                        scale: imageScale,
                    }}
                    className="
                        order-1
                        w-full
                        lg:order-2
                    "
                >
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[20px]
                            border
                            border-white/80
                            bg-white
                            p-1.5
                            shadow-[0_20px_60px_rgba(30,41,59,0.08)]

                            sm:rounded-[24px]
                            sm:p-2

                            lg:rounded-[28px]
                            lg:p-3

                            /* Short screen */
                            max-[800px]:rounded-[18px]
                            max-[800px]:p-1.5
                        "
                    >
                        <div
                            className="
                                relative
                                aspect-[16/10]
                                overflow-hidden
                                rounded-[15px]
                                bg-slate-100

                                sm:rounded-[19px]
                                lg:rounded-[22px]

                                max-[600px]:aspect-[16/8.5]
                                max-[600px]:rounded-[14px]
                            "
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="
                                    absolute
                                    inset-0
                                    h-full
                                    w-full
                                    object-cover
                                "
                            />

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-0
                                    bg-gradient-to-tr
                                    from-brand-600/10
                                    via-transparent
                                    to-white/10
                                "
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

function ProgressIndicator({ progress }) {
    const active1 = useTransform(
        progress,
        [0, 0.32],
        [1, 0]
    );

    const active2 = useTransform(
        progress,
        [0.28, 0.36, 0.64, 0.72],
        [0, 1, 1, 0]
    );

    const active3 = useTransform(
        progress,
        [0.66, 1],
        [0, 1]
    );

    const items = [
        {
            label: "Inventory",
            active: active1,
        },
        {
            label: "RMS",
            active: active2,
        },
        {
            label: "HRMS",
            active: active3,
        },
    ];

    return (
        <div
            className="
                absolute
                right-4
                top-1/2
                hidden
                -translate-y-1/2
                flex-col
                gap-5

                lg:flex
                xl:right-5
            "
        >
            {items.map((item, index) => (
                <div
                    key={item.label}
                    className="relative flex items-center gap-3"
                >
                    <motion.span
                        style={{
                            opacity: item.active,
                        }}
                        className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-brand-600
                        "
                    />

                    <span
                        className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            text-slate-400
                        "
                    >
                        {item.label}
                    </span>

                    {index !== items.length - 1 && (
                        <span
                            className="
                                absolute
                                left-[2px]
                                top-4
                                h-5
                                w-px
                                bg-slate-200
                            "
                        />
                    )}
                </div>
            ))}
        </div>
    );
}