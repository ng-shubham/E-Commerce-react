import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Container, Button, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProducts } from "../../Redux/Actions/productActions";
import { HiMinus, HiPlus } from "react-icons/hi";

function ProductDetails() {
  const productId = useParams();
  const [prodDetails, setProdDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const product = productId;
  console.log(product);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${product.productId}`)
      .then((res) => {
        setProdDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product.productId]);

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const { image, title, category, description, price } = prodDetails;
  const allProductInfo = { prodDetails, quantity: quantity };
  return (
    <div>
      <Container className="mt-5 d-flex justify-content-center">
        <Card className="my-5 w-75">
          <div className="d-flex">
            <Card.Img variant="top" src={image} className="prodDetails_image" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{category}</Card.Text>
              <Card.Text>{description}</Card.Text>
              <Card.Text>{price}</Card.Text>

              <ButtonGroup size="sm" className="mb-3">
                <Button onClick={() => decQuantity()}>
                  <HiMinus />
                </Button>
                <Button disabled className="px-3">
                  {quantity}
                </Button>
                <Button onClick={() => setQuantity(quantity + 1)}>
                  <HiPlus />
                </Button>
              </ButtonGroup>
              <br />
              <Button
                variant="primary"
                onClick={() => dispatch(addProducts(allProductInfo))}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default ProductDetails;
