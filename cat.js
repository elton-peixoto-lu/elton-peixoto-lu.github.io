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
const getCatImageUrl = () => {
    const url = 'https://api.thedogapi.com/v1/images/search?size=small&mime_types=jpg,png&format=json';
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar a imagem. Status do HTTP: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Resposta da API:', data); // Adicionado log para verificar a resposta da API
            return data[0].url;
        });
};

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
const updatePageContent = (day, imageUrl) => {
    $("#dia-da-semana").text(getDayName(day));
    $("#imagem-gato").attr("src", imageUrl);
    $("#legenda").text(getCaption(day));
};

// Módulo principal
$(document).ready(() => {
    const day = getDay();

    getCatImageUrl()
        .then((imageUrl) => {
            updatePageContent(day, imageUrl);
        })
        .catch((error) => console.error('Erro ao carregar a imagem:', error)); // Adicionado tratamento de erro
});