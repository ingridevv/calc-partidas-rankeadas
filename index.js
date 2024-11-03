// readline para solicitar input do usuário
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Objeto com as classificações do Ranking
const vitoriasNivel = {
    Ferro: 1,
    Bronze: 10,
    Prata: 20,
    Ouro: 50,
    Diamante: 80,
    Lendario: 90,
    Imortal: 101,
}

/* Função que recebe os parâmetros vitorias e derrotas e 
retorna o resultado do Ranking */
function calcPartidas(vitorias, derrotas) {

    let saldoRankeadas = vitorias - derrotas
    let ranking = 'Não foi possível identificar o nível de vitórias'

    // Itera as chaves em busca do primeiro valor que ultrapassar o ranking
    Object.keys(vitoriasNivel).forEach((k) => {
        if(saldoRankeadas >= vitoriasNivel[k]) {
            ranking = k
        }
    })
    
        return `O Herói tem saldo de ${saldoRankeadas} e está no nível ${ranking}`
}

// Solicita o número de vitórias e derrotas do usuário 
rl.question('Digite o número de vitórias do herói: ', (vitoriasInput) => {
    rl.question('Digite o número de derrotas do herói: ', (derrotasInput) => {
        const vitoriasCount = parseInt(vitoriasInput);
        const derrotasCount = parseInt(derrotasInput);

        // Exibir o resultado
        console.log(calcPartidas(vitoriasCount, derrotasCount));

        rl.close();
    });
});
