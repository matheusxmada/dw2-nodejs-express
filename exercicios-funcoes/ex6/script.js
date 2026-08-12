/* Arrow function com parâmetro único 
6 – Crie uma arrow function que receba um número como parâmetro e retorne o triplo desse número. O 
resultado deve ser exibido no console concatenado com uma string. (Ex: “O triplo do número é...”) */

const triplo = (x) => {
  return x * 3;
};
const x = 9;
document.write(`<p>O triplo de ${x} é ${triplo(x)}</p>`);
