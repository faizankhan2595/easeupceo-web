import { Outlet } from "react-router-dom";
import IndiaNavbar from "@/marketing/india/layout/Navbar";
import IndiaFooter from "@/marketing/india/layout/Footer";

export default function IndiaLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <IndiaNavbar />
      <main className="flex-1 overflow-x-hidden">
        <Outlet />
      </main>
      <IndiaFooter />
    </div>
  );
}
