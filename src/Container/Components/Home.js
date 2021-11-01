import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";

import { Container, Card, Button, Col, Row } from "react-bootstrap";

function Home() {
  const [productsState, setProductsState] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProductsState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Banner />
      <h1>Home</h1>
      <Container>
        <Row>
          {productsState.map((product) => {
            return (
              <Col xs={12} md={6} lg={4} xl={3} key={product.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <p>{product.category}</p>
                    <Button variant="outline-dark"> Buy now </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Home;
