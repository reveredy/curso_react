import React from "react";
import Exemplos from "./Exemplos";

function App() {
  const nome = "Nome";
  const ativo = false;
  const titulo = <h1>Esse é um título</h1>;
  return (
    <React.Fragment>
      {Exemplos()}
      {titulo}
      <label htmlFor="nome">{nome}</label>
      <input id="nome" type="text" />
      <a
        href="https://origamid.com"
        className={ativo ? "ativo" : "inativo"}
        title="Isso é um link para um site"
      >
        Origamid
      </a>
      <button>Adicionar</button>
    </React.Fragment>
  );
}

export default App;
