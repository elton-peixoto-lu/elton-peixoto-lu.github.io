$(document).ready(function() {
    // Obter o dia da semana
    var diaDaSemana = new Date().getDay();
    var nomeDia;
    switch (diaDaSemana) {
        case 0:
            nomeDia = "Domingo";
            break;
        case 1:
            nomeDia = "Segunda-feira";
            break;
        case 2:
            nomeDia = "Terça-feira";
            break;
        case 3:
            nomeDia = "Quarta-feira";
            break;
        case 4:
            nomeDia = "Quinta-feira";
            break;
        case 5:
            nomeDia = "Sexta-feira";
            break;
        case 6:
            nomeDia = "Sábado";
            break;
    }

    // Atualizar o conteúdo da página
    $("#dia-da-semana").text(nomeDia);

    // Buscar imagem de gato de acordo com o dia da semana
    var urlImagem = "https://api.thecatapi.com/v1/images/search?category=" + diaDaSemana;
    $.ajax({
        url: urlImagem,
        success: function(data) {
            var imagemGato = data[0].url;
            $("#imagem-gato").attr("src", imagemGato);
        }
    });

    // Adicionar legenda
    var legenda;
    switch (diaDaSemana) {
        case 0:
            legenda = "Um domingo relaxante com meu amigo peludo.";
            break;
        case 1:
            legenda = "Segunda-feira? Só com um café e um gato no colo.";
            break;
        case 2:
            legenda = "Terça-feira, energia renovada com a fofura felina.";
            break;
        case 3:
            legenda = "Quarta-feira, quase lá! Hora de um cochilo com meu gatinho.";
            break;
        case 4:
            legenda = "Quinta-feira, ansioso pela sexta-feira como este gato.";
            break;
        case 5:
            legenda = "Sexta-feira! Hora de celebrar com meu companheiro felino.";
            break;
        case 6:
            legenda = "Sábado, dia de relaxar e curtir a companhia do meu gato.";
            break;
    }
    $("#legenda").text(legenda);
});
