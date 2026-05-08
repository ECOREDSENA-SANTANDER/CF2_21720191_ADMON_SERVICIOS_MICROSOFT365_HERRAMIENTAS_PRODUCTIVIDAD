export default {
  global: {
    Name: 'Administración segura de mensajería y agendamiento corporativo',
    Description:
      'El componente Administración segura de mensajería y agendamiento corporativo desarrolla habilidades para gestionar, organizar y priorizar la información y el tiempo en el entorno digital desde una perspectiva tecnológica y estratégica. Promueve el uso eficiente de herramientas colaborativas, la autogestión de la productividad y la estructuración de flujos de trabajo alineados con las demandas ágiles de las organizaciones 4.0 y el desempeño profesional integral.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.svg',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El ecosistema de Microsoft 365 en las organizaciones 4.0',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'De la ofimática tradicional a la productividad en la nube',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Importancia de la gestión de la información en la cuarta revolución industrial',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Administración estratégica del correo electrónico Microsoft Outlook 365',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Fundamentos conceptuales del correo corporativo como herramienta pedagógica y profesional',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Gestión avanzada y organización de la bandeja de entrada',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Configuración, personalización y automatización del entorno de trabajo',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de contactos y construcción de redes de colaboración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Creación, administración y estructuración de listas de contactos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Operaciones avanzadas, grupos de distribución y su impacto en el trabajo colaborativo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Herramientas complementarias para la gestión del tiempo y la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'El calendario interactivo como eje articulador de la gestión del tiempo y eventos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Administración de tareas para el seguimiento y ejecución de proyectos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Integración de notas digitales para la captura ágil de conocimiento',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Integración práctica en entornos de formación profesional y proyectos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Resolución de necesidades reales en el aprendizaje virtual y el trabajo remoto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Estrategias pedagógicas apoyadas en el ecosistema Outlook 365',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Asistente para programación',
      significado:
        'funcionalidad del calendario de Microsoft 365 que superpone las agendas de múltiples usuarios para identificar automáticamente horarios libres comunes y facilitar la convocatoria a reuniones.',
    },
    {
      termino: 'Bandeja de entrada (<i>inbox</i>)',
      significado:
        'directorio principal donde se reciben, y desde donde se procesan inicialmente, los mensajes de correo electrónico entrantes.',
    },
    {
      termino: 'Categorías por colores',
      significado:
        'sistema de etiquetado visual en Outlook que permite clasificar transversalmente correos, tareas y eventos del calendario, independientemente de la carpeta en la que estén almacenados.',
    },
    {
      termino: 'Colaboración asincrónica',
      significado:
        'modelo de trabajo donde los miembros de un equipo interactúan y aportan a un proyecto en diferentes momentos, facilitado por herramientas en la nube como el correo y las tareas compartidas.',
    },
    {
      termino: 'Cuarta revolución industrial (Industria 4.0)',
      significado:
        'transformación económica y social impulsada por la digitalización, la interconexión de sistemas, la computación en la nube y la automatización de procesos.',
    },
    {
      termino: 'Ecosistema digital',
      significado:
        'conjunto interconectado de plataformas, aplicaciones y servicios (como Microsoft 365) que funcionan armónicamente para facilitar la gestión de información y el trabajo colaborativo.',
    },
    {
      termino: 'Firma corporativa',
      significado:
        'bloque de texto y elementos gráficos añadido automáticamente al final de un correo electrónico, diseñado para estandarizar la identidad institucional y proporcionar datos de contacto.',
    },
    {
      termino: 'Infoxicación',
      significado:
        'estado de sobrecarga cognitiva derivado de la exposición a un volumen excesivo de información, que dificulta la toma de decisiones y disminuye la productividad.',
    },
    {
      termino: 'Lista de contactos (grupo de distribución)',
      significado:
        'agrupación de múltiples direcciones de correo electrónico bajo un único alias, diseñada para optimizar el envío de mensajes a equipos o comités recurrentes.',
    },
    {
      termino: 'Metacognición',
      significado:
        'capacidad de una persona para reflexionar sobre su propio proceso de aprendizaje, autoevaluando cómo adquiere y gestiona el conocimiento.',
    },
    {
      termino: 'Netiqueta (etiqueta digital)',
      significado:
        'conjunto de normas de comportamiento y redacción formal esperadas en la comunicación electrónica y los entornos virtuales.',
    },
    {
      termino: 'Nube (<i>cloud computing</i>)',
      significado:
        'modelo de prestación de servicios informáticos (almacenamiento, <i>software</i>, procesamiento) a través de Internet, permitiendo acceso ubicuo y sincronización en tiempo real.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'elección consciente de alternativas basada en análisis, responsabilidad y objetivos organizacionales.',
    },
    {
      termino: 'Regla de automatización',
      significado:
        'instrucción lógica y condicional configurada por el usuario ("si sucede esto, haz aquello") que ejecuta acciones automáticas sobre los correos entrantes, como moverlos de carpeta o asignarles prioridad.',
    },
    {
      termino: '<i>Time-blocking</i> (bloqueo de tiempo)',
      significado:
        'metodología de gestión del tiempo que consiste en dividir la agenda diaria en bloques dedicados exclusivamente a tareas o proyectos específicos, evitando la multitarea.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad de realizar un seguimiento histórico y auditable a un proceso, tarea o comunicación a lo largo de su ciclo de vida dentro de una plataforma digital.',
    },
    {
      termino: 'UX (experiencia de usuario)',
      significado:
        'grado de satisfacción, eficiencia y ergonomía cognitiva que experimenta un usuario al interactuar con una interfaz digital o plataforma tecnológica.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cabero Almenara, J., Barroso Osuna, J., & Palacios Rodríguez, A. (2021). Competencias digitales de los docentes en la educación superior. Ediciones Octaedro.',
    },
    {
      referencia:
        'Cobo, C. (2020). Acepto las condiciones: usos y abusos de las tecnologías digitales. Fundación Santillana.',
    },
    {
      referencia:
        'García Aretio, L. (2021). COVID-19 y educación a distancia digital: preconfinamiento, confinamiento y posconfinamiento. RIED. Revista Iberoamericana de Educación a Distancia, 24(1), 9-32.',
    },
    {
      referencia:
        'Microsoft Corporation. (2023). Documentación de entrenamiento para Microsoft 365: Outlook. Microsoft Learn.',
    },
    {
      referencia:
        'Pérez Gómez, A. I. (2022). La educación en la era digital: Aprendizaje y tecnologías para el siglo XXI. Morata.',
    },
    {
      referencia:
        'Salinas, J., De Benito, B., & Pérez, A. (2020). Innovación educativa y uso de las TIC. En Tecnología educativa (pp. 53-76). Síntesis.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto TIC',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
