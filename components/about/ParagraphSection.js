import { Container } from "react-bootstrap";

export default function ParagraphSection() {
  return (
    <section className="about-section pt-5 mx-auto" style={{ width: "50vw" }}>
      <Container fluid className="about-container mx-auto">
        <div className="display-6 text-center">About our company</div>
        <hr></hr>
        <br></br>
        <br></br>
        <p className="text-center">
        Building Tomorrow, Today
        In the ever-evolving world of construction and engineering,
         one name stands out as a symbol of innovation, quality,
          and unwavering dedication – Oscar Truth Engineering Services. 
          Established in 2015 by the visionary entrepreneur and industry maven,
           Oscar Truth, our company has consistently pushed the boundaries of what's
            possible in the construction realm
          <br></br>
          <br></br>
          Since our inception, Oscar Truth Engineering Services has forged a path of distinction. 
          What began as a small team of enthusiastic professionals has blossomed into a leading 
          construction company that has undertaken and successfully completed projects of varying complexities.
           We have transformed countless ideas into tangible, awe-inspiring structures.
          <br></br>
          <br></br>
          At Oscar Truth Engineering Services, our core philosophy is "Together We Can Imporove."
           We believe in creating not just structures but experiences. Every project we undertake is 
           an embodiment of precision, sustainability, and functionality. We take immense pride in constructing
            not merely buildings, but also trust and relationships with our clients.Our commitment to excellence is unwavering.   
             We continually invest in the latest technologies, practices, and methodologies to remain at the forefront of the construction
              industry. This ensures that every project we undertake is delivered with the highest standards of quality and safety.
        </p>
      </Container>
    </section>
  );
}
