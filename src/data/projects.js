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
      btnApk: "Descargar APK (Android)",
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
          "Aplicación móvil integral con React Native y Supabase para el seguimiento de rutinas y conexión social.",
        fullDescription:
          "BILT TRACKER es una aplicación móvil integral para la gestión de entrenamientos en el gimnasio. Construida con React Native y Expo Router, ofrece una experiencia fluida, seguimiento en tiempo real, características sociales para conectar con otros atletas y un sistema robusto de backend totalmente dinámico potenciado por Supabase.",
        badges: ["React Native", "Expo", "TypeScript", "Supabase", "AdMob"],
        images: [
          "/proyectos/bilt_login.jpg",
          "/proyectos/bilt_routines.jpg",
          "/proyectos/bilt_excercises.jpg",
          "/proyectos/bilt_units.jpg",
          "/proyectos/bilt_save_routines.jpg",
          "/proyectos/bilt_save_packs.jpg",
        ],
        features: [
          {
            title: "Autenticación Nativa",
            desc: "Login rápido con Google Sign-In y persistencia de sesión offline.",
          },
          {
            title: "Base de Datos en Tiempo Real",
            desc: "Más de 80 ejercicios con animaciones y desglose anatómico desde Supabase.",
          },
          {
            title: "Seguimiento Inteligente",
            desc: "Reproductor en segundo plano, temporizador flotante y protección offline del progreso.",
          },
          {
            title: "Red Social Fit",
            desc: "Feed global para ver la actividad de amigos, perfiles públicos/privados y notificaciones.",
          },
          {
            title: "UX/UI Avanzada",
            desc: "Interfaz Edge-to-Edge con tema dinámico (Claro/Oscuro) y manejo fluido de gestos.",
          },
          {
            title: "Monetización Orgánica",
            desc: "Integración nativa con Google AdMob en el feed y resúmenes de entrenamiento.",
          },
        ],
        technologies: [
          "Framework: React Native con Expo & TypeScript",
          "Enrutamiento: Expo Router",
          "Backend / BaaS: Supabase (PostgreSQL, Auth, Storage)",
          "Gestión de Estado: React Context API",
          "UI & Animaciones: react-native-reanimated, gesture-handler",
          "Infraestructura: EAS Build, Google Cloud, AdMob",
        ],
        repoLink: "https://github.com/vluevano2003/Bilt",
        apkDownloadLink:
          "https://github.com/vluevano2003/Bilt/releases/latest/download/BiltTracker-v1.0.0.apk",
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
      btnApk: "Download APK (Android)",
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
          "Comprehensive mobile application with React Native and Supabase for routine tracking and social connection.",
        fullDescription:
          "BILT TRACKER is a comprehensive mobile application for managing gym workouts. Built with React Native and Expo Router, it offers a seamless experience, real-time tracking, social features to connect with other athletes, and a robust, fully dynamic backend powered by Supabase.",
        badges: ["React Native", "Expo", "TypeScript", "Supabase", "AdMob"],
        images: [
          "/proyectos/bilt_login.jpg",
          "/proyectos/bilt_routines.jpg",
          "/proyectos/bilt_excercises.jpg",
          "/proyectos/bilt_units.jpg",
          "/proyectos/bilt_save_routines.jpg",
          "/proyectos/bilt_save_packs.jpg",
        ],
        features: [
          {
            title: "Native Authentication",
            desc: "Fast login with Google Sign-In and offline session persistence.",
          },
          {
            title: "Real-Time Database",
            desc: "Over 80 exercises with animations and anatomical breakdowns powered by Supabase.",
          },
          {
            title: "Smart Tracking",
            desc: "Background player, floating timer, and offline progress protection.",
          },
          {
            title: "Fit Social Network",
            desc: "Global feed to see friends' activity, public/private profiles, and notifications.",
          },
          {
            title: "Advanced UX/UI",
            desc: "Edge-to-Edge interface with dynamic theme (Light/Dark) and fluid gesture handling.",
          },
          {
            title: "Organic Monetization",
            desc: "Native integration with Google AdMob in the feed and workout summaries.",
          },
        ],
        technologies: [
          "Framework: React Native with Expo & TypeScript",
          "Routing: Expo Router",
          "Backend / BaaS: Supabase (PostgreSQL, Auth, Storage)",
          "State Management: React Context API",
          "UI & Animations: react-native-reanimated, gesture-handler",
          "Infrastructure: EAS Build, Google Cloud, AdMob",
        ],
        repoLink: "https://github.com/vluevano2003/Bilt",
        apkDownloadLink:
          "https://github.com/vluevano2003/Bilt/releases/latest/download/BiltTracker-v1.0.0.apk",
      },
    ],
  },
};
