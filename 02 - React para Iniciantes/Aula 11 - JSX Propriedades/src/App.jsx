import React from "react";
import Form from "./Form/Form";

const Titulo = ({ cor, texto }) => {
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

function App() {
  return (
    <>
      <Form />
      <Titulo cor="blue" texto="É os guri do Grêmio!" />
      <Titulo cor="red" texto="Colorados.." />
    </>
  );
}

export default App;
