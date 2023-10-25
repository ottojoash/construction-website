import { Row, Col, Container } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { Zoom } from "react-reveal";

export default function BgImageSection() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  return (
    <section
      className="bg-image-section"
      style={{
        position: "relative",
      }}
    >
      <br></br>
      <br></br>
      <Container fluid className="text-center text-white ">
        <h1 className="display-5 text-uppercase">
        BENEFITS OF CHOOSING US AS YOUR PARTNERS
        </h1>
        <p style={{ width: "50em", margin: "0 auto" }}>
        Expertise and Specialization: Selecting OTES specializes in the specific type of engineering work you require. 
        Whether it's civil, mechanical,electrical, or any other field.
        </p>
        <br></br>
        <br></br>
        <Zoom>
          <Row className="px-4">
            <Col sm={4}>
              <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
                <div
                  onMouseEnter={() => setIsFlipped1((prev) => !prev)}
                  className="CardFront flip-card"
                >
                  <div>
                    <h4>Construction</h4>
                    <hr></hr>
                  </div>
                </div>
                <div
                  onMouseLeave={() => setIsFlipped1((prev) => !prev)}
                  className="CardBack flip-card"
                >
                  <p>
                  Optimizing Structural Design for Sustainable and Resilient Building Construction
                  </p>
                </div>
              </ReactCardFlip>
            </Col>
            <Col sm={4}></Col>

            <Col sm={4}>
              <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
                <div
                  onMouseEnter={() => setIsFlipped2((prev) => !prev)}
                  className="CardFront flip-card"
                >
                  <div>
                    <h4>Renovating</h4>
                    <hr></hr>
                  </div>
                </div>
                <div
                  onMouseLeave={() => setIsFlipped2((prev) => !prev)}
                  className="CardBack flip-card"
                >
                  <p>
                  Revitalizing Infrastructure: Enhancing Efficiency and Sustainability through Engineering Renovation
                  </p>
                </div>
              </ReactCardFlip>
            </Col>
          </Row>
        </Zoom>
      </Container>
    </section>
  );
}
