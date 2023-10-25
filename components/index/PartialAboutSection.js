import { Row, Col, Container, Form, TextArea, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import team from "/public/stock/team.jpg";

export default function PartialAboutSection() {
  return (
    <section
      className="partial-about-section"
      style={{
        position: "relative",
      }}
    >
      <Container fluid className="partial-about-container" style={{margin:'0 auto'}}>
        <Row >
          <Col sm={7}>
            <Image
              alt="Teamwork"
              objectFit="contain"
              layout="responsive"
              src={team}
            />
          </Col>
          <Col sm={4}>
            <div  className="display-6">
              Our Company Profile
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div >
              <p>
              At OTES, we are a leading engineering firm dedicated to providing innovative solutions and top-quality engineering services.
              With a strong commitment to excellence, we have been at the forefront of the industry for 8 years +, 
              serving clients across various sectors.
              </p>
              <br></br>
              <p>
              Our Mission:
              Our mission is to deliver cutting-edge engineering solutions that meet and exceed our clients' expectations.
               We are driven by a passion for problem-solving, creativity, and a dedication to sustainability.
              We take pride in contributing to the success of our clients and the betterment of society through our engineering expertise.
              </p>
            </div>
            <button className="button">
              <Link href={"/about"}>
                ABOUT US &nbsp; <BsArrowUpRight />
              </Link>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
