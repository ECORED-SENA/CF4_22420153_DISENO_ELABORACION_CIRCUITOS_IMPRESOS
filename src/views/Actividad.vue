<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Fabricación y ensamble de circuitos impresos',
      titulo: 'Cuestionario',
      introduccion:
        'Aplicar los procesos de perforación, ensamblaje y pruebas en la fabricación de circuitos impresos, asegurando precisión y funcionalidad en el montaje de componentes electrónicos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la herramienta más comúnmente utilizada para perforar manualmente una tarjeta de circuito impreso?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Taladro de banco.', esCorrecta: false },
            { id: 'b', texto: 'Motortool.', esCorrecta: true },
            { id: 'c', texto: 'Broca de mano.', esCorrecta: false },
            { id: 'd', texto: 'Sierra de banco.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la herramienta más comúnmente utilizada para perforar manualmente una tarjeta de circuito impreso?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'DXF.', esCorrecta: false },
            { id: 'b', texto: 'STL.', esCorrecta: false },
            { id: 'c', texto: 'Excellon.', esCorrecta: true },
            { id: 'd', texto: 'PDF.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué componente debe montarse primero en la secuencia de ensamblaje?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Puentes.', esCorrecta: true },
            { id: 'b', texto: 'Resistores.', esCorrecta: false },
            { id: 'c', texto: 'Transistores.', esCorrecta: false },
            { id: 'd', texto: 'Condensadores.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el material común para las brocas utilizadas en la perforación de circuitos impresos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Acero inoxidable.', esCorrecta: false },
            { id: 'b', texto: 'Carburo de micrograno.', esCorrecta: true },
            { id: 'c', texto: 'Aluminio.', esCorrecta: false },
            { id: 'd', texto: 'Plástico.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Para qué sirven los archivos Gerber en la fabricación de circuitos impresos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Para perforar la tarjeta.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Para ensamblar los componentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para definir el diseño de las pistas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para conectar los componentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué equipo de protección es esencial al soldar componentes?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Gafas y guantes.', esCorrecta: true },
            { id: 'b', texto: 'Mascarilla y guantes.', esCorrecta: false },
            { id: 'c', texto: 'Tapones para los oídos.', esCorrecta: false },
            { id: 'd', texto: 'Botas de seguridad.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la función de los puentes THT en un circuito impreso?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Para aislar componentes.', esCorrecta: false },
            { id: 'b', texto: 'Para almacenar energía.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Para conectar diferentes caras de la placa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para eliminar residuos de soldadura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el propósito principal de realizar la fase de pruebas en una tarjeta de circuito impreso?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verificar el funcionamiento del circuito.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir el costo de fabricación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar la durabilidad del circuito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejora estética de la tarjeta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Las bases para integrados permiten reemplazar chips sin necesidad de soldadura adicional.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
            { id: 'c', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Los diodos deben instalarse observando su polaridad para evitar daños internos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero.', esCorrecta: true },
            { id: 'b', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El montaje de los resistores debe hacerse primero debido a su tamaño pequeño.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
            { id: 'c', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Las brocas de carburo de micrograno son ideales para perforaciones precisas en circuitos impresos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'c', texto: 'Verdadero.', esCorrecta: true },
            { id: 'd', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Los conectores deben instalarse antes de los componentes pequeños.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
            { id: 'c', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El proceso de perforación CNC se guía mediante archivos Excellon.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
            { id: 'a', texto: 'Falso.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las pruebas en una tarjeta de circuito se realizan después del ensamblaje completo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
            { id: 'a', texto: 'Falso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
