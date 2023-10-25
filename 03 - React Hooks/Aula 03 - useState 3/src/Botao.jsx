import React from "react";

const Botao = ({ texto, setDados, setLoading }) => {
  async function handleClick(event) {
    setLoading(true);
    const url =
      "https://ranekapi.origamid.dev/json/api/produto/" +
      event.target.innerText.toLowerCase();

    const response = await fetch(url);
    const json = await response.json();

    setDados(json);
    setLoading(false);
  }
  return (
    <button
      style={{ margin: "5px", color: "white", fontWeight: "bold" }}
      onClick={handleClick}
    >
      {texto}
    </button>
  );
};

export default Botao;
