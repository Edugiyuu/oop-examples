/* Exercício 14 – Sistema de Pedidos em Restaurante
Classe Prato:

Atributos: nome, preco

Classe Pedido:

Atributos:
- cliente (nome do cliente)
- itens (array de pratos)

Métodos:
- adicionarItem(prato) → adiciona ao array
- calcularTotal() → retorna a soma dos preços dos itens
- resumoPedido() → imprime todos os pratos e o total
*/
class Prato {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class Pedido {
    constructor(cliente,itens) {
        this.cliente = cliente
        this.itens = itens
    }
    adicionarItem(prato) {
        this.itens.push(prato);
    }
    calcularTotal() {
        let total = 0;
        for (let i = 0; i < this.itens.length; i++) {
            total += this.itens[i].preco;
        }
        return total;
    }
    resumoPedido() {
        console.log(`Pedido de ${this.cliente}:`);
        this.itens.forEach(prato => {
            console.log(`- ${prato.nome}: R$${prato.preco}`);
        });
        console.log(`Total: R$${this.calcularTotal()}`);
    }
}

const prato1 = new Prato("Pizza", 29.90);
const prato2 = new Prato("Hambúrguer", 19.90);

const pedido = new Pedido("João", [prato1, prato2]);
pedido.resumoPedido();