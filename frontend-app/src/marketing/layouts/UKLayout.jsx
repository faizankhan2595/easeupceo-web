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

  // Clearing the hash lets a second click on the same #contact-sales link
  // fire hashchange again — otherwise the modal only ever opens once.
  const closeContact = () => {
    setContactOpen(false);
    if (window.location.hash === "#contact-sales" || window.location.hash === "#contact") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <UKNavbar onContactClick={() => setContactOpen(true)} />
      <main className="flex-1 overflow-x-clip pt-[4rem] sm:pt-[4.5rem] lg:pt-[5rem]">
        <Outlet />
      </main>
      <UKFooter onContactClick={() => setContactOpen(true)} />
      <ContactSalesModal
        open={contactOpen}
        onClose={closeContact}
      />
    </div>
  );
}
