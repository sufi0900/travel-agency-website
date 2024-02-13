import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer-section">
    <div className="container">
      <div className="footer-cta pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="fas fa-map-marker-alt" style={{position:"relative", left:"70px"}} />
              <div className="cta-text">
                <h4>Find us</h4>
                <span>Abdul wali khan university Mardan</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="fas fa-phone"  style={{position:"relative", left:"70px"}} />
              <div className="cta-text">
                <h4>Call us</h4>
                <span>+92311-9577912</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="far fa-envelope-open"  style={{position:"relative", left:"70px"}} />
              <div className="cta-text">
                <h4>Mail us</h4>
                <span>mail@info.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-logo">
                <a href="index.html"><img src="https://seeklogo.com/images/T/travel-agency-logo-4BC8875532-seeklogo.com.png" className="img-fluid" alt="logo" /></a>
              </div>
              <div className="footer-text">
                <p> We give the same importance, attention, and care to your every trip for making you very happy as we did in your past trips. This is why; we have an almost 85% bouncing back rate that makes us not only happy but completely satisfied and we do more hardworking to increase the bounce-back rate of our honourable customers throughout Pakistan..</p>
              </div>
              <div className="footer-social-icon">
                <span>Follow us</span>
                <a href="#"><i className="fab fa-facebook-f facebook-bg" /></a>
                <a href="#"><i className="fab fa-twitter twitter-bg" /></a>
                <a href="#"><i className="fab fa-google-plus-g google-bg" /></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="/aboutus">about</a></li>
                <li><a href="/contact">Contact us</a></li>

              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Subscribe</h3>
              </div>
              <div className="footer-text mb-25">
                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              </div>
              <div className="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address" />
                  <button><i className="fab fa-telegram-plane" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 text-center text-lg-left">
            <div className="copyright-text">
              <p>Copyright © 2014, All Right Reserved </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
            <div className="footer-menu">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
