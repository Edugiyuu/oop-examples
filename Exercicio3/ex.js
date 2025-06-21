/* Exercício 3 – Criar uma classe Usuario com login
Objetivo: Trabalhar com comparação e this.

👤 Crie a classe Usuario com:

Atributos: nome, senha

Método: fazerLogin(senhaInformada)

Se a senha bater, imprima "Login bem-sucedido!"

Senão, "Senha incorreta!" */
var User = /** @class */ (function () {
    function User(name, password) {
        this.name = name;
        this.password = password;
    }
    User.prototype.fazerLogin = function (password) {
        if (this.password === password) {
            console.log("Login feito");
        }
        else {
            console.log("Senha incorreta");
        }
    };
    return User;
}());
var usuario = new User("Edu", "blabla");
usuario.fazerLogin("eita");
usuario.fazerLogin("blabla");
