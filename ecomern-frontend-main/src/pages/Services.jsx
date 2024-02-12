import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ServicePage = () => {
  const services = [
    {
      title: "Beach Paradise Getaway",
      description:
        "Escape to our luxurious beach resorts. Enjoy sun, sand, and relaxation.",
      price: "$1500",
    },
    {
      title: "Mountain Adventure Retreat",
      description:
        "Explore the breathtaking beauty of the mountains with our guided tours.",
      price: "$2000",
    },
    {
      title: "City Cultural Exploration",
      description:
        "Immerse yourself in the vibrant culture of our city destinations.",
      price: "$1800",
    },
  ];

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Our Services</h1>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="card2">
            <Card>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <div className="text-center">
                  <strong>Price:</strong> {service.price}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicePage;
