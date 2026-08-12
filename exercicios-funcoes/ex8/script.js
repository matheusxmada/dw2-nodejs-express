/* IIFE 
8 – Crie uma função imediata que receba o nome de uma pessoa como parâmetro e exiba no console uma 
saudação a essa pessoa. */

(function (usuario) {
  document.write(`Saudações ${usuario}!`);
})("Usuário");