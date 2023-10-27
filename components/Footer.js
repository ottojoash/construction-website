import { Container } from "react-bootstrap";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <Container>
        <br /><br />
        <div>
          © Oscar Truth
          <br /><br />
          <div>
            {/* Social Media Links */}
            <a href="https://twitter.com/your-twitter-profile">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/your-facebook-profile">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/your-instagram-profile">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-profile">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
