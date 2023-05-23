import "./style.css";
import { Button, InputNumber } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";

function AboutPage() {
  // This is to declare a ref object - inner box here - with an initial value of null.
  const [showWelcome, setShowWelcome] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const animation = animationRef.current;

    if (animation) {
      setTimeout(() => {
        animation.classList.add("active");
      }, 1000);
    }
  }, []);

  const handleInteraction = () => {
    setShowWelcome(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      handleInteraction();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="about-main" onClick={handleInteraction}>
      <div className="wrap">
        <div className="greating bgBox d-flex justify-content-center">
          <Container className="d-flex justify-content-center align-items-center flex-column">
            <Row className="d-flex justify-content-center align-items-center">
              <Col>
                <div
                  className="greatingBx fade-in d-flex justify-content-center align-items-center"
                  ref={animationRef}
                >
                  <div>
                    <h1 className="text-center fs-1 fw-bold title">
                      {showWelcome
                        ? "Welcome to GearHub."
                        : "Nice to Meet You!"}
                    </h1>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="taipei bgBox d-flex justify-content-center">
          <Container className="d-flex">
            <Row className="justify-content-center align-items-center">
              <Col md={8} lg={6}>
                <div className="innerBox shadow-lg justify-content-center align-items-center">
                  <h2 className="text-center fs-1 fw-bold">
                    Shunwei Hu
                    <br />
                    <span>Co-Founder</span>
                  </h2>
                  <div className="bio">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur sed consequatur eius quae quas! Blanditiis,
                      consectetur eius sint nesciunt non voluptas ullam adipisci
                      facilis labore perspiciatis natus, esse enim nam.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="la bgBox d-flex justify-content-center">
          <Container className="d-flex">
            <Row className="justify-content-center align-items-center">
              <Col md={8} lg={6}>
                <div className="innerBox shadow-lg justify-content-center align-items-center">
                  <h2 className="text-center fs-1">
                    Michael Lin <br />
                    <span>Co-Founder</span>
                  </h2>
                  <div className="bio">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur sed consequatur eius quae quas! Blanditiis,
                      consectetur eius sint nesciunt non voluptas ullam adipisci
                      facilis labore perspiciatis natus, esse enim nam.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="dalian bgBox d-flex justify-content-center">
          <Container className="d-flex">
            <Row className="justify-content-center align-items-center">
              <Col md={8} lg={6}>
                <div className="innerBox shadow-lg justify-content-center align-items-center">
                  <h2 className="text-center fs-1">
                    Wenbing li <br />
                    <span>Co-Founder</span>
                  </h2>
                  <div className="bio">
                    <p className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur sed consequatur eius quae quas! Blanditiis,
                      consectetur eius sint nesciunt non voluptas ullam adipisci
                      facilis labore perspiciatis natus, esse enim nam.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
