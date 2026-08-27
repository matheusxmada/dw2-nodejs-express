// 3. Classes: Fábrica de Heróis
// Crie uma classe em JavaScript chamada Heroi, que represente um herói genérico. Essa classe deve conter os
// seguintes atributos:
// - nome
// - vida
// - velocidade
// - forca
// Além disso, implemente os seguintes métodos na classe Heroi:
// - correr(): Exibe uma mensagem informando que o herói está correndo.
// - andar(): Exibe uma mensagem informando que o herói está andando.
// - atacar(): Exibe uma mensagem informando que o herói está atacando.
// - defender(): Exibe uma mensagem informando que o herói está se defendendo.
// Use o “return” para retornar as mensages.
// Após criar a classe Heroi, instancie três objetos baseados nela, representando os heróis. Atribua valores para os
// atributos que foram definidos na classe para cada herói, inserindo também os atributos e métodos adicionais,
// conforme abaixo:

class Heroi {

    constructor(nome, vida, velocidade, forca) {
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

    correr() {
        // - correr(): Exibe uma mensagem informando que o herói está correndo.
        return "O herói está correndo velozmente!";
    }

    andar() {
        // - andar(): Exibe uma mensagem informando que o herói está andando.
        return "O herói está andando!";
    }

    atacar() {
        // - atacar(): Exibe uma mensagem informando que o herói está atacando.
        return "O herói está atacando!";
    }

    defender() {
        // - defender(): Exibe uma mensagem informando que o herói está se defendendo.
        return "O herói está se defendendo!";
    }
}

// Homem-Aranha
// Atributo adicional:
// - teia: recebe 0 ou 1, indicando se ele pode ou não soltar teia. (escolha um valor)
// Método adicional:
// - sentidoAranha(): Exibe uma mensagem informando que ele detectou perigo

const homemAranha = new Heroi(
    "Homem-Aranha",
    100,
    "100 km/h",
    "20 toneladas"
);

homemAranha.teia = 1;

homemAranha.sentidoAranha = function () {
    return "O sentido aranha está apitando!";
};


// Superman
// Atributo adicional:
// - podeVoar: recebe 0 ou 1, indicando se ele pode ou não voar. (escolha um valor)
// Método adicional:
// - visaoCalor(): Exibe uma mensagem informando que ele está usando sua visão de calor.

const superMan = new Heroi(
    "Superman",
    500,
    "500 km/h",
    "1000 toneladas"
);

superMan.podeVoar = 1;

superMan.visaoCalor = function () {
    return "Usando visão de calor!";
};


// Batman
// Atributo adicional:
// - esconder: recebe 0 ou 1, indicando se ele está se escondendo ou não. (escolha um valor)
// Método adicional:
// - investigar(): Exibe uma mensagem informando que ele está investigando um crime.


const batMan = new Heroi(
    "Batman",
    90,
    "48 km/h",
    "450 kg"
);

batMan.esconder = 1;

batMan.investigar = function () {
    return "Investigando um crime!";
};

// Ao final, escolha alguns atributos e métodos dos heróis para exibir no navegador e validar as criações.

document.write(
    `<h2>${homemAranha.nome}</h2>
    <p>Força: <strong>${homemAranha.forca}</strong></p>
    <p>Velocidade: <strong>${homemAranha.velocidade}</strong></p>
    <p>${homemAranha.correr()}</p>
    <p>${homemAranha.atacar()}</p>
    <p>${homemAranha.sentidoAranha()}</p>`
);

document.write(
    `<h2>${superMan.nome}</h2>
    <p>Força: <strong>${superMan.forca}</strong></p>
    <p>Velocidade: <strong>${superMan.velocidade}</strong></p>
    <p>${superMan.correr()}</p>
    <p>${superMan.defender()}</p>
    <p>${superMan.visaoCalor()}</p>`
);

document.write(
    `<h2>${batMan.nome}</h2>
    <p>Força: <strong>${batMan.forca}</strong></p>
    <p>Velocidade: <strong>${batMan.velocidade}</strong></p>
    <p>${batMan.andar()}</p>
    <p>${batMan.defender()}</p>
    <p>${batMan.investigar()}</p>`
);