import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation

function Cart({ cartItems, removeFromCart, updateQuantity, showCartModal, setShowCartModal }) {
  // Calculate total price
  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.newPrice * item.quantity, 0);

  return (
    <Modal
      show={showCartModal}
      onHide={() => setShowCartModal(false)}
      size="xl" // Full-screen modal
      aria-labelledby="cart-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="cart-modal-title">Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="cart-container mt-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <Row key={item.id} className="cart-item align-items-center mb-3">
                  <Col xs={2}>
                    <img src={item.img} alt={item.title} className="img-fluid" />
                  </Col>
                  <Col xs={3}>{item.title}</Col>
                  <Col xs={2}>${item.newPrice}</Col>
                  <Col xs={2}>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="form-control"
                    />
                  </Col>
                  <Col xs={2}>
                    <Button
                      className="ms-5"
                      variant="danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              ))}
              <Row>
                <Col className="text-end mt-4 me-3">
                  <h5>Total: ${getTotalPrice().toFixed(2)}</h5>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowCartModal(false)}>
          Close
        </Button>
        {cartItems.length > 0 && (
          <Button variant="success" as={Link} to="/checkout">
            Proceed to Checkout
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;
