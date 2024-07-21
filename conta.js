const chalk = require('chalk');

class Conta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(chalk.bgGreen.black(`Depósito de R$ ${valor} realizado. Saldo atual: R$ ${this.saldo}`));
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(chalk.bgGreen.black(`Saque de R$ ${valor} realizado. Saldo atual: R$ ${this.saldo}`));
        } else {
            console.log(chalk.bgRed.black("Saldo insuficiente para saque."));
        }
    }
}

module.exports = Conta;