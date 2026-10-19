// UK homepage FAQ. Rendered by uk/components/HomeFAQ.jsx and emitted as
// FAQPage JSON-LD by seo/routes.js — keep both in sync by editing only here.
// Every answer restates a claim already made on the product pages or footer.

export const HOME_FAQS = [
  {
    q: "What is Worklynx?",
    a: "Worklynx is one platform for running a UK business: HR and HMRC payroll, inventory and EPOS, and restaurant management, all sharing the same employee records and permissions.",
  },
  {
    q: "Does Worklynx run HMRC-compliant payroll?",
    a: "Yes. Payroll runs PAYE with Real Time Information (RTI) submissions to HMRC, alongside GPS attendance, statutory leave and employee self-service.",
    link: { to: "/hrms", label: "HR and payroll software" },
  },
  {
    q: "How much does Worklynx cost?",
    a: "Plans are priced per employee per month: Essentials £6, Professional £9 and Advanced £12. Billing follows your team size, and you can switch plans at any time.",
    link: { to: "/pricing", label: "Compare plans" },
  },
  {
    q: "Is Worklynx suitable for restaurants and hospitality?",
    a: "Yes. Restaurant management covers orders, tables, kitchen tickets, billing and QR table ordering, and staff clock-ins and tips feed straight into payroll.",
    link: { to: "/restaurant-management", label: "Restaurant EPOS" },
  },
  {
    q: "Can I manage stock across more than one location?",
    a: "Yes. Inventory tracks stock across every location in real time, automates purchasing, and keeps sales, returns and transfers in one ledger.",
    link: { to: "/inventory-management", label: "Stock control software" },
  },
  {
    q: "Is there a free trial?",
    a: "Yes. Every new account starts with a 7-day free trial with every module unlocked, and no credit card is required.",
    link: { to: "/signup", label: "Start your free trial" },
  },
  {
    q: "Is my data secure and GDPR compliant?",
    a: "Worklynx is GDPR and ICO compliant and hosted in the UK, with AES-256 encryption, audit logs and role-based permissions.",
  },
  {
    q: "Is there a mobile app for staff?",
    a: "Yes. Employees can view payslips, request leave, swap shifts and update their details from iOS and Android.",
  },
];
