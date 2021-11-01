import React from "react";
import { Container, Navbar, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";

function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="py-3"
      >
        <Container>
          <Link to="/">
            <Navbar.Brand>Shopping store</Navbar.Brand>
          </Link>
          <Link to="/cart">
            <HiShoppingCart className="font30" />
            <Badge pill bg="dark" className="cart-badge">
              10
            </Badge>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
