# Code Review & Improvement Suggestions
*AI Assistant Analysis - 2025*

## Table of Contents
1. [Critical Issues](#critical-issues)
2. [Multilinguality Solutions](#multilinguality-solutions)
3. [Code Quality Issues](#code-quality-issues)
4. [Detailed Implementations](#detailed-implementations)
5. [Priority Action Plan](#priority-action-plan)

---

## Critical Issues

### 1. Code Duplication - The DRY Principle

**What you're doing:**
- You have 3 separate HTML files: `index.html`, `index-de.html`, `index-sv.html`
- Each file contains almost identical structure with different language content
- You likely have separate JavaScript files too (`main.js`, `main-de.js`)

**Why this is problematic:**
- **Maintenance Nightmare**: When you fix a bug, you need to fix it in 3 places
- **Inconsistency Risk**: Easy to update one file and forget the others
- **Scalability**: Adding French, Dutch, Korean means 3 MORE files
- **Violates DRY**: "Don't Repeat Yourself"—fundamental programming principle

**Real-world scenario:**
Imagine you want to add a new card to your portfolio. You'd need to:
1. Add HTML to `index.html`
2. Copy-paste to `index-de.html` and translate
3. Copy-paste to `index-sv.html` and translate
4. If you make a typo in the HTML structure, fix it 3 times

### 2. Poor Internationalization (i18n) Pattern

**Current approach problems:**
- Hard to maintain content
- Can't switch languages without page reload
- No clear separation between structure and content
- Translation changes require HTML knowledge

---

## Multilinguality Solutions

### Understanding i18n (Internationalization)

**Key concept:** Separate your **structure** (HTML) from your **content** (translations).

Think of it like this:
- **Bad**: Writing 3 versions of the same letter in different languages
- **Good**: Writing one template letter with placeholders, then inserting translations

### Recommended Solution: Translation Object Pattern

#### Step 1: Create Translation Files

Create a new file: `src/translations.js`
```
javascript
/**
* Translation objects for all supported languages
* Structure: translations[languageCode][translationKey]
  */
  const translations = {
  en: {
  // Page metadata
  title: "Kat A. Klettke, Software Tester",
  subtitle: "Making Risk manageable.",

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
       footerContact: "contact @ <url of this website>",
       
       // Close button
       closeBtn: "Close"
  },

  de: {
  // German translations
  title: "Kat A. Klettke, Software Tester",
  subtitle: "Risiko beherrschbar machen.",

       colorScheme: "Wähle ein Farbschema",
       greenTheme: "Grünes Theme",
       lightTheme: "Helles Theme",
       blueTheme: "Blaues Theme",
       darkTheme: "Dunkles Theme",
       
       showingAll: "Zeige Alles",
       showAll: "Zeige Alles",
       hideSkills: "Verstecke Fähigkeiten",
       showSkills: "Zeige Fähigkeiten",
       hideStrengths: "Verstecke Stärken",
       showStrengths: "Zeige Stärken",
       hideProjects: "Verstecke Projekte",
       showProjects: "Zeige Projekte",
       hideInterests: "Verstecke Interessen",
       showInterests: "Zeige Interessen",
       
       skillTesting: "Fähigkeit: Testing",
       skillTestingDesc: "Was könnte schief gehen und wie handhabt die Software es?",
       // ... add all other German translations
       
       closeBtn: "Schließen"
  },

  sv: {
  // Swedish translations
  title: "Kat A. Klettke, Software Tester",
  subtitle: "Göra risken hanterbar.",

       colorScheme: "Välj ett färgschema",
       // ... add all other Swedish translations
       
       closeBtn: "Stäng"
  }
  };

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
      t(key) {
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
      element.textContent = this.t(key);
      });

      // Handle elements with data-i18n-html attribute (HTML content)
      document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const key = element.getAttribute('data-i18n-html');
      element.innerHTML = this.t(key);
      });

      // Handle placeholder attributes
      document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      element.placeholder = this.t(key);
      });

      // Handle title attributes
      document.querySelectorAll('[data-i18n-title]').forEach(element => {
      const key = element.getAttribute('data-i18n-title');
      element.title = this.t(key);
      });
      }
      };
```
#### Step 2: Update Your HTML (Single File!)

**Remove `index-de.html` and `index-sv.html` entirely.**

Update `index.html`:
```
html
<!doctype html>
<html lang="en">
<head>
    <title data-i18n="title">Kat A. Klettke, Software Tester</title>
    <meta name="author" content="Kat A. Klettke" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" type="text/css" href="src/style.css">
</head>
<body class="dark">
    <div id="container-header">
        <form class="color-picker" action="">
            <fieldset>
                <legend class="sr-only" data-i18n="colorScheme">Pick a color scheme</legend>
                <label class="sr-only" for="green" data-i18n="greenTheme">Green Theme</label>
                <input type="radio" name="theme" id="green">
                <label class="sr-only" for="light" data-i18n="lightTheme">Light Theme</label>
                <input type="radio" name="theme" id="light" checked>
                <label class="sr-only" for="blue" data-i18n="blueTheme">Blue Theme</label>
                <input type="radio" name="theme" id="blue">
                <label class="sr-only" for="dark" data-i18n="darkTheme">Dark Theme</label>
                <input type="radio" name="theme" id="dark">
            </fieldset>
        </form>

        <header>
            <h1 id="name-headline" data-i18n="title">Kat A. Klettke, Software Tester</h1>
            <h2 id="subheadline" data-i18n="subtitle">Making Risk manageable.</h2>
        </header>
        
        <!-- Updated language picker - no more separate HTML files! -->
        <div id="lang-picker">
            <div><a href="#" data-lang="de"><img src="./img/germany.png" alt="German flag" width="15"> DE</a></div>
            <div><a href="#" data-lang="en"><img src="./img/united-states.png" alt="US flag" width="15"> EN</a></div>
            <div><a href="#" data-lang="sv"><img src="./img/sweden.png" alt="Swedish flag" width="15"> SV</a></div>
        </div>
    </div>
    
    <div id="container-content">
        <main>
            <div class="sidebar">
                <aside>
                    <ul>
                        <li id="filter-all-text">
                            <!-- SVG icons stay the same -->
                            <svg class="icon" id="open-eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M230.844 47.688c-28.215.083-58.57 2.925-91 8.78C339.666 41.874 441.95 144.504 495.938 292.75c0-143.316-92.67-245.57-265.094-245.063zm-2.656 33.624c-56.703 22.374-97.407 81.194-97.407 150.844 0 49.006 20.153 92.64 51.845 122 22.64 8.588 46.563 10.904 71.406 9.563-26.212-96.096-8.522-185.37 32.5-271-18.534-6.51-37.96-10.382-58.342-11.407zm-41.844 1.782c-43.318 5.686-90.65 23.297-142.5 54.53 24.987 97.103 56.545 155.038 92.78 187.97-15.558-27.26-24.53-59.27-24.53-93.438 0-61.93 29.422-116.84 74.25-149.062zm134.156 25c1.552 6.27 2.92 12.552 4.156 18.844-1.776-.353-3.62-.532-5.5-.532-15.486 0-28.03 12.55-28.03 28.03 0 15.483 12.544 28.033 28.03 28.033 4.33 0 8.432-.967 12.094-2.72 3.26 62.225-9.635 123.823-41.03 179.844 32.597-5.38 66.42-14.65 100.78-22.406 22.463-28.085 36.094-64.734 36.094-105.032 0-8.02-.553-15.9-1.594-23.594-31.27-44.417-66.02-78.693-105-100.468zm-301.875 48.47C36.78 459.957 249.36 479.842 493.063 343.717 306.578 348.125 115.88 532.286 18.625 156.56zm427 82.75c-1.25 33.993-11.342 65.633-27.938 92.28 23.992-4.595 48.14-7.793 72.22-7.813-13.924-30.585-28.636-58.848-44.282-84.467zm41.53 129.81c-127.06 79.076-267.344 111.63-421.03 39.126 130.246 115.856 342.11 82.373 421.03-39.125z"/>
                            </svg>
                            <svg class="icon" id="hidden-eye" style="display:none;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 23c-75.556 0-137 61.444-137 137v.008c.038 42.262 19.614 82.002 52.756 107.857L116.473 489h279.054l-55.35-221.402c33.076-25.838 52.76-65.38 52.823-107.584V160c0-75.556-61.444-137-137-137zm0 18c65.824 0 118.993 53.164 119 118.986-.06 38.516-18.74 74.6-50.154 96.88l-5.016 3.56L372.473 471H139.527l52.625-210.504-5.013-3.558C155.712 234.64 137.036 198.53 137 160v-.008C137.004 94.168 190.174 41 256 41zm14.508 44.69c-1.983-.01-3.966-.003-5.95.03-30.615.485-61.19 6.227-91.69 16.77-3.66 5.217-6.824 10.77-9.378 16.608-1.183 2.468-2.232 4.98-3.166 7.523 30.858-12.783 61.51-20.36 91.987-22.376-25.746 5.47-45.19 28.43-45.19 55.756 0 31.374 25.627 57 57 57 31.375 0 57-25.626 57-57 0-28.278-20.82-51.876-47.9-56.26 24.755.443 49.475 4.616 74.22 12.733-4.17-8.416-9.554-16.247-15.872-23.258-20.307-4.896-40.67-7.39-61.06-7.524zM264.12 121c21.647 0 39 17.354 39 39s-17.353 39-39 39c-21.645 0-39-17.354-39-39 0-4.494.76-8.8 2.14-12.807.83.772 1.705 1.465 2.597 2.037 4.008 2.572 8.673 3.77 13.676 3.77s9.67-1.198 13.676-3.77C261.215 146.66 265 142 265 136s-3.784-10.66-7.79-13.23c-.484-.31-.978-.597-1.48-.868 2.702-.585 5.507-.902 8.39-.902zm-102.915 72.994c3.308 9.103 7.833 17.772 13.428 25.645 36.963 15.02 72.75 24.08 107.156 25.694 10.122.475 20.12.278 29.972-.613 8.763-5.944 16.48-13.31 22.963-21.65-16.736 3.786-34.09 5.127-52.092 4.284-37.77-1.77-78.5-13.594-121.428-33.36z"/>
                            </svg>
                            <span data-i18n="showingAll">Showing All</span>
                        </li>
                        <li id="filter-all-skills">
                            <!-- SVG icon -->
                            <span data-i18n="hideSkills">Hide Skills</span>
                        </li>
                        <!-- Continue with other filters using data-i18n -->
                    </ul>
                </aside>
            </div>
            
            <!-- Update all cards to use data-i18n -->
            <div class="small-boxes explained" id="box1">
                <div class="box-inner" id="skill-testing">
                    <div class="box-front" data-i18n="skillTesting">
                        Skill: Testing
                    </div>
                    <div class="box-back" data-i18n="skillTestingDesc">
                        "What could go wrong, and how does the software handle it?"
                    </div>
                </div>
            </div>
            
            <!-- Continue with other boxes... -->
            
        </main>
    </div>
    
    <footer>
        <p>©2025 Kat A. Klettke</p>
        <p data-i18n="footerContact">kontakt @ &lt;url of this website&gt;</p>
        <p><a href="https://www.linkedin.com/in/kat-a-klettke/">linkedin</a> // <a href="https://github.com/KatAKlettke">github</a></p>
    </footer>
    
    <!-- Load translations first, then main script -->
    <script src="src/translations.js"></script>
    <script src="src/main.js"></script>
</body>
</html>
```
#### Step 3: Update main.js

Add this at the beginning of your main.js:
```
javascript
// Language switching functionality
document.querySelectorAll('#lang-picker a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = e.currentTarget.getAttribute('data-lang');
        i18n.setLanguage(lang);
        updateFilterLabels(); // Update filter labels after language change
    });
});

// Update filter labels based on current state and language
function updateFilterLabels() {
    const allShown = getStorageBoolean(STORAGE_KEYS.ALL_SHOWN);
    const skillShown = getStorageBoolean(STORAGE_KEYS.SKILL_SHOWN);
    const strengthShown = getStorageBoolean(STORAGE_KEYS.STRENGTH_SHOWN);
    const projectShown = getStorageBoolean(STORAGE_KEYS.PROJECT_SHOWN);
    const interestShown = getStorageBoolean(STORAGE_KEYS.INTEREST_SHOWN);
    
    // Update "Show All" / "Showing All"
    document.querySelector('#filter-all-text > span').textContent = 
        allShown ? i18n.t('showingAll') : i18n.t('showAll');
    
    // Update other filters
    document.querySelector('#filter-all-skills > span').textContent = 
        skillShown ? i18n.t('hideSkills') : i18n.t('showSkills');
    
    document.querySelector('#filter-all-strengths > span').textContent = 
        strengthShown ? i18n.t('hideStrengths') : i18n.t('showStrengths');
    
    document.querySelector('#filter-all-projects > span').textContent = 
        projectShown ? i18n.t('hideProjects') : i18n.t('showProjects');
    
    document.querySelector('#filter-all-interests > span').textContent = 
        interestShown ? i18n.t('hideInterests') : i18n.t('showInterests');
}

// Update onStartup function
const onStartup = function () {
    i18n.init(); // Initialize translations first
    setRememberedTheme();
    updateFilters();
}
```
---

## Code Quality Issues

### Issue 3: Magic Strings (Hardcoded Values)

**What are "magic strings"?**
Magic strings are hardcoded string values that appear throughout your code without explanation.

**Your current code:**
```
javascript
localStorage.setItem('allIsShown', 'true');
if (localStorage.getItem('skillIsShown') === 'true') {
localStorage.setItem('theme', theme);
```
**Why this is problematic:**
- **Typo Risk**: One letter wrong = bug that's hard to find
- **Refactoring Difficulty**: Want to rename 'skillIsShown' to 'skills_visible'? Find all occurrences
- **No IDE Support**: Your editor can't autocomplete or validate these strings
- **Unclear Intent**: What does 'true' as a string mean vs boolean true?

**Solution: Use Constants**

Create at the top of main.js:
```
javascript
/**
 * Storage keys used in localStorage
 * Using constants prevents typos and makes refactoring easier
 */
const STORAGE_KEYS = {
    ALL_SHOWN: 'allIsShown',
    SKILL_SHOWN: 'skillIsShown',
    STRENGTH_SHOWN: 'strengthIsShown',
    PROJECT_SHOWN: 'projectIsShown',
    INTEREST_SHOWN: 'interestIsShown',
    THEME: 'theme',
    LANGUAGE: 'language'
};

/**
 * Available theme names
 */
const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
    GREEN: 'green',
    BLUE: 'blue'
};

/**
 * Filter types
 */
const FILTER_TYPES = {
    SKILL: 'skill',
    STRENGTH: 'strength',
    PROJECT: 'project',
    INTEREST: 'interest'
};
```
**Usage:**
```
javascript
// ❌ Before
localStorage.setItem('allIsShown', 'true');

// ✅ After
setStorageBoolean(STORAGE_KEYS.ALL_SHOWN, true);
```
### Issue 4: Storing Booleans as Strings

**Current approach:**
```
javascript
localStorage.setItem('allIsShown', 'true');
if (localStorage.getItem('allIsShown') === 'true')
```
**Why this is problematic:**
- Mixing string `'true'` with boolean `true` is confusing
- Easy to make mistakes: `if (value === true)` vs `if (value === 'true')`
- localStorage can store JSON, use it properly!

**Solution: Helper Functions**
```
javascript
/**
 * Store a boolean value in localStorage
 * @param {string} key - Storage key
 * @param {boolean} value - Boolean value to store
 */
const setStorageBoolean = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Retrieve a boolean value from localStorage
 * @param {string} key - Storage key
 * @param {boolean} defaultValue - Default value if key doesn't exist
 * @returns {boolean}
 */
const getStorageBoolean = (key, defaultValue = false) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
};

/**
 * Store an object in localStorage
 * @param {string} key - Storage key
 * @param {Object} value - Object to store
 */
const setStorageObject = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Retrieve an object from localStorage
 * @param {string} key - Storage key
 * @param {Object} defaultValue - Default value if key doesn't exist
 * @returns {Object}
 */
const getStorageObject = (key, defaultValue = null) => {
    const value = localStorage.getItem(key);
    try {
        return value ? JSON.parse(value) : defaultValue;
    } catch (e) {
        console.error(`Failed to parse stored object for key '${key}'`, e);
        return defaultValue;
    }
};
```
**Usage:**
```
javascript
// ❌ Before
localStorage.setItem('allIsShown', 'true');
if (localStorage.getItem('allIsShown') === 'true') {

// ✅ After
setStorageBoolean(STORAGE_KEYS.ALL_SHOWN, true);
if (getStorageBoolean(STORAGE_KEYS.ALL_SHOWN)) {
```
### Issue 5: Repetitive Filter Functions

**Your current code has 5 nearly identical functions:**
```
javascript
function toggleSkillFilter() {
    if (localStorage.getItem('skillIsShown') === 'true') {
        localStorage.setItem('skillIsShown', 'false');
        localStorage.setItem('allIsShown', 'false');
    } else {
        localStorage.setItem('skillIsShown', 'true');
        checkForAllFiltersTrue();
    }
    updateFilters();
}

function toggleStrengthFilter() {
    // Exact same logic, different string...
}

// ... and so on
```
**Why this is problematic:**
- **Repetition**: If you need to fix a bug, you fix it 5 times
- **Violates DRY principle**
- **Hard to maintain**: Adding a feature means updating 5 functions

**Solution: Factory Function Pattern**
```
javascript
/**
 * Creates a filter toggle function for a specific filter type
 * This is a "factory function" - it creates other functions
 * 
 * @param {string} filterType - Type of filter (from FILTER_TYPES)
 * @param {string} storageKey - localStorage key for this filter
 * @returns {Function} Toggle function for this filter
 */
function createFilterToggle(filterType, storageKey) {
    return function() {
        const isShown = getStorageBoolean(storageKey);
        
        // Toggle the value
        setStorageBoolean(storageKey, !isShown);
        
        // If we just hid something, 'all' is no longer shown
        if (isShown) {
            setStorageBoolean(STORAGE_KEYS.ALL_SHOWN, false);
        } else {
            // If we just showed something, check if everything is shown now
            checkForAllFiltersTrue();
        }
        
        updateFilters();
    };
}

// Create all toggle functions from the factory
const toggleSkillFilter = createFilterToggle(
    FILTER_TYPES.SKILL, 
    STORAGE_KEYS.SKILL_SHOWN
);

const toggleStrengthFilter = createFilterToggle(
    FILTER_TYPES.STRENGTH, 
    STORAGE_KEYS.STRENGTH_SHOWN
);

const toggleProjectFilter = createFilterToggle(
    FILTER_TYPES.PROJECT, 
    STORAGE_KEYS.PROJECT_SHOWN
);

const toggleInterestFilter = createFilterToggle(
    FILTER_TYPES.INTEREST, 
    STORAGE_KEYS.INTEREST_SHOWN
);
```
**Benefits:**
- Change the logic once, affects all filters
- Easy to add new filters: one line of code
- Clear, self-documenting code

### Issue 6: Using Inline Styles Instead of CSS Classes

**Your current code:**
```
javascript
// Hiding
skill.parentElement.setAttribute('style', 'display:none;');

// Showing
skill.parentElement.removeAttribute('style');
```
**Why this is problematic:**
- **Mixes concerns**: JavaScript shouldn't define how things look
- **Hard to override**: Inline styles have highest specificity
- **Not reusable**: Can't apply same hiding logic elsewhere
- **Difficult to debug**: Can't see in CSS file what's happening

**Solution: Use CSS Classes**

Add to your CSS file:
```
css
/* Utility class for hiding elements */
.hidden {
    display: none !important;
}

/* If you need different hide animations */
.fade-out {
    opacity: 0;
    transition: opacity 0.3s ease-out;
    pointer-events: none;
}
```
Update JavaScript:
```
javascript
/**
 * Hide an element by adding CSS class
 * @param {HTMLElement} element - Element to hide
 */
function hideElement(element) {
    element.classList.add('hidden');
}

/**
 * Show an element by removing CSS class
 * @param {HTMLElement} element - Element to show
 */
function showElement(element) {
    element.classList.remove('hidden');
}

// Usage in your activate/deactivate functions:
function deactivateSkills() {
    document.querySelector('#filter-all-skills > span').textContent = i18n.t('showSkills');
    skillList.forEach((skill) => {
        hideElement(skill.parentElement);
    });
}

function activateSkills() {
    document.querySelector('#filter-all-skills > span').textContent = i18n.t('hideSkills');
    skillList.forEach((skill) => {
        showElement(skill.parentElement);
    });
}
```
**Benefits:**
- Separation of concerns (CSS handles appearance)
- Easy to change styling (edit CSS, not JS)
- Can add animations/transitions easily
- Reusable across project

### Issue 7: Repeating DOM Queries

**Your current code:**
```
javascript
// Query the same element multiple times
document.querySelector('#filter-all-skills span').innerHTML = 'Hide Skills';
// ... later in code ...
document.querySelector('#filter-all-skills > span').innerHTML = 'Show Skills';
// ... and again ...
document.querySelector('#filter-all-skills > span').textContent = 'Something else';
```
**Why this is problematic:**
- **Performance**: DOM queries are slow
- **Repetitive**: Typing same selector multiple times
- **Error-prone**: Easy to mistype selector
- **Hard to refactor**: If ID changes, update many places

**Solution: Cache DOM References**
```
javascript
/**
 * Cache frequently accessed DOM elements
 * Query once at startup, reuse throughout application
 */
const DOM = {
    // Filter elements
    filterAllText: null,
    filterAllTextSpan: null,
    filterSkillsSpan: null,
    filterStrengthsSpan: null,
    filterProjectsSpan: null,
    filterInterestsSpan: null,
    
    // Eye icons
    openEye: null,
    hiddenEye: null,
    
    // Overlay
    overlay: null,
    overlayContent: null,
    closeBtn: null,
    
    // Body element
    body: document.body,
    
    /**
     * Initialize DOM references
     * Call this once on page load
     */
    init() {
        this.filterAllText = document.getElementById('filter-all-text');
        this.filterAllTextSpan = document.querySelector('#filter-all-text > span');
        this.filterSkillsSpan = document.querySelector('#filter-all-skills > span');
        this.filterStrengthsSpan = document.querySelector('#filter-all-strengths > span');
        this.filterProjectsSpan = document.querySelector('#filter-all-projects > span');
        this.filterInterestsSpan = document.querySelector('#filter-all-interests > span');
        
        this.openEye = document.getElementById('open-eye');
        this.hiddenEye = document.getElementById('hidden-eye');
        
        this.overlay = document.getElementById('overlay');
        this.overlayContent = document.getElementById('overlay-content');
        this.closeBtn = document.getElementById('close-btn');
    }
};

// Usage:
function activateSkills() {
    DOM.filterSkillsSpan.textContent = i18n.t('hideSkills');
    skillList.forEach((skill) => {
        showElement(skill.parentElement);
    });
}
```
**Update onStartup:**
```
javascript
const onStartup = function () {
    DOM.init(); // Cache DOM elements first
    i18n.init(); // Initialize translations
    setRememberedTheme();
    updateFilters();
}
```
### Issue 8: Complex Theme Management

**Your current code:**
```
javascript
function setTheme(theme) {
    if (theme === 'light') {
        themeElement.classList.remove('dark');
        themeElement.classList.remove('blue');
        themeElement.classList.remove('green');
        themeElement.classList.add('light');
        themeElement.removeAttribute('style');
    }
    else if (theme === 'dark') {
        // ... repeat for each theme
    }
    // ... many more if-else blocks
}
```
**Why this is problematic:**
- **Repetitive**: Same pattern for each theme
- **Hard to maintain**: Adding a theme means adding another if-else
- **Error-prone**: Easy to forget to remove a class

**Solution: Data-Driven Approach**
```
javascript
/**
 * Theme configuration object
 * Each theme has its style and any special properties
 */
const THEME_CONFIG = {
    light: {
        className: 'light',
        backgroundStyle: '' // No inline style needed
    },
    dark: {
        className: 'dark',
        backgroundStyle: "background-color: #222222;background-image: url(\"data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");"
    },
    green: {
        className: 'green',
        backgroundStyle: "background-color: #006e1e;background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23009d3c' fill-opacity='0.4' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E\");"
    },
    blue: {
        className: 'blue',
        backgroundStyle: "background-color:#50d5f3;background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%2300abe7' fill-opacity='0.4' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E\");"
    }
};

/**
 * Set theme using configuration object
 * @param {string} themeName - Name of theme from THEME_CONFIG
 */
function setTheme(themeName) {
    // Validate theme exists
    if (!THEME_CONFIG[themeName]) {
        console.warn(`Theme '${themeName}' not found, using 'light'`);
        themeName = THEMES.LIGHT;
    }
    
    const theme = THEME_CONFIG[themeName];
    const themeElement = DOM.body;
    
    // Remove all theme classes
    Object.keys(THEME_CONFIG).forEach(name => {
        themeElement.classList.remove(THEME_CONFIG[name].className);
    });
    
    // Add new theme class
    themeElement.classList.add(theme.className);
    
    // Set background style if provided
    if (theme.backgroundStyle) {
        themeElement.setAttribute('style', theme.backgroundStyle);
    } else {
        themeElement.removeAttribute('style');
    }
}
```
**Benefits:**
- Adding a new theme: just add to `THEME_CONFIG`
- No more if-else chains
- Easy to see all themes at a glance
- Maintainable and scalable

### Issue 9: Initialization Confusion

**Your current code:**
```
javascript
// These run immediately when script loads
localStorage.setItem('allIsShown', 'true');
localStorage.setItem('skillIsShown', 'true');
localStorage.setItem('strengthIsShown', 'true');
// ...

// Then at the bottom:
document.onload = onStartup();
```
**Why this is problematic:**
- **Overwrites user preferences**: Every page load resets to defaults
- **Confusing flow**: Code runs in two phases (immediate + onload)
- **Unnecessary**: localStorage persists, doesn't need re-initialization

**Solution: Proper Initialization**
```
javascript
/**
 * Initialize localStorage with default values
 * Only sets values if they don't exist yet
 */
function initializeStorage() {
    const defaults = {
        [STORAGE_KEYS.ALL_SHOWN]: true,
        [STORAGE_KEYS.SKILL_SHOWN]: true,
        [STORAGE_KEYS.STRENGTH_SHOWN]: true,
        [STORAGE_KEYS.PROJECT_SHOWN]: true,
        [STORAGE_KEYS.INTEREST_SHOWN]: true,
        [STORAGE_KEYS.THEME]: THEMES.DARK
    };
    
    Object.entries(defaults).forEach(([key, value]) => {
        // Only set if not already set
        if (localStorage.getItem(key) === null) {
            if (typeof value === 'boolean') {
                setStorageBoolean(key, value);
            } else {
                localStorage.setItem(key, value);
            }
        }
    });
}

/**
 * Application startup function
 * Called when DOM is ready
 */
const onStartup = function () {
    initializeStorage(); // Set defaults if needed
    DOM.init(); // Cache DOM elements
    i18n.init(); // Initialize translations
    setRememberedTheme(); // Restore theme
    updateFilters(); // Update UI based on stored state
}

// Use proper DOM ready event
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onStartup);
} else {
    // DOM already loaded
    onStartup();
}
```
### Issue 10: Using `innerHTML` vs `textContent`

**Your current code:**
```
javascript
document.querySelector('#filter-all-skills span').innerHTML = 'Hide Skills';
```
**Why this might be problematic:**
- **Security risk**: If text ever comes from user input, could inject HTML/scripts
- **Performance**: innerHTML is slower than textContent
- **Intent unclear**: innerHTML suggests you're setting HTML, but you're just setting text

**Solution: Use `textContent`**
```
javascript
// ✅ For plain text, always use textContent
document.querySelector('#filter-all-skills span').textContent = 'Hide Skills';

// Or better with cached DOM:
DOM.filterSkillsSpan.textContent = i18n.t('hideSkills');

// Only use innerHTML when you actually need HTML:
overlayContent.innerHTML = `<p>${message}</p><strong>Important!</strong>`;
```
---

## Detailed Implementations

### Complete Refactored main.js Structure

Here's how your refactored main.js should be organized:
```
javascript
'use strict';

// ============================================================================
// CONSTANTS
// ============================================================================

const STORAGE_KEYS = {
    ALL_SHOWN: 'allIsShown',
    SKILL_SHOWN: 'skillIsShown',
    STRENGTH_SHOWN: 'strengthIsShown',
    PROJECT_SHOWN: 'projectIsShown',
    INTEREST_SHOWN: 'interestIsShown',
    THEME: 'theme',
    LANGUAGE: 'language'
};

const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
    GREEN: 'green',
    BLUE: 'blue'
};

const FILTER_TYPES = {
    SKILL: 'skill',
    STRENGTH: 'strength',
    PROJECT: 'project',
    INTEREST: 'interest'
};

const THEME_CONFIG = {
    // ... theme configuration from above
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

const setStorageBoolean = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getStorageBoolean = (key, defaultValue = false) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
};

function hideElement(element) {
    element.classList.add('hidden');
}

function showElement(element) {
    element.classList.remove('hidden');
}

// ============================================================================
// DOM CACHE
// ============================================================================

const DOM = {
    // ... DOM cache from above
};

// ============================================================================
// ELEMENT COLLECTIONS
// ============================================================================

// These stay as they are - selected once at load
const skillList = document.querySelectorAll('[id^="skill-"]');
const strengthList = document.querySelectorAll('[id^="strength-"]');
const projectList = document.querySelectorAll('[id^="project-"]');
const interestList = document.querySelectorAll('[id^="interest-"]');
const allCards = document.querySelectorAll('.small-boxes');
const explainedCards = document.querySelectorAll('.small-boxes.explained');
const colorThemes = document.querySelectorAll('[name="theme"]');

const fixedCardIdList = [...allCards].map(el => 
    el.firstElementChild.getAttribute('id')
);

// ============================================================================
// INITIALIZATION
// ============================================================================

function initializeStorage() {
    // ... initialization from above
}

// ============================================================================
// THEME MANAGEMENT
// ============================================================================

function storeTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
}

function setRememberedTheme() {
    let activeTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (activeTheme === null) {
        activeTheme = THEMES.DARK;
    }
    
    colorThemes.forEach((themeOption) => {
        themeOption.checked = (themeOption.id === activeTheme);
    });
    
    setTheme(activeTheme);
}

function setTheme(themeName) {
    // ... theme setting from above
}

// ============================================================================
// FILTER MANAGEMENT
// ============================================================================

function checkForAllFiltersTrue() {
    if (getStorageBoolean(STORAGE_KEYS.SKILL_SHOWN) &&
        getStorageBoolean(STORAGE_KEYS.STRENGTH_SHOWN) &&
        getStorageBoolean(STORAGE_KEYS.PROJECT_SHOWN) &&
        getStorageBoolean(STORAGE_KEYS.INTEREST_SHOWN)) {
        setStorageBoolean(STORAGE_KEYS.ALL_SHOWN, true);
    }
}

function createFilterToggle(filterType, storageKey) {
    // ... factory function from above
}

const toggleSkillFilter = createFilterToggle(
    FILTER_TYPES.SKILL, 
    STORAGE_KEYS.SKILL_SHOWN
);

const toggleStrengthFilter = createFilterToggle(
    FILTER_TYPES.STRENGTH, 
    STORAGE_KEYS.STRENGTH_SHOWN
);

const toggleProjectFilter = createFilterToggle(
    FILTER_TYPES.PROJECT, 
    STORAGE_KEYS.PROJECT_SHOWN
);

const toggleInterestFilter = createFilterToggle(
    FILTER_TYPES.INTEREST, 
    STORAGE_KEYS.INTEREST_SHOWN
);

function toggleAllFilter() {
    if (!getStorageBoolean(STORAGE_KEYS.ALL_SHOWN)) {
        setStorageBoolean(STORAGE_KEYS.ALL_SHOWN, true);
        setStorageBoolean(STORAGE_KEYS.SKILL_SHOWN, true);
        setStorageBoolean(STORAGE_KEYS.STRENGTH_SHOWN, true);
        setStorageBoolean(STORAGE_KEYS.PROJECT_SHOWN, true);
        setStorageBoolean(STORAGE_KEYS.INTEREST_SHOWN, true);
    }
    updateFilters();
}

function activateSkills() {
    DOM.filterSkillsSpan.textContent = i18n.t('hideSkills');
    skillList.forEach(skill => showElement(skill.parentElement));
}

function deactivateSkills() {
    DOM.filterSkillsSpan.textContent = i18n.t('showSkills');
    skillList.forEach(skill => hideElement(skill.parentElement));
}

function activateStrengths() {
    DOM.filterStrengthsSpan.textContent = i18n.t('hideStrengths');
    strengthList.forEach(strength => showElement(strength.parentElement));
}

function deactivateStrengths() {
    DOM.filterStrengthsSpan.textContent = i18n.t('showStrengths');
    strengthList.forEach(strength => hideElement(strength.parentElement));
}

function activateProjects() {
    DOM.filterProjectsSpan.textContent = i18n.t('hideProjects');
    projectList.forEach(project => showElement(project.parentElement));
}

function deactivateProjects() {
    DOM.filterProjectsSpan.textContent = i18n.t('showProjects');
    projectList.forEach(project => hideElement(project.parentElement));
}

function activateInterests() {
    DOM.filterInterestsSpan.textContent = i18n.t('hideInterests');
    interestList.forEach(interest => showElement(interest.parentElement));
}

function deactivateInterests() {
    DOM.filterInterestsSpan.textContent = i18n.t('showInterests');
    interestList.forEach(interest => hideElement(interest.parentElement));
}

function updateFilterLabels() {
    // ... from above
}

function updateFilters() {
    const allShown = getStorageBoolean(STORAGE_KEYS.ALL_SHOWN);
    
    if (allShown) {
        showElement(DOM.openEye);
        hideElement(DOM.hiddenEye);
        DOM.filterAllTextSpan.textContent = i18n.t('showingAll');
        
        activateSkills();
        activateStrengths();
        activateProjects();
        activateInterests();
    } else {
        hideElement(DOM.openEye);
        showElement(DOM.hiddenEye);
        DOM.filterAllTextSpan.textContent = i18n.t('showAll');
        
        if (getStorageBoolean(STORAGE_KEYS.SKILL_SHOWN)) {
            activateSkills();
        } else {
            deactivateSkills();
        }
        
        if (getStorageBoolean(STORAGE_KEYS.STRENGTH_SHOWN)) {
            activateStrengths();
        } else {
            deactivateStrengths();
        }
        
        if (getStorageBoolean(STORAGE_KEYS.PROJECT_SHOWN)) {
            activateProjects();
        } else {
            deactivateProjects();
        }
        
        if (getStorageBoolean(STORAGE_KEYS.INTEREST_SHOWN)) {
            activateInterests();
        } else {
            deactivateInterests();
        }
    }
    
    const tempCardIdList = determineVisibleCards();
    assignRandomSpotToCard(tempCardIdList);
}

// ============================================================================
// CARD MANAGEMENT
// ============================================================================

function determineVisibleCards() {
    const visibleCardsIds = [];
    
    for (const cardId of fixedCardIdList) {
        const card = document.getElementById(cardId);
        if (!card.parentElement.classList.contains('hidden')) {
            visibleCardsIds.push(cardId);
        }
    }
    
    return visibleCardsIds;
}

function assignRandomSpotToCard(idList) {
    const cardNumberToDistribute = idList.length;
    const cardsCopy = [...idList]; // Create a copy to avoid mutating original
    
    for (let i = 1; i <= cardNumberToDistribute; i++) {
        const randomIndex = Math.floor(Math.random() * cardsCopy.length);
        const elementToSortIn = cardsCopy[randomIndex];
        const currentBoxNumber = `box${i}`;
        
        document.getElementById(elementToSortIn)
            .parentElement
            .setAttribute('id', currentBoxNumber);
        
        cardsCopy.splice(randomIndex, 1);
    }
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================

function setupEventListeners() {
    // Theme picker
    colorThemes.forEach((themeOption) => {
        themeOption.addEventListener('click', () => {
            storeTheme(themeOption.id);
            setTheme(themeOption.id);
        });
    });
    
    // Filter controls
    DOM.filterAllText.addEventListener('click', toggleAllFilter);
    document.getElementById('filter-all-skills')
        .addEventListener('click', toggleSkillFilter);
    document.getElementById('filter-all-strengths')
        .addEventListener('click', toggleStrengthFilter);
    document.getElementById('filter-all-projects')
        .addEventListener('click', toggleProjectFilter);
    document.getElementById('filter-all-interests')
        .addEventListener('click', toggleInterestFilter);
    
    // Card overlay
    explainedCards.forEach(card => {
        card.addEventListener('click', () => {
            const message = card.getAttribute('data-message') || 'No message set.';
            DOM.overlayContent.textContent = message;
            DOM.overlay.classList.add('show');
            DOM.body.classList.add('no-scroll');
        });
    });
    
    DOM.closeBtn.addEventListener('click', () => {
        DOM.overlay.classList.remove('show');
        DOM.body.classList.remove('no-scroll');
    });
    
    DOM.overlay.addEventListener('click', (e) => {
        if (e.target === DOM.overlay) {
            DOM.overlay.classList.remove('show');
            DOM.body.classList.remove('no-scroll');
        }
    });
    
    // Language picker
    document.querySelectorAll('#lang-picker a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.currentTarget.getAttribute('data-lang');
            i18n.setLanguage(lang);
            updateFilterLabels();
        });
    });
}

// ============================================================================
// APPLICATION STARTUP
// ============================================================================

function onStartup() {
    initializeStorage();
    DOM.init();
    i18n.init();
    setupEventListeners();
    setRememberedTheme();
    updateFilters();
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onStartup);
} else {
    onStartup();
}
```
---

## Priority Action Plan

### Phase 1: Critical (Do First) 🔴

**Goal:** Fix the multilinguality issue

1. ✅ Create `src/translations.js` with all translations
2. ✅ Update `index.html` to use `data-i18n` attributes
3. ✅ Delete `index-de.html` and `index-sv.html`
4. ✅ Delete `src/main-de.js` if it exists
5. ✅ Test language switching

**Why first:** This solves your biggest maintainability problem

**Time estimate:** 2-3 hours

### Phase 2: High Priority (Do Next) 🟡

**Goal:** Improve code quality fundamentals

1. ✅ Add constants for magic strings (`STORAGE_KEYS`, `THEMES`, etc.)
2. ✅ Create helper functions (`setStorageBoolean`, `getStorageBoolean`)
3. ✅ Replace all magic strings with constants
4. ✅ Replace string booleans with proper booleans
5. ✅ Add CSS `.hidden` class and replace inline styles

**Why next:** Makes code safer and easier to work with

**Time estimate:** 1-2 hours

### Phase 3: Medium Priority (Then Do) 🟢

**Goal:** Reduce repetition

1. ✅ Implement `createFilterToggle` factory function
2. ✅ Replace individual toggle functions with factory-created ones
3. ✅ Simplify theme management with `THEME_CONFIG`
4. ✅ Create DOM cache object
5. ✅ Fix initialization logic

**Why third:** Reduces code volume and makes additions easier

**Time estimate:** 2-3 hours

### Phase 4: Polish (Finally) 🔵

**Goal:** Professional touches

1. ✅ Add JSDoc comments to all functions
2. ✅ Replace `innerHTML` with `textContent` where appropriate
3. ✅ Add error handling (try-catch where needed)
4. ✅ Add console warnings for development
5. ✅ Test everything thoroughly

**Why last:** Nice to have, improves developer experience

**Time estimate:** 1-2 hours

---

## Learning Resources

### Understanding the Patterns

**1. DRY Principle (Don't Repeat Yourself)**
- **What it means:** Every piece of knowledge should have a single, unambiguous representation
- **In practice:** If you find yourself copying code, create a function instead
- **Your example:** Three HTML files vs. one with translations

**2. Separation of Concerns**
- **What it means:** Different parts of code should handle different responsibilities
- **In practice:** HTML = structure, CSS = appearance, JS = behavior
- **Your example:** Using CSS classes instead of inline styles

**3. Single Source of Truth**
- **What it means:** Each piece of data should have one authoritative location
- **In practice:** Store translations in one place, reference them everywhere
- **Your example:** Translation object vs. hardcoded strings in HTML

**4. Factory Pattern**
- **What it means:** A function that creates other functions/objects
- **In practice:** `createFilterToggle` creates similar toggle functions
- **Benefit:** Write the logic once, create many similar functions

**5. Configuration over Code**
- **What it means:** Use data structures to drive behavior, not if-else chains
- **In practice:** `THEME_CONFIG` object vs. many if-else statements
- **Benefit:** Adding features = adding data, not code

### Recommended Reading

1. **Clean Code** by Robert C. Martin - Bible of code quality
2. **JavaScript: The Good Parts** by Douglas Crockford - JS best practices
3. **MDN Web Docs** - Authoritative JavaScript reference

### Practice Exercises

1. **Add a new theme:**
    - Try adding a "purple" theme to your refactored code
    - You should only need to add one entry to `THEME_CONFIG`

2. **Add a new filter:**
    - Try adding a "Tools" filter (like Skills, Strengths, etc.)
    - Should only need one constant and one line to create toggle function

3. **Add a new language:**
    - Try adding Dutch or French translations
    - Should only need to add one object to `translations`

---

## Common Mistakes to Avoid

### 1. Premature Optimization

**Don't:** Optimize code before it works
**Do:** Make it work, make it right, make it fast (in that order)

### 2. Over-Engineering

**Don't:** Create complex systems for simple problems
**Do:** Start simple, add complexity only when needed

### 3. Ignoring Standards

**Don't:** Invent your own patterns when standards exist
**Do:** Use established patterns (like i18n libraries if needed)

### 4. No Documentation

**Don't:** Write code without explaining why
**Do:** Add comments for complex logic, JSDoc for functions

### 5. Not Testing

**Don't:** Assume code works because it runs
**Do:** Test edge cases, user interactions, different languages

---

## Questions to Ask Yourself

As you refactor, ask:

1. **"If I need to change X, how many files do I touch?"**
    - Goal: As few as possible

2. **"Can someone else understand this code?"**
    - Goal: Yes, with minimal explanation

3. **"If I add a new feature, how much code changes?"**
    - Goal: Minimal, mostly adding data

4. **"What breaks if I rename this?"**
    - Goal: Your IDE should handle renames automatically

5. **"How do I test this?"**
    - Goal: Each function testable in isolation

---

## Next Steps After Refactoring

Once you've completed the refactoring:

1. **Consider a JavaScript framework:**
    - Vue.js, React, or Svelte for complex UIs
    - They handle i18n, state management, and more

2. **Add proper i18n library:**
    - i18next is industry standard
    - Handles plural forms, date formatting, etc.

3. **Add TypeScript:**
    - Catches errors before runtime
    - Provides better IDE support

4. **Set up build tools:**
    - Webpack or Vite for bundling
    - ESLint for code quality checking
    - Prettier for formatting

5. **Learn testing:**
    - Jest for unit tests
    - Playwright for end-to-end tests

---

## Conclusion

The main principles to remember:

1. **DRY** - Don't Repeat Yourself
2. **KISS** - Keep It Simple, Stupid
3. **YAGNI** - You Ain't Gonna Need It (don't add features you don't need yet)
4. **Separation of Concerns** - Each part does one thing well
5. **Single Source of Truth** - One place for each piece of information

Your code works, which is great! These improvements make it:
- **Maintainable** - Easy to change
- **Scalable** - Easy to grow
- **Professional** - Industry standard patterns
- **Understandable** - Clear intent and structure

Take your time with each phase. Understanding *why* is more important than rushing through *how*.

Good luck with your refactoring! 🚀