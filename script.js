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
        headerText: "Aspiring Software Developer | Pre-Junior Learning Milestone",
        title: "Kiril — Aspiring Software Developer",
        subtitle: "Python • JavaScript • HTML • CSS • DOM • Git & GitHub",
        heroText: "From my first lines of code to building real projects. I turn curiosity into code, solve problems, and keep learning every day.",
        aboutTitle: "About Me",
        aboutText: "Hi, I'm Kiril, an aspiring Software Developer based in the Netherlands. I started my programming journey in August 2026 and have been building projects using Python, JavaScript, HTML, and CSS. My biggest ongoing project is ExploreWorld, a travel website featuring cities, attractions, interactive features, and multilingual support. I enjoy debugging, solving problems, and understanding how code works. I recently reached my personal Pre-Junior learning milestone, and my long-term goal is to become a professional Software Developer and build my future in the United States.",
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
        themeLight: "Light Mode",
       telegramLink: "My Telegram — Feel free to message me xD"

    },

    nl: {
        headerText: "Beginnend softwareontwikkelaar | Persoonlijke Pre-Junior-leermijlpaal",
        title: "Kiril — Beginnend softwareontwikkelaar",
        subtitle: "Python • JavaScript • HTML • CSS • DOM • Git & GitHub",
        heroText: "Van mijn eerste regels code tot het bouwen van echte projecten. Ik zet nieuwsgierigheid om in code, los problemen op en leer elke dag bij.",
        aboutTitle: "Over mij",
        aboutText: "Hoi, ik ben Kiril, een beginnend softwareontwikkelaar die in Nederland woont. Ik begon in augustus 2026 met programmeren en bouw sindsdien projecten met Python, JavaScript, HTML en CSS. Mijn grootste lopende project is ExploreWorld, een reiswebsite met steden, bezienswaardigheden, interactieve functies en ondersteuning voor meerdere talen. Ik vind het leuk om fouten op te sporen, problemen op te lossen en te begrijpen hoe code werkt. Onlangs bereikte ik mijn persoonlijke Pre-Junior-leermijlpaal. Mijn langetermijndoel is om professioneel softwareontwikkelaar te worden en mijn toekomst op te bouwen in de Verenigde Staten.",
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
        themeLight: "Lichte modus",
        telegramLink: "Mijn Telegram — Stuur me gerust een berichtje xD"

    },

    ru: {
        headerText: "Начинающий разработчик | Личный учебный уровень Pre-Junior",
        title: "Кирилл — Начинающий разработчик",
        subtitle: "Python • JavaScript • HTML • CSS • DOM • Git & GitHub",
        heroText: "От первых строк кода до создания настоящих проектов. Я превращаю любопытство в код, решаю задачи и каждый день продолжаю учиться.",
        aboutTitle: "Обо мне",
        aboutText: "Привет! Я Кирилл, начинающий разработчик программного обеспечения, живущий в Нидерландах. Я начал изучать программирование в августе 2026 года и с тех пор создаю проекты с использованием Python, JavaScript, HTML и CSS. Мой самый большой текущий проект — ExploreWorld, сайт о путешествиях с городами, достопримечательностями, интерактивными функциями и поддержкой нескольких языков. Мне нравится находить и исправлять ошибки, решать задачи и понимать, как работает код. Недавно я достиг личного учебного уровня Pre-Junior. Моя долгосрочная цель — стать профессиональным разработчиком и построить своё будущее в США.",
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
        themeLight: "Светлый режим",
        telegramLink: "Мой Telegram — пишите смело xD"
    },

    ua: {
        headerText: "Розробник-початківець | Особистий навчальний рівень Pre-Junior",
        title: "Кіріл — Розробник-початківець",
        subtitle: "Python • JavaScript • HTML • CSS • DOM • Git & GitHub",
        heroText: "Від перших рядків коду до створення справжніх проєктів. Я перетворюю цікавість на код, розв'язую завдання та щодня продовжую навчатися.",
        aboutTitle: "Про мене",
        aboutText: "Привіт! Я Кіріл, розробник програмного забезпечення-початківець, який живе в Нідерландах. Я почав вивчати програмування в серпні 2026 року й відтоді створюю проєкти за допомогою Python, JavaScript, HTML і CSS. Мій найбільший поточний проєкт — ExploreWorld, сайт про подорожі з містами, пам'ятками, інтерактивними функціями та підтримкою кількох мов. Мені подобається знаходити й виправляти помилки, розв'язувати завдання та розуміти, як працює код. Нещодавно я досяг особистого навчального рівня Pre-Junior. Моя довгострокова мета — стати професійним розробником і побудувати своє майбутнє у США.",
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
        themeLight: "Світлий режим",
        telegramLink: "Мій Telegram — сміливо пишіть мені xD"
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
    document.querySelector("#telegramLink").textContent = text.telegramLink;

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
