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
    
        return ranking
}


console.log(calcPartidas(101, 0))



