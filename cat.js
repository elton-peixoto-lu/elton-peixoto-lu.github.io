// Módulo de dia da semana
const getDay = () => new Date().getDay();

const getDayName = (day) => {
    const daysOfWeek = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];
    return daysOfWeek[day];
};

// Módulo de imagem do gato
const getCatImageUrl = (day) => `https://api.thecatapi.com/v1/images/search?category_ids=${day}`;

const fetchCatImage = (url) => fetch(url).then((response) => response.json());

// Módulo de legenda
const getCaption = (day) => {
    const captions = [
        "Um domingo relaxante com meu amigo peludo.",
        "Segunda-feira? Só com um café e um gato no colo.",
        "Terça-feira, energia renovada com a fofura felina.",
        "Quarta-feira, quase lá! Hora de um cochilo com meu gatinho.",
        "Quinta-feira, ansioso pela sexta-feira como este gato.",
        "Sexta-feira! Hora de celebrar com meu companheiro felino.",
        "Sábado, dia de relaxar e curtir a companhia do meu gato."
    ];
    return captions[day];
};

// Módulo de atualização da página
const updatePageContent = (day, image) => {
    $("#dia-da-semana").text(getDayName(day));
    $("#imagem-gato").attr("src", image[0].url); // Alterado para image[0].url para acessar o URL da imagem corretamente
    $("#legenda").text(getCaption(day));
};

// Módulo principal
$(document).ready(() => {
    const day = getDay();
    const catImageUrl = getCatImageUrl(day);

    fetchCatImage(catImageUrl)
        .then((image) => updatePageContent(day, image))
        .catch((error) => console.error('Erro ao carregar a imagem:', error)); // Adicionado tratamento de erro
});