export default {
  global: {
    componenteFormativo: 'Pre y Postest de Campaña',
    descripcionCurso:
      'El pretest y el postest hacen parte del control que se realiza a la campaña publicitaria, de acuerdo con el proceso de la comunicación. Este control se lleva a cabo sobre el mensaje, la planeación de las estrategias y los resultados de la campaña.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',

        numero: '1',
        titulo: 'Desarrollo creativo de las piezas gráficas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estructura del anuncio publicitario',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estilos en los anuncios publicitarios',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',

        numero: '2',
        titulo: 'Uso del color en los anuncios publicitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Orígenes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Bases de la teoría del color',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Teoría del color de Eva Heller',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Significado de los colores',
            hash: 't_2_4',
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
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Boceto',
      significado:
        'Esquema o proyecto que contiene solamente los rasgos principales de una obra artística o técnica (lexico.com, 2021).',
    },
    {
      termino: 'Diseño',
      significado:
        'Actividad creativa que tiene por fin proyectar objetos que sean útiles y estéticos (lexico.com, 2021).',
    },
    {
      termino: 'Mensaje publicitario',
      significado:
        'Es una forma de comunicación a través de la cual se pretende dar a conocer un producto, su elemento principal es el mensaje publicitario. Dentro del texto del anuncio es habitual utilizar determinadas frases que pueden resumir o facilitar que el mensaje y su contenido sean recordados.',
    },
    {
      termino: 'Mercado meta',
      significado:
        'Conjunto de miembros del mercado que tienen como característica principal el tener necesidades, gustos y conductas aptas para adquirir un producto o servicio.',
    },
    {
      termino: 'Publicidad',
      significado:
        'Difusión o divulgación de información, ideas u opiniones de carácter político, religioso, comercial, etc., con la intención de que alguien actúe de una determinada manera, piense según unas ideas o adquiera un determinado producto (lexico.com, 2021).',
    },
    {
      termino: 'Tipografía',
      significado:
        'Se le denomina a la tarea, oficio e industria que se ocupa de la elección y el uso de tipos (letras diseñadas con unidad de estilo) para los textos en piezas gráficas..',
    },
  ],
  referencias: [
    {
      referencia: 'Definición.de. (2021). Boceto.',
      link:
        'https://definicion.de/boceto/#:~:text=Derivado%20del%20t%C3%A9rmino%20italiano%20bozzetto,de%20bosquejo%20para%20cualquier%20obra.&text=Por%20lo%20general%2C%20un%20boceto,los%20casos%2C%20no%20posee%20terminaciones',
    },
    {
      referencia:
        'Desarrollo web. (2014). Propiedades de los colores. desarrolloweb.com.',
      link:
        'https://desarrolloweb.com/articulos/1503.php#:~:text=Matiz%20(Hue),mezcla%20de%20las%20ondas%20luminosas',
    },
    {
      referencia:
        'Estudio Mique. (2020). ¿Qué es la composición en diseño gráfico? mique.es',
      link: 'https://www.mique.es/que-es-composicion-diseno-grafico/',
    },
    {
      referencia: 'FotoNostra. (2020). La escala. fotonostra.com.',
      link: 'https://www.fotonostra.com/grafico/escala.htm',
    },
    {
      referencia:
        'Goodwill Community Foundation. (2021). ¿Qué es tipografía y cómo elegir un tipo de letra? GCFGlobal.',
      link:
        'https://edu.gcfglobal.org/es/conceptos-basicos-de-diseno-grafico/que-es-tipografia-y-como-elegir-un-tipo-de-letra/1/ ',
    },
    {
      referencia:
        'Guijarro, J. M. (2002). Técnico en Publicidad. Vol. 1 y 2. Editorial Cultural S.A.',
    },
    {
      referencia: 'Lexico.com. (2021). Diccionario Oxford.',
      link: 'https://www.lexico.com/',
    },
    {
      referencia:
        'Marketing capacitación. (2017). ¿Qué es redacción publicitaria? marketingcapacitacion.com.',
      link:
        'https://www.Marketingcapacitacion.com/que-es-redaccion-publicitaria/',
    },
    {
      referencia:
        'Martínez, D., Munguía, M. y García, S. (2019). Elementype. Una guía práctica del uso tipográfico. Ediciones del Lirio.',
    },
    {
      referencia:
        'Morales, A. (2016, Febrero 24). La importancia de la tipografía en el diseño gráfico. [Web log post]. andresmorales.es',
      link:
        'https://andresmorales.es/blog/importancia-tipografia-diseno-grafico/',
    },
    {
      referencia:
        'Pato Giacomino. (2014). Leyes de composición visual o “cómo hacer dibujitos”. patogiacomino.com.',
      link:
        'https://patogiacomino.com/2013/12/07/leyes-de-composicion-visual-o-como-hacer-dibujitos/',
    },
    {
      referencia: 'Pix, A. C. (2013). El espacio en el mensaje publicitario.',
      link: 'https://es.slideshare.net/andreacherrypix/layout-26712653',
    },
    {
      referencia:
        'Pixel creativo. (2014). Técnicas creativas para realizar publicidad. [Web log post].',
      link:
        'http://pixel-creativo.blogspot.com/2011/04/tecnicas-creativas-para-realizar.html',
    },
    {
      referencia:
        'Rodríguez, C. (2020). Qué es la proporción áurea y su importancia en el diseño. Market In House.',
      link: 'https://www.marketinhouse.es/que-es-la-proporcion-aurea/',
    },
    {
      referencia: 'Significados. (2020). Qué es layout.',
      link:
        'https://www.significados.com/layout/#:~:text=La%20palabra%20Layout%20sirve%20para,disposi%C3%B3n%2C%20plan%20o%20dise%C3%B1o%22',
    },
    {
      referencia: 'UNAYTA. (2018). Teoría del color: guía básica del color.',
      link:
        'https://unayta.es/teoria-del-color/#:~:text=Seg%C3%BAn%20la%20Real%20Academia%20de,Es%20una%20percepci%C3%B3n',
    },
    {
      referencia:
        'Viviendo la salud. (2020). Significado de los colores: la psicología del color de Eva Heller. viviendolasalud.com',
      link:
        'https://viviendolasalud.com/psicologia/significado-de-los-colores-psicologia-del-color#:~:text=Eva%20Heller%20fue%20una%20soci%C3%B3loga,%E2%80%9CLa%20Psicolog%C3%ADa%20del%20Color%E2%80%9D',
    },
    {
      referencia:
        'Weber, M. (2007). The layout look book. Guía visual de diseño y maquetación. Instituto Monsa de Ediciones.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Metodológico y Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Manuel Augusto Arias López',
          cargo: 'Instructor - Experto Temático',
          centro: 'Regional Quindío - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Vilma Perilla Méndez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Andrea Velásquez Torres',
          cargo: 'Apoyo Experto Temático',
          centro: 'Regional Quindío - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y Evaluadora Instruccional',
          centro:
            'Regional Distrito Capitalo - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Carolina Jiménez Suescun',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora Full-Stack',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para Contenidos Inclusivos y Accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
