import React from "react";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

function App() {
  const dados = luana;

  // reduce soma os numeros do array
  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);

  // Minha solução (Carlos)
  // function sumExpenses() {
  //   let total = 0;
  //   dados.compras.forEach((compra) => {
  //     total += +compra.preco.replace("R$ ", "");
  //   });

  //   return total;
  // }

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        <span
          style={dados.ativa == true ? { color: "green" } : { color: "red" }}
        >
          {dados.ativa == true ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>
        Total gasto: R$ <span>{total}</span>
      </p>
      {total > 10000 && <p>Você está gastando muito.</p>}
    </div>
  );
}

export default App;
