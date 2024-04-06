import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar fluid rounded className="mx-auto container">
      <Link to={"/"}>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ReactLogin</span>
      </Link>
      <div className="flex md:order-2">
        <NavLink to={"/login"}><Button>Get started</Button></NavLink>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to={"/"}>
          Home
        </NavLink>
        <NavLink to={"/"}>TBD</NavLink>
        <NavLink to={"/"}>TBD</NavLink>
        <NavLink to={"/"}>TBD</NavLink>
        <NavLink to={"/"}>TBD</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
