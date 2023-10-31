import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";

import team from "/public/stock/Oscar.jpg";

export default function AboutSection() {
  return (
    <section className="about-section pt-5 mx-auto" style={{ width: "60vw" }}>
      <Container fluid className="about-container mx-auto">
        <Row className=" mx-auto" style={{ margin: "0 auto", width: "50vw" }}>
          <Col sm={6}>
            <Image
              alt="Teamwork"
              objectFit="contain"
              layout="responsive"
              src={team}
            />
          </Col>
          <Col sm={6}>
            <div className="display-6">What Sets Us Apart</div>
            <br></br>
            <div className="ml-5 pl-5">
              <ul>
                <li>Expert Team: Our team of highly skilled and experienced engineers is the cornerstone of our success. </li>
                <li>Innovation: We embrace the latest technologies and methodologies to stay ahead in a rapidly evolving industry. </li>
                <li>Client-Centric Approach: We prioritize the needs of our clients. Our collaborative approach means we work closely with you to tailor solutions that perfectly align with your project goals</li>
                <li>Sustainability: We are committed to environmentally responsible engineering. Our focus on sustainability means we design solutions that have a positive impact on both our clients and the planet.</li>
              </ul>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
                magnis dis parturient montes nascetur ridiculus mus mauris
                vitae. Nec sagittis
              </p>
              <br></br>
              <p>
                Imperdiet massa tincidunt nunc pulvinar sapien et. Consectetur
                adipiscing elit pellentesque habitant morbi tristique senectus
                et netus. Amet mauris commodo quis imperdiet massa. Congue
                mauris rhoncus aenean vel elit scelerisque. Enim nulla aliquet
                porttitor lacus.
              </p> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
