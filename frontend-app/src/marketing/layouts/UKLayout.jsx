import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import UKNavbar from "@/uk-components/Navbar";
import UKFooter from "@/uk-components/Footer";
import ContactSalesModal from "@/uk-components/ContactSalesModal";

export default function UKLayout() {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#contact-sales" || window.location.hash === "#contact") {
        setContactOpen(true);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <UKNavbar onContactClick={() => setContactOpen(true)} />
      <main className="flex-1 overflow-x-clip pt-[4.5rem]">
        <Outlet />
      </main>
      <UKFooter onContactClick={() => setContactOpen(true)} />
      <ContactSalesModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
