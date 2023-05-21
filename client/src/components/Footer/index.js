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
      <footer className='py-5 footer'>
        <Container>
          <Row className='gy-3'>
            <Col sm={12} md={6} >
              <h6 className='text-uppercase'>About</h6>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla rem, sint ad perferendis, provident architecto similique vel <i>distinctio dolore fugiat</i> dicta tempore a, quia omnis eveniet neque quasi nostrum. Expedita facere voluptas adipisci fugit distinctio repellat harum optio, eos provident consequuntur delectus minima et, sunt explicabo officia, praesentium magnam.</p>
            </Col>

            <Col xs={6} md={3}>
              <h6 className="text-uppercase">Quick Links</h6>
              <ul>
                <li>
                  <Link href="#">About Us</Link>
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
              <h6 className='text-uppercase'>Careers</h6>
              <ul>
                <li><Link href='#'>Collaboration</Link></li>
                <li><Link href='#'>Position</Link></li>
              </ul>
            </Col>
            <hr />
          </Row>
        </Container>
        <Container>
          <Row className='gy-3'>
            <Col xs={12} sm={6} md={8} className="text-center text-sm-start">
              Copyright &copy; 2023 All Rights Reserved
            </Col>
            <Col xs={12} sm={6} md={4} className="text-center text-md-start">
              <Link className='footer-icon' href='#'>
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link className='footer-icon' href='#'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
              <Link className='footer-icon' href='#'>
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link className='footer-icon' href='#'>
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
};
export default Footer;
