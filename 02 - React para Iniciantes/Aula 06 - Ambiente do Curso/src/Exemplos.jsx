import React from "react";

const Exemplos = () => {
  const estiloH1 = {
    color: "blue",
    fontSize: "20px",
    fontFamily: "Helvetica",
  };

  return (
    // Style
    // O estyle irá receber um objeto com as propriedades do elemento em camelCase.
    <div>
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{ color: "green" }}>Sempre Aberta</p>
    </div>
  );
};

export default Exemplos;
