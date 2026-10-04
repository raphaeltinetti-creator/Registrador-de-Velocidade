function clicar() {
    let limite = Number(window.document.getElementById('caixa1').value);
    let velocidade = Number(window.document.getElementById('caixa2').value);
    let resultado = window.document.getElementById('res');
    if (limite == 120 && velocidade <= 122) {
        resultado.innerHTML = `A velocidade do veículo está á ${velocidade}km/h, não haverá nenhuma penalidade. `;
    } else if (limite == 120 && velocidade > 120) {
        resultado.innerHTML = `A velocidade do veículo está á ${velocidade}km/h infração gravissima!, penalidade: Multa de R$ 293,47 e 7 pontos na CNH.`;
    } if (limite == 40 && velocidade < 42){
         resultado.innerHTML = `A velocidade do veículo está á ${velocidade}km/h, não haverá nenhuma penalidade.`;

    } else if (limite == 40 && velocidade > 42){
        resultado.innerHTML = `A velocidade do veículo está á ${velocidade}km/h infração gravissima!, penalidade: Multa de R$ 293,47 e 7 pontos na CNH.`;
    } if (limite == 50 && velocidade <= 52) {
        resultado.innerHTML = `A velocidade do veículo está á ${velocidade}km/h, não haverá nenhuma penalidade.`;
    } else if (limite == 50 && velocidade > 52) {
        resultado.innerHTML = `A velocidade do veículo está á ${velocidade}km/h infração gravissima!, penalidade: Multa de R$ 293,47 e 7 pontos na CNH.`;
    } if (limite == 20 && velocidade <= 22){
        resultado.innerHTML = `A velocidade do veículo está á ${velocidade}km/h, não haverá nenhuma penalidade.`;

    } else if (limite == 20 && velocidade > 22){
        resultado.innerHTML = `A velocidade do veículo está á ${velocidade}km/h infração gravissima!, penalidade: Multa de R$ 293,47 e 7 pontos na CNH.`;
    }
}