import { Card, Button } from "react-bootstrap";

export default function Inicial() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ margin: "0" }}>Melodify</h1>
        <br />
        <p>Descubra sua próxima música favorita.</p>
      </header>
      <main style={{ textAlign: "center" }}>
        <section
          style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}
        >
          <h2>Sugestão </h2>
          <Card style={{ width: "18rem", margin: "0 auto" }}>
            <Card.Img
              variant="top"
              src="taylorSwift.jpeg"
              alt="Capa da música"
            />
            <Card.Body>
              <Card.Title>The Man</Card.Title>
              <Card.Text>
                <p>Taylor Swift</p>
                <p>Album: Lover</p>
              </Card.Text>
              <Button variant="dark">Reproduzir</Button>
            </Card.Body>
          </Card>
        </section>
      </main>
    </div>
  );
}
