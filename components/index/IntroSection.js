import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import patio from "/public/stock/patio.jpg";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { Fade } from "react-reveal";

export default function IntroSection() {
  return (
    <section
      className="intro-section"
      style={{
        // marginTop: "40em",
        padding: "5em",
        width: "80vw",
        position: "relative",
        top: "-100px"
      }}
    >
      <Fade left cascade>
        <div className="detached-heading text-center display-6">
        Who would be interested?.
        </div>
      </Fade>
      <Container fluid>
        <Fade left cascade>
          <Row>
            <Col sm={6}>
              <h1 className="display-3">Thank you very much</h1>
              <strong>They fall in the same time as labor</strong>
              <br></br>
              <br></br>
              <p>
              It is important to take care of the patient, to be followed by the patient, 
              but it will happen at such a time that there is a lot of work and pain. 
              And the mountains will give birth to a great push, 
              and the ridiculous mouse of life will be born. Nor arrows
              </p>
              <br></br>
              <p>
              The mass of developers is now on the smart phone.
              Consectetutur adipiscing elit pellentesque inhabitants of the disease of old age and netus.
              It is interesting to know who will invest the mass. 
              Prepare the rice cooker or the chocolate maker.
              In fact, there are no airline trucks. You will find
              </p>
              <button className="button">
                <Link href={"/projects"}>
                  PROJECTS &nbsp; <BsArrowUpRight />
                </Link>
              </button>
            </Col>
            <Col sm={6}>
              <Image
                alt="house with orange couch"
                objectFit="contain"
                layout="responsive"
                src={patio}
              />
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
}
