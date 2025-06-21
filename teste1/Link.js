import Personagem from "./Personagem.js";

const link = new Personagem("Link", 100, 15);

console.log(`Nome: ${link.nome} vida: ${link.vida} ataque: ${link.ataque}`);
link.atacar();