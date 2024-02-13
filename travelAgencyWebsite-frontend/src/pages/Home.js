import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import { Container, Card, Button, Image } from "react-bootstrap";
import ServicePage from "./Services";
import Footer from "./Footer";
function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);
  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, [dispatch]);
  return (
    <div>
      <Container fluid>
        <h1>Welcome to GlobeWalk Travel Agency</h1>
        <Col>
          <Image
            src="https://res.cloudinary.com/drhxwooxk/image/upload/v1707805582/HD-wallpaper-travel-agency_pb7a3s.jpg"
            alt="Big Image"
            fluid
          />
        </Col>
      </Container>

      <div className="featured-products-container container mt-4">
        <h2>Countries to travel</h2>
        {/* last products here */}
        <div className="d-flex justify-content-center flex-wrap">
          {lastProducts.map((product) => (
            <ProductPreview {...product} />
          ))}
        </div>
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            See more {">>"}
          </Link>
        </div>
      </div>
      {/* sale banner */}
      <div className="destination">
        <div className="des_bx">
          <h4>Our destination</h4>
          <p>Choose your next destination</p>
          <li>VIETNAM</li>
          <li>GERMANY</li>
          <li>FRANCE</li>
          <li>EGYPT</li>
          <li>AFRICA</li>
          <li>KOREA</li>
          <h6>
            included: Air ticket, Hotel, Breakfast, Tours, Airport transfer
          </h6>
          <button>
            {" "}
            <Link style={{ color: "white" }} to="/category/all">
              More info
            </Link>{" "}
          </button>
        </div>
        <div className="img_bx">
          <img
            src="https://res.cloudinary.com/drhxwooxk/image/upload/v1707811591/pexels-andrea-piacquadio-3769118_uilnkd.jpg"
            alt=""
          />
          <div className="msg">
            <img
              src="https://res.cloudinary.com/drhxwooxk/image/upload/v1707811596/usa_flag_d7w9m9.jpg"
              alt=""
            />
            <div className="cont">
              <h4>USA</h4>
              <div className="icon">
                <i className="bi bi-heart-fill">
                  <span>45622</span>
                </i>
                <i className="bi bi-chat-fill">
                  <span>3382</span>
                </i>
              </div>
            </div>
          </div>
          <div className="msg">
            <img
              src="https://res.cloudinary.com/drhxwooxk/image/upload/v1707811594/switxerland_ele43z.jpg"
              alt=""
            />
            <div className="cont">
              <h4>switzerland</h4>
              <div className="icon">
                <i className="bi bi-heart-fill">
                  <span>45622</span>
                </i>
                <i className="bi bi-chat-fill">
                  <span>3382</span>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sale__banner--container mt-4">
        <Container
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://res.cloudinary.com/drhxwooxk/image/upload/v1707811592/pexels-pixabay-358319_obcksg.jpg"
                  alt="Avatar"
                  style={{ width: 300, height: 300 }}
                />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect &amp; Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://res.cloudinary.com/drhxwooxk/image/upload/v1707811592/pexels-pixabay-358319_obcksg.jpg"
                  alt="Avatar"
                  style={{ width: 300, height: 300 }}
                />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect &amp; Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://res.cloudinary.com/drhxwooxk/image/upload/v1707811592/pexels-pixabay-358319_obcksg.jpg"
                  alt="Avatar"
                  style={{ width: 300, height: 300 }}
                />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect &amp; Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>
        </Container>{" "}
      </div>
      <div className="recent-products-container container mt-4">
        {/* <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer
              to={`/category/${category.name.toLocaleLowerCase()}`}
            >
              <Col md={4} className="card2">
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
                    gap: "10px",
                  }}
                  className="category-tile"
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}

        </Row> */}

        <ServicePage />
        <Footer />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;
