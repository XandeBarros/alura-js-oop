class Cliente {
    nome;
    cpf;
}

class contaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }

        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "020.411.853-09";

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "888.411.853-09";

const contaCorrenteRicardo = new contaCorrente();

contaCorrenteRicardo.agencia = 0001;

contaCorrenteRicardo.depositar(200);

const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);
console.log(valorSacado);
