import React from "react";
import { Container, Navbar, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { connect } from "react-redux";

function NavBar({ quantity }) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
        className="p-3"
      >
        <Container>
          <Link to="/" className="site_name">
            <Navbar.Brand>Shopping Time</Navbar.Brand>
          </Link>
          <Link to="/cart" className="theme-color">
            <HiShoppingCart className="font30" />
            <Badge pill bg="secondary" className="cart-badge">
              {quantity}
            </Badge>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    quantity: state.totalQuantities,
  };
};

export default connect(mapStateToProps)(NavBar);
