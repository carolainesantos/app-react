export default function CardAlbuns({
  key,
  nome,
  imagem,
  artista,
  album,
  descricao,
}) {
  return (
    <div
      key={key}
      style={{
        padding: "20px",
        margin: "20px auto",
        maxWidth: "350px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${imagem})`,
          backgroundSize: "cover",
          height: "200px",
          width: "200px",
        }}
      />
      <div>
        <h6>{nome}</h6>
        <h6>{artista}</h6>
        <h6>{album}</h6>
        <p
          style={{
            padding: "10px 0",
          }}
        >
          {descricao}
        </p>
        <a href="#">Visitar</a>
      </div>
    </div>
  );
}
