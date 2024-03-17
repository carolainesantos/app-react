import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col
          lg={6}
          style={{
            padding: "20px 0",
          }}
        >
          <div>
            <h4>Sobre a empresa</h4>
            <p>Av Passaros de Fogo 11111</p>
          </div>
        </Col>
        <Col
          lg={6}
          style={{
            padding: "20px 0",
          }}
        >
          <div>
            <h4>Redes sociais</h4>
            <a
              href="//facebook.com"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "purple",
              }}
            >
              Facebook
            </a>
            <br />
            <a
              href="//instagram.com"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "purple",
              }}
            >
              Instagram
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
