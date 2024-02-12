import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const AboutUsPage = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4">About Us</h1>
      <Row>
        <Col md={6}>
          <Image
            src="https://startupsmagazine.co.uk/sites/default/files/2020-11/AdobeStock_291895827ed.jpg"
            alt="Our Team"
            fluid
          />
        </Col>
        <Col md={6}>
          <p>
            Welcome to XYZ Travel Agency! We are passionate about creating
            unforgettable travel experiences for our clients. Our dedicated team
            of experts is committed to providing top-notch services and ensuring
            your journey is nothing short of extraordinary.
          </p>
          <p>
            At XYZ Travel, we believe in the power of exploration and the joy of
            discovering new places. Whether you're seeking relaxation on a
            beautiful beach, an adventurous mountain trek, or a cultural city
            tour, we have the perfect travel packages for you.
          </p>
          <p>
            Our mission is to make your travel dreams a reality. With a focus on
            customer satisfaction, we strive to exceed your expectations and
            create memories that last a lifetime.
          </p>
          <p>
            Thank you for choosing XYZ Travel Agency. Let's embark on a journey
            together!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsPage;
