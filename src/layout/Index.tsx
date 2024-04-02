import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer";
import NavBar from "src/components/NavBar";

export function Layout() {

  return (
    <>
        <header>
            <NavBar />
        </header>
        <main className="mt-5 container">
            <Outlet />
        </main>

        <Footer />

    </>
  )
}
