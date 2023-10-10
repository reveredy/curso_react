export function areaQuadrado(l) {
  return l * l;
}

export function perimetroQuadrado(l) {
  return 4 * l;
}

function upperCase(name) {
  return name.toUpperCase();
}

function lowerCase(name) {
  return name.toLowerCase();
}

//Podemos tambem exportar tudo como um objeto

const quadrado = {
  lowerCase,
  upperCase,
};

export default quadrado;
