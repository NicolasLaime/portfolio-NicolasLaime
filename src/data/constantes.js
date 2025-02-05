import yesica from '../assets/proyectos/portfolio-yesica.JPG';
import spotifixfondo from "../assets/proyectos/spotifix-fondo.JPG"
import fondogastos from "../assets/proyectos/fondo-gastos.JPG"
import chatfondo from "../assets/proyectos/chat-fondo.JPG"
import crudjava from "../assets/proyectos/crud-java.JPG"


export const HEROCONTENIDO = `Hola! Soy Nicolás, un desarrollador Full Stack apasionado por la tecnología y la programación. Aunque estoy comenzando en el mundo IT, he dedicado los últimos 2 años a aprender y perfeccionar mis habilidades en el desarrollo web, tanto en el front-end como en el back-end`;

export const SOBREMI = `Soy una persona proactiva y con ganas de aprender, con habilidades para el trabajo en equipo y la comunicación. Me adapto fácilmente a nuevos desafíos y disfruto encontrar soluciones creativas a los problemas. Me motiva el aprendizaje continuo y crecer profesionalmente.`;

export const EXPERIENCIAS = [
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
    año: "2024",
    rol: "Curso Desarrollo Full Stack",
    compania: "Santex",
    descripcion: `Actualmente estoy cursando un programa intensivo de Desarrollo Full Stack en Santex, donde estoy ampliando mis conocimientos en tecnologías modernas. El curso incluye temas avanzados de JavaScript, angular, Node.js y arquitecturas de software escalables. Estoy aprendiendo a manejar sistemas complejos, integrar servicios de terceros y aplicar mejores prácticas en el desarrollo de aplicaciones web.`,
    Tecnologias: ["JavaScript", "angular.js", "Node.js", "Microservicios"],

  },
  {
    año: "2024",
    rol: "Curso Backend Java",
    compania: "Nex-Education ORACLE",
    descripcion: `Estoy cursando un programa especializado en Backend Java con Nex-Education y Oracle, donde estoy adquiriendo una comprensión profunda de Java y su ecosistema. El curso abarca desde los conceptos básicos de Java hasta la implementación de aplicaciones empresariales utilizando Spring Framework, Hibernate, y bases de datos SQL. Además, estoy aprendiendo sobre la integración de APIs RESTful y la gestión de servidores para aplicaciones de alto rendimiento.`,
    Tecnologias: ["Java", "Spring Framework", "Hibernate", "SQL", "REST APIs"],

  },
 
];

export const PROYECTOS = [
  {
    titulo: "Portfolio cliente",
    imagen: yesica,
    descripcion:
      `Desarrollé un portafolio web para un cliente artista plástica, destacando su obra y trayectoria profesional. El sitio web incluía una galería de arte interactiva con transiciones suaves utilizando Framer Motion, secciones de biografía y contacto con formularios funcionales implementados con EmailJS, además de notificaciones emergentes gestionadas con React Toastify para una experiencia de usuario mejorada.`,
    Tecnologias: ["React", "Tailwdind", "Emailjs", "framer motion"],
    url: "https://portfolio-yesica-contreras.vercel.app/",
  },
  {
    titulo: "Spotifix - Clon de Spotify",
    imagen: spotifixfondo,
    descripcion:
      `Desarrollé Spotifix, un clon básico de Spotify, utilizando React y Vite. La aplicación permite reproducir música, navegar entre una lista de canciones y controlar la reproducción mediante un reproductor sencillo gestionado con **Context API**. Además, implementé un diseño responsivo con **TailwindCSS** para una mejor experiencia de usuario. En el futuro, planeo expandirlo a un proyecto **Full Stack** con funcionalidades de backend.`,
    Tecnologias: ["React", "Vite", "TailwindCSS", "Context API", "React Router"],
    url: "https://spotifix-nicolas-laimes-projects.vercel.app/",
  },
  {
    titulo: "App de Gestión de Gastos - MERN Stack",
    imagen: fondogastos,  
    descripcion:
      `Desarrollé una aplicación de gestión de gastos utilizando el stack MERN (MongoDB, Express, React, Node.js). El backend está implementado con Node.js y Express, mientras que el frontend está construido con React y TailwindCSS para lograr una interfaz limpia y responsiva. Además, utilicé Chart.js para mostrar gráficos interactivos de los gastos mensuales y categorías, lo que permite a los usuarios visualizar sus finanzas de forma sencilla. En el futuro, planeo agregar autenticación de usuarios y mejorar la gestión de presupuestos. (Base de datos-inactiva)`,
    Tecnologias: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Chart.js"],
    url: "https://app-gastos-mern.vercel.app/",  
  },
  {
    titulo: "Chat MERN - Real-Time Messaging",
    imagen: chatfondo,  
    descripcion:
      `Desarrollé una aplicación de chat en tiempo real utilizando el stack MERN (MongoDB, Express, React, Node.js). El backend está implementado con Node.js y Express, gestionando las conexiones de WebSocket para la comunicación en tiempo real, mientras que el frontend está construido con React y Socket.IO para la interacción instantánea entre los usuarios. La aplicación permite crear salas de chat, enviar mensajes y ver notificaciones en tiempo real. En el futuro, planeo agregar autenticación de usuarios y funciones de almacenamiento de mensajes. (Base de datos-inactiva)`,
    Tecnologias: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "TailwindCSS"],
    url: "https://chat-mern-nicolas-laimes-projects.vercel.app/", 
  },
  {
    titulo: "CRUD Simple de Empleados - Java Spring Boot + React",
    imagen: crudjava,  
    descripcion:
      `Desarrollé una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de empleados, utilizando Java Spring Boot en el backend y React con Bootstrap en el frontend. El backend está construido con Spring Boot, donde implementé una API RESTful para manejar las operaciones CRUD, conectada a una base de datos MySQL. En el frontend, utilicé React para la interfaz de usuario y Bootstrap para un diseño responsivo y moderno. Este proyecto me permitió consolidar mis conocimientos en desarrollo Full Stack, integrando tecnologías tanto del lado del servidor como del cliente.`,
    Tecnologias: ["Java", "Spring Boot", "react", "Bootstrap", "MySQL", "REST API"],
    url: "https://crud-empleados-livid.vercel.app/",  
  }
];



export const contacto = {
  address: "Cordoba - Argentina ",
  phoneNo: "2966-388807",
  email: "nicolaime100@gmail.com",
};