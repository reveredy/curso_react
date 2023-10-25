import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

function App() {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: "André", idade: "30" });
  const [modal, setModal] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: "Possui faculdade" });
  }

  return (
    <>
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
