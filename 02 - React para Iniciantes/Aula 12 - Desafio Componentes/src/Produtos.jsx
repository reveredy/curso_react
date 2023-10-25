import React from "react";
import Titulo from "./Titulo";
import Produto from "./Produto";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb RAM", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb RAM", "128gb"] },
];

const Produtos = () => {
  return (
    <>
      <Titulo titulo="Produtos" />
      {produtos.map((prod) => (
        <Produto key={prod.nome} {...prod} />
      ))}
    </>
  );
};

export default Produtos;
