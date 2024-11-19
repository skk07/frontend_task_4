import React from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // To redirect after closing

function OrderConfirmationModal({ showModal, setShowModal, orderSummary, deliveryDate }) {
  const navigate = useNavigate(); // To navigate back to home or any page after closing the modal

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      size="lg"
      aria-labelledby="order-confirmation-modal-title"
      animation={true} // This enables animation
    >
      <Modal.Header closeButton>
        <Modal.Title id="order-confirmation-modal-title">Order Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <h5>Thank you for your order!</h5>
              <p>Your order has been placed successfully. Here are the details:</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <h6>Order Summary:</h6>
              <ul>
                {orderSummary.map((item, index) => (
                  <li key={index}>
                    {item.title} - ${item.newPrice} x {item.quantity}
                  </li>
                ))}
              </ul>
            </Col>
            <Col xs={6}>
              <h6>Estimated Delivery:</h6>
              <p>{deliveryDate}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>We will notify you once your order has been shipped. Thank you for shopping with us!</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            setShowModal(false);
            navigate("/"); // Redirect to home page after closing the modal
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderConfirmationModal;
