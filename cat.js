const getDay = () => new Date().getDay();

const getDayName = (day) => {
    switch (day) {
        case 0:
            return "Domingo";
        case 1:
            return "Segunda-feira";
        case 2:
            return "Terça-feira";
        case 3:
            return "Quarta-feira";
        case 4:
            return "Quinta-feira";
        case 5:
            return "Sexta-feira";
        case 6:
            return "Sábado";
    }
};

const getCatImageUrl = (day) => `https://api.thecatapi.com/v1/images/search?category=${day}`;

const fetchCatImage = (url) => fetch(url).then((response) => response.json());

const updatePageContent = (day, image) => {
    $("#dia-da-semana").text(getDayName(day));
    $("#imagem-gato").attr("src", image?.url ?? "https://placekitten.com/300/300"); // Operador Elvis para imagem
    $("#legenda").text(getCaption(day));
};

const getCaption = (day) => {
    switch (day) {
        case 0:
            return "Um domingo relaxante com meu amigo peludo.";
        case 1:
            return "Segunda-feira? Só com um café e um gato no colo.";
        case 2:
            return "Terça-feira, energia renovada com a fofura felina.";
        case 3:
            return "Quarta-feira, quase lá! Hora de um cochilo com meu gatinho.";
        case 4:
            return "Quinta-feira, ansioso pela sexta-feira como este gato.";
        case 6:
            return "Sexta-feira! Hora de celebrar com meu companheiro felino.";
        case 6:
            return "Sábado, dia de relaxar e curtir a companhia do meu gato.";
    }
};

$(document).ready(() => {
    const day = getDay();
    const catImageUrl = getCatImageUrl(day);

    fetchCatImage(catImageUrl).then((image) => updatePageContent(day, image));
});