// // Contexto: Uma pequena loja de eletrônicos precisa de um sistema simples para gerenciar seu
// // estoque de produtos. Cada produto possui um nome, marca, preço e uma breve descrição. O sistema
// // deve ser capaz de listar os produtos, adicionar novos e exibir detalhes específicos.

// 1. Crie um array chamado estoqueProdutos que contenha pelo menos três objetos. Cada objeto
// deve representar um produto com as seguintes propriedades: nome (string), marca (string),
// preco (number) e descricao (string).

let estoqueProdutos = [
  {
    nome: "Radeon RX 7600",
    marca: "AMD",
    preco: 1620,
    descricao:
      "Excelente taxa de quadros por real investido e atualizações recentes de software.",
  },
  {
    nome: "Ryzen 5 5500",
    marca: "AMD",
    preco: 580,
    descricao:
      "Rodando com clock de até 4.2 GHz, garantindo altas taxas de quadros (FPS) em jogos competitivos.",
  },
  {
    nome: "MAG A650BN",
    marca: "MSI",
    preco: 350,
    descricao:
      "Oferece potência de sobra e segurança para praticamente qualquer configuração intermediária atual",
  },
];

// 2. Utilize um loop forEach para percorrer o estoqueProdutos e exibir no navegador, para cada
// produto, as informações no formato: Produto: [Nome do Produto] Marca: [Marca do Produto]
// Preço: R$ [Preço do Produto] Descrição: [Descrição do Produto] Utilize document.write e <br>
// para quebrar as linhas.

document.write(`<h3>Principais produtos:</h3>`);

estoqueProdutos.forEach((produto) => {
  // Para cada "produto" da lista estoqueProdutos, faça tal...
  document.write(`<p>Produto: ${produto.nome}</p>`);
  document.write(`<p>Marca: ${produto.marca}</p>`);
  document.write(`<p>Preco: R$${produto.preco}</p>`);
  document.write(`<p>Descrição: ${produto.descricao}</p>`);
});

// 3. Adicione um novo produto ao final do estoqueProdutos utilizando o método push(). Exiba o
// array atualizado no navegador.

estoqueProdutos.push({
  nome: "B550M PRO-VDH Wi-Fi",
  marca: "MSI",
  preco: 760,
  descricao:
    "Construída sob o chipset B550, ela oferece suporte nativo ao barramento PCIe 4.0, permitindo extrair a velocidade máxima de placas de vídeo e SSDs NVMe de última geração, algo fundamental para evitar gargalos nos jogos atuais",
});

document.write(`
    <p>Agora a lista é: ${estoqueProdutos.map((produto) => produto.nome)}</p>
`);

// 4. Adicione um novo produto ao início do estoqueProdutos utilizando o método unshift(). Exiba o
// array atualizado no navegador.

estoqueProdutos.unshift({
  nome: "Fury Beast 2x 8GB DDR4 3200MHz",
  marca: "Kingston",
  preco: 340,
  descricao:
    "se destaca como a escolha inteligente porque entrega estabilidade absoluta e alta velocidade pelo menor preço possível, operando na frequência ideal de 3200MHz recomendada para os processadores Ryzen.",
});

document.write(`
    <p>Agora a lista é: ${estoqueProdutos.map((produto) => produto.nome)}</p>
    `);

// 5. Ordene o estoqueProdutos em ordem crescente de preço e exiba o array ordenado no
// navegador. Utilize document.write para exibir os produtos, formatando o preço para duas
// casas decimais e com o símbolo R$. Utilize o método sort() com uma função de comparação.

estoqueProdutos.sort((a, b) => {
  return a.preco - b.preco;
});

estoqueProdutos.forEach((produto) => {
  document.write(`
    <p>
      Produto: ${produto.nome}<br>
      Marca: ${produto.marca}<br>
      Preço: R$ ${produto.preco.toFixed(2).replace(".", ",")}<br>
      Descrição: ${produto.descricao}
    </p>
  `);
});
