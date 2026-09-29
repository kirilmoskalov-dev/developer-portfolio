console.log("Hello, Developer Tower xD!");

const projectsButton = document.querySelector("#projectsButton");
const projectsInfo = document.querySelector("#projectsInfo");
const themeButton = document.querySelector("#themeButton");
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark") {
   document.body.classList.add("dark-mode");
   themeButton.textContent = "Light Mode";

}

let currentLanguage = "en";

projectsButton.addEventListener("click", function() {
    projectsInfo.textContent = translations[currentLanguage].projectsInfo;
    projectsButton.textContent = translations[currentLanguage].projectsShown;
    projectsInfo.style.display = "block";
});

themeButton.addEventListener("click", function() {
     document.body.classList.toggle("dark-mode");

     if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "Light Mode";
        localStorage.setItem("theme","dark");

     } else {

        themeButton.textContent = "Dark Mode";
        localStorage.setItem("theme","light");
     }
    



});

const enButton = document.querySelector("#enButton");
    

enButton.addEventListener("click", function() {
    setLanguage("en");
});

const translations = {
    en: {
        title: "Kiril — Software Developer",
        subtitle: "Python • JavaScript • HTML • CSS",
        heroText: "I build projects, solve problems, and learn new technologies.",
        aboutTitle: "About Me",
        aboutText: "I am an aspiring Software Developer from the Netherlands. I am learning Python, JavaScript, HTML, and CSS, and I enjoy building projects and solving problems. I am continuously improving my programming and web development skills.",
        projectsButton: "Show my projects",
        projectsInfo: "Here you can find my programming projects.",
        contactText: "If you would like to contact me, you can reach me by email or visit my GitHub.",
        headerText: "Software Developer in Training",
        projectsShown: "Projects are shown",
        skillsTitle: "Skills",
        projectsTitle: "Projects",
        contactTitle: "Contact",
        viewProject: "View Project",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        emailLink: "Email Me",
        githubLink: "GitHub",
        instagramLink: "My Instagram — I'm a positive person xD",
        themeDark: "Dark Mode",
        themeLight: "Light Mode"

    },

    nl: {
        title: "Kiril — Softwareontwikkelaar",
        subtitle: "Python • JavaScript • HTML • CSS",
        heroText: "Ik bouw projecten, los problemen op en leer nieuwe technologieën.",
        aboutTitle: "Over mij",
        aboutText: "Ik ben een beginnend Softwareontwikkelaar uit Nederland. Ik leer Python, JavaScript, HTML en CSS en ik vind het leuk om projecten te bouwen en problemen op te lossen. Ik verbeter voortdurend mijn programmeer- en webontwikkelingsvaardigheden.",
        projectsButton: "Bekijk mijn projecten",
        projectsInfo: "Hier vind je mijn programmeerprojecten.",
        contactText: "Als je contact met mij wilt opnemen, kun je mij een e-mail sturen of mijn GitHub bezoeken.",
        headerText: "Softwareontwikkelaar in opleiding",
        projectsShown: "Projecten worden weergegeven",
        skillsTitle: "Vaardigheden",
        projectsTitle: "Projecten",
        contactTitle: "Contact",
        viewProject: "Bekijk project",
        navAbout: "Over mij",
        navSkills: "Vaardigheden",
        navProjects: "Projecten",
        navContact: "Contact",
        emailLink: "E-mail mij",
        githubLink: "GitHub",
        instagramLink: "Mijn Instagram — ik ben een positief persoon xD",
        themeDark: "Donkere modus",
        themeLight: "Lichte modus"

    },

    ru: {
        title: "Кирилл — Разработчик программного обеспечения",
        subtitle: "Python • JavaScript • HTML • CSS",
        heroText: "Я создаю проекты, решаю проблемы и изучаю новые технологии.",
        aboutTitle: "Обо мне",
        aboutText: "Я начинающий разработчик программного обеспечения из Нидерландов. Я изучаю Python, JavaScript, HTML и CSS, мне нравится создавать проекты и решать проблемы. Я постоянно улучшаю свои навыки программирования и веб-разработки.",
        projectsButton: "Показать мои проекты",
        projectsInfo: "Здесь вы можете найти мои проекты по программированию.",
        contactText: "Если вы хотите связаться со мной, вы можете написать мне по электронной почте или посетить мой GitHub.",
        headerText: "Разработчик программного обеспечения в процессе обучения",
        projectsShown: "Проекты показаны",
        skillsTitle: "Навыки",
        projectsTitle: "Проекты",
        contactTitle: "Контакты",
        viewProject: "Посмотреть проект",
        navAbout: "Обо мне",
        navSkills: "Навыки",
        navProjects: "Проекты",
        navContact: "Контакты",
        emailLink: "Написать мне",
        githubLink: "GitHub",
        instagramLink: "Мой Instagram — я позитивный человек xD",
        themeDark: "Тёмный режим",
        themeLight: "Светлый режим"
    },

    ua: {
        title: "Кіріл — Розробник програмного забезпечення",
        subtitle: "Python • JavaScript • HTML • CSS",
        heroText: "Я створюю проєкти, вирішую проблеми та вивчаю нові технології.",
        aboutTitle: "Про мене",
        aboutText: "Я початківець у розробці програмного забезпечення з Нідерландів. Я вивчаю Python, JavaScript, HTML і CSS, люблю створювати проєкти та вирішувати проблеми. Я постійно вдосконалюю свої навички програмування та веброзробки.",
        projectsButton: "Показати мої проєкти",
        projectsInfo: "Тут ви можете знайти мої проєкти з програмування.",
        contactText: "Якщо ви хочете зв’язатися зі мною, ви можете написати мені електронною поштою або відвідати мій GitHub.",
        headerText: "Розробник програмного забезпечення в процесі навчання",
        projectsShown: "Проєкти показано",
        skillsTitle: "Навички",
        projectsTitle: "Проєкти",
        contactTitle: "Контакти",
        viewProject: "Переглянути проєкт",
        navAbout: "Про мене",
        navSkills: "Навички",
        navProjects: "Проєкти",
        navContact: "Контакти",
        emailLink: "Написати мені",
        githubLink: "GitHub",
        instagramLink: "Мій Instagram — я позитивна людина xD",
        themeDark: "Темний режим",
        themeLight: "Світлий режим"
    }
};

function setLanguage(language) {
    currentLanguage = language;

    const text = translations[language];

    document.querySelector("#title").textContent = text.title;
    document.querySelector("#subtitle").textContent = text.subtitle;
    document.querySelector("#heroText").textContent = text.heroText;
    document.querySelector("#aboutTitle").textContent = text.aboutTitle;
    document.querySelector("#aboutText").textContent = text.aboutText;
    document.querySelector("#skillsTitle").textContent = text.skillsTitle;
    document.querySelector("#projectsTitle").textContent = text.projectsTitle;
    document.querySelector("#contactTitle").textContent = text.contactTitle;
    document.querySelector("#projectsButton").textContent = text.projectsButton;
    document.querySelector("#projectsInfo").textContent = text.projectsInfo;
    document.querySelector("#contactText").textContent = text.contactText;
    document.querySelector("#headerText").textContent = text.headerText;
    document.querySelector("#navAbout").textContent = text.navAbout;
    document.querySelector("#navSkills").textContent = text.navSkills;
    document.querySelector("#navProjects").textContent = text.navProjects;
    document.querySelector("#navContact").textContent = text.navContact;
    document.querySelector("#emailLink").textContent = text.emailLink;
    document.querySelector("#githubLink").textContent = text.githubLink;
    document.querySelector("#instagramLink").textContent = text.instagramLink;

    themeButton.textContent = document.body.classList.contains("dark-mode")
    ? text.themeLight
    : text.themeDark;

    document.querySelectorAll(".viewProject").forEach(function(link) {
        link.textContent = text.viewProject;
    });
}

const nlButton = document.querySelector("#nlButton");

nlButton.addEventListener("click", function() {
    setLanguage("nl");
});

const ruButton = document.querySelector("#ruButton");

ruButton.addEventListener("click", function() {
    setLanguage("ru");
});

const uaButton = document.querySelector("#uaButton");

uaButton.addEventListener("click", function() {
    setLanguage("ua");
});