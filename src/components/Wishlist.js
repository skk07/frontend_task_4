import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

function Wishlist({ wishlist, removeFromWishlist }) {
  return (
    <Container className="wishlist-container mt-4">
        <h1>Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((item) => (
          <Row key={item.id} className="wishlist-item align-items-center mb-3">
            <Col xs={2}>
              <img src={item.img} alt={item.title} className="img-fluid" />
            </Col>
            <Col xs={4}>{item.title}</Col>
            <Col xs={2}>${item.newPrice}</Col>
            <Col xs={2}>
              <Button variant="danger" onClick={() => removeFromWishlist(item.id)}>
                Remove
              </Button>
            </Col>
          </Row>
        ))
      )}
    </Container>
  );
}

export default Wishlist;
