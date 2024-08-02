let totalAcumulado = 0;

function calcularFrete() {
    const local = document.getElementById('local').value;
    const kmInput = document.getElementById('km');
    const km = parseFloat(kmInput.value);
    const taxaExtra = document.getElementById('taxaExtra').checked;
    const taxaRetorno = document.getElementById('taxaRetorno').checked;
    let valorKm;

    if (km <= 1.9) valorKm = 7;
    else if (km <= 2.9) valorKm = 8;
    else if (km <= 3.9) valorKm = 9;
    else if (km <= 4.9) valorKm = 10;
    else if (km <= 5.9) valorKm = 12;
    else if (km <= 6.9) valorKm = 14;
    else if (km <= 7.9) valorKm = 16;
    else if (km <= 8.9) valorKm = 18;
    else if (km <= 9.9) valorKm = 20;
    else if (km <= 10) valorKm = 22;
    else if (km <= 11) valorKm = 24;
    else if (km <= 12) valorKm = 26;
    else if (km <= 13) valorKm = 28;
    else if (km <= 14) valorKm = 30;
    else if (km <= 15) valorKm = 32;
    else if (km <= 16) valorKm = 34;
    else if (km <= 17) valorKm = 36;
    else if (km <= 18) valorKm = 38;
    else if (km <= 19) valorKm = 40;
    else if (km <= 20) valorKm = 42;
    else if (km <= 21) valorKm = 44;
    else if (km <= 22) valorKm = 46;
    else if (km <= 23) valorKm = 48;
    else if (km <= 24) valorKm = 50;
    else if (km <= 25) valorKm = 52;
    else if (km <= 26) valorKm = 54;
    else if (km <= 27) valorKm = 56;
    else if (km <= 28) valorKm = 58;
    else if (km <= 29) valorKm = 60;
    else if (km <= 30) valorKm = 62;
    else valorKm = "Não disponível para distâncias acima de 30 km";

    if (typeof valorKm === 'number') {
        // Adiciona taxa extra se o checkbox estiver marcado
        if (taxaExtra) {
            valorKm += 2;
        }
        
        // Adiciona taxa de retorno se o checkbox estiver marcado e a distância for maior que 5 km
        if (taxaRetorno && km > 5) {
            valorKm += km;  // Adiciona R$ 1 por km para cada km acima de 5 km
        }
        
        totalAcumulado += valorKm;
        document.getElementById('resultado').textContent = `Valor do frete: R$ ${valorKm.toFixed(2)}`;
        
        // Adiciona ao histórico
        const li = document.createElement('li');
        let taxaExtraTexto = taxaExtra ? ' (com taxa extra de R$ 2)' : '';
        let taxaRetornoTexto = taxaRetorno && km > 5 ? ` (com taxa de retorno de R$ ${km})` : '';
        li.textContent = `Local: ${local} - Distância: ${km} km - Frete: R$ ${valorKm.toFixed(2)}${taxaExtraTexto}${taxaRetornoTexto}`;
        document.getElementById('historico').appendChild(li);
        
        // Atualiza o total acumulado
        document.getElementById('total').textContent = `R$ ${totalAcumulado.toFixed(2)}`;
    } else {
        document.getElementById('resultado').textContent = valorKm;
    }

    // Limpa o campo de entrada da distância
    kmInput.value = '';
}
