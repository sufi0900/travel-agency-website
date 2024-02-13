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

      <div className="styling-service-section">
        <Container>
          <Row>
            <Col>
              <h2 className="section-title">Explore Exciting Destinations</h2>
              <p className="section-description">
                Embark on unforgettable journeys with our tailored travel
                experiences. Our dedicated team is here to curate trips that
                capture the essence of your wanderlust, creating memories that
                last a lifetime.
              </p>
              <button className="cta-button">Start Your Adventure</button>
            </Col>
          </Row>
          <br />
          <Row>
            {services.map((service, index) => (
              <Col md={4} key={index} className="">
                <Card className="styling-service-card card2">
                  <Card.Body>
                    <div className="image-container">
                      <img
                        src="https://e7.pngegg.com/pngimages/461/915/png-clipart-computer-icons-service-computer-software-skills-icon-blue-company-thumbnail.png"
                        alt="img"
                        className="service-image"
                      />
                    </div>
                    <Card.Title className="card-title">
                      {service.title}
                    </Card.Title>
                    <Card.Text className="card-description">
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default ServicePage;
