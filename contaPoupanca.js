const Conta = require('./conta');

class ContaPoupanca extends Conta {
    constructor(titular, saldo, rendimento) {
        super(titular, saldo);
        this.rendimento = rendimento;
    }

    aplicarRendimento() {
        const rendimentoCalculado = this.saldo * (this.rendimento / 100);
        this.saldo += rendimentoCalculado;
        console.log(`Rendimento aplicado. Saldo atual: R$ ${this.saldo}`);
    }
}

module.exports = ContaPoupanca;
