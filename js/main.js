// Main JavaScript for the Diversity Praxis website
document.addEventListener('DOMContentLoaded', () => {
    // Current language
    let currentLang = 'en';

    // Function to render the content based on the selected language
    function renderContent(lang) {
        const data = languages[lang];
        const content = document.getElementById('content');
        
        content.innerHTML = `
            <header>
                <div class="container nav-container">
                    <a href="#" class="logo">DiversityPraxis</a>
                    <button class="mobile-menu-btn">☰</button>
                    <ul class="nav-links">
                        <li><a href="#home">${data.nav.home}</a></li>
                        <li><a href="#project">${data.nav.project}</a></li>
                        <li><a href="#methodology">${data.nav.methodology}</a></li>
                        <li><a href="#team">${data.nav.team}</a></li>
                        <li><a href="#results">${data.nav.results}</a></li>
                    </ul>
                    ${generateLanguageSelector(lang)}
                </div>
            </header>

            <section id="home" class="hero">
                <div class="container hero-content">
                    <h1>${data.hero.title}</h1>
                    <p>${data.hero.subtitle}</p>
                    <p>${data.hero.description}</p>
                    <a href="#project" class="btn">${data.hero.button}</a>
                </div>
            </section>

            <section id="project">
                <div class="container">
                    <div class="section-title">
                        <h2>${data.project.title}</h2>
                    </div>
                    <p>${data.project.intro}</p>
                    <p>${data.project.relevance}</p>
                    <div class="objectives">
                        <h3>${data.project.objectives.title}</h3>
                        ${data.project.objectives.items.map((item, index) => `
                            <div class="objective-item">
                                <div class="objective-icon">${index + 1}</div>
                                <p>${item}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <section id="methodology">
                <div class="container">
                    <div class="section-title">
                        <h2>${data.methodology.title}</h2>
                    </div>
                    <p>${data.methodology.intro}</p>
                    <div class="methodology-grid">
                        ${data.methodology.methods.map(method => `
                            <div class="methodology-card">
                                <h3>${method.title}</h3>
                                <p>${method.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <section id="team">
                <div class="container">
                    <div class="section-title">
                        <h2>${data.team.title}</h2>
                    </div>
                    <div class="team-grid">
                        <!-- Carolina primero como solicitado -->
                        <div class="team-member">
                            <img src="images/carolina.png" alt="Carolina Amaral" class="team-photo">
                            <h3>${data.team.members[1].name}</h3>
                            <p class="team-role">${data.team.members[1].role}</p>
                            <p>${data.team.members[1].bio}</p>
                        </div>
                        <div class="team-member">
                            <img src="images/francisco.jpeg" alt="Francisco Richter" class="team-photo">
                            <h3>${data.team.members[0].name}</h3>
                            <p class="team-role">${data.team.members[0].role}</p>
                            <p>${data.team.members[0].bio}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="results">
                <div class="container">
                    <div class="section-title">
                        <h2>${data.results.title}</h2>
                    </div>
                    <p>${data.results.intro}</p>
                    <div class="results-grid">
                        ${data.results.items.map(item => `
                            <div class="result-card">
                                <div class="result-icon">📊</div>
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <footer>
                <div class="container">
                    <a href="#" class="logo" style="color: white;">DiversityPraxis</a>
                    <ul class="footer-links">
                        <li><a href="#home">${data.nav.home}</a></li>
                        <li><a href="#project">${data.nav.project}</a></li>
                        <li><a href="#methodology">${data.nav.methodology}</a></li>
                        <li><a href="#team">${data.nav.team}</a></li>
                        <li><a href="#results">${data.nav.results}</a></li>
                    </ul>
                    <p class="copyright">${data.footer.copyright}</p>
                </div>
            </footer>
        `;
        
        // Add event listeners after rendering
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
        
        // Close mobile menu when clicking on a link
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Function to change language
    function changeLanguage(lang) {
        currentLang = lang;
        renderContent(lang);
        // Save language preference in localStorage
        localStorage.setItem('preferredLanguage', lang);
    }

    // Expose the function to the global scope
    window.changeLanguage = changeLanguage;

    // Check if there's a saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && languages[savedLang]) {
        currentLang = savedLang;
    } else {
        // Try to detect browser language
        const browserLang = navigator.language.split('-')[0];
        if (languages[browserLang]) {
            currentLang = browserLang;
        }
    }

    // Initial render
    renderContent(currentLang);
});
