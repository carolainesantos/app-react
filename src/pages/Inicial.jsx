export default function Inicial() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <header
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            margin: "0",
          }}
        >
          Melodify
        </h1>
        <p>Descubra sua próxima música favorita.</p>
      </header>
      <main
        style={{
          textAlign: "center",
        }}
      >
        <section
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <h2>Sugestão do Dia</h2>
          <div className="song">
            <img src="public/taylorSwift.jpeg" alt="Capa da música" />
            <div className="song-info">
              <h3>The Man</h3>
              <p>Taylor Swift</p>
              <p>Album: Lover</p>
              {/* <button>Reproduzir</button> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
