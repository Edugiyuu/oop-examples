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

class ContaBancaria {
    titular:string
    saldo: number

    constructor(titular:string, saldo:number){
        this.titular = titular
        this.saldo = saldo
    }
    depositar(valor:number){
        console.log(this.saldo += valor);
    }
    sacar(valor:number){ 
        console.log(this.saldo -= valor);
    }
    verSaldo(){
        console.log(this.saldo);
    }
}

var contaDoEdu = new ContaBancaria("Eduardo",150)
contaDoEdu.depositar(40)
contaDoEdu.sacar(120)