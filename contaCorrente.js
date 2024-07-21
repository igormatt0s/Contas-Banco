const Conta = require('./conta');

class ContaCorrente extends Conta {
    constructor(titular, saldo, juros) {
        super(titular, saldo);
        this.juros = juros;
    }

    aplicarJuros() {
        const jurosCalculado = this.saldo * (this.juros / 100);
        this.saldo += jurosCalculado;
        console.log(`Juros aplicados. Saldo atual: R$ ${this.saldo}`);
    }
}

module.exports = ContaCorrente;
