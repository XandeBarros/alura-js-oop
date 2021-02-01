import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "220.891.792-49";

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "888.421.641-54";

const contaCorrenteRicardo = new contaCorrente();

contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const contaCorrenteAlice = new contaCorrente();

contaCorrenteAlice.agencia = 1001;
contaCorrenteAlice.cliente = cliente2;

contaCorrenteRicardo.transferir(250, contaCorrenteAlice);
console.log(contaCorrenteRicardo, contaCorrenteAlice);
