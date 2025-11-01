
/**
 * Translation objects for all supported languages
 * Structure: translations[languageCode][translationKey]
 */
const translations = {
    en: {
        // Page Metadata
        title: "Kat A. Klettke, Agile Software Tester",
        subtitle: "Making Risk manageable",

        // UI Elements
        colorScheme: "Pick a color theme",
        greenTheme: "Green Theme",
        lightTheme: "Light Theme",
        blueTheme: "Blue Theme",
        darkTheme: "Dark Theme",

        // Filter controls
        showingAll: "Showing All",
        showAll: "Show All",
        hideSkills: "Hide Skills",
        showSkills: "Show Skills",
        hideStrengths: "Hide Strengths",
        showStrengths: "Show Strengths",
        hideProjects: "Hide Projects",
        showProjects: "Show Projects",
        hideInterests: "Hide Interests",
        showInterests: "Show Interests",

        // Card content - Skills
        skillTesting: "Testing",
        skillTestingDesc: "What could go wrong, and how does the software handle it?",
        skillPython: "Python",
        skillPythonDesc: "2/5",
        skillJavaScript: "JavaScript",
        skillJavaScriptDesc: "3/5",
        skillSQL: "SQL",
        skillSQLDesc: "2/5",
        skillEnglish: "English",
        skillEnglishDesc: "5/5",
        skillGerman: "German",
        skillGermanDesc: "5/5",
        skillSwedish: "Swedish",
        skillSwedishDesc: "1/5",
        skillDutch: "Dutch",
        skillDutchDesc: "1/5",
        skillFrench: "French",
        skillFrenchDesc: "1/5",
        skillJira: "Jira",
        skillJiraDesc: "3/5",

        // Card content - Strengths
        strengthPatterns: "Pattern Recognition",
        strengthPatternsDesc: "I spot patterns and their interruptions quicker than most.",
        strengthHyperfocus: "Autistic Hyperfocus",
        strengthHyperfocusDesc: "Things I enjoy doing let me achieve flow almost instantly.",
        strengthTenacity: "Tenacity",
        strengthTenacityDesc: "If you ask me to come back later, I will.",
        strengthDiligence: "Diligence",
        strengthDiligenceDesc: "I care for doing things properly and exactly to specification.",

        // Card content - Projects
        projectTerrazas: "Project: Terrazas Dart Club Round Robin Calculator",
        projectTerrazasDesc: "Are we too many for a Round Robin style tournament?",

        // Card content - Interests
        interestProgramming: "Special Interest: Programming",
        interestProgrammingDesc: "I love solving problems with code and how there's always a better way to do it.",
        interestNeurolinguistics: "Special Interest: Neurolinguistics",
        interestNeurolinguisticsDesc: "How do we process language, and why do we understand context?",
        interestIndoEuropean: "Special Interest: Indo-European Linguistics",
        interestIndoEuropeanDesc: "Why do so many European languages have so much in common?",
        interestMiddleAges: "Special Interest: Early European Middle Ages",
        interestMiddleAgesDesc: "From Theoderich to Charlemagne and the Vikings, this is when Europe started.",
        interestMedievalLit: "Special Interest: Medieval European Literature",
        interestMedievalLitDesc: "I love reading medieval heroic tales from all across Europe.",
        interestWorldbuilding: "Special Interest: Fantasy Worldbuilding",
        interestWorldbuildingDesc: "All that input about the Middle Ages has to come out at some point...",

        // Footer
        footerContact: "kontakt @ <url of this website>",

        // Close button
        closeBtn: "Close"
    },
    de: {
        // Page Metadata
        title: "Kat A. Klettke, Softwaretester",
        subtitle: "Risiken kalkulierbar machen",

        // UI Elements
        colorScheme: "Farbschema wählen",
        greenTheme: "Grünes Farbschema",
        lightTheme: "Helles Farbschema",
        blueTheme: "Blaues Farbschema",
        darkTheme: "Dunkles Farbschema",

        // Filter controls
        showingAll: "Alles angezeigt",
        showAll: "Zeige alles",
        hideSkills: "Verstecke Fähigkeiten",
        showSkills: "Zeige Fähigkeiten",
        hideStrengths: "Verstecke Stärken",
        showStrengths: "Zeige Stärken",
        hideProjects: "Verstecke Projekte",
        showProjects: "Zeige Projekte",
        hideInterests: "Verstecke Hobbies",
        showInterests: "Zeige Hobbies",

        // Card content - Skills
        skillTesting: "Testen",
        skillTestingDesc: "Was könnte schiefgehen, und wie schlägt sich die Software dabei?",
        skillPython: "Python",
        skillPythonDesc: "2/5",
        skillJavaScript: "JavaScript",
        skillJavaScriptDesc: "3/5",
        skillSQL: "SQL",
        skillSQLDesc: "2/5",
        skillEnglish: "Englisch",
        skillEnglishDesc: "5/5",
        skillGerman: "Deutsch",
        skillGermanDesc: "5/5",
        skillSwedish: "Schwedisch",
        skillSwedishDesc: "1/5",
        skillDutch: "Niederländisch",
        skillDutchDesc: "1/5",
        skillFrench: "Französisch",
        skillFrenchDesc: "1/5",
        skillJira: "JIRA",
        skillJiraDesc: "3/5",

        // Card content - Strengths
        strengthPatterns: "Mustererkennung",
        strengthPatternsDesc: "Muster (und ihre Störungen) erkenne ich schneller als die Meisten.",
        strengthHyperfocus: "Autistischer Hyperfokus",
        strengthHyperfocusDesc: "Wenn ich etwas gerne mache, arbeite ich extrem fokussiert.",
        strengthTenacity: "Hartnäckigkeit",
        strengthTenacityDesc: "Wenn ich auf später vertröstet werde, komme ich tatsächlich später wieder.",
        strengthDiligence: "Sorgfalt",
        strengthDiligenceDesc: "Mir ist es wichtig, alles richtig und genau umzusetzen.",

        // Card content - Projects
        projectTerrazas: "Projekt: Terrazas Dart Club Turnierplan-Rechner",
        projectTerrazasDesc: "Sind wir zuviele für ein Jeder-gegen-Jeden-Turnier?",

        // Card content - Interests
        interestProgramming: "Faszination: Programmieren",
        interestProgrammingDesc: "Es macht Spaß, kleine Alltagsprobleme durch Code zu lösen.",
        interestNeurolinguistics: "Faszination: Neurolinguistik",
        interestNeurolinguisticsDesc: "Wie verarbeiten wir Sprache, und warum verstehen wir Kontext?",
        interestIndoEuropean: "Faszination: Indogermanische Sprachwissenschaft",
        interestIndoEuropeanDesc: "Warum sind sich soviele europäische Sprachen so ähnlich?",
        interestMiddleAges: "Faszination: Spätantike und frühes Mittelalter",
        interestMiddleAgesDesc: "Zwischen Dietrich von Bern und Karl dem Großen liegen die Wurzeln Europas.",
        interestMedievalLit: "Faszination: Mittelalterliche europäische Literatur",
        interestMedievalLitDesc: "König Artus, das Rolandslied, die Nibelungen und wie sie sich durch Europa verbreiteten.",
        interestWorldbuilding: "Faszination: Fantasy-Weltenbau",
        interestWorldbuildingDesc: "In den Fußstapfen von Tolkien untewrwegs :)",

        // Footer
        footerContact: "kontakt @ <url dieser Webseite>",

        // Close button
        closeBtn: "Schließen"
    },
    sv: {
        // Page Metadata
        title: "Kat A. Klettke, Agil mjukvarutestare",
        subtitle: "Balans mellan testinsats och affärsrisk",

        // UI Elements
        colorScheme: "Pick a color scheme",
        greenTheme: "Green Theme",
        lightTheme: "Light Theme",
        blueTheme: "Blue Theme",
        darkTheme: "Dark Theme",

        // Filter controls
        showingAll: "Showing All",
        showAll: "Show All",
        hideSkills: "Hide Skills",
        showSkills: "Show Skills",
        hideStrengths: "Hide Strengths",
        showStrengths: "Show Strengths",
        hideProjects: "Hide Projects",
        showProjects: "Show Projects",
        hideInterests: "Hide Interests",
        showInterests: "Show Interests",

        // Card content - Skills
        skillTesting: "Skill: Testing",
        skillTestingDesc: "What could go wrong, and how does the software handle it?",
        skillPython: "Skill: Python",
        skillPythonDesc: "2/5",
        skillJavaScript: "Skill: JavaScript",
        skillJavaScriptDesc: "3/5",
        skillSQL: "Skill: SQL",
        skillSQLDesc: "2/5",
        skillEnglish: "Skill: English",
        skillEnglishDesc: "5/5",
        skillGerman: "Skill: German",
        skillGermanDesc: "5/5",
        skillSwedish: "Skill: Swedish",
        skillSwedishDesc: "1/5",
        skillDutch: "Skill: Dutch",
        skillDutchDesc: "1/5",

        // Card content - Strengths
        strengthPatterns: "Strength: Pattern Recognition",
        strengthPatternsDesc: "I spot interruptions in a pattern quicker than most.",
        strengthHyperfocus: "Strength: Autistic Hyperfocus",
        strengthHyperfocusDesc: "Things I enjoy doing let me achieve flow almost instantly.",
        strengthTenacity: "Strength: Tenacity",
        strengthTenacityDesc: "If you ask me to come back later, I will.",

        // Card content - Projects
        projectTerrazas: "Project: Terrazas Dart Club Round Robin Calculator",
        projectTerrazasDesc: "Are we too many for a Round Robin style tournament?",

        // Card content - Interests
        interestProgramming: "Special Interest: Programming",
        interestProgrammingDesc: "I love finding my own silly solutions to everyday issues.",
        interestNeurolinguistics: "Special Interest: Neurolinguistics",
        interestNeurolinguisticsDesc: "How do we process language, and why do we understand context?",
        interestIndoEuropean: "Special Interest: Indo-European Linguistics",
        interestIndoEuropeanDesc: "Why do so many European languages have so much in common?",
        interestMiddleAges: "Special Interest: Early European Middle Ages",
        interestMiddleAgesDesc: "From Theoderich to Charlemagne and the Vikings, this is when Europe started.",
        interestMedievalLit: "Special Interest: Medieval European Literature",
        interestMedievalLitDesc: "I love reading medieval heroic tales from all across Europe.",
        interestWorldbuilding: "Special Interest: Fantasy Worldbuilding",
        interestWorldbuildingDesc: "All that input about the Middle Ages has to come out at some point...",

        // Footer
        footerContact: "kontakt @ <url of this website>",

        // Close button
        closeBtn: "Close"
    },
    fr: {
        // Page Metadata
        title: "Kat A. Klettke, Testeur agile",
        subtitle: "Gérer le risque, assurer la qualité",

        // UI Elements
        colorScheme: "Pick a color scheme",
        greenTheme: "Green Theme",
        lightTheme: "Light Theme",
        blueTheme: "Blue Theme",
        darkTheme: "Dark Theme",

        // Filter controls
        showingAll: "Showing All",
        showAll: "Show All",
        hideSkills: "Hide Skills",
        showSkills: "Show Skills",
        hideStrengths: "Hide Strengths",
        showStrengths: "Show Strengths",
        hideProjects: "Hide Projects",
        showProjects: "Show Projects",
        hideInterests: "Hide Interests",
        showInterests: "Show Interests",

        // Card content - Skills
        skillTesting: "Skill: Testing",
        skillTestingDesc: "What could go wrong, and how does the software handle it?",
        skillPython: "Skill: Python",
        skillPythonDesc: "2/5",
        skillJavaScript: "Skill: JavaScript",
        skillJavaScriptDesc: "3/5",
        skillSQL: "Skill: SQL",
        skillSQLDesc: "2/5",
        skillEnglish: "Skill: English",
        skillEnglishDesc: "5/5",
        skillGerman: "Skill: German",
        skillGermanDesc: "5/5",
        skillSwedish: "Skill: Swedish",
        skillSwedishDesc: "1/5",
        skillDutch: "Skill: Dutch",
        skillDutchDesc: "1/5",

        // Card content - Strengths
        strengthPatterns: "Strength: Pattern Recognition",
        strengthPatternsDesc: "I spot interruptions in a pattern quicker than most.",
        strengthHyperfocus: "Strength: Autistic Hyperfocus",
        strengthHyperfocusDesc: "Things I enjoy doing let me achieve flow almost instantly.",
        strengthTenacity: "Strength: Tenacity",
        strengthTenacityDesc: "If you ask me to come back later, I will.",

        // Card content - Projects
        projectTerrazas: "Project: Terrazas Dart Club Round Robin Calculator",
        projectTerrazasDesc: "Are we too many for a Round Robin style tournament?",

        // Card content - Interests
        interestProgramming: "Special Interest: Programming",
        interestProgrammingDesc: "I love finding my own silly solutions to everyday issues.",
        interestNeurolinguistics: "Special Interest: Neurolinguistics",
        interestNeurolinguisticsDesc: "How do we process language, and why do we understand context?",
        interestIndoEuropean: "Special Interest: Indo-European Linguistics",
        interestIndoEuropeanDesc: "Why do so many European languages have so much in common?",
        interestMiddleAges: "Special Interest: Early European Middle Ages",
        interestMiddleAgesDesc: "From Theoderich to Charlemagne and the Vikings, this is when Europe started.",
        interestMedievalLit: "Special Interest: Medieval European Literature",
        interestMedievalLitDesc: "I love reading medieval heroic tales from all across Europe.",
        interestWorldbuilding: "Special Interest: Fantasy Worldbuilding",
        interestWorldbuildingDesc: "All that input about the Middle Ages has to come out at some point...",

        // Footer
        footerContact: "kontakt @ <url of this website>",

        // Close button
        closeBtn: "Close"
    },
    nl: {
        // Page Metadata
        title: "Kat A. Klettke, Agile softwaretester",
        subtitle: "Kwaliteit door bewuste keuzes",

        // UI Elements
        colorScheme: "Pick a color scheme",
        greenTheme: "Green Theme",
        lightTheme: "Light Theme",
        blueTheme: "Blue Theme",
        darkTheme: "Dark Theme",

        // Filter controls
        showingAll: "Showing All",
        showAll: "Show All",
        hideSkills: "Hide Skills",
        showSkills: "Show Skills",
        hideStrengths: "Hide Strengths",
        showStrengths: "Show Strengths",
        hideProjects: "Hide Projects",
        showProjects: "Show Projects",
        hideInterests: "Hide Interests",
        showInterests: "Show Interests",

        // Card content - Skills
        skillTesting: "Skill: Testing",
        skillTestingDesc: "What could go wrong, and how does the software handle it?",
        skillPython: "Skill: Python",
        skillPythonDesc: "2/5",
        skillJavaScript: "Skill: JavaScript",
        skillJavaScriptDesc: "3/5",
        skillSQL: "Skill: SQL",
        skillSQLDesc: "2/5",
        skillEnglish: "Skill: English",
        skillEnglishDesc: "5/5",
        skillGerman: "Skill: German",
        skillGermanDesc: "5/5",
        skillSwedish: "Skill: Swedish",
        skillSwedishDesc: "1/5",
        skillDutch: "Skill: Dutch",
        skillDutchDesc: "1/5",

        // Card content - Strengths
        strengthPatterns: "Strength: Pattern Recognition",
        strengthPatternsDesc: "I spot interruptions in a pattern quicker than most.",
        strengthHyperfocus: "Strength: Autistic Hyperfocus",
        strengthHyperfocusDesc: "Things I enjoy doing let me achieve flow almost instantly.",
        strengthTenacity: "Strength: Tenacity",
        strengthTenacityDesc: "If you ask me to come back later, I will.",

        // Card content - Projects
        projectTerrazas: "Project: Terrazas Dart Club Round Robin Calculator",
        projectTerrazasDesc: "Are we too many for a Round Robin style tournament?",

        // Card content - Interests
        interestProgramming: "Special Interest: Programming",
        interestProgrammingDesc: "I love finding my own silly solutions to everyday issues.",
        interestNeurolinguistics: "Special Interest: Neurolinguistics",
        interestNeurolinguisticsDesc: "How do we process language, and why do we understand context?",
        interestIndoEuropean: "Special Interest: Indo-European Linguistics",
        interestIndoEuropeanDesc: "Why do so many European languages have so much in common?",
        interestMiddleAges: "Special Interest: Early European Middle Ages",
        interestMiddleAgesDesc: "From Theoderich to Charlemagne and the Vikings, this is when Europe started.",
        interestMedievalLit: "Special Interest: Medieval European Literature",
        interestMedievalLitDesc: "I love reading medieval heroic tales from all across Europe.",
        interestWorldbuilding: "Special Interest: Fantasy Worldbuilding",
        interestWorldbuildingDesc: "All that input about the Middle Ages has to come out at some point...",

        // Footer
        footerContact: "kontakt @ <url of this website>",

        // Close button
        closeBtn: "Close"
    }
}

/**
 * i18n utility object for handling translations
 */
const i18n = {
    currentLang: 'en',

    /**
     * Initialize the i18n system
     * @param {string} lang - Default language code (e.g., 'en', 'de', 'sv')
     */
    init(lang = 'en') {
        // Check if there's a saved language preference
        this.currentLang = localStorage.getItem('language') || lang;
        this.translate();
    },

    /**
     * Change the current language and update all translations
     * @param {string} lang - Language code to switch to
     */
    setLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Translation for language '${lang}' not found`);
            return;
        }

        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.translate();
    },

    /**
     * Get translation for a specific key
     * @param {string} key - Translation key
     * @returns {string} - Translated text or the key itself if not found
     */
    getTranslationFor(key) {
        const translation = translations[this.currentLang][key];
        if (!translation) {
            console.warn(`Translation key '${key}' not found for language '${this.currentLang}'`);
            return key;
        }
        return translation;
    },

    /**
     * Update all elements with translation attributes
     */
    translate() {
        // Handle elements with data-i18n attribute (text content)
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.getTranslationFor(key);
        });

        // Handle elements with data-i18n-html attribute (HTML content)
        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            element.innerHTML = this.getTranslationFor(key);
        });

        // Handle placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.getTranslationFor(key);
        });

        // Handle title attributes
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            element.title = this.getTranslationFor(key);
        });
    }
}
