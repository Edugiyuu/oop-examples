/* Exercício 8 – Sistema de Usuários com ID automático (método estático)
Classe Usuario:

Atributos: nome, email, id

Um ID único deve ser gerado automaticamente (ex: 1, 2, 3...) toda vez que um novo usuário for criado

Use um método estático gerarID() e uma variável estática para controlar isso */

class Usuario {
    static UltimoId = 0
    #id
    constructor(nome, email) {
        this.nome = nome 
        this.email = email
        this.#id = Usuario.gerarID()
    }

    static gerarID(){
        return Usuario.UltimoId += 1
    }
    getId(){
        return this.#id
    }
}
var edu = new Usuario("Eduardo", "edu@gmail")
var alguem = new Usuario("alguem", "alguem@gmail")
console.log(edu.getId());
console.log(alguem.getId());