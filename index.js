import {Cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "020.411.853-09";

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "888.411.853-09";

const contaCorrenteRicardo = new contaCorrente();

contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(200);

const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);
console.log(valorSacado);
