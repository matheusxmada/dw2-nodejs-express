/* Função com mais de um retorno 
4 – Crie uma função que receba uma idade como parâmetro. Se a idade for >= 18, a função deve retornar 
o valor “Maior de idade”, se não deve retornar “Menor de idade”. O resultado deve ser exibido no console. */

const idade = 15;

function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

document.write(
  `<p>A idade inserida (${idade}) qualifica o indivíduo como <strong>${verificarIdade(idade)}</strong>`,
);
