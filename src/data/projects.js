export const projects = [
  {
    id: "materiales-sada",
    title: "Materiales SADA",
    subtitle: "Catálogo e Inventario",
    shortDescription: "Sistema web con catálogo digital interactivo y panel de administración con Firebase y Cloudflare.",
    fullDescription: "Materiales SADA es un sistema web moderno compuesto por un Catálogo Digital interactivo para clientes y un Panel de Administración seguro para la gestión del inventario. Construido con arquitectura serverless para un almacenamiento profesional y carga ultrarrápida.",
    badges: ["React", "Firebase", "Cloudflare R2", "Cloudflare Workers"],
    images: [
      "/proyectos/sada-mp.png",
      "/proyectos/sada-prod.png",
      "/proyectos/sada-login.png",
      "/proyectos/sada-inv.png",
      "/proyectos/sada-users.png",
      "/proyectos/sada-config.png"
    ],
    features: [
      { title: "Catálogo Público Dinámico", desc: "Visualización atractiva con filtrado múltiple y paginación integrada." },
      { title: "Gestión de Inventario (CRUD)", desc: "Panel de administración para gestión en tiempo real sin recargar la página." },
      { title: "Control de Disponibilidad Inteligente", desc: "Sistema optimizado de stock mediante estados booleanos (Disponible / Agotado)." },
      { title: "Almacenamiento en la Nube", desc: "Subida directa a Cloudflare R2 garantizando URLs públicas persistentes." },
      { title: "Ventanas Modales (UI/UX)", desc: "Detalles del producto mediante componentes emergentes." },
      { title: "Contacto Directo", desc: "Integración fluida con Widget de WhatsApp para cierre de ventas." }
    ],
    technologies: [
      "Frontend: React (Hooks: useState, useEffect)",
      "Estilos: CSS Grid avanzado, Flexbox, Custom Properties",
      "Base de Datos: Firebase Firestore (NoSQL, onSnapshot)",
      "Storage: Cloudflare R2",
      "API Serverless: Cloudflare Workers",
      "Peticiones: Fetch API"
    ],
    repoLink: "https://github.com/vluevano2003/materialessada",
    demoLink: "https://materialessada-liart.vercel.app/"
  },

  {
    id: "pricestocker",
    title: "PriceStocker",
    subtitle: "Sistema de Inventario y Administración",
    shortDescription: "Sistema integral de escritorio construido con Spring Boot y JavaFX para gestión comercial.",
    fullDescription: "PriceStocker es un sistema integral de gestión de inventarios y administración comercial de escritorio, construido con una arquitectura robusta para manejar el ciclo completo de productos, relaciones comerciales y control de stock en tiempo real.",
    badges: ["Java 21", "Spring Boot 3.2", "JavaFX 23", "Supabase", "H2 Database"],
    images: [
      "/proyectos/ps_login.png",
      "/proyectos/ps_prov.png",
      "/proyectos/ps_vent.png",
      "/proyectos/ps_config.png",
      "/proyectos/ps_users.png",
      "/proyectos/ps_edit.png"
    ],
    features: [
      { title: "Gestión de Movimientos", desc: "Registro de Compras y Ventas que actualizan el Stock en tiempo real." },
      { title: "Gestión de Terceros", desc: "Administración de Clientes, Proveedores, Fabricantes y Empresas." },
      { title: "Reportes PDF", desc: "Generación de reportes detallados de compras y ventas." },
      { title: "Precios Dinámicos", desc: "Gestión avanzada de costos por tipo de relación con soporte multidivisa (MXN/USD)." },
      { title: "Internacionalización (i18n)", desc: "Soporte multiidioma dinámico (Español e Inglés) integrado de forma nativa." },
      { title: "Cloud Backup & Sincronización", desc: "Auto-Respaldo silencioso en segundo plano y restauración inteligente." }
    ],
    technologies: [
      "Backend: Java 21 LTS & Spring Boot 3.2.4",
      "UI: JavaFX 23.0.2",
      "BaaS / Nube: Supabase (Auth y Storage)",
      "Base de Datos: H2 Database (Modo archivo) & Flyway",
      "ORM: Hibernate / Spring Data JPA",
      "Reportes: OpenPDF 1.3.30",
      "Testing & CI/CD: JUnit 5, Mockito, GitHub Actions"
    ],
    repoLink: "https://github.com/vluevano2003/PriceStocker",
    demoLink: "",
    downloadLink: "https://github.com/vluevano2003/PriceStocker/releases/latest",
    directDownloadLink: "https://github.com/vluevano2003/PriceStocker/releases/latest/download/PriceStocker-Installer-1.4.1.exe"
  },

  {
    id: "sistema-lina",
    title: "Sistema de Recepción y Validación de Comprobantes de Pago para el PE LINA",
    subtitle: "Gestión de Trámites Académicos",
    shortDescription: "Sistema institucional integral para la gestión de trámites estudiantiles con arquitectura desacoplada.",
    fullDescription: "Desarrollado durante mis prácticas profesionales en la Coordinación de Desarrollo de Proyectos de Software. El sistema digitaliza y optimiza la gestión de trámites universitarios, separando la lógica de negocio en una API robusta y una interfaz de usuario interactiva.",
    badges: ["React", "Laravel", "MySQL", "Vite"],
    images: [
      "/proyectos/lina_login.png",
      "/proyectos/lina_list.jpeg",
      "/proyectos/lina_sol.png",
      "/proyectos/lina_tram.png",
      "/proyectos/lina_rech.png",
      "/proyectos/lina_sec.png"
    ],
    features: [
      { title: "Arquitectura Desacoplada", desc: "Backend y Frontend separados para mayor escalabilidad y seguridad del sistema." },
      { title: "Gestión de Trámites", desc: "Flujo completo de solicitudes, validaciones y resoluciones para estudiantes." },
      { title: "API REST Segura", desc: "Endpoints protegidos desarrollados para el manejo y validación de datos." },
      { title: "Base de Datos Relacional", desc: "Esquema estructurado para garantizar la integridad de la información institucional." }
    ],
    technologies: [
      "Frontend: React con Vite",
      "Backend: PHP y framework Laravel",
      "Base de Datos: MySQL",
      "Control de Versiones: Git (Trabajo colaborativo mediante ramas)"
    ],
    repoLink: "", 
    repoLinkFront: "https://github.com/Rick-Landa/front-sistema-lina",
    repoLinkBack: "https://github.com/yuyo272003/lina-api",
    demoLink: "" 
  },
  
  {
    id: "bilt-tracker",
    title: "BILT TRACKER",
    subtitle: "Gestión de Entrenamientos en el Gimnasio",
    shortDescription: "Aplicación móvil integral con React Native y Supabase para el seguimiento de rutinas y conexión social.",
    fullDescription: "BILT TRACKER es una aplicación móvil integral para la gestión de entrenamientos en el gimnasio. Construida con React Native y Expo Router, ofrece una experiencia fluida, seguimiento en tiempo real, características sociales para conectar con otros atletas y un sistema robusto de backend totalmente dinámico potenciado por Supabase.",
    badges: ["React Native", "Expo", "TypeScript", "Supabase", "AdMob"],
    images: [
      "/proyectos/bilt_login.jpg",
      "/proyectos/bilt_routines.jpg",
      "/proyectos/bilt_excercises.jpg",
      "/proyectos/bilt_units.jpg",
      "/proyectos/bilt_save_routines.jpg",
      "/proyectos/bilt_save_packs.jpg"
    ],
    features: [
      { title: "Autenticación Nativa", desc: "Login rápido con Google Sign-In y persistencia de sesión offline." },
      { title: "Base de Datos en Tiempo Real", desc: "Más de 80 ejercicios con animaciones y desglose anatómico desde Supabase." },
      { title: "Seguimiento Inteligente", desc: "Reproductor en segundo plano, temporizador flotante y protección offline del progreso." },
      { title: "Red Social Fit", desc: "Feed global para ver la actividad de amigos, perfiles públicos/privados y notificaciones." },
      { title: "UX/UI Avanzada", desc: "Interfaz Edge-to-Edge con tema dinámico (Claro/Oscuro) y manejo fluido de gestos." },
      { title: "Monetización Orgánica", desc: "Integración nativa con Google AdMob en el feed y resúmenes de entrenamiento." }
    ],
    technologies: [
      "Framework: React Native con Expo & TypeScript",
      "Enrutamiento: Expo Router",
      "Backend / BaaS: Supabase (PostgreSQL, Auth, Storage)",
      "Gestión de Estado: React Context API",
      "UI & Animaciones: react-native-reanimated, gesture-handler",
      "Infraestructura: EAS Build, Google Cloud, AdMob"
    ],
    repoLink: "https://github.com/vluevano2003/Bilt",
    demoLink: "",
    apkDownloadLink: "https://github.com/vluevano2003/Bilt/releases/latest/download/BiltTracker-v1.0.0.apk"
  }
];