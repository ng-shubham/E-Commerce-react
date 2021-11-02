import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";

import { Container, Card, Button, Col, Row, Spinner } from "react-bootstrap";

function Home() {
  const [productsState, setProductsState] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProductsState(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Banner />
      <Container className="my-5">
        <Row>
          {loading ? (
            <div className="d-flex justify-content-center align-items-center">
              <Spinner size="sm" animation="border" />
              &nbsp; Loading...
            </div>
          ) : (
            productsState.map((product) => {
              return (
                <Col xs={12} md={6} lg={4} xl={3} key={product.id}>
                  <Card className="product-card">
                    <Card.Img
                      variant="top"
                      src={product.image}
                      className="productImg"
                    />
                    <hr className="mb-0" />
                    <Card.Body>
                      <Card.Title>
                        {product.title.substring(0, 35) + "..."}
                      </Card.Title>
                      <Card.Text className="product-price">
                        <BiRupee />
                        {product.price}
                      </Card.Text>
                      <p>{product.category}</p>
                      <Link to={`/product/${product.id}`}>
                        <Button variant="outline-dark" className="buy-btn">
                          Buy now <AiOutlineSwapRight />
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </>
  );
}

export default Home;
