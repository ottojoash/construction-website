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
        I AM VERY HAPPY WITH THE MASS FINANCING
        </h1>
        <p style={{ width: "50em", margin: "0 auto" }}>
        It is interesting to know who will invest the mass. 
        Prepare the rice cooker or the chocolate maker. 
        In fact, there are no airline trucks. You will find
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
                  The mass of developers is now on the smart phone.
                  Consectetutur adipiscing elit pellentesque 
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
                  The mass of developers is now on the smart phone. 
                  Consectetutur adipiscing elit pellentesque inhabitants of
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
