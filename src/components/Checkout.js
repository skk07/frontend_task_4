import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import OrderConfirmationModal from "./OrderConfirmationModal"; // Import the new modal component

function Checkout({ cartItems }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [contact, setContact] = useState("");
  const [showModal, setShowModal] = useState(false); // Modal state
  const [orderSummary, setOrderSummary] = useState([]); // To store order summary data
  const [deliveryDate, setDeliveryDate] = useState(""); // Estimated delivery date

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate order processing and generate order summary
    setOrderSummary(cartItems);
    setDeliveryDate("Estimated Delivery: 3-5 Business Days");

    // Show confirmation modal
    setShowModal(true);
  };

  return (
    <Container className="checkout-container mt-4">
      <h2>Checkout</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formContact">
              <Form.Label>Contact Information</Form.Label>
              <Form.Control
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formCardNumber">
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group controlId="formExpiryDate">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group controlId="formCvv">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="success" type="submit" className="mt-4">
          Place Order
        </Button>
      </Form>

      {/* Order Confirmation Modal */}
      <OrderConfirmationModal
        showModal={showModal}
        setShowModal={setShowModal}
        orderSummary={orderSummary}
        deliveryDate={deliveryDate}
      />
    </Container>
  );
}

export default Checkout;
