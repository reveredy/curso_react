// Objeto
const menu = {
  seletor: ".Principal",
};

console.log(menu.seletor.toUpperCase);

function upperName(name) {
  return name.toUpperCase();
}
console.log(upperName("andre"));

//Arrow function
const lowerName = (name) => {
  return name.toLowerCase();
};
console.log(lowerName("CARLOS"));

//Função anonima
//Arrow Function mantem o this do pai
const normalize = function (name) {
  return name.normalize();
};
console.log(normalize("CARLOS ANDRE"));

//Como nossa função tem apenas 1 linha, com a arrow function podemos, nesse caso, remover o return, deixando apenas em uma linha
const normalize2 = (name) => name.normalize();
// Fim Arrow Function

//Desestruturação

//Como funciona?
function handleMouse(e) {
  const { clientX, ClientY } = e;
  // Estamos criando 2 constantes com os nomes de métodos existentes dentro de event, assim ele compara os 2 e adiciona o resultado dentro de cada uma delas
  const x = e.clientX;
  const y = e.clientY;

  console.log(x, y);
}
document.addEventListener("click", handleMouse);

const frutas = ["banana", "uva"];

const [fruta1, fruta2] = frutas;
//Ele vai desestruturar na ordem, fruta1 vai ser banana, fruta2 uva

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lado, perimeto] = useQuadrado;

console.log(lado); //4
console.log(perimeto(10));

// Fim Desestruturação
// Rest e Spread
// Maneira comum
function showList(empresa, clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}
showList("Google", ["Carlos", "Tai"]);

//Usando o operador Rest
//Com o (...Rest) vai acontecer o seguinte: ele vai pegar tudo que estiver naquele parametro e vai jogar dentro de um array com esse mesmo nome
//Nesse caso criara um array chamado funcionarios e vai jogar dentro tudo que tiver recebido de resposta a esse parametro
function showClientes(empresa, ...funcionarios) {
  funcionarios.forEach((funcionario) => {
    console.log(funcionario, empresa);
  });
}
showClientes("Google", "Carlos", "Tai");

//Spread - Usa a mesma sintaxe do rest, porem ele é usado em array, não para criar um
//E como o nome já diz ele espalha esse array, ele pega os itens do array e separa 1 por 1
const maior = Math.max(10, 20, 25);
console.log(maior);

//Essa função aceita números e retorna o maior valor, mas ela não aceita um array de números por exemplo.
//Para isso podemos usar o spread
const numeros = [33, 28, 71, 43, 29, 5];
const maior2 = Math.max(...numeros);
console.log(maior2);

const numeros2 = [6, ...numeros, 41, 75, 99, 11];
//Se não usassemos o Spread ele apenas adicionaria o array dentro do array
console.log(numeros2);

//Podemos usar também em objetos
const carro = {
  cor: "Azul",
  portas: 4,
};
carro.ano = 2020;
//Dessa maneira estamos modificando o objeto original, caso queira um objeto novo com os itens anteriores e outros novos, podemos usar o spread

const carro2 = { ...carro, tipo: "Sedã" };
console.log(carro2);

// Fim Rest e Spread
