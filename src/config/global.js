export default {
  global: {
    componenteFormativo: 'Fabricación del <em>Board<em>',
    descripcionCurso:
      'La fabricación de circuitos impresos incluye perforación, ensamblaje y pruebas. Se utilizan métodos manuales (motortool) e industriales (CNC) con archivos Excellon y Gerber. La secuencia de montaje empieza con componentes pequeños y sigue un orden preciso. Se requieren equipos de protección durante la soldadura y corte de pines. Finalmente, se realizan pruebas para asegurar el funcionamiento del circuito.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Métodos de fabricación de circuitos impresos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Métodos convencionales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Métodos industriales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Impresión de circuitos fotosensibilizados y placas fotosensibles',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ruteado con máquinas CNC',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          '3.	Aplicación de antisolder mediante serigrafía (<em>Screen</em>)',
        desarrolloContenidos: true,
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
      tema: 'Métodos de fabricación de circuitos impresos',
      referencia:
        'Ideatronic (2017). Circuito impreso con el METODO DEL PLANCHADO/Ideatroni. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MX9_9U6Wnu8 ',
    },
    {
      tema: 'Impresión de circuitos fotosensibilizados y placas fotosensibles',
      referencia:
        'Ideatronic (2016). Como hacer circuitos impresos CASEROS/Ideatronic. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hlGfd4A6BAU ',
    },
    {
      tema: 'Ruteado con máquinas CNC',
      referencia:
        'GADGETBRO MX (2016). Fabricación de tarjeta electrónica (PCB) con la CNC router 3018Pro [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=swtIq31ooGE ',
    },
    {
      tema: 'Aplicación de antisolder mediante serigrafía (<em>Screen</em>)',
      referencia:
        'JF AUTOMECÁNICA- (2021).COMO APLICAR MASCARA ANTISOLDER UV EN PCB, METODO CASERO.  [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=A7CDXzJBVSo&ab_channel=JFAUTOMEC%C3%81NICA',
    },
  ],
  glosario: [
    {
      termino: 'Circuito impreso',
      significado:
        'placa que permite conectar componentes electrónicos mediante pistas de cobre.',
    },
    {
      termino: 'Perforación',
      significado:
        'proceso de crear agujeros en el circuito impreso para insertar componentes electrónicos.',
    },
    {
      termino: 'CNC',
      significado:
        'máquina de control numérico utilizada para realizar perforaciones precisas en la fabricación de circuitos.',
    },
    {
      termino: '<em>Motortool</em>',
      significado:
        'herramienta manual de alta velocidad utilizada en la perforación de placas de circuito impreso.',
    },
    {
      termino: '<em>Excellon</em>',
      significado:
        'archivo digital que contiene instrucciones específicas para las perforaciones en máquinas CNC.',
    },
    {
      termino: 'Gerber',
      significado:
        'archivo que define el diseño y disposición de las pistas en un circuito impreso.',
    },
    {
      termino: 'Soldadura',
      significado:
        'proceso de unión de componentes en el circuito mediante un metal fundido que asegura el contacto eléctrico y mecánico.',
    },
    {
      termino: 'Puente THT',
      significado:
        'componente que conecta dos lados de una placa de circuito, generalmente en forma de tubo conductor para evitar oxidación.',
    },
    {
      termino: 'Base para integrados',
      significado:
        'soporte donde se insertan los circuitos integrados, permitiendo un reemplazo fácil sin necesidad de soldadura adicional.',
    },
    {
      termino: '<em>Solder mask</em>',
      significado:
        'capa protectora aplicada sobre las pistas del circuito impreso para evitar cortocircuitos y proteger contra la oxidación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bosch, G. (2019). Manufactura de circuitos impresos: Procesos de perforación y ensamblaje. Editorial Electrónica Moderna.',
      link: '',
    },
    {
      referencia:
        'Graham, S., & Parker, L. (2020). Introduction to PCB design and fabrication. PCB Books.',
      link: '',
    },
    {
      referencia:
        'Hall, D. R. (2018). CNC machining and PCB fabrication. Springer.',
      link: '',
    },
    {
      referencia:
        'Jansen, M., & Lee, T. (2021). The complete guide to circuit board assembly. Tech Press.',
      link: '',
    },
    {
      referencia:
        'Johnson, M. (2017). Electronics assembly and soldering techniques. McGraw-Hill Education.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Experto temático ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Francisco Arnaldo Vargas Bermúdez',
          cargo: 'Experto temático ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
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
