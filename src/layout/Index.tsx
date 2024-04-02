import { Outlet } from "react-router-dom";

export function Layout() {

  return (
    <>
        <header>
            header
        </header>
        <main className="mt-5">
            <Outlet />
        </main>
        <footer>
            Footer
        </footer>
    </>
  )
}
