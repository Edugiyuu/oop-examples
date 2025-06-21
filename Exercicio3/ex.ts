/* Exercício 3 – Criar uma classe Usuario com login
Objetivo: Trabalhar com comparação e this.

👤 Crie a classe Usuario com:

Atributos: nome, senha

Método: fazerLogin(senhaInformada)

Se a senha bater, imprima "Login bem-sucedido!"

Senão, "Senha incorreta!" */

class User{
    name:string
    password:string
    constructor(name:string, password:string) {
        this.name = name
        this.password = password
    }
    fazerLogin(password){
        if (this.password === password) {
            console.log("Login feito");
        } else{
            console.log("Senha incorreta");
        }
    }
}
var usuario = new User("Edu","blabla")
usuario.fazerLogin("eita")
usuario.fazerLogin("blabla")