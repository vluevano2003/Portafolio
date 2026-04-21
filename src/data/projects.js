export const content = {
  es: {
    home: {
      greeting: "Hola, soy",
      description:
        "Soy ingeniero de software, especializado en el desarrollo web, de escritorio y móvil, enfocado en generar soluciones prácticas. Tengo experiencia llevando proyectos desde el levantamiento de requerimientos hasta la implementación final. Me gusta aportar liderazgo técnico y encontrar la solución más eficiente para asegurar que la tecnología impulse los objetivos de la organización.",
      projectsTitle: "Proyectos Destacados",
      contactTitle: "¿Listo para colaborar?",
      contactDesc:
        "Actualmente estoy desarrollando sistemas robustos y buscando nuevas oportunidades. Si tienes un proyecto en mente o necesitas un desarrollador de software ¡no dudes en escribirme!",
      emailBtn: "Envíame un correo",
    },
    projectDetails: {
      notFound: "Proyecto no encontrado",
      back: "← Volver al inicio",
      featuresTitle: "Características Principales",
      techTitle: "Tecnologías Utilizadas",
      btnDownloadInstaller: "Descargar Instalador",
      btnReleases: "Ver Versiones (Releases)",
      btnPlayStore: "Google Play (Próximamente)",
      btnWebsite: "Visitar Sitio Web",
      btnCode: "Ver Código",
      btnFront: "Código Frontend",
      btnBack: "Código Backend",
      fullScreenAlt: "Pantalla completa",
      goToImage: "Ir a la imagen",
    },
    projects: [
      {
        id: "materiales-sada",
        title: "Materiales SADA",
        subtitle: "Catálogo e Inventario",
        shortDescription:
          "Sistema web con catálogo digital interactivo y panel de administración con Firebase y Cloudflare.",
        fullDescription:
          "Materiales SADA es un sistema web moderno compuesto por un Catálogo Digital interactivo para clientes y un Panel de Administración seguro para la gestión del inventario. Construido con arquitectura serverless para un almacenamiento profesional y carga ultrarrápida.",
        badges: ["React", "Firebase", "Cloudflare R2", "Cloudflare Workers"],
        images: [
          "/proyectos/sada-mp.png",
          "/proyectos/sada-prod.png",
          "/proyectos/sada-login.png",
          "/proyectos/sada-inv.png",
          "/proyectos/sada-users.png",
          "/proyectos/sada-config.png",
        ],
        features: [
          {
            title: "Catálogo Público Dinámico",
            desc: "Visualización atractiva con filtrado múltiple y paginación integrada.",
          },
          {
            title: "Gestión de Inventario (CRUD)",
            desc: "Panel de administración para gestión en tiempo real sin recargar la página.",
          },
          {
            title: "Control de Disponibilidad Inteligente",
            desc: "Sistema optimizado de stock mediante estados booleanos (Disponible / Agotado).",
          },
          {
            title: "Almacenamiento en la Nube",
            desc: "Subida directa a Cloudflare R2 garantizando URLs públicas persistentes.",
          },
          {
            title: "Ventanas Modales (UI/UX)",
            desc: "Detalles del producto mediante componentes emergentes.",
          },
          {
            title: "Contacto Directo",
            desc: "Integración fluida con Widget de WhatsApp para cierre de ventas.",
          },
        ],
        technologies: [
          "Frontend: React (Hooks: useState, useEffect)",
          "Estilos: CSS Grid avanzado, Flexbox, Custom Properties",
          "Base de Datos: Firebase Firestore (NoSQL, onSnapshot)",
          "Storage: Cloudflare R2",
          "API Serverless: Cloudflare Workers",
          "Peticiones: Fetch API",
        ],
        repoLink: "https://github.com/vluevano2003/materialessada",
        demoLink: "https://materialessada-liart.vercel.app/",
      },
      {
        id: "pricestocker",
        title: "PriceStocker",
        subtitle: "Sistema de Inventario y Administración",
        shortDescription:
          "Sistema integral de escritorio construido con Spring Boot y JavaFX para gestión comercial.",
        fullDescription:
          "PriceStocker es un sistema integral de gestión de inventarios y administración comercial de escritorio, construido con una arquitectura robusta para manejar el ciclo completo de productos, relaciones comerciales y control de stock en tiempo real.",
        badges: [
          "Java 21",
          "Spring Boot 3.2",
          "JavaFX 23",
          "Supabase",
          "H2 Database",
        ],
        images: [
          "/proyectos/ps_login.png",
          "/proyectos/ps_prov.png",
          "/proyectos/ps_vent.png",
          "/proyectos/ps_config.png",
          "/proyectos/ps_users.png",
          "/proyectos/ps_edit.png",
        ],
        features: [
          {
            title: "Gestión de Movimientos",
            desc: "Registro de Compras y Ventas que actualizan el Stock en tiempo real.",
          },
          {
            title: "Gestión de Terceros",
            desc: "Administración de Clientes, Proveedores, Fabricantes y Empresas.",
          },
          {
            title: "Reportes PDF",
            desc: "Generación de reportes detallados de compras y ventas.",
          },
          {
            title: "Precios Dinámicos",
            desc: "Gestión avanzada de costos por tipo de relación con soporte multidivisa (MXN/USD).",
          },
          {
            title: "Internacionalización (i18n)",
            desc: "Soporte multiidioma dinámico (Español e Inglés) integrado de forma nativa.",
          },
          {
            title: "Cloud Backup & Sincronización",
            desc: "Auto-Respaldo silencioso en segundo plano y restauración inteligente.",
          },
        ],
        technologies: [
          "Backend: Java 21 LTS & Spring Boot 3.2.4",
          "UI: JavaFX 23.0.2",
          "BaaS / Nube: Supabase (Auth y Storage)",
          "Base de Datos: H2 Database (Modo archivo) & Flyway",
          "ORM: Hibernate / Spring Data JPA",
          "Reportes: OpenPDF 1.3.30",
          "Testing & CI/CD: JUnit 5, Mockito, GitHub Actions",
        ],
        repoLink: "https://github.com/vluevano2003/PriceStocker",
        demoLink: "",
        downloadLink: "https://github.com/vluevano2003/PriceStocker/releases/",
        directDownloadLink: "https://sourceforge.net/projects/pricestocker/",
      },
      {
        id: "sistema-lina",
        title:
          "Sistema de Recepción y Validación de Comprobantes de Pago para el PE LINA",
        subtitle: "Gestión de Trámites Académicos",
        shortDescription:
          "Sistema institucional integral para la gestión de trámites estudiantiles con arquitectura desacoplada.",
        fullDescription:
          "Desarrollado durante mis prácticas profesionales en la Coordinación de Desarrollo de Proyectos de Software. El sistema digitaliza y optimiza la gestión de trámites universitarios, separando la lógica de negocio en una API robusta y una interfaz de usuario interactiva.",
        badges: ["React", "Laravel", "MySQL", "Vite"],
        images: [
          "/proyectos/lina_login.png",
          "/proyectos/lina_list.jpeg",
          "/proyectos/lina_sol.png",
          "/proyectos/lina_tram.png",
          "/proyectos/lina_rech.png",
          "/proyectos/lina_sec.png",
        ],
        features: [
          {
            title: "Arquitectura Desacoplada",
            desc: "Backend y Frontend separados para mayor escalabilidad y seguridad del sistema.",
          },
          {
            title: "Gestión de Trámites",
            desc: "Flujo completo de solicitudes, validaciones y resoluciones para estudiantes.",
          },
          {
            title: "API REST Segura",
            desc: "Endpoints protegidos desarrollados para el manejo y validación de datos.",
          },
          {
            title: "Base de Datos Relacional",
            desc: "Esquema estructurado para garantizar la integridad de la información institucional.",
          },
        ],
        technologies: [
          "Frontend: React con Vite",
          "Backend: PHP y framework Laravel",
          "Base de Datos: MySQL",
          "Control de Versiones: Git (Trabajo colaborativo mediante ramas)",
        ],
        repoLinkFront: "https://github.com/Rick-Landa/front-sistema-lina",
        repoLinkBack: "https://github.com/yuyo272003/lina-api",
      },
      {
        id: "bilt-tracker",
        title: "BILT TRACKER",
        subtitle: "Gestión de Entrenamientos en el Gimnasio",
        shortDescription:
          "Aplicación móvil integral con React Native y Supabase para el seguimiento de rutinas y conexión social en tiempo real.",
        fullDescription:
          "BILT TRACKER es una aplicación móvil integral para la gestión de entrenamientos en el gimnasio. Construida con React Native y Expo Router, ofrece una experiencia fluida, seguimiento en tiempo real con reproductor en segundo plano, características sociales para conectar con otros atletas y un sistema robusto de backend totalmente dinámico potenciado por Supabase.",
        badges: [
          "React Native",
          "Expo",
          "TypeScript",
          "Supabase",
          "AdMob",
          "Google Cloud",
        ],
        images: [
          "/proyectos/bilt_login.jpg",
          "/proyectos/bilt_home.jpg",
          "/proyectos/bilt_workout.jpg",
          "/proyectos/bilt_exercises.jpg",
          "/proyectos/bilt_units.jpg",
          "/proyectos/bilt_profile.jpg",
        ],
        features: [
          {
            title: "Entrenamiento Activo (Background Player)",
            desc: "Reproductor en segundo plano con notificaciones persistentes (Sticky), alertas de vibración/sonido y protección offline ante pérdidas de red.",
          },
          {
            title: "Autenticación Segura y Perfil",
            desc: "Login rápido con Google Sign-In, gestión mediante Supabase Auth y persistencia de sesión inteligente en caché.",
          },
          {
            title: "Base de Datos Dinámica",
            desc: "Más de 80 ejercicios obtenidos desde la nube con animaciones, detalles técnicos y desglose anatómico (músculos principales y sinérgicos).",
          },
          {
            title: "Gestión de Rutinas (Drag & Drop)",
            desc: "Creación de rutinas y agrupación en packs semanales con funcionalidad fluida de reordenamiento e interacción táctil.",
          },
          {
            title: "Red Social Fit en Tiempo Real",
            desc: "Feed global sincronizado vía Supabase Realtime Channels, perfiles de usuario, notificaciones push (Edge Functions) y sistema de moderación.",
          },
          {
            title: "UX/UI Adaptativa e i18n",
            desc: "Interfaz Edge-to-Edge nativa, prevención de espacios fantasma del teclado, tema dinámico persistente (Claro/Oscuro) y soporte multiidioma (ES/EN).",
          },
        ],
        technologies: [
          "Framework: React Native con Expo & TypeScript (Expo Router)",
          "Backend / BaaS: Supabase (PostgreSQL, Auth, Storage, Edge Functions, Realtime Channels)",
          "Gestión de Estado: React Context API & AsyncStorage",
          "UI & Animaciones: react-native-reanimated, gesture-handler, react-native-safe-area-context",
          "Hardware & Sensores: expo-av, expo-notifications, expo-image-picker",
          "Infraestructura: EAS Build, Google Cloud, AdMob",
        ],
        repoLink: "https://github.com/vluevano2003/Bilt",
        playStoreUpcoming: true,
      },
    ],
  },
  en: {
    home: {
      greeting: "Hi, I'm",
      description:
        "I am a software engineer specializing in web, desktop, and mobile development, focused on generating practical solutions. I have experience taking projects from requirement gathering to final implementation. I enjoy providing technical leadership and finding the most efficient solutions to ensure that technology drives organizational goals.",
      projectsTitle: "Featured Projects",
      contactTitle: "Ready to collaborate?",
      contactDesc:
        "I am currently developing robust systems and looking for new opportunities. If you have a project in mind or need a software developer, don't hesitate to write me!",
      emailBtn: "Send me an email",
    },
    projectDetails: {
      notFound: "Project not found",
      back: "← Back to home",
      featuresTitle: "Main Features",
      techTitle: "Technologies Used",
      btnDownloadInstaller: "Download Installer",
      btnReleases: "View Releases",
      btnPlayStore: "Google Play (Coming Soon)",
      btnWebsite: "Visit Website",
      btnCode: "View Code",
      btnFront: "Frontend Code",
      btnBack: "Backend Code",
      fullScreenAlt: "Full screen",
      goToImage: "Go to image",
    },
    projects: [
      {
        id: "materiales-sada",
        title: "Materiales SADA",
        subtitle: "Catalog and Inventory",
        shortDescription:
          "Web system with an interactive digital catalog and admin panel using Firebase and Cloudflare.",
        fullDescription:
          "Materiales SADA is a modern web system composed of an interactive Digital Catalog for clients and a secure Administration Panel for inventory management. Built with a serverless architecture for professional storage and ultra-fast loading.",
        badges: ["React", "Firebase", "Cloudflare R2", "Cloudflare Workers"],
        images: [
          "/proyectos/sada-mp.png",
          "/proyectos/sada-prod.png",
          "/proyectos/sada-login.png",
          "/proyectos/sada-inv.png",
          "/proyectos/sada-users.png",
          "/proyectos/sada-config.png",
        ],
        features: [
          {
            title: "Dynamic Public Catalog",
            desc: "Attractive display with multiple filtering options and integrated pagination.",
          },
          {
            title: "Inventory Management (CRUD)",
            desc: "Admin panel for real-time management without page reloads.",
          },
          {
            title: "Smart Availability Control",
            desc: "Optimized stock system using boolean states (Available / Out of Stock).",
          },
          {
            title: "Cloud Storage",
            desc: "Direct upload to Cloudflare R2 ensuring persistent public URLs.",
          },
          {
            title: "Modal Windows (UI/UX)",
            desc: "Product details displayed through pop-up components.",
          },
          {
            title: "Direct Contact",
            desc: "Seamless integration with a WhatsApp widget for closing sales.",
          },
        ],
        technologies: [
          "Frontend: React (Hooks: useState, useEffect)",
          "Styles: Advanced CSS Grid, Flexbox, Custom Properties",
          "Database: Firebase Firestore (NoSQL, onSnapshot)",
          "Storage: Cloudflare R2",
          "Serverless API: Cloudflare Workers",
          "Requests: Fetch API",
        ],
        repoLink: "https://github.com/vluevano2003/materialessada",
        demoLink: "https://materialessada-liart.vercel.app/",
      },
      {
        id: "pricestocker",
        title: "PriceStocker",
        subtitle: "Inventory and Administration System",
        shortDescription:
          "Comprehensive desktop system built with Spring Boot and JavaFX for business management.",
        fullDescription:
          "PriceStocker is a comprehensive desktop inventory management and business administration system, built with a robust architecture to handle the full lifecycle of products, business relationships, and real-time stock control.",
        badges: [
          "Java 21",
          "Spring Boot 3.2",
          "JavaFX 23",
          "Supabase",
          "H2 Database",
        ],
        images: [
          "/proyectos/ps_login.png",
          "/proyectos/ps_prov.png",
          "/proyectos/ps_vent.png",
          "/proyectos/ps_config.png",
          "/proyectos/ps_users.png",
          "/proyectos/ps_edit.png",
        ],
        features: [
          {
            title: "Movement Management",
            desc: "Record of Purchases and Sales that update Stock in real-time.",
          },
          {
            title: "Third-Party Management",
            desc: "Administration of Clients, Suppliers, Manufacturers, and Companies.",
          },
          {
            title: "PDF Reports",
            desc: "Generation of detailed purchase and sales reports.",
          },
          {
            title: "Dynamic Pricing",
            desc: "Advanced cost management by relationship type with multi-currency support (MXN/USD).",
          },
          {
            title: "Internationalization (i18n)",
            desc: "Dynamic multi-language support (Spanish and English) natively integrated.",
          },
          {
            title: "Cloud Backup & Sync",
            desc: "Silent background auto-backup and smart restoration.",
          },
        ],
        technologies: [
          "Backend: Java 21 LTS & Spring Boot 3.2.4",
          "UI: JavaFX 23.0.2",
          "BaaS / Cloud: Supabase (Auth and Storage)",
          "Database: H2 Database (File mode) & Flyway",
          "ORM: Hibernate / Spring Data JPA",
          "Reports: OpenPDF 1.3.30",
          "Testing & CI/CD: JUnit 5, Mockito, GitHub Actions",
        ],
        repoLink: "https://github.com/vluevano2003/PriceStocker",
        demoLink: "",
        downloadLink: "https://github.com/vluevano2003/PriceStocker/releases/",
        directDownloadLink: "https://sourceforge.net/projects/pricestocker/",
      },
      {
        id: "sistema-lina",
        title:
          "Payment Receipt Reception and Validation System for the LINA EP",
        subtitle: "Academic Procedures Management",
        shortDescription:
          "Comprehensive institutional system for managing student procedures with a decoupled architecture.",
        fullDescription:
          "Developed during my professional internship at the Software Project Development Coordination. The system digitizes and optimizes the management of university procedures, separating the business logic into a robust API and an interactive user interface.",
        badges: ["React", "Laravel", "MySQL", "Vite"],
        images: [
          "/proyectos/lina_login.png",
          "/proyectos/lina_list.jpeg",
          "/proyectos/lina_sol.png",
          "/proyectos/lina_tram.png",
          "/proyectos/lina_rech.png",
          "/proyectos/lina_sec.png",
        ],
        features: [
          {
            title: "Decoupled Architecture",
            desc: "Separate Backend and Frontend for greater scalability and system security.",
          },
          {
            title: "Procedure Management",
            desc: "Complete flow of requests, validations, and resolutions for students.",
          },
          {
            title: "Secure REST API",
            desc: "Protected endpoints developed for data handling and validation.",
          },
          {
            title: "Relational Database",
            desc: "Structured schema to ensure the integrity of institutional information.",
          },
        ],
        technologies: [
          "Frontend: React with Vite",
          "Backend: PHP and Laravel framework",
          "Database: MySQL",
          "Version Control: Git (Collaborative work via branches)",
        ],
        repoLinkFront: "https://github.com/Rick-Landa/front-sistema-lina",
        repoLinkBack: "https://github.com/yuyo272003/lina-api",
      },
      {
        id: "bilt-tracker",
        title: "BILT TRACKER",
        subtitle: "Gym Workout Management",
        shortDescription:
          "Comprehensive mobile application built with React Native and Supabase for routine tracking and real-time social connection.",
        fullDescription:
          "BILT TRACKER is a comprehensive mobile application for managing gym workouts. Built with React Native and Expo Router, it offers a seamless experience, real-time tracking with a background player, social features to connect with other athletes, and a robust, fully dynamic backend powered by Supabase.",
        badges: [
          "React Native",
          "Expo",
          "TypeScript",
          "Supabase",
          "AdMob",
          "Google Cloud",
        ],
        images: [
          "/proyectos/bilt_login.jpg",
          "/proyectos/bilt_home.jpg",
          "/proyectos/bilt_workout.jpg",
          "/proyectos/bilt_exercises.jpg",
          "/proyectos/bilt_units.jpg",
          "/proyectos/bilt_profile.jpg",
        ],
        features: [
          {
            title: "Active Workout (Background Player)",
            desc: "Background player with sticky notifications, haptic/audio alerts, and offline protection against network loss.",
          },
          {
            title: "Secure Authentication & Profile",
            desc: "Fast login with Google Sign-In, management via Supabase Auth, and smart cached session persistence.",
          },
          {
            title: "Dynamic Database",
            desc: "Over 80 exercises retrieved from the cloud with animations, technical details, and anatomical breakdowns (main and synergist muscles).",
          },
          {
            title: "Routine Management (Drag & Drop)",
            desc: "Creation of routines and weekly packs with fluid reordering and tactile interaction.",
          },
          {
            title: "Real-Time Fit Social Network",
            desc: "Global feed synced via Supabase Realtime Channels, user profiles, push notifications (Edge Functions), and moderation system.",
          },
          {
            title: "Adaptive UX/UI & i18n",
            desc: "Native Edge-to-Edge interface, ghost-space prevention for keyboards, persistent dynamic theme (Light/Dark), and multi-language support (ES/EN).",
          },
        ],
        technologies: [
          "Framework: React Native with Expo & TypeScript (Expo Router)",
          "Backend / BaaS: Supabase (PostgreSQL, Auth, Storage, Edge Functions, Realtime Channels)",
          "State Management: React Context API & AsyncStorage",
          "UI & Animations: react-native-reanimated, gesture-handler, react-native-safe-area-context",
          "Hardware & Sensors: expo-av, expo-notifications, expo-image-picker",
          "Infrastructure: EAS Build, Google Cloud, AdMob",
        ],
        repoLink: "https://github.com/vluevano2003/Bilt",
        playStoreUpcoming: true,
      },
    ],
  },
};
