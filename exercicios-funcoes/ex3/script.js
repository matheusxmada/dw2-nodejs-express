/* Função com retorno 
3 – Crie uma função que receba três números e retorne a multiplicação entre esses números. O resultado 
deve ser exibido no console. */

const n1 = 50;
const n2 = 2;
const n3 = 4;

function multiplicar(n1, n2, n3) {
  return n1 * n2 * n3;
}

document.write(
  `<p>A multiplicação de ${n1}, ${n2} e ${n3} é igual a <strong>${multiplicar(n1, n2, n3)}</strong>`,
);
