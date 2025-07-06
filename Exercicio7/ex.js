/* Exercício 7 – Sistema de Biblioteca com encapsulamento
Crie uma classe Livro com:

Atributos privados: #titulo, #autor, #disponivel

Getters e setters para acessar os atributos

Método: emprestar() → só empresta se disponivel === true

Método: devolver() → define disponivel = true

⚠️ Use get e set, e atributos privados com # */

class Livro {
  #titulo;
  #autor;
  #disponivel;

  constructor(titulo, autor, disponivel) {
    this.#titulo = titulo;
    this.#autor = autor;
    this.#disponivel = disponivel;
  }

  get titulo() {
    return this.#titulo;
  }

  get autor() {
    return this.#autor;
  }

  get disponivel() {
    return this.#disponivel;
  }

  set titulo(novoTitulo) {
    this.#titulo = novoTitulo;
  }

  set autor(novoAutor) {
    this.#autor = novoAutor;
  }

  set disponivel(novaDisponibilidade) {
    this.#disponivel = novaDisponibilidade;
  }

  emprestar() {
    if (this.#disponivel) {
      console.log(`"${this.#titulo}" emprestado com sucesso`);
      this.#disponivel = false;
    } else {
      console.log(`"${this.#titulo}" não está disponível para empréstimo`);
    }
  }

  devolver() {
    if (!this.#disponivel) {
      console.log(`"${this.#titulo}" foi devolvido`);
      this.#disponivel = true;
    } else {
      console.log(`"${this.#titulo}" já está disponível`);
    }
  }
}

const harryPoter = new Livro("Harry Poter", "Pessoa do Herry", true);

console.log(harryPoter.titulo);
console.log(harryPoter.titulo = "Harry pooper");


harryPoter.emprestar();
harryPoter.emprestar();
harryPoter.devolver();
harryPoter.devolver();
