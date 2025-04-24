// Archivo de traducciones para todos los idiomas
const languages = {
    // Idiomas originales
    en: {
        nav: {
            home: "Home",
            project: "Project",
            methodology: "Methodology",
            team: "Team",
            results: "Results",
            contact: "Contact"
        },
        hero: {
            title: "Mapping Diversity Praxis",
            subtitle: "A Comparative Study of Switzerland and Latin America",
            description: "Exploring the causes, dynamics, and public perception of diversity and equality movements through innovative computational methods and cross-regional collaboration.",
            button: "Learn More"
        },
        project: {
            title: "The Project",
            intro: "This research project examines the evolution and current state of diversity and equality movements in Switzerland and Latin America, focusing on their historical development, public perception, and structural challenges.",
            relevance: "Diversity and equality represent critical challenges for both Switzerland and Latin America, with each region facing distinct yet interconnected obstacles. This comparative approach allows for identifying transferable strategies and policies between contexts with different historical trajectories but shared challenges.",
            objectives: {
                title: "Objectives",
                items: [
                    "Trace the historical diversification of equality praxis in Switzerland and Latin America since 1980",
                    "Quantify contemporary public sentiment using large-scale web data and advanced sentiment analysis",
                    "Model how structural patriarchal factors interact with digital discourse over time",
                    "Identify actionable leverage points for policy and advocacy while advancing quantitative methods"
                ]
            }
        },
        methodology: {
            title: "Methodology",
            intro: "The project employs advanced stochastic methods from social sciences and network analysis, combining historical research with computational approaches:",
            methods: [
                {
                    title: "Information Diffusion in Social Networks",
                    description: "We apply stochastic diffusion models to analyze how diversity discourse spreads through social networks in Switzerland and Latin America. Unlike traditional models with fixed influence probabilities, our approach treats these probabilities as random variables with unknown distributions, reflecting the uncertain nature of social interactions."
                },
                {
                    title: "Opinion Dynamics Analysis",
                    description: "We employ continuous-time models of opinion formation using diffusion processes to capture how individuals' perspectives on diversity and equality evolve through social interaction. This framework helps explain phenomena like opinion polarization, consensus formation, and how network structure affects the spread of equality concepts across different cultural contexts."
                },
                {
                    title: "Spatial Diffusion Modeling",
                    description: "We analyze the geographical spread of diversity initiatives using urban diffusion models. This approach allows us to map how equality practices diffuse across urban and rural areas in Switzerland and Latin America, identifying barriers and accelerators to spatial adoption."
                }
            ]
        },
        team: {
            title: "Research Team",
            members: [
                {
                    name: "Francisco Richter",
                    role: "Principal Investigator (Switzerland)",
                    bio: "Postdoctoral researcher at Università della Svizzera italiana, specializing in computational social science and quantitative methods."
                },
                {
                    name: "Carolina Amaral",
                    role: "Principal Investigator (Latin America)",
                    bio: "Professor at Universidad Andrés Bello with extensive experience in gender studies and feminist movements across Latin America."
                }
            ]
        },
        results: {
            title: "Expected Results",
            intro: "This project will deliver concrete outputs with direct societal impact:",
            items: [
                {
                    title: "Open Dataset",
                    description: "A comprehensive, cleaned dataset of diversity and equality discourse across platforms and countries."
                },
                {
                    title: "Interactive Dashboard",
                    description: "Web-based tool allowing stakeholders to explore sentiment trends and structural indicators."
                },
                {
                    title: "Policy Recommendations",
                    description: "Evidence-based insights for civil society organizations and policymakers in Switzerland and Latin America."
                },
                {
                    title: "Academic Publications",
                    description: "Research findings published in open-access journals and presented at international conferences."
                }
            ]
        },
        contact: {
            title: "Contact Us",
            info: "For more information about this research project, please contact:",
            name1: "Francisco Richter",
            email1: "richtf@usi.ch",
            name2: "Carolina Amaral",
            formTitle: "Send us a message",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            messagePlaceholder: "Your Message",
            button: "Send Message"
        },
        footer: {
            copyright: "© 2025 Diversity Research Project. All rights reserved."
        }
    },
    es: {
        nav: {
            home: "Inicio",
            project: "Proyecto",
            methodology: "Metodología",
            team: "Equipo",
            results: "Resultados",
            contact: "Contacto"
        },
        hero: {
            title: "Mapeando la Praxis de Diversidad",
            subtitle: "Un Estudio Comparativo de Suiza y América Latina",
            description: "Explorando las causas, dinámicas y percepción pública de los movimientos de diversidad e igualdad a través de métodos computacionales innovadores y colaboración interregional.",
            button: "Conocer Más"
        },
        project: {
            title: "El Proyecto",
            intro: "Este proyecto de investigación examina la evolución y el estado actual de los movimientos de diversidad e igualdad en Suiza y América Latina, centrándose en su desarrollo histórico, percepción pública y desafíos estructurales.",
            relevance: "La diversidad y la igualdad representan desafíos críticos tanto para Suiza como para América Latina, con cada región enfrentando obstáculos distintos pero interconectados. Este enfoque comparativo permite identificar estrategias y políticas transferibles entre contextos con diferentes trayectorias históricas pero desafíos compartidos.",
            objectives: {
                title: "Objetivos",
                items: [
                    "Rastrear la diversificación histórica de la praxis de igualdad en Suiza y América Latina desde 1980",
                    "Cuantificar el sentimiento público contemporáneo utilizando datos web a gran escala y análisis avanzado de sentimientos",
                    "Modelar cómo los factores patriarcales estructurales interactúan con el discurso digital a lo largo del tiempo",
                    "Identificar puntos de acción para políticas y defensa mientras se avanza en métodos cuantitativos"
                ]
            }
        },
        methodology: {
            title: "Metodología",
            intro: "El proyecto emplea métodos estocásticos avanzados de las ciencias sociales y el análisis de redes, combinando investigación histórica con enfoques computacionales:",
            methods: [
                {
                    title: "Difusión de Información en Redes Sociales",
                    description: "Aplicamos modelos de difusión estocástica para analizar cómo se propaga el discurso sobre diversidad a través de redes sociales en Suiza y América Latina. A diferencia de los modelos tradicionales con probabilidades de influencia fijas, nuestro enfoque trata estas probabilidades como variables aleatorias con distribuciones desconocidas, reflejando la naturaleza incierta de las interacciones sociales."
                },
                {
                    title: "Análisis de Dinámica de Opiniones",
                    description: "Empleamos modelos de formación de opinión en tiempo continuo utilizando procesos de difusión para capturar cómo evolucionan las perspectivas de los individuos sobre diversidad e igualdad a través de la interacción social. Este marco ayuda a explicar fenómenos como la polarización de opiniones, la formación de consenso y cómo la estructura de la red afecta la difusión de conceptos de igualdad en diferentes contextos culturales."
                },
                {
                    title: "Modelado de Difusión Espacial",
                    description: "Analizamos la propagación geográfica de iniciativas de diversidad utilizando modelos de difusión urbana. Este enfoque nos permite mapear cómo las prácticas de igualdad se difunden a través de áreas urbanas y rurales en Suiza y América Latina, identificando barreras y aceleradores para la adopción espacial."
                }
            ]
        },
        team: {
            title: "Equipo de Investigación",
            members: [
                {
                    name: "Francisco Richter",
                    role: "Investigador Principal (Suiza)",
                    bio: "Investigador postdoctoral en la Università della Svizzera italiana, especializado en ciencias sociales computacionales y métodos cuantitativos."
                },
                {
                    name: "Carolina Amaral",
                    role: "Investigadora Principal (América Latina)",
                    bio: "Profesora en la Universidad Andrés Bello con amplia experiencia en estudios de género y movimientos feministas en América Latina."
                }
            ]
        },
        results: {
            title: "Resultados Esperados",
            intro: "Este proyecto entregará resultados concretos con impacto social directo:",
            items: [
                {
                    title: "Conjunto de Datos Abierto",
                    description: "Un conjunto de datos completo y depurado sobre el discurso de diversidad e igualdad en diferentes plataformas y países."
                },
                {
                    title: "Panel Interactivo",
                    description: "Herramienta web que permite a las partes interesadas explorar tendencias de sentimiento e indicadores estructurales."
                },
                {
                    title: "Recomendaciones de Políticas",
                    description: "Perspectivas basadas en evidencia para organizaciones de la sociedad civil y formuladores de políticas en Suiza y América Latina."
                },
                {
                    title: "Publicaciones Académicas",
                    description: "Resultados de investigación publicados en revistas de acceso abierto y presentados en conferencias internacionales."
                }
            ]
        },
        contact: {
            title: "Contáctenos",
            info: "Para más información sobre este proyecto de investigación, por favor contacte a:",
            name1: "Francisco Richter",
            email1: "richtf@usi.ch",
            name2: "Carolina Amaral",
            formTitle: "Envíenos un mensaje",
            namePlaceholder: "Su Nombre",
            emailPlaceholder: "Su Email",
            messagePlaceholder: "Su Mensaje",
            button: "Enviar Mensaje"
        },
        footer: {
            copyright: "© 2025 Proyecto de Investigación sobre Diversidad. Todos los derechos reservados."
        }
    },
    pt: {
        nav: {
            home: "Início",
            project: "Projeto",
            methodology: "Metodologia",
            team: "Equipe",
            results: "Resultados",
            contact: "Contato"
        },
        hero: {
            title: "Mapeando a Práxis da Diversidade",
            subtitle: "Um Estudo Comparativo da Suíça e América Latina",
            description: "Explorando as causas, dinâmicas e percepção pública dos movimentos de diversidade e igualdade através de métodos computacionais inovadores e colaboração inter-regional.",
            button: "Saiba Mais"
        },
        project: {
            title: "O Projeto",
            intro: "Este projeto de pesquisa examina a evolução e o estado atual dos movimentos de diversidade e igualdade na Suíça e na América Latina, focando em seu desenvolvimento histórico, percepção pública e desafios estruturais.",
            relevance: "A diversidade e a igualdade representam desafios críticos tanto para a Suíça quanto para a América Latina, com cada região enfrentando obstáculos distintos, porém interconectados. Esta abordagem comparativa permite identificar estratégias e políticas transferíveis entre contextos com diferentes trajetórias históricas, mas desafios compartilhados.",
            objectives: {
                title: "Objetivos",
                items: [
                    "Rastrear a diversificação histórica da práxis de igualdade na Suíça e América Latina desde 1980",
                    "Quantificar o sentimento público contemporâneo usando dados web em larga escala e análise avançada de sentimentos",
                    "Modelar como fatores patriarcais estruturais interagem com o discurso digital ao longo do tempo",
                    "Identificar pontos de alavancagem acionáveis para políticas e advocacia enquanto avança métodos quantitativos"
                ]
            }
        },
        methodology: {
            title: "Metodologia",
            intro: "O projeto emprega métodos estocásticos avançados das ciências sociais e análise de redes, combinando pesquisa histórica com abordagens computacionais:",
            methods: [
                {
                    title: "Difusão de Informação em Redes Sociais",
                    description: "Aplicamos modelos de difusão estocástica para analisar como o discurso sobre diversidade se propaga através de redes sociais na Suíça e América Latina. Diferentemente dos modelos tradicionais com probabilidades de influência fixas, nossa abordagem trata essas probabilidades como variáveis aleatórias com distribuições desconhecidas, refletindo a natureza incerta das interações sociais."
                },
                {
                    title: "Análise de Dinâmica de Opiniões",
                    description: "Empregamos modelos de formação de opinião em tempo contínuo utilizando processos de difusão para capturar como as perspectivas dos indivíduos sobre diversidade e igualdade evoluem através da interação social. Esta estrutura ajuda a explicar fenômenos como polarização de opiniões, formação de consenso e como a estrutura da rede afeta a difusão de conceitos de igualdade em diferentes contextos culturais."
                },
                {
                    title: "Modelagem de Difusão Espacial",
                    description: "Analisamos a propagação geográfica de iniciativas de diversidade utilizando modelos de difusão urbana. Esta abordagem nos permite mapear como as práticas de igualdade se difundem através de áreas urbanas e rurais na Suíça e América Latina, identificando barreiras e aceleradores para a adoção espacial."
                }
            ]
        },
        team: {
            title: "Equipe de Pesquisa",
            members: [
                {
                    name: "Francisco Richter",
                    role: "Investigador Principal (Suíça)",
                    bio: "Pesquisador de pós-doutorado na Università della Svizzera italiana, especializado em ciência social computacional e métodos quantitativos."
                },
                {
                    name: "Carolina Amaral",
                    role: "Investigadora Principal (América Latina)",
                    bio: "Professora na Universidad Andrés Bello com vasta experiência em estudos de gênero e movimentos feministas na América Latina."
                }
            ]
        },
        results: {
            title: "Resultados Esperados",
            intro: "Este projeto entregará resultados concretos com impacto social direto:",
            items: [
                {
                    title: "Conjunto de Dados Aberto",
                    description: "Um conjunto de dados abrangente e limpo sobre o discurso de diversidade e igualdade em diferentes plataformas e países."
                },
                {
                    title: "Painel Interativo",
                    description: "Ferramenta baseada na web permitindo que as partes interessadas explorem tendências de sentimento e indicadores estruturais."
                },
                {
                    title: "Recomendações de Políticas",
                    description: "Insights baseados em evidências para organizações da sociedade civil e formuladores de políticas na Suíça e América Latina."
                },
                {
                    title: "Publicações Acadêmicas",
                    description: "Resultados de pesquisa publicados em revistas de acesso aberto e apresentados em conferências internacionais."
                }
            ]
        },
        contact: {
            title: "Entre em Contato",
            info: "Para mais informações sobre este projeto de pesquisa, por favor contate:",
            name1: "Francisco Richter",
            email1: "richtf@usi.ch",
            name2: "Carolina Amaral",
            formTitle: "Envie-nos uma mensagem",
            namePlaceholder: "Seu Nome",
            emailPlaceholder: "Seu Email",
            messagePlaceholder: "Sua Mensagem",
            button: "Enviar Mensagem"
        },
        footer: {
            copyright: "© 2025 Projeto de Pesquisa sobre Diversidade. Todos os direitos reservados."
        }
    },
    
    // Idiomas oficiales de Suiza
    de: {
        nav: {
            home: "Startseite",
            project: "Projekt",
            methodology: "Methodik",
            team: "Team",
            results: "Ergebnisse",
            contact: "Kontakt"
        },
        hero: {
            title: "Kartierung der Diversitätspraxis",
            subtitle: "Eine vergleichende Studie der Schweiz und Lateinamerika",
            description: "Erforschung der Ursachen, Dynamiken und öffentlichen Wahrnehmung von Diversitäts- und Gleichstellungsbewegungen durch innovative Berechnungsmethoden und regionsübergreifende Zusammenarbeit.",
            button: "Mehr erfahren"
        },
        project: {
            title: "Das Projekt",
            intro: "Dieses Forschungsprojekt untersucht die Entwicklung und den aktuellen Stand der Diversitäts- und Gleichstellungsbewegungen in der Schweiz und Lateinamerika, mit Fokus auf ihre historische Entwicklung, öffentliche Wahrnehmung und strukturelle Herausforderungen.",
            relevance: "Diversität und Gleichstellung stellen sowohl für die Schweiz als auch für Lateinamerika eine kritische Herausforderung dar, wobei jede Region mit unterschiedlichen, aber miteinander verbundenen Hindernissen konfrontiert ist. Dieser vergleichende Ansatz ermöglicht die Identifizierung übertragbarer Strategien und Politiken zwischen Kontexten mit unterschiedlichen historischen Entwicklungen, aber gemeinsamen Herausforderungen.",
            objectives: {
                title: "Ziele",
                items: [
                    "Nachverfolgung der historischen Diversifizierung der Gleichstellungspraxis in der Schweiz und Lateinamerika seit 1980",
                    "Quantifizierung der zeitgenössischen öffentlichen Meinung mithilfe umfangreicher Webdaten und fortschrittlicher Stimmungsanalyse",
                    "Modellierung der Interaktion struktureller patriarchaler Faktoren mit dem digitalen Diskurs im Zeitverlauf",
                    "Identifizierung umsetzbarer Ansatzpunkte für Politik und Interessenvertretung bei gleichzeitiger Weiterentwicklung quantitativer Methoden"
                ]
            }
        },
        methodology: {
            title: "Methodik",
            intro: "Das Projekt verwendet fortschrittliche stochastische Methoden aus den Sozialwissenschaften und der Netzwerkanalyse und kombiniert historische Forschung mit computergestützten Ansätzen:",
            methods: [
                {
                    title: "Informationsdiffusion in sozialen Netzwerken",
                    description: "Wir wenden stochastische Diffusionsmodelle an, um zu analysieren, wie sich der Diversitätsdiskurs durch soziale Netzwerke in der Schweiz und Lateinamerika verbreitet. Im Gegensatz zu traditionellen Modellen mit festen Einflusswahrscheinlichkeiten behandelt unser Ansatz diese Wahrscheinlichkeiten als Zufallsvariablen mit unbekannten Verteilungen, die die unsichere Natur sozialer Interaktionen widerspiegeln."
                },
                {
                    title: "Analyse der Meinungsdynamik",
                    description: "Wir verwenden kontinuierliche Modelle der Meinungsbildung mit Diffusionsprozessen, um zu erfassen, wie sich die Perspektiven der Individuen zu Diversität und Gleichstellung durch soziale Interaktion entwickeln. Dieser Rahmen hilft, Phänomene wie Meinungspolarisierung, Konsensbildung und den Einfluss der Netzwerkstruktur auf die Verbreitung von Gleichstellungskonzepten in verschiedenen kulturellen Kontexten zu erklären."
                },
                {
                    title: "Räumliche Diffusionsmodellierung",
                    description: "Wir analysieren die geografische Verbreitung von Diversitätsinitiativen mithilfe urbaner Diffusionsmodelle. Dieser Ansatz ermöglicht es uns, zu kartieren, wie sich Gleichstellungspraktiken in städtischen und ländlichen Gebieten der Schweiz und Lateinamerikas verbreiten, und dabei Barrieren und Beschleuniger für die räumliche Übernahme zu identifizieren."
                }
            ]
        },
        team: {
            title: "Forschungsteam",
            members: [
                {
                    name: "Francisco Richter",
                    role: "Hauptforscher (Schweiz)",
                    bio: "Postdoktorand an der Università della Svizzera italiana, spezialisiert auf computergestützte Sozialwissenschaften und quantitative Methoden."
                },
                {
                    name: "Carolina Amaral",
                    role: "Hauptforscherin (Lateinamerika)",
                    bio: "Professorin an der Universidad Andrés Bello mit umfangreicher Erfahrung in Genderstudien und feministischen Bewegungen in Lateinamerika."
                }
            ]
        },
        results: {
            title: "Erwartete Ergebnisse",
            intro: "Dieses Projekt wird konkrete Ergebnisse mit direkter gesellschaftlicher Wirkung liefern:",
            items: [
                {
                    title: "Offener Datensatz",
                    description: "Ein umfassender, bereinigter Datensatz zum Diversitäts- und Gleichstellungsdiskurs über verschiedene Plattformen und Länder hinweg."
                },
                {
                    title: "Interaktives Dashboard",
                    description: "Webbasiertes Tool, das Interessengruppen ermöglicht, Stimmungstrends und strukturelle Indikatoren zu erkunden."
                },
                {
                    title: "Politikempfehlungen",
                    description: "Evidenzbasierte Erkenntnisse für zivilgesellschaftliche Organisationen und politische Entscheidungsträger in der Schweiz und Lateinamerika."
                },
                {
                    title: "Akademische Publikationen",
                    description: "Forschungsergebnisse, die in Open-Access-Zeitschriften veröffentlicht und auf internationalen Konferenzen präsentiert werden."
                }
            ]
        },
        contact: {
            title: "Kontakt",
            info: "Für weitere Informationen zu diesem Forschungsprojekt kontaktieren Sie bitte:",
            name1: "Francisco Richter",
            email1: "richtf@usi.ch",
            name2: "Carolina Amaral",
            formTitle: "Senden Sie uns eine Nachricht",
            namePlaceholder: "Ihr Name",
            emailPlaceholder: "Ihre E-Mail",
            messagePlaceholder: "Ihre Nachricht",
            button: "Nachricht senden"
        },
        footer: {
            copyright: "© 2025 Diversitätsforschungsprojekt. Alle Rechte vorbehalten."
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            project: "Projet",
            methodology: "Méthodologie",
            team: "Équipe",
            results: "Résultats",
            contact: "Contact"
        },
        hero: {
            title: "Cartographie de la Praxis de Diversité",
            subtitle: "Une Étude Comparative de la Suisse et de l'Amérique Latine",
            description: "Explorer les causes, les dynamiques et la perception publique des mouvements de diversité et d'égalité à travers des méthodes computationnelles innovantes et une collaboration interrégionale.",
            button: "En savoir plus"
        },
        project: {
            title: "Le Projet",
            intro: "Ce projet de recherche examine l'évolution et l'état actuel des mouvements de diversité et d'égalité en Suisse et en Amérique Latine, en se concentrant sur leur développement historique, leur perception publique et leurs défis structurels.",
            relevance: "La diversité et l'égalité représentent des défis critiques tant pour la Suisse que pour l'Amérique Latine, chaque région faisant face à des obstacles distincts mais interconnectés. Cette approche comparative permet d'identifier des stratégies et des politiques transférables entre des contextes aux trajectoires historiques différentes mais aux défis communs.",
            objectives: {
                title: "Objectifs",
                items: [
                    "Retracer la diversification historique de la praxis d'égalité en Suisse et en Amérique Latine depuis 1980",
                    "Quantifier le sentiment public contemporain en utilisant des données web à grande échelle et une analyse avancée des sentiments",
                    "Modéliser comment les facteurs patriarcaux structurels interagissent avec le discours numérique au fil du temps",
                    "Identifier des points de levier actionnables pour les politiques et le plaidoyer tout en faisant progresser les méthodes quantitatives"
                ]
            }
        },
        methodology: {
            title: "Méthodologie",
            intro: "Le projet emploie des méthodes stochastiques avancées des sciences sociales et de l'analyse des réseaux, combinant la recherche historique avec des approches computationnelles :",
            methods: [
                {
                    title: "Diffusion de l'Information dans les Réseaux Sociaux",
                    description: "Nous appliquons des modèles de diffusion stochastique pour analyser comment le discours sur la diversité se propage à travers les réseaux sociaux en Suisse et en Amérique Latine. Contrairement aux modèles traditionnels avec des probabilités d'influence fixes, notre approche traite ces probabilités comme des variables aléatoires avec des distributions inconnues, reflétant la nature incertaine des interactions sociales."
                },
                {
                    title: "Analyse de la Dynamique des Opinions",
                    description: "Nous employons des modèles de formation d'opinion en temps continu utilisant des processus de diffusion pour capturer comment les perspectives des individus sur la diversité et l'égalité évoluent à travers l'interaction sociale. Ce cadre aide à expliquer des phénomènes comme la polarisation des opinions, la formation de consensus et comment la structure du réseau affecte la diffusion des concepts d'égalité dans différents contextes culturels."
                },
                {
                    title: "Modélisation de la Diffusion Spatiale",
                    description: "Nous analysons la propagation géographique des initiatives de diversité en utilisant des modèles de diffusion urbaine. Cette approche nous permet de cartographier comment les pratiques d'égalité se diffusent à travers les zones urbaines et rurales en Suisse et en Amérique Latine, identifiant les barrières et les accélérateurs pour l'adoption spatiale."
                }
            ]
        },
        team: {
            title: "Équipe de Recherche",
            members: [
                {
                    name: "Francisco Richter",
                    role: "Chercheur Principal (Suisse)",
                    bio: "Chercheur postdoctoral à l'Università della Svizzera italiana, spécialisé dans les sciences sociales computationnelles et les méthodes quantitatives."
                },
                {
                    name: "Carolina Amaral",
                    role: "Chercheuse Principale (Amérique Latine)",
                    bio: "Professeure à l'Universidad Andrés Bello avec une vaste expérience dans les études de genre et les mouvements féministes à travers l'Amérique Latine."
                }
            ]
        },
        results: {
            title: "Résultats Attendus",
            intro: "Ce projet livrera des résultats concrets avec un impact sociétal direct :",
            items: [
                {
                    title: "Ensemble de Données Ouvert",
                    description: "Un ensemble de données complet et nettoyé sur le discours de diversité et d'égalité à travers les plateformes et les pays."
                },
                {
                    title: "Tableau de Bord Interactif",
                    description: "Outil web permettant aux parties prenantes d'explorer les tendances de sentiment et les indicateurs structurels."
                },
                {
                    title: "Recommandations Politiques",
                    description: "Perspectives fondées sur des preuves pour les organisations de la société civile et les décideurs politiques en Suisse et en Amérique Latine."
                },
                {
                    title: "Publications Académiques",
                    description: "Résultats de recherche publiés dans des revues en libre accès et présentés lors de conférences internationales."
                }
            ]
        },
        contact: {
            title: "Contactez-nous",
            info: "Pour plus d'informations sur ce projet de recherche, veuillez contacter :",
            name1: "Francisco Richter",
            email1: "richtf@usi.ch",
            name2: "Carolina Amaral",
            formTitle: "Envoyez-nous un message",
            namePlaceholder: "Votre Nom",
            emailPlaceholder: "Votre Email",
            messagePlaceholder: "Votre Message",
            button: "Envoyer le Message"
        },
        footer: {
            copyright: "© 2025 Projet de Recherche sur la Diversité. Tous droits réservés."
        }
    },
    it: {
        nav: {
            home: "Home",
            project: "Progetto",
            methodology: "Metodologia",
            team: "Team",
            results: "Risultati",
            contact: "Contatto"
        },
        hero: {
            title: "Mappatura della Prassi di Diversità",
            subtitle: "Uno Studio Comparativo della Svizzera e dell'America Latina",
            description: "Esplorare le cause, le dinamiche e la percezione pubblica dei movimenti per la diversità e l'uguaglianza attraverso metodi computazionali innovativi e collaborazione interregionale.",
            button: "Scopri di più"
        },
        project: {
            title: "Il Progetto",
            intro: "Questo progetto di ricerca esamina l'evoluzione e lo stato attuale dei movimenti per la diversità e l'uguaglianza in Svizzera e in America Latina, concentrandosi sul loro sviluppo storico, sulla percezione pubblica e sulle sfide strutturali.",
            relevance: "La diversità e l'uguaglianza rappresentano una sfida critica sia per la Svizzera che per l'America Latina, con ogni regione che affronta ostacoli distinti ma interconnessi. Questo approccio comparativo permette di identificare strategie e politiche trasferibili tra contesti con traiettorie storiche diverse ma sfide condivise.",
            objectives: {
                title: "Obiettivi",
                items: [
                    "Tracciare la diversificazione storica della prassi di uguaglianza in Svizzera e America Latina dal 1980",
                    "Quantificare il sentimento pubblico contemporaneo utilizzando dati web su larga scala e analisi avanzata del sentimento",
                    "Modellare come i fattori patriarcali strutturali interagiscono con il discorso digitale nel tempo",
                    "Identificare punti di leva azionabili per politiche e advocacy mentre si avanzano metodi quantitativi"
                ]
            }
        },
        methodology: {
            title: "Metodologia",
            intro: "Il progetto impiega metodi stocastici avanzati delle scienze sociali e dell'analisi delle reti, combinando ricerca storica con approcci computazionali:",
            methods: [
                {
                    title: "Diffusione dell'Informazione nelle Reti Sociali",
                    description: "Applichiamo modelli di diffusione stocastica per analizzare come il discorso sulla diversità si propaga attraverso le reti sociali in Svizzera e America Latina. A differenza dei modelli tradizionali con probabilità di influenza fisse, il nostro approccio tratta queste probabilità come variabili casuali con distribuzioni sconosciute, riflettendo la natura incerta delle interazioni sociali."
                },
                {
                    title: "Analisi della Dinamica delle Opinioni",
                    description: "Impieghiamo modelli di formazione dell'opinione a tempo continuo utilizzando processi di diffusione per catturare come le prospettive degli individui sulla diversità e l'uguaglianza si evolvono attraverso l'interazione sociale. Questa struttura aiuta a spiegare fenomeni come la polarizzazione delle opinioni, la formazione del consenso e come la struttura della rete influenza la diffusione dei concetti di uguaglianza in diversi contesti culturali."
                },
                {
                    title: "Modellazione della Diffusione Spaziale",
                    description: "Analizziamo la propagazione geografica delle iniziative di diversità utilizzando modelli di diffusione urbana. Questo approccio ci permette di mappare come le pratiche di uguaglianza si diffondono attraverso aree urbane e rurali in Svizzera e America Latina, identificando barriere e acceleratori per l'adozione spaziale."
                }
            ]
        },
        team: {
            title: "Team di Ricerca",
            members: [
                {
                    name: "Francisco Richter",
                    role: "Ricercatore Principale (Svizzera)",
                    bio: "Ricercatore post-dottorato presso l'Università della Svizzera italiana, specializzato in scienze sociali computazionali e metodi quantitativi."
                },
                {
                    name: "Carolina Amaral",
                    role: "Ricercatrice Principale (America Latina)",
                    bio: "Professoressa presso l'Universidad Andrés Bello con vasta esperienza in studi di genere e movimenti femministi in America Latina."
                }
            ]
        },
        results: {
            title: "Risultati Attesi",
            intro: "Questo progetto fornirà risultati concreti con impatto sociale diretto:",
            items: [
                {
                    title: "Dataset Aperto",
                    description: "Un dataset completo e pulito sul discorso della diversità e dell'uguaglianza attraverso piattaforme e paesi."
                },
                {
                    title: "Dashboard Interattiva",
                    description: "Strumento basato sul web che permette alle parti interessate di esplorare tendenze di sentimento e indicatori strutturali."
                },
                {
                    title: "Raccomandazioni Politiche",
                    description: "Approfondimenti basati su evidenze per organizzazioni della società civile e decisori politici in Svizzera e America Latina."
                },
                {
                    title: "Pubblicazioni Accademiche",
                    description: "Risultati della ricerca pubblicati in riviste ad accesso aperto e presentati a conferenze internazionali."
                }
            ]
        },
        contact: {
            title: "Contattaci",
            info: "Per maggiori informazioni su questo progetto di ricerca, contatta:",
            name1: "Francisco Richter",
            email1: "richtf@usi.ch",
            name2: "Carolina Amaral",
            formTitle: "Inviaci un messaggio",
            namePlaceholder: "Il tuo Nome",
            emailPlaceholder: "La tua Email",
            messagePlaceholder: "Il tuo Messaggio",
            button: "Invia Messaggio"
        },
        footer: {
            copyright: "© 2025 Progetto di Ricerca sulla Diversità. Tutti i diritti riservati."
        }
    }
};
