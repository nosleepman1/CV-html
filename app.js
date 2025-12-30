 const cvData = {
            competences: [
                { nom: "JavaScript/React", niveau: 95 },
                { nom: "Node.js/Express", niveau: 90 },
                { nom: "Python/Django", niveau: 85 },
                { nom: "SQL/MongoDB", niveau: 88 }
            ],
            langues: [
                { nom: "Français", niveau: "Natif", color: "purple" },
                { nom: "Anglais", niveau: "Courant", color: "indigo" },
                { nom: "Espagnol", niveau: "basique", color: "blue" }
            ],
            experiences: [
                {
                    titre: "Lead Developer",
                    entreprise: "Ambo Tech",
                    periode: "2025 - Présent",
                    taches: [
                        "Direction d'une équipe de 2 développeurs",
                        "Architecture et développement d'applications React/Node.js",
                        "Mise en place de CI/CD et bonnes pratiques DevOps"
                    ],
                    color: "purple"
                },
                {
                    titre: "Développeur Full Stack",
                    entreprise: "Freelance",
                    periode: "2024 - Présent",
                    taches: [
                        "Développement d'applications web sur mesure",
                        "Intégration d'APIs RESTful et GraphQL",
                        "Optimisation des performances et SEO"
                    ],
                    color: "indigo"
                }
            ],

            formations: [
                {
                    diplome: "Licence Génie Logiciel",
                    etablissement: "Instutut Superieur d'informatque",
                    periode: "2024 - présent",
                    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
                    gradient: "from-purple-500 to-indigo-600"
                },
                {
                    diplome: "Licence Robotique",
                    etablissement: "ATOS, Université Numerique de Senegal",
                    periode: "2022 - 2025",
                    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                    gradient: "from-indigo-500 to-purple-600"
                },
                {
                    diplome: "Baccaulreat S5",
                    etablissement: "Lycéee Technique de Thies",
                    periode: "Juillet 2022",
                    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                    gradient: "from-indigo-500 to-purple-600"
                }
            ],
            projets: [
                {
                    titre: "Plateforme musée (MCN Sénégal)",
                    description: "Plateforme complète musée des civilisations noires, avec boutique integrée, achat tickets + gestions des flux, room tour virtuel et decouverte des oeuvres à distances avec descriptions textuelles et audio des oeuvres",
                    technologies: ["ReactJS", "Node.js", "ExpressJS", "JWT", "Redux", "Mongo DB", "Mongose"],
                    gradient: "from-purple-50 to-indigo-50",
                    border: "border-purple-200"
                },
                {
                    titre: "Systeme d'authentification",
                    description: "API REST d'un systeme d'authentification pour architechture microservices",
                    technologies: ["Node JS","Express.js", "Joi Validation", "JWT", "Passport JS", "Mongo DB", "Mongose"],
                    gradient: "from-indigo-50 to-purple-50",
                    border: "border-indigo-200"
                }
            ]
        };

        // Fonction pour générer les compétences
        function renderCompetences() {
            const container = document.getElementById('competences-container');
            container.innerHTML = cvData.competences.map(comp => `
                <div>
                    <div class="flex justify-between mb-1">
                        <span class="text-sm font-semibold text-gray-700">${comp.nom}</span>
                        <span class="text-sm text-gray-600">${comp.niveau}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                        <div class="skill-bar bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full" style="width: 0%" data-width="${comp.niveau}"></div>
                    </div>
                </div>
            `).join('');
        }

        // Fonction pour générer les langues
        function renderLangues() {
            const container = document.getElementById('langues-container');
            container.innerHTML = cvData.langues.map(langue => `
                <li class="flex justify-between items-center">
                    <span class="text-gray-700 font-medium">${langue.nom}</span>
                    <span class="text-sm bg-${langue.color}-100 text-${langue.color}-700 px-3 py-1 rounded-full">${langue.niveau}</span>
                </li>
            `).join('');
        }

        // Fonction pour générer les expériences
        function renderExperiences() {
            const container = document.getElementById('experiences-container');
            container.innerHTML = cvData.experiences.map(exp => `
                <div class="relative pl-8 border-l-2 border-purple-300">
                    <div class="absolute -left-2 top-0 w-4 h-4 bg-${exp.color}-500 rounded-full"></div>
                    <h3 class="text-xl font-bold text-gray-800">${exp.titre}</h3>
                    <p class="text-purple-600 font-medium">${exp.entreprise}</p>
                    <p class="text-sm text-gray-500 mb-2">${exp.periode}</p>
                    <ul class="list-disc list-inside text-gray-600 space-y-1">
                        ${exp.taches.map(tache => `<li>${tache}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
        }

        // Fonction pour générer les formations
        function renderFormations() {
            const container = document.getElementById('formations-container');
            container.innerHTML = cvData.formations.map(formation => `
                <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-gradient-to-br ${formation.gradient} rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="${formation.icon}"/>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-gray-800">${formation.diplome}</h3>
                        <p class="text-purple-600">${formation.etablissement}</p>
                        <p class="text-sm text-gray-500">${formation.periode}</p>
                    </div>
                </div>
            `).join('');
        }

        // Fonction pour générer les projets
        function renderProjets() {
            const container = document.getElementById('projets-container');
            container.innerHTML = cvData.projets.map(projet => `
                <div class="bg-gradient-to-br ${projet.gradient} p-4 rounded-xl border ${projet.border} card-hover">
                    <h3 class="font-bold text-gray-800 mb-2">${projet.titre}</h3>
                    <p class="text-sm text-gray-600 mb-3">${projet.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${projet.technologies.map((tech, index) => {
                            const color = index % 2 === 0 ? 'purple' : 'indigo';
                            return `<span class="text-xs bg-${color}-200 text-${color}-700 px-2 py-1 rounded">${tech}</span>`;
                        }).join('')}
                    </div>
                </div>
            `).join('');
        }

        // Initialisation
        document.addEventListener('DOMContentLoaded', function() {
            // Rendu des sections
            renderCompetences();
            renderLangues();
            renderExperiences();
            renderFormations();
            renderProjets();

            // Animation des barres de compétences
            setTimeout(() => {
                const skillBars = document.querySelectorAll('.skill-bar');
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                });
            }, 500);
        });