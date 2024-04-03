import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer";
import NavBar from "src/components/NavBar";

export function Layout() {

  return (
    <>
        <NavBar />
        <Container className="mt-5">
            <Outlet />
        </Container>
        <Footer />
    </>
  )
}
