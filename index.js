const Conta = require('./conta');
const ContaCorrente = require('./contaCorrente');
const ContaPoupanca = require('./contaPoupanca');

const inquirer = require('inquirer');
const chalk = require('chalk');

// Função para criar uma conta
async function criarConta() {
    const { tipoConta, titular } = await inquirer.prompt([
        {
            type: 'list',
            name: 'tipoConta',
            message: 'Escolha o tipo de conta:',
            choices: ['Conta Corrente', 'Conta Poupança'],
        },
        {
            type: 'input',
            name: 'titular',
            message: 'Informe o nome do titular:',
        },
    ]);

    if (tipoConta === 'Conta Corrente') {
        const contaCorrente = new ContaCorrente(titular, 0, 1); // Exemplo de juros de 1%
        return contaCorrente;
    } else {
        const contaPoupanca = new ContaPoupanca(titular, 0, 0.5); // Exemplo de rendimento de 0.5%
        return contaPoupanca;
    }
}

// Função principal
async function main() {
    const conta = await criarConta();

    while (true) {
        const { acao } = await inquirer.prompt({
            type: 'list',
            name: 'acao',
            message: 'Escolha uma ação:',
            choices: ['Depositar', 'Sacar', 'Consultar Saldo', 'Sair'],
        });

        if (acao === 'Depositar') {
            const { valor } = await inquirer.prompt({
                type: 'number',
                name: 'valor',
                message: 'Informe o valor do depósito:',
            });
            conta.depositar(valor);
        } else if (acao === 'Sacar') {
            const { valor } = await inquirer.prompt({
                type: 'number',
                name: 'valor',
                message: 'Informe o valor do saque:',
            });
            conta.sacar(valor);
        } else if (acao === 'Consultar Saldo') {
            console.log(chalk.bgGreen.black(`Saldo atual: R$ ${conta.saldo}`));
        } else {
            console.log(chalk.bgBlue.black('Obrigado por usar nosso sistema bancário!'));
            break;
        }
    }
}

main();
