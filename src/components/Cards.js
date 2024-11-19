import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

function Cards({ img, title, newPrice, addToCart, addToWishlist }) {
  return (
    <div>
      <Container>
        <Card style={{ width: "17rem" }} className="mb-4">
          <div className="p-1 m-3 image-container">
            <Card.Img variant="top" src={img} alt={title} className="img-fluid fixed-size-img" />
          </div>
          <Card.Body className="ms-2">
            <Card.Title className="fs-5">{title}</Card.Title>
            <div className="mb-2">${newPrice}</div>
            <div>
            <Button variant="primary" onClick={addToCart}>
              Add to Cart
            </Button>
            <Button variant="primary" className="mt-2" onClick={addToWishlist}>
              Add to Wishlist
            </Button>
            </div>
            
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Cards;
