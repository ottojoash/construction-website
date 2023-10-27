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
        {/* <div className="detached-heading text-center display-6">
        Who would be interested?.
        </div> */}
      </Fade>
      <Container fluid>
        <Fade left cascade>
          <Row>
            <Col sm={6}>
              <h1 className="display-3">Why Choose Us</h1>
              <strong>We deliver Quality Services</strong>
              <br></br>
              <br></br>
              <p>
              Understanding Customer Needs: Begin by thoroughly understanding your customers' 
              needs and expectations. This requires active listening and clear communication.
              Service Design: Develop a well-thought-out service delivery plan that aligns with 
              customer requirements and market standards.
              Competent Staff: Employ and train a skilled and knowledgeable workforce.
               Ensure they have the necessary tools, resources, and training to excel in their roles.

              </p>
              <br></br>
              <p>
              Consistency: Maintain a high level of consistency in service delivery. 
              Customers should experience the same level of quality each time they interact with your business.
              Responsiveness: Be prompt and responsive to customer inquiries and concerns.
               Quick problem resolution is essential for quality service
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
