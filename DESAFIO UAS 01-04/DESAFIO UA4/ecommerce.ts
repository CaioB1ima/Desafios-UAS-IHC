class Produto {
    nome: string;
    descricao: string;
    valor: number;
    fabricante: string;
    quantidadeEstoque: number;

    constructor(nome: string, descricao: string, valor: number, fabricante: string, quantidadeEstoque: number) {
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
        this.fabricante = fabricante;
        this.quantidadeEstoque = quantidadeEstoque;
    }
}

class Venda {
    produtos: Produto[];

    constructor(produtos: Produto[]) {
        this.produtos = produtos;
    }

    calcularTotal(): number {
        let total = 0;
        for (const produto of this.produtos) {
            total += produto.valor;
        }
        return total;
    }
}

// Criando produtos
const produto1 = new Produto("Cadeira Gamer", "Cadeira ergonômica para jogos", 1200.00, "HyperX", 50);
const produto2 = new Produto("Teclado Mecânico", "Teclado RGB com switches azuis", 450.00, "Razer", 100);

// Criando uma venda com os produtos
const minhaVenda = new Venda([produto1, produto2]);

// Calculando e exibindo o total da venda
console.log(`Total da venda: R$ ${minhaVenda.calcularTotal().toFixed(2)}`);
