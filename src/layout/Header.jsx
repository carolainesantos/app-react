import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar
      expand={"lg"}
      style={{
        backgroundColor: "#A792D4",
      }}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        style={{
          padding: "0px 50px",
          fontSize: "24px",
        }}
      >
        Melodify
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="minhanav" />
      <Navbar.Collapse
        id="minhanav"
        style={{
          textAlign: "center",
          alignSelf: "stretch",
          color: "#130F4D",
          fontSize: "30px",
        }}
      >
        <Container
          style={{
            marginRight: "200px",
          }}
        >
          <Navbar.Text
            as={Link}
            to="/sobre"
            style={{
              fontSize: "21px",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            Sobre
          </Navbar.Text>
          <Navbar.Text
            as={Link}
            to="/contato"
            style={{
              fontSize: "21px",
              textDecoration: "none",
              marginLeft: "20px",
              color: "#fff",
            }}
          >
            Contato
          </Navbar.Text>
          <Navbar.Text
            as={Link}
            to="/albuns"
            style={{
              fontSize: "21px",
              textDecoration: "none",
              marginLeft: "20px",
              color: "#fff",
            }}
          >
            Albuns
          </Navbar.Text>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}
