import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", "220.891.792-49");

const cliente2 = new Cliente("Alice", "888.421.641-54");

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);

const contaCorrenteAlice = new ContaCorrente(cliente2, 1001);

contaCorrenteRicardo.transferir(250, contaCorrenteAlice);
console.log(contaCorrenteRicardo, contaCorrenteAlice);
