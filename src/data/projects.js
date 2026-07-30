export const content = {
  es: {
    home: {
      greeting: "Hola, soy",
      companyName: "Víctor Luévano",
      description: "Soy un desarrollador de software independiente con sede en Coatzacoalcos, especializado en crear soluciones web, de escritorio y móviles que impulsan el crecimiento de tu negocio.",
      clientsTitle: "Empresas que han confiado en mí:",
      productsTitle: "Mis Productos",
      aboutTitle: "Sobre Mí",
      aboutDesc: "Ingeniero de Software con experiencia en el desarrollo de aplicaciones web, móviles y de escritorio, especializado en el análisis de requerimientos complejos, diseño de software y gestión del ciclo de vida del desarrollo. Orientado a resultados, con capacidades probadas en liderazgo técnico, trabajo colaborativo y resolución de problemas complejos.",
      contactTitle: "¿Listo para impulsar tu negocio?",
      contactDesc: "Cuéntame qué necesitas automatizar, optimizar o escalar, y te responderé con los siguientes pasos dentro de un día hábil.",
      emailBtn: "Contáctame",
    },
    projectDetails: {
      notFound: "Proyecto/Producto no encontrado",
      back: "← Volver",
      featuresTitle: "Características Principales",
      technicalFeaturesTitle: "Características Técnicas",
      techTitle: "Tecnologías Utilizadas",
      btnDownloadInstaller: "Descargar Instalador",
      btnReleases: "Ver Versiones (Releases)",
      btnPlayStore: "Google Play",
      btnWebsite: "Visitar Sitio Web",
      btnCode: "Ver Código",
      btnFront: "Código Frontend",
      btnBack: "Código Backend",
      fullScreenAlt: "Pantalla completa",
      goToImage: "Ir a la imagen",
    },
    clients: [
      {
        id: "materiales-sada",
        title: "Materiales SADA",
        subtitle: "Catálogo e inventario",
        logo: "/sada_logo.png",
        shortDescription: "Sistema web con catálogo digital interactivo y panel de administración con Firebase y Cloudflare.",
        fullDescription: "Materiales SADA es un sistema web moderno compuesto por un Catálogo Digital interactivo para clientes y un Panel de Administración seguro para la gestión del inventario. Construido con arquitectura serverless para un almacenamiento profesional y carga ultrarrápida.",
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
          { title: "Compra Fácil", desc: "Catálogo digital intuitivo para que tus clientes encuentren lo que necesitan en segundos." },
          { title: "Inventario Seguro", desc: "Nunca vendas algo que no tienes gracias a la sincronización instantánea de tu inventario." },
          { title: "Rápido y Accesible", desc: "Diseñado para cargar al instante desde cualquier teléfono o computadora." },
          { title: "Contacto Directo", desc: "Tus clientes se conectan directamente contigo por WhatsApp para cerrar ventas de forma personal." }
        ],
        technicalFeatures: [
          { title: "Catálogo Público Dinámico", desc: "Visualización atractiva con filtrado múltiple y paginación integrada." },
          { title: "Gestión de Inventario (CRUD)", desc: "Panel de administración para gestión en tiempo real sin recargar la página." },
          { title: "Control de Disponibilidad Inteligente", desc: "Sistema optimizado de stock mediante estados booleanos (Disponible / Agotado)." },
          { title: "Almacenamiento en la Nube", desc: "Subida directa a Cloudflare R2 garantizando URLs públicas persistentes." },
          { title: "Ventanas Modales (UI/UX)", desc: "Detalles del producto mediante componentes emergentes." },
          { title: "Contacto Directo", desc: "Integración fluida con Widget de WhatsApp para cierre de ventas." },
        ],
        technologies: [
          "React", "CSS Grid", "Flexbox", "Firebase Firestore", "Cloudflare R2", "Cloudflare Workers", "Fetch API"
        ],
        repoLink: "https://github.com/vluevano2003/materialessada",
        demoLink: "https://materialessada-liart.vercel.app/",
      },
      {
        id: "sistema-lina",
        title: "Sistema de Recepción y Validación de Comprobantes de Pago para el PE LINA",
        clientName: "Universidad Veracruzana",
        subtitle: "Gestión de trámites académicos",
        logo: "/uv_logo.png",
        shortDescription: "Sistema institucional integral para la gestión de trámites estudiantiles con arquitectura desacoplada.",
        fullDescription: "Desarrollado durante mis prácticas profesionales en la Coordinación de Desarrollo de Proyectos de Software. El sistema digitaliza y optimiza la gestión de trámites universitarios, separando la lógica de negocio en una API robusta y una interfaz de usuario interactiva.",
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
          { title: "Trámites sin Filas", desc: "Digitalización completa de procesos escolares para ahorrar tiempo a estudiantes y administrativos." },
          { title: "Transparencia Total", desc: "Seguimiento claro y en tiempo real del estado de cada trámite o solicitud." },
          { title: "Fácil de Usar", desc: "Interfaz amigable para que cualquier persona pueda navegar sin confusiones." },
          { title: "Seguridad de Datos", desc: "Manejo confidencial y seguro de la información de todos los estudiantes." }
        ],
        technicalFeatures: [
          { title: "Arquitectura Desacoplada", desc: "Backend y Frontend separados para mayor escalabilidad y seguridad del sistema." },
          { title: "Gestión de Trámites", desc: "Flujo completo de solicitudes, validaciones y resoluciones para estudiantes." },
          { title: "API REST Segura", desc: "Endpoints protegidos desarrollados para el manejo y validación de datos." },
          { title: "Base de Datos Relacional", desc: "Esquema estructurado para garantizar la integridad de la información institucional." },
        ],
        technologies: [
          "React", "Vite", "PHP", "Laravel", "MySQL", "Git"
        ],
        repoLinkFront: "https://github.com/Rick-Landa/front-sistema-lina",
        repoLinkBack: "https://github.com/yuyo272003/lina-api",
      }
    ],
    products: [
      {
        id: "pricestocker",
        title: "PriceStocker",
        subtitle: "Sistema de inventario y administración",
        device: "laptop",
        shortDescription: "Sistema integral de escritorio diseñado para facilitar la administración, control de inventario y gestión comercial de tu negocio.",
        fullDescription: "PriceStocker es un sistema integral de gestión de inventarios y administración comercial de escritorio, construido con una arquitectura robusta para manejar el ciclo completo de productos, relaciones comerciales y control de stock en tiempo real.",
        badges: ["Java 21", "Spring Boot", "JavaFX", "Supabase", "H2 Database"],
        images: [
          "/proyectos/ps_login.png",
          "/proyectos/ps_home.png",
          "/proyectos/ps_prod.png",
          "/proyectos/ps_sale.png",
          "/proyectos/ps_history.png",
          "/proyectos/ps_config.png",
        ],
        features: [
          { title: "Control Total", desc: "Administra tu inventario, ventas y compras diarias desde un solo lugar sin complicaciones." },
          { title: "Precios Inteligentes", desc: "Ajusta tus precios fácilmente, maneja distintas monedas y obtén el margen de ganancia ideal." },
          { title: "Reportes Claros", desc: "Entiende tu negocio mejor generando reportes en PDF de tus ventas y compras en segundos." },
          { title: "Tranquilidad y Respaldo", desc: "Tu información siempre segura gracias a copias de seguridad automáticas en la nube." }
        ],
        technicalFeatures: [
          { title: "Control de Acceso Avanzado", desc: "Sistema de Login seguro con gestión de usuarios, roles y restricción dinámica de vistas según permisos." },
          { title: "Gestión de Productos y Alertas", desc: "Catálogo detallado con soporte para categorización, configuración de impuestos y alertas visuales para productos por debajo del stock mínimo." },
          { title: "Gestión de Movimientos", desc: "Registro de Compras y Ventas que actualizan automáticamente el Stock de los productos en tiempo real." },
          { title: "Precios Dinámicos", desc: "Gestión avanzada de costos por tipo de relación (Cliente, Proveedor, etc.) con soporte multidivisa (MXN/USD)." },
          { title: "Gestión de Terceros", desc: "Módulos completos para administrar Clientes, Proveedores, Fabricantes, Empresas y Prestadores de Servicios." },
          { title: "Reportes PDF", desc: "Generación de reportes detallados de compras y ventas en formato PDF." },
          { title: "Internacionalización (i18n)", desc: "Soporte multiidioma dinámico (Español e Inglés) integrado nativamente en UI, validaciones y reportes." },
          { title: "Cloud Backup & Restauración Inteligente", desc: "Auto-Respaldo silencioso en la nube al cerrar la app y proceso seguro de restauración en caliente." },
        ],
        technologies: [
          "Java 21", "Spring Boot", "JavaFX", "Supabase", "H2 Database", "Flyway", "Hibernate", "Spring Data JPA", "OpenPDF", "JUnit 5", "Mockito", "GitHub Actions", "Maven", "Lombok"
        ],
        repoLink: "https://github.com/vluevano2003/PriceStocker",
        demoLink: "",
        downloadLink: "https://github.com/vluevano2003/PriceStocker/releases/",
        directDownloadLink: "https://sourceforge.net/projects/pricestocker/",
      },
      {
        id: "bilt-tracker",
        title: "BILT TRACKER",
        subtitle: "Gestión de entrenamientos en el gimnasio",
        device: "mobile",
        shortDescription: "Aplicación móvil diseñada para llevar el seguimiento de tus rutinas en el gimnasio, registrar tu progreso y conectar con otros usuarios.",
        fullDescription: "BILT TRACKER es una aplicación móvil integral para la gestión de entrenamientos en el gimnasio. Construida con React Native y Expo Router, ofrece una experiencia fluida, seguimiento en tiempo real con reproductor en segundo plano, características sociales para conectar con otros atletas y un sistema robusto de backend totalmente dinámico potenciado por Supabase.",
        badges: ["React Native", "Expo", "TypeScript", "Supabase", "AdMob", "Google Cloud"],
        images: [
          "/proyectos/bilt_login.jpg",
          "/proyectos/bilt_home.jpg",
          "/proyectos/bilt_workout.jpg",
          "/proyectos/bilt_exercises.jpg",
          "/proyectos/bilt_units.jpg",
          "/proyectos/bilt_profile.jpg",
        ],
        features: [
          { title: "Entrena a tu Ritmo", desc: "Sigue tus rutinas fácilmente en el gimnasio con un reproductor que no interrumpe tu música." },
          { title: "Comunidad Activa", desc: "Conecta con otros deportistas, comparte tus logros y mantén la motivación a tope." },
          { title: "Librería de Ejercicios", desc: "Descubre cientos de ejercicios con instrucciones claras para mejorar tu técnica." },
          { title: "Progreso Visible", desc: "Registra tus pesos y repeticiones para ver exactamente cómo has mejorado cada semana." }
        ],
        technicalFeatures: [
          { title: "Entrenamiento Activo (Background Player)", desc: "Reproductor en segundo plano con notificaciones persistentes (Sticky), alertas de vibración/sonido y protección offline ante pérdidas de red." },
          { title: "Autenticación Segura y Perfil", desc: "Login rápido con Google Sign-In, gestión mediante Supabase Auth y persistencia de sesión inteligente en caché." },
          { title: "Base de Datos Dinámica", desc: "Más de 80 ejercicios obtenidos desde la nube con animaciones, detalles técnicos y desglose anatómico (músculos principales y sinérgicos)." },
          { title: "Gestión de Rutinas (Drag & Drop)", desc: "Creación de rutinas y agrupación en packs semanales con funcionalidad fluida de reordenamiento e interacción táctil." },
          { title: "Red Social Fit en Tiempo Real", desc: "Feed global sincronizado vía Supabase Realtime Channels, perfiles de usuario, notificaciones push (Edge Functions) y sistema de moderación." },
          { title: "UX/UI Adaptativa e i18n", desc: "Interfaz Edge-to-Edge nativa, prevención de espacios fantasma del teclado, tema dinámico persistente (Claro/Oscuro) y soporte multiidioma (ES/EN)." },
        ],
        technologies: [
          "React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "React Context API", "AsyncStorage", "Reanimated", "Google Cloud", "AdMob"
        ],
        repoLink: "https://github.com/vluevano2003/Bilt",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.vluevano2003.bilttracker",
      }
    ],
  },
  en: {
    home: {
      greeting: "Hello, I'm",
      companyName: "Victor Luevano",
      description: "An independent software developer based in Coatzacoalcos, specialized in creating web, desktop, and mobile solutions that drive your business growth.",
      clientsTitle: "Companies that have trusted me:",
      productsTitle: "My Products",
      aboutTitle: "About Me",
      aboutDesc: "Software Engineer with experience in developing web, mobile, and desktop applications, specialized in analyzing complex requirements, software design, and development lifecycle management. Results-oriented, with proven capabilities in technical leadership, collaborative work, and complex problem-solving.",
      contactTitle: "Ready to boost your business?",
      contactDesc: "Tell me what you need to automate, optimize or scale, and I'll get back to you with the next steps within one business day.",
      emailBtn: "Contact me",
    },
    projectDetails: {
      notFound: "Project/Product not found",
      back: "← Back",
      featuresTitle: "Main Features",
      technicalFeaturesTitle: "Technical Features",
      techTitle: "Technologies Used",
      btnDownloadInstaller: "Download Installer",
      btnReleases: "View Releases",
      btnPlayStore: "Google Play",
      btnWebsite: "Visit Website",
      btnCode: "View Code",
      btnFront: "Frontend Code",
      btnBack: "Backend Code",
      fullScreenAlt: "Full screen",
      goToImage: "Go to image",
    },
    clients: [
      {
        id: "materiales-sada",
        title: "Materiales SADA",
        subtitle: "Catalog and inventory",
        logo: "/sada_logo.png",
        shortDescription: "Web system with an interactive digital catalog and admin panel using Firebase and Cloudflare.",
        fullDescription: "Materiales SADA is a modern web system composed of an interactive Digital Catalog for clients and a secure Administration Panel for inventory management. Built with a serverless architecture for professional storage and ultra-fast loading.",
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
          { title: "Easy Shopping", desc: "Intuitive digital catalog so your customers can find what they need in seconds." },
          { title: "Safe Inventory", desc: "Never sell out-of-stock items thanks to instant inventory synchronization." },
          { title: "Fast and Accessible", desc: "Designed to load instantly on any mobile phone or computer." },
          { title: "Direct Contact", desc: "Customers connect directly with you via WhatsApp to close sales personally." }
        ],
        technicalFeatures: [
          { title: "Dynamic Public Catalog", desc: "Attractive display with multiple filtering options and integrated pagination." },
          { title: "Inventory Management (CRUD)", desc: "Admin panel for real-time management without page reloads." },
          { title: "Smart Availability Control", desc: "Optimized stock system using boolean states (Available / Out of Stock)." },
          { title: "Cloud Storage", desc: "Direct upload to Cloudflare R2 ensuring persistent public URLs." },
          { title: "Modal Windows (UI/UX)", desc: "Product details displayed through pop-up components." },
          { title: "Direct Contact", desc: "Seamless integration with a WhatsApp widget for closing sales." },
        ],
        technologies: [
          "React", "CSS Grid", "Flexbox", "Firebase Firestore", "Cloudflare R2", "Cloudflare Workers", "Fetch API"
        ],
        repoLink: "https://github.com/vluevano2003/materialessada",
        demoLink: "https://materialessada-liart.vercel.app/",
      },
      {
        id: "sistema-lina",
        title: "Receipt and Payment Validation System for the LINA EP",
        clientName: "Universidad Veracruzana",
        subtitle: "Academic procedures management",
        logo: "/uv_logo.png",
        shortDescription: "Comprehensive institutional system for managing student procedures with a decoupled architecture.",
        fullDescription: "Developed during my professional internship at the Software Project Development Coordination. The system digitizes and optimizes the management of university procedures, separating the business logic into a robust API and an interactive user interface.",
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
          { title: "Line-Free Procedures", desc: "Complete digitization of school processes to save time for students and staff." },
          { title: "Total Transparency", desc: "Clear and real-time tracking of every request or procedure status." },
          { title: "Easy to Use", desc: "Friendly interface so anyone can navigate without confusion." },
          { title: "Data Security", desc: "Confidential and highly secure handling of all student information." }
        ],
        technicalFeatures: [
          { title: "Decoupled Architecture", desc: "Separate Backend and Frontend for greater scalability and system security." },
          { title: "Procedure Management", desc: "Complete flow of requests, validations, and resolutions for students." },
          { title: "Secure REST API", desc: "Protected endpoints developed for data handling and validation." },
          { title: "Relational Database", desc: "Structured schema to ensure the integrity of institutional information." },
        ],
        technologies: [
          "React", "Vite", "PHP", "Laravel", "MySQL", "Git"
        ],
        repoLinkFront: "https://github.com/Rick-Landa/front-sistema-lina",
        repoLinkBack: "https://github.com/yuyo272003/lina-api",
      }
    ],
    products: [
      {
        id: "pricestocker",
        title: "PriceStocker",
        subtitle: "Inventory and administration system",
        device: "laptop",
        shortDescription: "Comprehensive desktop system designed to facilitate the administration, inventory control, and business management of your company.",
        fullDescription: "PriceStocker is a comprehensive desktop inventory management and business administration system, built with a robust architecture to handle the full lifecycle of products, business relationships, and real-time stock control.",
        badges: ["Java 21", "Spring Boot", "JavaFX", "Supabase", "H2 Database"],
        images: [
          "/proyectos/ps_login.png",
          "/proyectos/ps_home.png",
          "/proyectos/ps_prod.png",
          "/proyectos/ps_sale.png",
          "/proyectos/ps_history.png",
          "/proyectos/ps_config.png",
        ],
        features: [
          { title: "Total Control", desc: "Manage your daily inventory, sales, and purchases from one place without complications." },
          { title: "Smart Pricing", desc: "Easily adjust prices, handle multiple currencies, and get your ideal profit margin." },
          { title: "Clear Reports", desc: "Better understand your business by generating PDF sales and purchase reports in seconds." },
          { title: "Peace of Mind", desc: "Your data is always safe with automatic cloud backups every time you close the app." }
        ],
        technicalFeatures: [
          { title: "Advanced Access Control", desc: "Secure login system with user and role management, and dynamic restriction of views based on permissions." },
          { title: "Product Management & Alerts", desc: "Detailed catalog with categorization, tax configuration, and visual alerts for low-stock products." },
          { title: "Movement Management", desc: "Complete record of Purchases and Sales that automatically update Stock in real time." },
          { title: "Dynamic Pricing", desc: "Advanced cost management by relationship type (Client, Supplier, etc.) with multi-currency support (MXN/USD)." },
          { title: "Third-Party Management", desc: "Comprehensive modules to manage Clients, Suppliers, Manufacturers, Competitors, and Service Providers." },
          { title: "PDF Reports", desc: "Generation of detailed purchase and sales reports in PDF format." },
          { title: "Internationalization (i18n)", desc: "Dynamic multi-language support (Spanish and English) natively integrated across UI, validations, and reports." },
          { title: "Cloud Backup & Smart Restore", desc: "Silent background cloud auto-backup on app close and secure hot-restore process." },
        ],
        technologies: [
          "Java 21", "Spring Boot", "JavaFX", "Supabase", "H2 Database", "Flyway", "Hibernate", "Spring Data JPA", "OpenPDF", "JUnit 5", "Mockito", "GitHub Actions", "Maven", "Lombok"
        ],
        repoLink: "https://github.com/vluevano2003/PriceStocker",
        demoLink: "",
        downloadLink: "https://github.com/vluevano2003/PriceStocker/releases/",
        directDownloadLink: "https://sourceforge.net/projects/pricestocker/",
      },
      {
        id: "bilt-tracker",
        title: "BILT TRACKER",
        subtitle: "Gym workout management",
        device: "mobile",
        shortDescription: "Mobile app designed to track your gym routines, log your progress, and connect with other users.",
        fullDescription: "BILT TRACKER is a comprehensive mobile application for managing gym workouts. Built with React Native and Expo Router, it offers a seamless experience, real-time tracking with a background player, social features to connect with other athletes, and a robust, fully dynamic backend powered by Supabase.",
        badges: ["React Native", "Expo", "TypeScript", "Supabase", "AdMob", "Google Cloud"],
        images: [
          "/proyectos/bilt_login.jpg",
          "/proyectos/bilt_home.jpg",
          "/proyectos/bilt_workout.jpg",
          "/proyectos/bilt_exercises.jpg",
          "/proyectos/bilt_units.jpg",
          "/proyectos/bilt_profile.jpg",
        ],
        features: [
          { title: "Train at your Pace", desc: "Easily follow your routines at the gym with a workout player that won't interrupt your music." },
          { title: "Active Community", desc: "Connect with other athletes, share your achievements, and keep your motivation high." },
          { title: "Exercise Library", desc: "Discover hundreds of exercises with clear instructions to improve your technique." },
          { title: "Visible Progress", desc: "Log your weights and reps to see exactly how you've improved each week." }
        ],
        technicalFeatures: [
          { title: "Active Workout (Background Player)", desc: "Background player with sticky notifications, haptic/audio alerts, and offline protection against network loss." },
          { title: "Secure Authentication & Profile", desc: "Fast login with Google Sign-In, management via Supabase Auth, and smart cached session persistence." },
          { title: "Dynamic Database", desc: "Over 80 exercises retrieved from the cloud with animations, technical details, and anatomical breakdowns (main and synergist muscles)." },
          { title: "Routine Management (Drag & Drop)", desc: "Creation of routines and weekly packs with fluid reordering and tactile interaction." },
          { title: "Real-Time Fit Social Network", desc: "Global feed synced via Supabase Realtime Channels, user profiles, push notifications (Edge Functions), and moderation system." },
          { title: "Adaptive UX/UI & i18n", desc: "Native Edge-to-Edge interface, ghost-space prevention for keyboards, persistent dynamic theme (Light/Dark), and multi-language support (ES/EN)." },
        ],
        technologies: [
          "React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "React Context API", "AsyncStorage", "Reanimated", "Google Cloud", "AdMob"
        ],
        repoLink: "https://github.com/vluevano2003/Bilt",
        playStoreLink: "https://play.google.com/store/apps/details?id=com.vluevano2003.bilttracker",
      }
    ],
  },
};
