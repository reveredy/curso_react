// modules (import e export)
import { areaQuadrado, perimetroQuadrado } from "./quadrado.js";
import numeroAleatorio from "./numeroAleatorio.js";
import quadrado from "./quadrado.js";

console.log("Area do Quadrado: ", areaQuadrado(5));
console.log("Perimetro do Quadrado: ", perimetroQuadrado(5));
console.log("Número Aleatório: ", numeroAleatorio());
console.log(quadrado.lowerCase("Função lowerCase: CARLOS"));
console.log(quadrado.upperCase("Função upperCase: carlos"));
// Fim modules (import e export)

// Fetch
// Fetch serve para fazer requisições assincronas, geralmente para quando se usa API
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((resposta) => resposta.json())
  .then((json) => {
    console.log(json);
  });

async function fetchPokemon(url) {
  const response = await fetch(url);
  const json = await response.json();

  return json;
}

const pokemon = fetchPokemon("https://pokeapi.co/api/v2/pokemon/ditto");

// Fim Fetch
// Array (Map e Filter)

//Filter
const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus Dados",
];

//Como o nome já diz, ele faz um filtro trazendo somente o que foi pedido
const precosFiltro = precos.filter((preco) => preco.includes("R$"));
console.log(precosFiltro);

//Map
//Pega uma array e traz uma nova array modificada com oq for passado dentro da função (Não altera a array original)
const precosNumeros = precosFiltro.map((preco) => +preco.replace("R$", ""));
console.log(precosNumeros);

// Fim Array (Map e Filter)
