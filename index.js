class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = "020.411.853-09";
cliente1.agencia = 0001;
cliente1.saldo = 0;

console.log(cliente1);