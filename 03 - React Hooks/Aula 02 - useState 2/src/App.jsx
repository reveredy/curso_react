import React, { useState } from "react"; //Maneira muito usada
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

function App() {
  // Exemplo Restrict Mode
  const [contar, setContar] = React.useState(1);
  const [items, setItem] = React.useState(["Item 1"]);

  function Adicionar() {
    setContar(contar + 1);
    setItem([...items, "Item " + (contar + 1)]);
  }

  // Fim Exemplo Restrict Mode

  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: "André", idade: "30" });
  const [modal, setModal] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: "Possui faculdade" });
  }

  return (
    <>
      {/* Exemplo Restrict mode */}
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={Adicionar}>{contar}</button>
      {/* Fim Exemplo Restrict mode */}
      <Modal modal={modal} setModal={setModal} />
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>
      <ButtonModal setModal={setModal} />
    </>
  );
}

export default App;
