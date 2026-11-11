import { Package, Clock, Users, UtensilsCrossed } from "lucide-react";
import colabToolsLogo from "@/assets/clients/colabtools.png";
import dkhoonLogo from "@/assets/clients/dkhoon-emirates.png";
import forkAndFlameTestLogo from "@/assets/clients/dev-placeholders/fork-and-flame.svg";
import ukProductionTestLogo from "@/assets/clients/dev-placeholders/uk-production-house.svg";

// TEST ONLY: made-up logos for clients we don't have a real logo for yet.
// They load under `npm run dev` only; production builds fall back to the icon.
// Replace with the real logo files before relying on these cards.
const devOnly = (logo) => (import.meta.env.DEV ? logo : undefined);

// Client projects shown on the homepage. Each card links to the product used.
// `logo` is optional; without one the card shows the solution's icon.
export const PROJECTS = [
  {
    client: "UK Production House",
    logo: devOnly(ukProductionTestLogo),
    solution: "Inventory & Sales Management",
    summary:
      "Streamlining production operations with a unified platform for inventory tracking, sales management, and real-time business visibility.",
    icon: Package,
    to: "/inventory-management",
  },
  {
    client: "ColabTools",
    logo: colabToolsLogo,
    solution: "Payroll & Attendance Management",
    summary:
      "Empowering smarter workforce management with seamless attendance tracking and automated payroll processing.",
    icon: Clock,
    to: "/hrms",
  },
  {
    client: "Dkhoon Emirates",
    logo: dkhoonLogo,
    solution: "End-to-End HRMS",
    summary:
      "Transforming the employee lifecycle with a comprehensive HRMS, managing everything from recruitment to retirement in one seamless platform.",
    icon: Users,
    to: "/hrms",
  },
  {
    client: "Fork & Flame",
    logo: devOnly(forkAndFlameTestLogo),
    solution: "Restaurant Management System",
    summary:
      "Optimizing restaurant operations with integrated invoicing, order management, and recipe management — all in one powerful solution.",
    icon: UtensilsCrossed,
    to: "/restaurant-management",
  },
];
