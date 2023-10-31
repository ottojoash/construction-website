import { Row, Col, Container } from "react-bootstrap";
import { GiLaurelsTrophy, GiCheckMark } from "react-icons/gi";
import { BiHeartCircle, BiFingerprint, BiHeartSquare } from "react-icons/bi";
import { Zoom } from "react-reveal";

export default function QualitySection() {
  return (
    <section
      style={{
        position: "relative",
      }}
      className="quality-section"
    >
      <Container fluid style={{ width: "95vw" }}>
        <Zoom cascade>
          <Row>
            <br></br>
            <br></br>
            <Col className="quality-steps">
              <BiHeartSquare size={80} />
              <br></br>
              <br></br>
              <br></br>
              <p>
                Welding and metal works:
              </p>
            </Col>
            <Col className="quality-steps">
              <BiHeartCircle size={80} />
              <br></br>
              <br></br>
              <br></br>
              <p>
                Civil and Architectural Work:
               <br></br>
              
              </p>
            </Col>
            <Col className="quality-steps">
              <GiCheckMark size={80} />
              <br></br>
              <br></br>
              <br></br>
              <p>
                Plumbing and Electrical works:
               <br></br>
             
              </p>
            </Col>
            <Col className="quality-steps">
              <GiLaurelsTrophy size={80} />
              <br></br>
              <br></br>
              <br></br>
              <p>
                Surveying works, landscaping and compound designing:
              <br></br>
              
              </p>
            </Col>
          </Row>
        </Zoom>
      </Container>
    </section>
  );
}
