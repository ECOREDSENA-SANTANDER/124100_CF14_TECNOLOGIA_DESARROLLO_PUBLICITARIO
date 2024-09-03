export default {
  global: {
    componenteFormativo: 'Pre y postest de campaña',
    descripcionCurso:
      'En este componente formativo se abordarán las estrategias del pretest y el postest, las cuales hacen parte del control que se realiza a la campaña publicitaria, de acuerdo con el proceso de la comunicación. Este control se lleva a cabo sobre el mensaje, la planeación de las estrategias y los resultados de la campaña',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Medición de la campaña',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué se requiere para medir la campaña?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Pretest y postest',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'ROI',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '¿Qué es el ROI?',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'indicadores KPI',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Cálculo del ROI',
            hash: 't_2_3',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
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
      link: '',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '',
    },
  ],
  glosario: [
    {
      termino: 'Audiencia',
      significado:
        'número de personas expuestas a un medio o a un soporte de comunicación',
    },
    {
      termino: 'Centrales de medios',
      significado:
        'compañías que compran grandes volúmenes de espacio publicitario a los medios de comunicación y luego los venden a las agencias y anunciantes.',
    },
    {
      termino: 'Investigación postest',
      significado:
        'investigación que se realiza desde el momento de la emisión a la finalización de la misma, al objeto de cuantificar el nivel de consecución de los objetivos publicitarios.',
    },
    {
      termino: 'Investigación pretest',
      significado:
        'investigación realizada con anterioridad a la emisión del anuncio y que pretende evaluar la capacidad que tiene la comunicación para alcanzar los objetivos de la campaña',
    },
    {
      termino: 'Pupilometría',
      significado:
        'estudio que se tiene sobre los efectos que se producen en la pupila frente a determinados estímulos visuales.',
    },
    {
      termino: '<em>Target</em>',
      significado: 'público objetivo de una campaña publicitaria.',
    },
    {
      termino: '<em>Top of Mind</em>',
      significado:
        'primera marca o referencia citada por un consumidor cuando se le pide que indique las marcas que hay en el mercado',
    },
  ],
  referencias: [
    {
      referencia:
        'Alard, J., y Monford, A. (2017). Plan de comunicación on y off en la práctica. ESIC Editorial.',
    },
    {
      referencia:
        'Ávila, B., y Llamazares, R. F. (2018). Medición de audiencias. TOM micro. Utilidades en la elaboración de un plan de medios. ESIC Editorial.',
    },
    {
      referencia:
        'Dos Santos, M. A. (2017). Investigación de mercados. Ediciones Díaz de Santos.',
    },
    {
      referencia: 'Neuromarketing. (2020). Test fisiológicos',
      link: 'https://neuromarketing.la/',
    },
    {
      referencia:
        'Rodríguez, I., Suárez, V. A. y García, M. M. (2008). Dirección publicitaria. Editorial UOC.',
    },
    {
      referencia:
        'Soria, M., M. (2015). Plan de medios de comunicación e internet. Editorial CEP.',
    },
    {
      referencia:
        'Turletti, P. (2018). El ROI de marketing y ventas. ESIC Editorial.',
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
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluador Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrea Paola Botello De la rosa',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
