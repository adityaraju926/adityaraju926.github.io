class PortfolioManager {
    constructor() {
        this.config = PORTFOLIO_CONFIG;
        this.init();
    }

    init() {
        this.populatePageContent();
        this.setupEventListeners();
        this.setupAnimations();
    }

    populatePageContent() {
        document.getElementById('page-title').textContent = `${this.config.personal.name} - Portfolio`;
        
        document.getElementById('hero-name').textContent = this.config.personal.name;
        document.getElementById('nav-logo').textContent = this.config.personal.name.split(' ').map(n => n[0]).join('');
        document.getElementById('hero-tagline').textContent = this.config.personal.tagline;
        document.getElementById('footer-name').textContent = this.config.personal.name;

        document.getElementById('about-text').textContent = this.config.about.text;

        this.populateExperience();

        this.populateEducation();

        this.populateSkills();

        this.populateProjects();

        this.populateContact();
    }

    populateExperience() {
        const experienceGrid = document.getElementById('experience-grid');
        experienceGrid.innerHTML = '';

        this.config.experience.forEach(exp => {
            const experienceItem = document.createElement('div');
            experienceItem.className = 'experience-item';
            
            const achievementsList = exp.achievements.map(achievement => 
                `<li>${achievement}</li>`
            ).join('');

            experienceItem.innerHTML = `
                <div class="experience-header">
                    <h3 class="job-title">${exp.title}</h3>
                    <p class="company">${exp.company}</p>
                    <p class="duration">${exp.duration}</p>
                    <p class="location">${exp.location}</p>
                </div>
                <ul class="achievements">
                    ${achievementsList}
                </ul>
            `;
            
            experienceGrid.appendChild(experienceItem);
        });
    }

    populateEducation() {
        const educationGrid = document.getElementById('education-grid');
        educationGrid.innerHTML = '';

        this.config.education.forEach(edu => {
            const educationItem = document.createElement('div');
            educationItem.className = 'education-item';
            
            educationItem.innerHTML = `
                <h3 class="degree">${edu.degree}</h3>
                <p class="institution">${edu.institution}</p>
                <p class="duration">${edu.duration}</p>
                <p class="focus">${edu.focus}</p>
            `;
            
            educationGrid.appendChild(educationItem);
        });
    }

    populateSkills() {
        const skillsGrid = document.getElementById('skills-grid');
        skillsGrid.innerHTML = '';

        Object.entries(this.config.skills).forEach(([category, skills]) => {
            const skillCategory = document.createElement('div');
            skillCategory.className = 'skill-category';
            
            const skillList = skills.map(skill => 
                `<li class="skill-item">${skill}</li>`
            ).join('');
            
            skillCategory.innerHTML = `
                <h3 class="category-title">${category}</h3>
                <ul class="skill-list">
                    ${skillList}
                </ul>
            `;
            
            skillsGrid.appendChild(skillCategory);
        });
    }

    populateProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        projectsGrid.innerHTML = '';

        this.config.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            const techTags = project.technologies.map(tech => 
                `<span class="tech-tag">${tech}</span>`
            ).join('');
            
            projectCard.innerHTML = `
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${techTags}
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }

    populateContact() {
        document.getElementById('contact-text').textContent = this.config.contact.message;

        const contactLinks = document.getElementById('contact-links');
        contactLinks.innerHTML = '';

        if (this.config.personal.email) {
            const emailLink = document.createElement('a');
            emailLink.href = `mailto:${this.config.personal.email}`;
            emailLink.className = 'contact-link';
            emailLink.innerHTML = '<i class="fas fa-envelope"></i> Email';
            contactLinks.appendChild(emailLink);
        }

        if (this.config.personal.github) {
            const githubLink = document.createElement('a');
            githubLink.href = this.config.personal.github;
            githubLink.className = 'contact-link';
            githubLink.target = '_blank';
            githubLink.innerHTML = '<i class="fab fa-github"></i> GitHub';
            contactLinks.appendChild(githubLink);
        }
    }

    setupEventListeners() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
            
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });
        }
        
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        this.setupProjectCardEffects();
    }


    setupProjectCardEffects() {
        document.addEventListener('click', function(e) {
            const projectCard = e.target.closest('.project-card');
            if (projectCard) {
                projectCard.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    projectCard.style.transform = 'translateY(-4px)';
                }, 150);
            }
        });
    }

    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            observer.observe(section);
        });

        this.setupTypingEffect();

        this.setupScrollAnimations();

        this.setupActiveNavigation();
    }

    setupTypingEffect() {
        const nameElement = document.querySelector('.name');
        if (nameElement) {
            const text = nameElement.textContent;
            nameElement.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    nameElement.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 500);
        }
    }

    setupScrollAnimations() {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.header');
            
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });
    }

    setupActiveNavigation() {
        function updateActiveNav() {
            const sections = document.querySelectorAll('.section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    new PortfolioManager();
});

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const optimizedScrollHandler = debounce(function() {
}, 16);

window.addEventListener('scroll', optimizedScrollHandler);

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        console.log('Escape pressed');
    }
    
    if (e.key === 'Enter' && document.activeElement.classList.contains('project-card')) {
        console.log('Project card selected');
    }
});

window.addEventListener('beforeprint', function() {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('printing');
});
