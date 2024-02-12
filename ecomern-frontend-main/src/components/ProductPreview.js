import React from "react";
import { Badge, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function TravelCard({ _id, category, name, price, location, pictures }) {
  return (
    <LinkContainer
      to={`/product/${_id}`}
      style={{ cursor: "pointer", width: "20rem", margin: "10px" }}
    >
      <Card className="card" style={{ width: "22rem", margin: "10px" }}>
        <Card.Img
          variant="top"
          className="product-preview-img"
          src={pictures[0].url}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {/* <Badge bg="warning" text="dark">
            {category}
          </Badge> */}
          <Card.Text>
            <strong>Price:</strong> ${price}
          </Card.Text>
          <Card.Text>
            <strong>Location:</strong> {location}
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
}

export default TravelCard;
