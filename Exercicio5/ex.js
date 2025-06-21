/*
Exercício 5 – Banco com depósito e saque
Objetivo: Simular um sistema simples com validações.

🏦 Crie a classe ContaBancaria com:

Atributos: titular, saldo

Métodos:

depositar(valor) → soma ao saldo

sacar(valor) → diminui do saldo se houver saldo suficiente

verSaldo() → mostra o saldo atual
*/
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        console.log(this.saldo += valor);
    };
    ContaBancaria.prototype.sacar = function (valor) {
        console.log(this.saldo -= valor);
    };
    ContaBancaria.prototype.verSaldo = function () {
        console.log(this.saldo);
    };
    return ContaBancaria;
}());
var contaDoEdu = new ContaBancaria("Eduardo", 150);
contaDoEdu.depositar(40);
contaDoEdu.sacar(120);
