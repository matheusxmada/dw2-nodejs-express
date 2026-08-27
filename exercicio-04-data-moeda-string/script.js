// // 4. Data e Moeda: Compra internacional
// // Contexto: Você está desenvolvendo um site de compras onde o usuário consegue ver o valor de sua
// // compra em dólar e o valor que ele irá pagar em real. O usuário também poderá ter uma estimativa da
// // data de entrega do produto.

// 1. Exiba a data e hora atuais no topo do site no formato completo (ex: "Mon Jul 07 2025
// 10:30:00 GMT-0300 (Horário Padrão de Brasília)") e em seguida no formato com barras
// DD/MM/AAA. Utilize document.write para mostrar.

document.write("<h3>Data e Hora Atual:</h3>");
const dataHoraAtual = new Date();
document.write(dataHoraAtual);

// Formato com barras DD/MM/AAA
const dia = dataHoraAtual.getDate();
const mes = dataHoraAtual.getMonth();
const ano = dataHoraAtual.getFullYear();
document.write(`<br>Data no padrão DD/MM/AAAA: ${dia}/${mes}/${ano}`);

// 2. Crie uma variável compraInternacional com um valor numérico (ex: 500.75). Exiba este valor
// formatado como moeda americana (USD) com o símbolo "$". Utilize document.write para
// mostrar.

let compraInternacional = 500.75;
// Valor formatado como USD
document.write(`<p> Valor fomatado como moeda americada (USD):
    ${compraInternacional.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    })}
    </p>`);

// 3. Em seguida faça a conversão do valor da compra em dólar para real e formate como moeda
// brasileira (BRL). Utilize document.write para mostrar.
document.write(`<p> Valor formatado como moeda brasileira (BRL):
    ${compraInternacional.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}
    </p>`);

// 4. Calcule e exiba a data de entrega do produto que ocorrerá daqui a 12 dias a partir da data
// atual. Exiba a data da entrega no formato "DD/MM/AAAA". Utilize document.write para
// mostrar.

dataHoraAtual.setDate(dataHoraAtual.getDate() + 12);
document.write(
  `<p>A entrega do produto ocorrerá daqui a 12 dia, na data: ${dataHoraAtual.getDate()}/${mes}/${ano}</p>`,
);

// 5. Crie uma variável com o nome do cliente escrita de forma irregular, formate colocando as
// primeiras letras maiúsculas e exiba no site com uma mensagem qualquer. Utilize
// document.write para mostrar.

let nomeErrado = "mAtHeUs ShImAdA";
let nomeFormatado = nomeErrado
  .split(" ")
  .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
  .join(" ");
document.write(`<p>Olá, ${nomeFormatado}! Agora o seu nome está formatado!</p>`);
