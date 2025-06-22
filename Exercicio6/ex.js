/* Exercício 6 – Loja de Produtos (com array de objetos)
Crie uma classe Produto com:

Atributos: nome, preco, estoque

Método: vender(quantidade)

Diminui o estoque, se tiver

Senão, imprime "Estoque insuficiente"

Depois, crie uma classe Loja com:

Atributo: produtos (array de produtos)

Método: listarProdutos() → imprime todos os produtos com nome e estoque

Método: venderProduto(nome, quantidade) → procura o produto pelo nome e chama vender */

class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }
    vender(quantidade){
        if (this.estoque >= quantidade) {
            this.estoque -= quantidade
        }else{
            console.log("Estoque insuficiente");
        }
    }
}
class Loja {
    constructor(produtos) {
        this.produtos = produtos
    }
    listarProdutos(){
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(this.produtos[i]);
        }
    }
    venderProduto(nome, quantidade){
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].nome === nome) {
                this.produtos[i].vender(quantidade);
                console.log(`Vendido ${quantidade} unidades de ${this.produtos[i].nome}, estoque restante: ${this.produtos[i].estoque}`);
            }
        }
    }
}

var produtoMiojo = new Produto("miojo", 6.90, 60)
var produtoSuco = new Produto("suco", 4.00, 90)
produtoMiojo.vender(3)

var lojaDoZé = new Loja ([produtoMiojo,produtoSuco])

lojaDoZé.listarProdutos()
lojaDoZé.venderProduto("suco", 20)
