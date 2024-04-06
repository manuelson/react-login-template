import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer";
import NavBar from "src/components/NavBar";

export function Layout() {

  return (
    <>
        <NavBar />
        <div className="px-2 py-2.5 sm:px-4 container mx-auto">
            <Outlet />
        </div>
        <Footer />
    </>
  )
}
