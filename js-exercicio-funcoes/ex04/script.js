// 4 – Crie uma função que receba uma idade como parâmetro. Se a idade for >= 18, a função deve retornar
// o valor “Maior de idade”, se não deve retornar “Menor de idade”. O resultado deve ser exibido no console.

// Declarando a variável que será usada como parâmetro na função
const idade = 19;

// Criando a função
function maiorOuMenor(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

document.write(
  `<p>A sua idade de ${idade} anos configura-te como <strong>${maiorOuMenor(idade)}</strong></p>`,
);
