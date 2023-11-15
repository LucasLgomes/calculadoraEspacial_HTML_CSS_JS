var planetaSelecionado;

function escolherPlaneta(planeta) {
    if (planetaSelecionado == planeta) {
        var foguete = document.querySelector('#' + planeta + ' .foguete');
        if (foguete.style.visibility == 'visible') {
            foguete.style.visibility = 'hidden';
        } else {
            foguete.style.visibility = 'visible';
        }
    } else {
        planetaSelecionado = planeta;
        iniciarAnimacaoFoguete(planeta);
    }
}

function iniciarAnimacaoFoguete(planeta) {
    var foguete = document.querySelector('#' + planeta + ' .foguete');
    foguete.classList.add('voar');

    // Posição do foguete em relação ao planeta
    var x = foguete.offsetLeft - planeta.offsetLeft;
    var y = foguete.offsetTop - planeta.offsetTop;

    // Transformação do foguete
    foguete.style.transform = 'translate(-' + x + 'px, -' + y + 'px) rotate(0deg)';
}

function calcular() {
    var velocidade = document.getElementById('velocidade').value; // Velocidade em m/s

    // As distâncias médias dos planetas ao Sol são aproximadas
    var distancias = {
        Mercurio: 57910000,
        Venus: 108200000,
        Terra: 149600000,
        Marte: 227940000,
        Jupiter: 778330000,
        Saturno: 1429400000,
        Urano: 2870990000,
        Netuno: 4504300000,
    };

    var distancia = distancias[planetaSelecionado];
    var tempo = calcularTempo(distancia, velocidade);
    document.getElementById('resultado').innerHTML = "Tempo para " + planetaSelecionado + ": " + tempo.dias + " dias, " + tempo.horas + " horas, " + tempo.minutos + " minutos, " + Math.round(tempo.segundos) + " segundos, ou " + tempo.anos + " anos e " + tempo.meses + " meses";
}

function calcularTempo(distancia, velocidade) {
    var segundos = distancia / velocidade;
    var minutos = Math.floor(segundos / 60);
    var horas = Math.floor(minutos / 60);
    var dias = Math.floor(horas / 24);
    var anos = Math.floor(dias / 365.25);
    var meses = Math.round((dias % 365.25) / 30.44);
    return {dias: dias, horas: horas % 24, minutos: minutos % 60, segundos: segundos % 60, anos: anos, meses: meses};
}