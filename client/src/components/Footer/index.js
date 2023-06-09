import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Link from "antd/es/typography/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer className="py-5 footer">
        <Container>
          <Row className="gy-3">
            <Col sm={12} md={6}>
              <h6 className="text-uppercase">About</h6>
              <p className="text-justify">
                Welcome to GearHub! We are an ecommerce startup tech company
                specializing in the sale of cutting-edge electronics. Our
                mission is to provide you with a seamless online shopping
                experience while offering a curated selection of high-quality
                laptops, headphones, and graphic cards. At GearHub, we stand out
                by offering unparalleled product selection and expert guidance.
                Our team of tech enthusiasts and industry experts handpick the
                best and most innovative products to ensure you have access to
                the latest tech advancements. We are here to provide
                personalized assistance and recommendations to help you find the
                perfect tech solution. We are committed to delivering a superior
                customer experience, from our user-friendly website to fast
                shipping and secure payment options. Our focus on quality means
                that every product in our inventory undergoes rigorous checks,
                ensuring reliability and customer satisfaction. Join our tech
                community and experience the convenience and excitement of
                shopping for top-notch electronics with GearHub!
              </p>
            </Col>

            <Col xs={6} md={3}>
              <h6 className="text-uppercase">Quick Links</h6>
              <ul>
                <li>
                  <Link to="/about_us">About Us</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Policy</Link>
                </li>
                <li>
                  <Link href="#">Assistant</Link>
                </li>
              </ul>
            </Col>

            <Col xs={6} md={3}>
              <h6 className="text-uppercase">Careers</h6>
              <ul>
                <li>
                  <Link href="#">Collaboration</Link>
                </li>
                <li>
                  <Link href="#">Position</Link>
                </li>
              </ul>
            </Col>
            <hr />
          </Row>
        </Container>
        <Container>
          <Row className="gy-3">
            <Col xs={12} sm={6} md={8} className="text-center text-sm-start">
              Copyright &copy; 2023 All Rights Reserved
            </Col>
            <Col xs={12} sm={6} md={4} className="text-center text-md-start">
              <Link className="footer-icon" href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link className="footer-icon" href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
              <Link className="footer-icon" href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link className="footer-icon" href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
export default Footer;
