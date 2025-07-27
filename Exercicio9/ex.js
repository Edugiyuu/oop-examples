/* Exercício 9 – RPG com Herança e Inventário
Classe base: Personagem

Atributos: nome, vida, inventario (array de strings)

Métodos: pegarItem(item), mostrarInventario()

Classes filhas:

Guerreiro → tem método atacar(), imprime: "Guerreiro atacou com espada!"

Mago → tem método atacar(), imprime: "Mago lançou magia!" */

class Personagem {
    constructor(nome, vida, inventario) {
        this.nome = nome
        this.vida = vida
        this.inventario = inventario
    }
    pegarItem(item) {
        for (let i = 0; i < this.inventario; i++) {
            if (this.inventario[i] === item) {
                console.log(`você pegou o(a) ${item}`);
            }
        }
    }
    mostrarInventario() {
        console.log(`Inventário de ${this.nome}: ${this.inventario.join(', ')}`);
    }
}

class Guerreiro extends Personagem {
    atacar() {
        console.log(`${this.nome} atacou com espada!`);
    }
}
class Mago extends Personagem {
    atacar() {
        console.log(`${this.nome} lançou magia!`);
    }
}
const personagem = new Personagem("Heroi", 100, ["Espada", "Escudo"]);
personagem.mostrarInventario();

const guerreiro = new Guerreiro("Guerreiro", 150, ["Machado"]);
guerreiro.atacar();