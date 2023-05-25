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
        <div
          className={`${
            showWelcome ? "greating" : null
          } bgBox d-flex justify-content-center`}
        >
          <Container className="d-flex justify-content-center align-items-center flex-column">
            <Row className="d-flex justify-content-center align-items-center">
              <Col>
                <div
                  className="greatingBx fade-in d-flex justify-content-center align-items-center"
                  ref={animationRef}
                >
                  <div>
                    <h1
                      className={`text-center fs-1 fw-bold ${
                        showWelcome ? `title_active` : `title`
                      }`}
                    >
                      {showWelcome
                        ? "Welcome to GearHub！"
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
                      Say hello to Shunwei Hu, our creative co-founder and
                      design extraordinaire. With his keen eye for aesthetics
                      and user experience, he crafts captivating visuals and
                      intuitive interfaces, making your online shopping journey
                      with us visually appealing and effortless.
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
                      Introducing Michael Lin, our dedicated co-founder and tech
                      guru. With his deep expertise in hardware and software
                      development, he plays a vital role in curating our product
                      offerings and ensuring they meet the highest standards of
                      quality and performance.
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
                      Meet our co-founder, Wenbing Li, a visionary tech
                      enthusiast with a passion for innovation. With his strong
                      leadership skills and vast industry knowledge, he drives
                      our company's strategic direction, ensuring we stay at the
                      forefront of the ever-evolving tech landscape.
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
