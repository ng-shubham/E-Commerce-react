import React from "react";
import {
  Col,
  Container,
  Row,
  Table,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { HiMinus, HiPlus } from "react-icons/hi";
import {
  decQuantities,
  incQuantities,
  removeProduct,
} from "../../Redux/Actions/productActions";

function Cart({ products, totalQuantities, totalPrice }) {
  const dispatch = useDispatch();
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col xs={12} sm={12} md={8} lg={8} xl={9} xxl={9}>
            <Table responsive className="mt-5 cart-table">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Inc/Dec</th>
                  <th>Total price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product.id} className="cart-row">
                      <td>
                        <img
                          src={product.image}
                          alt="product-img"
                          className="cart-img"
                        />
                      </td>
                      <td>
                        <h6>{product.title.substring(0, 30) + "..."}</h6>
                      </td>
                      <td>{product.price.toFixed(2)}</td>
                      <td>
                        <ButtonGroup size="sm">
                          <Button
                            variant="dark"
                            onClick={() => dispatch(decQuantities(product.id))}
                          >
                            <HiMinus />
                          </Button>
                          <Button disabled variant="dark" className="px-3">
                            {product.quantity}
                          </Button>
                          <Button
                            variant="dark"
                            onClick={() => dispatch(incQuantities(product.id))}
                          >
                            <HiPlus />
                          </Button>
                        </ButtonGroup>
                      </td>
                      <td>{(product.price * product.quantity).toFixed(2)}</td>
                      <td>
                        <Button
                          variant="outline-dark"
                          size="sm"
                          onClick={() => dispatch(removeProduct(product))}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} xl={3} xxl={3}>
            <Table className="mt-5">
              <thead>
                <tr>
                  <th>Summary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total items: </td>
                  <td>{totalQuantities}</td>
                </tr>
                <tr>
                  <td>Total Price: </td>
                  <td>{totalPrice.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan="2" className="p-0">
                    <Button variant="outline-dark" className="w-100">
                      CHECKOUT
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    totalQuantities: state.totalQuantities,
    totalPrice: state.totalPrice,
  };
};

export default connect(mapStateToProps)(Cart);
