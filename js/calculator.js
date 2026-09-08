function simular() {
    // Declarando Váriaveis
    let insumo = Number(ipt_insumo.value)
    let rendimento = Number(ipt_rendimento.value)
    let perdaTransbordo = Number(ipt_perdaTransbordo.value)
    let valorProd = Number(ipt_valorProd.value)
    let horasParadas = Number(ipt_horasParadas.value)
    let custoHoraParada = Number(ipt_custoHoraParada.value)

    // Calculos
    massaPerdida = insumo * (perda / 100);

    produtoNaoGerado = massaPerdia * (rendimento /100)

    prejuizoTransbordo = produtoNaoGerado * valorProd

    prejuizoDowntime = horasParadas * custoHoraParada

    prejuizoMensal = prejuizoDowntime + perdaTransbordo

    prejuizoAnual = PrejuizoMensal * 12

    ganhoDireto = prejuizoAnual * 0.85;
    

    // Projeções

    ano1 = valorTotal;
    ano3 = valorTotal * 3

    // Mostrar resultado


}