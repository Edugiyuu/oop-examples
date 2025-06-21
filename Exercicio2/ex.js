/* Exercício 2 – Criar uma classe Livro com verificação de estoque
Objetivo: Praticar lógica dentro de métodos.

📚 Crie a classe Livro com:

Atributos: titulo, autor, quantidadeEstoque

Método: venderLivro() que diminui o estoque e imprime uma mensagem.

Se o estoque for zero, mostre: "Livro esgotado!" */
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, quantidadeEstoque) {
        this.titulo = titulo;
        this.autor = autor;
        this.quantidadeEstoque = quantidadeEstoque;
    }
    Livro.prototype.venderLivro = function () {
        if (this.quantidadeEstoque == 0) {
            console.log("Livro esgotado");
        }
        else {
            console.log(this.quantidadeEstoque--);
        }
    };
    return Livro;
}());
var livro = new Livro("Harry poop", "Um cara", 2);
livro.venderLivro();
livro.venderLivro();
livro.venderLivro();
livro.venderLivro();
livro.venderLivro();
