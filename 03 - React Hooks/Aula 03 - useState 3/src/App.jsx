import React, { useState } from "react";
import Produto from "./Produto";
import Botao from "./Botao";

function App() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(null);

  return (
    <>
      <Botao setDados={setDados} setLoading={setLoading} texto="Notebook" />
      <Botao setDados={setDados} setLoading={setLoading} texto="Smartphone" />
      <Botao setDados={setDados} setLoading={setLoading} texto="Tablet" />

      {loading && !dados && <p>Carregando...</p>}
      {dados && <Produto dados={dados} />}
    </>
  );
}

export default App;
