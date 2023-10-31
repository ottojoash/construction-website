import { Row, Col, Container } from "react-bootstrap";
import { GiLaurelsTrophy, GiCheckMark, GiHouse } from "react-icons/gi";
import { BiHeartCircle, BiFingerprint, BiHeartSquare, BiBasket } from "react-icons/bi";
import { Zoom } from "react-reveal";
import { MdConstruction } from "react-icons/md";
import { FaWrench, FaBolt } from "react-icons/fa";
import { FaDraftingCompass, FaMapMarkerAlt } from "react-icons/fa";
import { FaRulerCombined } from "react-icons/fa";



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
              <MdConstruction size={80} />
              <br></br>
              <br></br>
              <br></br>
              <p>
                Welding and metal works:
              </p>
            </Col>
            <Col className="quality-steps">
              <GiHouse size={80} />
              <FaRulerCombined size={30} />
              <br></br>
              <br></br>
              <br></br>
              <p>
                Civil and Architectural Work:
               <br></br>
              
              </p>
            </Col>
            <Col className="quality-steps">
              <FaWrench size={80} />
              <FaBolt size={30} />
              <br></br>
              <br></br>
              <br></br>
              <p>
                Plumbing and Electrical works:
               <br></br>
             
              </p>
            </Col>
            <Col className="quality-steps">
              <FaDraftingCompass size={80} />
              <FaMapMarkerAlt size={30} />
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
