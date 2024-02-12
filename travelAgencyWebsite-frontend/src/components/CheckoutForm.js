import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "../services/appApi";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const user = useSelector((state) => state.user);
  // const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");
  const [createOrder, { isLoading, isError, isSuccess }] =
    useCreateOrderMutation();
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [paying, setPaying] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [travelDetails, setTravelDetails] = useState(""); // Added travel details state

  async function handlePay(e) {
    e.preventDefault();

    if (paymentMethod === "online") {
      if (!stripe || !elements || user.cart.count <= 0) return;
      setPaying(true);

      try {
        const { client_secret } = await fetch(
          "http://localhost:8080/create-payment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer ", // Add your Stripe secret key here
            },
            body: JSON.stringify({ amount: user.cart.total }),
          }
        ).then((res) => res.json());

        const { paymentIntent } = await stripe.confirmCardPayment(
          client_secret,
          {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          }
        );

        setPaying(false);

        if (paymentIntent) {
          createOrder({
            userId: user._id,
            cart: user.cart,
            address,
            country,
            paymentMethod,
          }).then((res) => {
            if (!isLoading && !isError) {
              setAlertMessage(`Payment ${paymentIntent.status}`);
              setTimeout(() => {
                // navigate("/orders");
              }, 3000);
            }
          });
        }
      } catch (error) {
        // Handle any errors during the online payment process
        console.error("Error processing online reservation:", error);
        setPaying(false);
      }
    } else if (paymentMethod === "cod") {
      // Handle COD logic, show a confirmation message or any other steps needed
      // For COD, you can directly create the order without involving Stripe
      createOrder({
        userId: user._id,
        cart: user.cart,
        address,
        country,
        paymentMethod,
      }).then((res) => {
        if (!isLoading && !isError) {
          setAlertMessage(`Reservation successful`);
          setTimeout(() => {
            // navigate("/orders");
          }, 3000);
        }
      });
    }
  }

  return (
    <Col className="cart-payment-container">
      <Form onSubmit={handlePay}>
        <Row>
          {alertMessage && <Alert>{alertMessage}</Alert>}
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={user.name}
                disabled
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                value={user.email}
                disabled
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={5}>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Reservation Method</Form.Label>
          <Form.Control
            as="select"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="online">Online Reservation</option>
            <option value="cod">Pay at Destination</option>
          </Form.Control>
        </Form.Group>

        <label htmlFor="card-element">Card</label>
        <CardElement id="card-element" />
        <Button
          className="mt-3"
          type="submit"
          disabled={user.cart.count <= 0 || paying || isSuccess}
        >
          {paying ? "Processing..." : "Reserve Now"}
        </Button>
      </Form>
    </Col>
  );
}

export default CheckoutForm;
