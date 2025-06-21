/* Exercício 4 – Classe Animal com herança
Objetivo: Usar herança com extends.

🐾 Crie uma classe Animal com:

Atributo: nome

Método: emitirSom()

Depois, crie duas classes que herdam de Animal:

Cachorro, que imprime "Au au!"

Gato, que imprime "Miau!" */
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.emitirSom = function () {
        if (this.nome == "Cachorro") {
            console.log("Au au!");
        }
        else if (this.nome == "Gato") {
            console.log("Miau!");
        }
    };
    return Animal;
}());
var gato = new Animal("Gato");
gato.emitirSom();
var cachorro = new Animal("Cachorro");
cachorro.emitirSom();
