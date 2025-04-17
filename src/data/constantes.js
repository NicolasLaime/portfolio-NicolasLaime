import yesica from '../assets/proyectos/portfolio-yesica.JPG';
import spotifixfondo from "../assets/proyectos/spotifix-fondo.JPG"
import fondogastos from "../assets/proyectos/fondo-gastos.JPG"
import chatfondo from "../assets/proyectos/chat-fondo.JPG"
import crudjava from "../assets/proyectos/crud-java.JPG"
import ecomerce from "../assets/proyectos/ecommerce-mern.JPG"
import tareas from "../assets/proyectos/tareas.JPG"

export const HEROCONTENIDO = `¡Hola! Soy Nicolás, un desarrollador Full Stack apasionado por la tecnología y la programación.
En los últimos 2 años, he perfeccionado mis habilidades en el desarrollo web, tanto en front-end como back-end. Me especializo en crear aplicaciones dinámicas con código eficiente y de alta calidad. Actualmente, busco mi primer empleo en IT para aplicar mis conocimientos, seguir aprendiendo y contribuir a proyectos innovadores. ¡Estoy listo para aportar y enfrentar nuevos desafíos!`;

export const SOBREMI = `Soy una persona proactiva, con una gran pasión por aprender y enfrentar nuevos desafíos. Me considero un buen miembro de equipo, con habilidades para comunicarme de manera efectiva y trabajar de forma colaborativa. Disfruto encontrar soluciones creativas a problemas complejos y me motiva el aprendizaje constante para seguir creciendo tanto personal como profesionalmente.`;

export const ESTUDIOS = [
  {
    año: "2022 - 2023",
    rol: "Desarrollo web Full stack ",
    compania: "Coder house",
    descripcion: `Estudié en Coderhouse, donde aprendí las bases de la programación y adquirí conocimientos sobre el desarrollo y mantenimiento de aplicaciones web utilizando JavaScript, React.js y Node.js. Durante mi formación, aprendí a implementar APIs RESTful e integrar bases de datos MongoDB. Además, colaboré con las partes interesadas para definir los requisitos y los plazos del proyecto.`,
    Tecnologias: ["Javascript", "React.js", "node.js", "mongoDB"],

  },
  {
    año: "2023",
    rol: "Community manager",
    compania: "Potrero Digital",
    descripcion: `Estudié Community Manager en Potrero Digital, he adquirido una sólida base en la gestión de redes sociales. Mi formación incluye el desarrollo de estrategias de contenido, la gestión y crecimiento de comunidades en línea, y la optimización de la presencia digital de marcas. También he aprendido a crear y ejecutar campañas digitales efectivas, analizar métricas de rendimiento y ajustar las estrategias para maximizar los resultados. Además, manejo programas de diseño, lo que me permite crear contenido visual atractivo y de alta calidad para mejorar la comunicación y el alcance en el entorno digital. Estoy listo para aplicar mis habilidades y conocimientos para potenciar la presencia digital de tu organización.`,
    Tecnologias: ["Facebook Adds", "photoshop", "Adobe ilustration", "Canva"],

  },
  {
    año: "2023",
    rol: "Desarrollo web Full Stack Autodidacta",
    compania: "Udemy",
    descripcion: `Estudié de forma autodidacta en Udemy, donde tomé cursos con Federico Garay y Fernando Herrera. Aprendí las bases de la programación y adquirí conocimientos sobre el desarrollo y mantenimiento de aplicaciones web utilizando JavaScript, React.js y Node.js. Durante mi formación, aprendí a implementar APIs RESTful e integrar bases de datos MongoDB. Además, colaboré con las partes interesadas para definir los requisitos y los plazos del proyecto.`,
    Tecnologias: ["JavaScript", "React.js", "Next js", "Node.js", "MongoDB", "Sql"],

  },
  {
    "año": "2024",
    "rol": "Curso Backend Java",
    "compania": "Nex-Education ORACLE",
    "descripcion": "Completé un programa especializado en Backend Java con Nex-Education y Oracle, adquiriendo una comprensión profunda de Java y su ecosistema. El curso abarcó desde los fundamentos del lenguaje hasta la implementación de aplicaciones empresariales con Spring Framework, Hibernate y bases de datos SQL. Además, desarrollé habilidades en la integración de APIs RESTful y la gestión de servidores para aplicaciones de alto rendimiento.",
    "Tecnologias": ["Java", "Spring Framework", "Hibernate", "SQL", "REST APIs"]
}
 
];

export const PROYECTOS = [
  {
    titulo: "Portfolio cliente",
    imagen: yesica,
    descripcion:
      `Desarrollé un portafolio web para un cliente artista plástica, destacando su obra y trayectoria profesional. El sitio web incluía una galería de arte interactiva con transiciones suaves utilizando Framer Motion, secciones de biografía y contacto con formularios funcionales implementados con EmailJS, además de notificaciones emergentes gestionadas con React Toastify para una experiencia de usuario mejorada.`,
    Tecnologias: ["React", "Tailwdind", "Emailjs", "framer motion"],
    categoria: "Frontend",  // Categoría añadida
    url: "https://portfolio-yesica-contreras.vercel.app/",
  },
  {
    titulo: "Spotifix - Clon de Spotify",
    imagen: spotifixfondo,
    descripcion:
      `Desarrollé Spotifix, un clon básico de Spotify, utilizando React y Vite. La aplicación permite reproducir música, navegar entre una lista de canciones y controlar la reproducción mediante un reproductor sencillo gestionado con **Context API**. Además, implementé un diseño responsivo con **TailwindCSS** para una mejor experiencia de usuario. En el futuro, planeo expandirlo a un proyecto **Full Stack** con funcionalidades de backend.`,
    Tecnologias: ["React", "Vite", "TailwindCSS", "Context API", "React Router"],
    categoria: "Frontend",  // Categoría añadida
    url: "https://spotifix-nicolas-laimes-projects.vercel.app/",
  },
  {
    titulo: "App de Gestión de Gastos - MERN Stack",
    imagen: fondogastos,  
    descripcion:
      `Desarrollé una aplicación de gestión de gastos utilizando el stack MERN (MongoDB, Express, React, Node.js). El backend está implementado con Node.js y Express, mientras que el frontend está construido con React y TailwindCSS para lograr una interfaz limpia y responsiva. Además, utilicé Chart.js para mostrar gráficos interactivos de los gastos mensuales y categorías, lo que permite a los usuarios visualizar sus finanzas de forma sencilla. En el futuro, planeo agregar autenticación de usuarios y mejorar la gestión de presupuestos. (Base de datos-inactiva)`,
    Tecnologias: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Chart.js"],
    categoria: "Fullstack",  // Categoría añadida
    url: "https://app-gastos-mern.vercel.app/",  
  },
  {
    titulo: "Chat MERN - Real-Time Messaging",
    imagen: chatfondo,  
    descripcion:
      `Desarrollé una aplicación de chat en tiempo real utilizando el stack MERN (MongoDB, Express, React, Node.js). El backend está implementado con Node.js y Express, gestionando las conexiones de WebSocket para la comunicación en tiempo real, mientras que el frontend está construido con React y Socket.IO para la interacción instantánea entre los usuarios. La aplicación permite crear salas de chat, enviar mensajes y ver notificaciones en tiempo real. En el futuro, planeo agregar autenticación de usuarios y funciones de almacenamiento de mensajes. (Base de datos-inactiva)`,
    Tecnologias: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "TailwindCSS"],
    categoria: "Fullstack",  // Categoría añadida
    url: "https://chat-mern-nicolas-laimes-projects.vercel.app/", 
  },
  {
    titulo: "CRUD Simple de Empleados - Java Spring Boot + React",
    imagen: crudjava,  
    descripcion:
      `Desarrollé una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de empleados, utilizando Java Spring Boot en el backend y React con Bootstrap en el frontend. El backend está construido con Spring Boot, donde implementé una API RESTful para manejar las operaciones CRUD, conectada a una base de datos MySQL. En el frontend, utilicé React para la interfaz de usuario y Bootstrap para un diseño responsivo y moderno. Este proyecto me permitió consolidar mis conocimientos en desarrollo Full Stack, integrando tecnologías tanto del lado del servidor como del cliente.`,
    Tecnologias: ["Java", "Spring Boot", "react", "Bootstrap", "MySQL", "REST API"],
    categoria: "Fullstack",  // Categoría añadida
    url: "https://crud-empleados-livid.vercel.app/",  
  },
  {
    titulo: "E-commerce MERN - Java Spring Boot Security + React",
    imagen: ecomerce,
    descripcion:
      `Desarrollé una aplicación de e-commerce con Java Spring Boot Security en el backend y React en el frontend. Implementé una API RESTful segura con MySQL y Lombok, mientras que en el frontend utilicé Tailwind CSS para un diseño moderno. La plataforma permite autenticación de usuarios, gestión de productos (CRUD) y simulación de compras con LocalStorage. Próximamente, integraré una pasarela de pago para habilitar transacciones seguras.`,
    Tecnologias: ["Java", "Spring Boot Security", "react", "Tailwind CSS", "MySQL", "REST API", "Lombok", "LocalStorage"],
    categoria: "Fullstack",  // Categoría añadida
    url: "https://ecommerce-mern-sigma.vercel.app/"
  },
  {
    titulo: "App de Tareas Full Stack",
    imagen: tareas,
    descripcion:
      `Desarrollé una aplicación de gestión de tareas full stack que permite crear, listar y filtrar tareas según su estado. En el frontend utilicé React con Tailwind CSS para un diseño limpio y responsive, Framer Motion para animaciones suaves, y React Toastify para notificaciones elegantes. En el backend implementé una API REST con Java Spring Boot, estructurada con capas de Controller, Service y Repository, validaciones con Bean Validation y persistencia con JPA. Desplegada en Railway (backend) y Vercel (frontend).`,
    Tecnologias: ["react", "Tailwind", "Framer Motion", "Toastify", "ava", "Spring Boot", "JPA", "Railway", "Vercel"],
    categoria: "Fullstack",  // Categoría añadida
    url: "https://tareas-app-nu.vercel.app/"
  }
];





export const contacto = {
  address: "Cordoba - Argentina ",
  phoneNo: "2966-388807",
  email: "nicolaime100@gmail.com",
};