/* Arrow function com mais de um parâmetro 
7 – Crie uma arrow function que receba quatro números como parâmetro e retorne a soma entre esses 
números. O resultado deve ser impresso no console. */

const soma = (num1, num2, num3, num4) => {
  return num1 + num2 + num3 + num4;
};

const num1 = 8;
const num2 = 10;
const num3 = 12;
const num4 = 15;

document.write(
  `<p>O resultado de ${num1} + ${num2} + ${num3} + ${num4} é igual a ${soma(num1, num2, num3, num4)}</p>`
);