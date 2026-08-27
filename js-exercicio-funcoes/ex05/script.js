// 5 – Crie uma função anônima que receba duas notas como parâmetro. Se a média dessas notas for <=5, a
// função deve retornar o valor “Reprovado”, se não deve retornar o valor “Aprovado”. O resultado deve ser
// exibido no console. Considere média = (nota1 + nota2) / 2.

const mediaNotas = function (n1, n2) {
  const media = (n1 + n2) / 2;
  if (media <= 5) {
    return "Reprovado";
  } else {
    return "Aprovado";
  }
};
const n1 = 8;
const n2 = 6;
document.write(
  `<p>Após o cálculo da média das notas, o resulto foi ${mediaNotas(n1, n2)}</p>`,
);
