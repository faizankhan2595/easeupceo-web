import { useEffect, useState } from "react";
import {
    Clock,
    CalendarCheck,
    Banknote,
    UserCheck,
    Award,
    Users,
    Smartphone,
    ShieldCheck,
    BarChart3,
} from "lucide-react";

import DemoModal from "@/uk-components/DemoModal";
import Pricing from "@/uk-components/Pricing";
import ProductHero from "@/uk-components/product/ProductHero";
import ModuleRows from "@/uk-components/product/ModuleRows";
import FeatureGrid from "@/uk-components/product/FeatureGrid";
import CrossSell from "@/uk-components/product/CrossSell";
import ProductCta from "@/uk-components/product/ProductCta";
import { Section, SectionHeader } from "@/uk-components/product/Section";

const modules = [
    {
        title: "Know who is working, right now",
        description:
            "Live attendance from web, mobile or kiosk, with GPS-verified clock-ins and timesheets that build themselves.",
        image: "/timeAndAttendance.png",
        imageAlt: "Worklynx attendance and workforce analytics dashboard",
        points: [
            "GPS and selfie-verified clock in and out",
            "Shift rosters, overtime and lateness alerts",
            "Automated timesheets ready for payroll",
        ],
    },
    {
        title: "Leave that follows the rules on its own",
        description:
            "Statutory entitlement, custom accrual policies and team conflict warnings, so managers approve with the full picture.",
        image: "/leaveManagement.png",
        imageAlt: "Worklynx leave management and approvals screen",
        points: [
            "28-day statutory holiday tracking",
            "SSP and statutory rules built in",
            "One-tap approvals with balance visibility",
        ],
    },
    {
        title: "Payroll that files with HMRC",
        description:
            "Run PAYE RTI payroll from the hours already recorded — deductions, pensions and payslips handled in the same pass.",
        image: "/payrol.png",
        imageAlt: "Worklynx payroll batch console with HMRC PAYE submissions",
        points: [
            "HMRC PAYE RTI submissions",
            "Workplace pension and statutory deductions",
            "Digital payslips in the employee portal",
        ],
    },
];

const features = [
    {
        icon: Clock,
        title: "GPS & mobile attendance",
        desc: "Geofenced clock-in, facial verification and shift rosters for office and remote workers.",
    },
    {
        icon: Banknote,
        title: "HMRC PAYE RTI payroll",
        desc: "Salary processing, statutory deductions, pension calculations and digital payslips.",
    },
    {
        icon: CalendarCheck,
        title: "Statutory holiday & leave",
        desc: "Statutory tracking, holiday overlays, custom accrual policies and instant approvals.",
    },
    {
        icon: UserCheck,
        title: "Applicant tracking",
        desc: "Job postings through to shortlisting, interview scheduling and offer letters.",
    },
    {
        icon: Award,
        title: "Performance & OKRs",
        desc: "Goal setting, KPI tracking, 360-degree feedback and appraisal workflows.",
    },
    {
        icon: Users,
        title: "Employee records",
        desc: "Contracts, right-to-work documents, emergency contacts and org charts in one secure vault.",
    },
    {
        icon: Smartphone,
        title: "Employee self-service",
        desc: "Payslips, leave requests, shift swaps and personal updates from iOS and Android.",
    },
    {
        icon: ShieldCheck,
        title: "Compliance & security",
        desc: "GDPR enforcement, AES-256 encryption, audit logs and role-based permissions.",
    },
    {
        icon: BarChart3,
        title: "Workforce analytics",
        desc: "Cost per hire, headcount retention, turnover insight and executive reporting.",
    },
];

const crossSell = [
    {
        to: "/inventory-management",
        title: "Inventory Management",
        description:
            "Stock, purchasing and suppliers, staffed by the same employee records and permissions.",
    },
    {
        to: "/restaurant-management",
        title: "Restaurant Management",
        description:
            "POS, tables and kitchen tickets, with clock-ins and tips feeding straight into payroll.",
    },
];

export default function UKHRMSPage() {
    const [demoOpen, setDemoOpen] = useState(false);

    useEffect(() => {
        document.title = "HRMS & HMRC PAYE Payroll Software | Worklynx";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">

            <ProductHero
                breadcrumb="HRMS & Payroll"
                title="HR, attendance and payroll"
                highlight="in one place."
                lead="Manage your people from onboarding to payday — GPS attendance, statutory leave, HMRC PAYE RTI payroll and self-service, without a spreadsheet in sight."
                image="/inventorypos.png"
                imageAlt="Worklynx HRMS dashboard showing attendance, leave and approvals"
                points={["HMRC PAYE RTI", "GDPR compliant", "Employee self-service"]}
                primaryCta={{ label: "Book a demo", href: "#contact-sales" }}
                secondaryCta={{ label: "Watch demo", onClick: () => setDemoOpen(true) }}
            />

            <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />

            <Section>
                <SectionHeader
                    eyebrow="How it works"
                    title="One record per employee,"
                    highlight="all the way to payday."
                    lead="Hours recorded on the floor become the timesheet, the timesheet becomes the payroll run, and the payslip lands back in the employee's portal."
                />

                <ModuleRows modules={modules} framed />
            </Section>

            <Section>
                <SectionHeader
                    eyebrow="Capabilities"
                    title="Everything an HR team"
                    highlight="runs in a month."
                />

                <FeatureGrid features={features} />
            </Section>

            <Pricing />

            <Section>
                <SectionHeader
                    eyebrow="One platform"
                    title="Works with the rest"
                    highlight="of Worklynx."
                />

                <CrossSell links={crossSell} />
            </Section>

            <ProductCta
                title="See it running on your own headcount."
                lead="Bring your shift patterns and leave policies — we will show you the payroll run they produce."
            />
        </div>
    );
}
