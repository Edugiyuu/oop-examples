/* Exercício 2 – Criar uma classe Livro com verificação de estoque
Objetivo: Praticar lógica dentro de métodos.

📚 Crie a classe Livro com:

Atributos: titulo, autor, quantidadeEstoque

Método: venderLivro() que diminui o estoque e imprime uma mensagem.

Se o estoque for zero, mostre: "Livro esgotado!" */

class Livro {
    titulo:string
    autor:string
    quantidadeEstoque:number
    constructor(titulo: string,autor: string,quantidadeEstoque: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.quantidadeEstoque = quantidadeEstoque;
    }
    venderLivro(){
        if (this.quantidadeEstoque == 0) {
            console.log("Livro esgotado");
            
        }else{
            console.log(this.quantidadeEstoque--);
        }
        
    }
}

var livro = new Livro ("Harry poop","Um cara",2)

livro.venderLivro()
livro.venderLivro()
livro.venderLivro()
livro.venderLivro()
livro.venderLivro()