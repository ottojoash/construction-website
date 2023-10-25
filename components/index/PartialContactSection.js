import { Container } from "react-bootstrap";
import ContactForm from "../ContactForm";
export default function PartialContactSection() {
  return (
    <section className="contact-form-section">
      <Container fluid>
        <div className="display-5 text-center text-uppercase ">Contact Us</div>
        <br></br>
        <p className="text-center">
        Get in Touch with Us
        </p>
        <ContactForm />
      </Container>
    </section>
  );
}
