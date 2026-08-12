/* Função anônima 
5 – Crie uma função anônima que receba duas notas como parâmetro. Se a média dessas notas for <=5, a 
função deve retornar o valor “Reprovado”, se não deve retornar o valor “Aprovado”.  O resultado deve ser 
exibido no console. Considere média = (nota1 + nota2) / 2. */

const calculoMedia = function (n1, n2) {
  media = (n1 + n2) / 2;
  if (media <= 5) {
    return document.write(`<strong>Reprovado</strong>`);
  } else {
    return document.write(`<strong>Aprovado</strong>`);
  }
};

calculoMedia(8, 9);
