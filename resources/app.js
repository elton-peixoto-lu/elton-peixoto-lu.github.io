// Importação dos módulos Reagent e Re-frame (substitua 'require' por 'import' se estiver usando ES6)
var reagent = require('reagent.core');
var re_frame = require('re-frame.core');

// Definição do estado inicial do aplicativo
var resume_state = re_frame.atom({
    name: "John Doe",
    title: "Software Developer",
    contact_info: "john.doe@example.com | (123) 456-7890 | www.johndoe.com",
    summary: "Experienced software developer with a passion for functional programming.",
    skills: ["ClojureScript", "React", "HTML/CSS", "Functional Programming", "Web Development"],
    experiences: [
        { title: "Software Engineer", company: "ABC Corp", date: "January 2020 - Present", description: "Developed web applications using ClojureScript and React. Collaborated with cross-functional teams to deliver high-quality software products." },
        { title: "Junior Developer", company: "XYZ Solutions", date: "June 2018 - December 2019", description: "Worked on frontend development projects using ClojureScript, HTML/CSS, and React. Assisted in troubleshooting and debugging issues." }
    ]
});

// Handlers de eventos
re_frame.reg_event_db(
    ":initialize",
    function (_, _) {
        return { ":resume": resume_state };
    }
);

// Views
function view_experience(experience) {
    return reagent.create_element(
        "div",
        null,
        reagent.create_element("h1", null, experience.title),
        reagent.create_element("p", null, experience.date + " - " + experience.company),
        reagent.create_element("p", null, experience.description)
    );
}

function view() {
    var resume = reagent.deref(resume_state);
    return reagent.create_element(
        "div",
        null,
        reagent.create_element("h1", null, resume.name),
        reagent.create_element("p", null, resume.title),
        reagent.create_element("p", null, resume.contact_info),
        reagent.create_element("p", null, resume.summary),
        reagent.create_element("h1", null, "Skills"),
        reagent.create_element(
            "ul",
            null,
            resume.skills.map(function (skill) {
                return reagent.create_element("li", null, skill);
            })
        ),
        reagent.create_element("h1", null, "Experience"),
        resume.experiences.map(view_experience)
    );
}

// Subscriptions
re_frame.reg_sub(
    ":resume",
    function (db, _) {
        return db[":resume"];
    }
);

// Inicialização do aplicativo Reframe
re_frame.dispatch([":initialize"]);

// Renderização do aplicativo
reagent.render(reagent.create_element(view), document.getElementById("app"));