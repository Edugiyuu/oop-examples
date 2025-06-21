/* Exercício 1 – Criar uma classe Carro
Objetivo: Criar uma classe com propriedades básicas e um método.

🛠 Crie uma classe Carro com:

Atributos: marca, modelo, ano

Método: exibirInfo() que imprime todos os dados do carro
*/
class Carro{
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}