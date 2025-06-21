/* Exercício 4 – Classe Animal com herança
Objetivo: Usar herança com extends.

🐾 Crie uma classe Animal com:

Atributo: nome

Método: emitirSom()

Depois, crie duas classes que herdam de Animal:

Cachorro, que imprime "Au au!"

Gato, que imprime "Miau!" */

class Animal {
    nome:string
    constructor(nome:string) {
        this.nome = nome
    }
    emitirSom(){
        if (this.nome == "Cachorro") {
            console.log("Au au!");
        }else if (this.nome == "Gato"){
            console.log("Miau!");
        }
    }
}

var gato = new Animal("Gato")
gato.emitirSom()

var cachorro = new Animal("Cachorro")
cachorro.emitirSom()