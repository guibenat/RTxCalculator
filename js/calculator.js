function simular() {
    // Declarando Váriaveis
    let insumo = Number(ipt_insumo.value)
    let rendimento = Number(ipt_rendimento.value)
    let perdaTransbordo = Number(ipt_perdaTransbordo.value)
    let valorProd = Number(ipt_valorProd.value)
    let horasParadas = Number(ipt_horasParadas.value)
    let custoHoraParada = Number(ipt_custoHoraParada.value)

    // Calculos

    let massaPerdida = insumo * (perdaTransbordo / 100); 

    let produtoNaoGerado = massaPerdida * (rendimento / 100);

    let prejuizoTransbordo = produtoNaoGerado * valorProd;

    let prejuizoDowntime = horasParadas * custoHoraParada;

    let prejuizoMensal = prejuizoDowntime + prejuizoTransbordo;

    let prejuizoAnual = prejuizoMensal * 12;

    let ganhoDireto = prejuizoAnual * 0.85;
    
    // Projeções 
    let ano1 = ganhoDireto; 
    let ano3 = ganhoDireto * 3;


    // Mostrar resultado

    if (insumo > 0 && rendimento > 0 && perdaTransbordo > 0 && valorProd > 0 && horasParadas > 0 && custoHoraParada > 0) {
        h2_prejuizo_anual.innerHTML = prejuizoAnual.toFixed(2);
        p_massaPerdida.innerHTML = massaPerdida.toFixed(2);
        p_produtoNaoGerado.innerHTML = produtoNaoGerado.toFixed(2);
        p_prejuizoPorTransbordo.innerHTML = prejuizoTransbordo.toFixed(2);
        p_prejuizoPorParada.innerHTML = prejuizoDowntime.toFixed(2);
        p_ganhoDireto.innerHTML = ganhoDireto.toFixed(2);
        h1_recuperadoPorAno.innerHTML = ganhoDireto.toFixed(2);
        p_economiaUmAno.innerHTML = ano1.toFixed(2);
        p_economiaTresAnos.innerHTML = ano3.toFixed(2);
    } else {
        h2_prejuizo_anual.innerHTML = `Insira os valores corretamente`
    }
}