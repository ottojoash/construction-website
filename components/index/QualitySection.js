import { Row, Col, Container } from "react-bootstrap";
import { GiLaurelsTrophy, GiCheckMark } from "react-icons/gi";
import { BiHeartCircle, BiFingerprint } from "react-icons/bi";
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
              <BiFingerprint size={80} />
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
              They dwell in the sea and the sea.. <br></br>
              They dwell in the sea and the sea.
              </p>
            </Col>
            <Col className="quality-steps">
              <GiCheckMark size={80} />
              <br></br>
              <br></br>
              <br></br>
              <p>
                Plumbing and Electrical works:
              They dwell in the sea and the sea. <br></br>
              They dwell in the sea and the sea.
              </p>
            </Col>
            <Col className="quality-steps">
              <GiLaurelsTrophy size={80} />
              <br></br>
              <br></br>
              <br></br>
              <p>
                Surveying works, landscaping and compound designing:
              They dwell in the sea and the sea. <br></br>
              They dwell in the sea and the sea.
              </p>
            </Col>
          </Row>
        </Zoom>
      </Container>
    </section>
  );
}
