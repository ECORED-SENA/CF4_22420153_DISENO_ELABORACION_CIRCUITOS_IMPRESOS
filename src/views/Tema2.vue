<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Ruteado con máquinas #[em CNC]
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-up" data-aos-duration="800")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El primer avance en el campo del control numérico computarizado (CNC) fue desarrollado en la década de 1940 por el inventor estadounidense John T. Parsons junto con su empleado Frank L. Stulen. No obstante, la primera fresadora data de 1818 y fue creada por el estadounidense Eli Whitney, con el objetivo de agilizar la fabricación de fusiles en Connecticut. Desde entonces, los esfuerzos se han orientado a mejorar la productividad, precisión, velocidad y flexibilidad de las máquinas y herramientas. Este tipo de tecnología ha facilitado la mecanización de piezas complejas, especialmente en la industria aeronáutica, que serían difíciles de fabricar manualmente.
    
    .row.mt-5
      .col-lg(style="place-self:center;" data-aos="fade-right")
        p Asimismo, sistemas controlados por computadora, como el CEREC de la marca alemana Sirona, se emplean para diseñar piezas dentales en cerámica. En el desarrollo de estas herramientas se integran sistemas robóticos, como los implementados en el laboratorio de manufactura del Instituto Tecnológico de Puebla. Los sistemas CNC también se utilizan en la elaboración de circuitos impresos, creando máquinas cada vez más eficientes y con protocolos más estandarizados.
        .p-4.mt-4(style="background-color:#FFECF7;border-radius:21px;")  
          p.mb-0 Hoy en día, los productos tecnológicos que ofrecen soluciones económicas a las necesidades de la industria y del hogar han ganado gran aceptación, convirtiéndose en una alternativa para implementar sistemas de automatización, control de procesos y domótica. En la producción industrial de PCB, se emplea maquinaria especializada tanto en procesos químicos como en el ensamblaje y pruebas de las tarjetas.
      .col-lg-auto.d-none.d-lg-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/2.png")

    h5.mt-5.mb-4(data-aos="fade-right") Proceso de ruteado en máquinas CNC

    p(data-aos="fade-left") Este proceso comienza con un prototipo, generalmente realizado por máquinas CNC, que graban las pistas en la tarjeta mediante el ruteado. La máquina sigue las coordenadas cargadas en su memoria, utilizando una fresa rotatoria de alta velocidad.

    .row.mt-5
      .col-lg.pe-lg-0(data-aos="fade-right")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#D2FAF7;border-radius:17px 0px 0px 17px;")  
          p.mb-0 Las tarjetas producidas mediante ruteado se destinan principalmente a pruebas o prototipos; la producción en masa se realiza mediante procesos químicos, mientras que el ensamblaje se delega a máquinas de control numérico. Las máquinas CNC actuales han evolucionado rápidamente gracias a los avances en electrónica, mecánica y mecatrónica.
      .col-lg-auto.d-none.d-lg-block.ps-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/3.png")
    
    p.mt-5(data-aos="fade-right") Los componentes generales de los sistemas CNC son: 

    .row.mt-5
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema2/4.png")
      .col-lg(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="<em>Software</em>")
            p Incluye el diseño del PCB, la generación y lectura de archivos descriptivos, la interfaz de usuario, la visualización y la transmisión de datos al controlador mediante un dispositivo de comunicación.
          .row.col-xl-11.m-auto(titulo="Diseño del PCB y generación de archivos Gerber")
            p Utiliza programas EDA (Electronic Design Automation) para convertir el esquema en una lista de conexiones (netlist) de los pines de los componentes. Estos archivos se procesan para generar el esquema del PCB y se guardan en formato HPGL o Gerber, lo que reduce el desgaste de la herramienta al trazar solo los contornos de las líneas conductoras.
          .row.col-xl-11.m-auto(titulo="Interfaz de usuario y lectura de archivos Gerber")
            p Permiten abrir archivos Gerber, interpretar instrucciones y visualizar las características del PCB, como el tipo de interpolación, formato de coordenadas y tipo de movimiento. El programa genera un esquema preliminar en pantalla, y para iniciar el fresado, se ubica la fresa en (0, 0, 0) y se activa el motor AC.
    
    .row.mt-lg-4
      .col-lg(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="<em>Hardware</em>")
            p Consiste en dispositivos electrónicos que reciben datos del computador y controlan el movimiento de los ejes de posicionamiento y el motor de fresado.
          .row.col-xl-11.m-auto(titulo="Controlador")
            p Generalmente un microcontrolador o un PLC, el controlador recibe coordenadas desde el software y las transmite para activar el movimiento de motores y sensores en los ejes.
          .row.col-xl-11.m-auto(titulo="Dispositivos mecánicos")
            p Incluye la estructura mecánica con tres ejes de posicionamiento, motores de fresado y otros componentes necesarios para el movimiento y corte preciso.
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure 
          img(src="@/assets/curso/tema2/5.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Generación de archivos Gerber
    
    .cont_2_1
      .row
        .col-lg(data-aos="fade-right" style="place-self:center;")
          p.mb-0 Existen múltiples programas para el diseño de PCBs asistidos por computadora. Los archivos Gerber, en formato ASCII, contienen información de coordenadas y tipos de líneas, lo cual permite a los plotters reproducir el layout, capa por capa. Este formato es estándar en la industria, asegurando la claridad y precisión necesarias para la fabricación de un PCB.
        .col-lg-auto.d-none.d-lg-block(data-aos="fade-left" style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/7.png")
      
      .row.mt-5
        .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/8.png")
        .col-lg-7(data-aos="fade-left")
          p Para generar archivos Gerber, el layout del PCB debe cumplir con ciertos requisitos:
          .p-4.mb-3(style="background-color:#FFECF7;border-radius:10px;")
            p.mb-0 No debe haber texto ni figuras fuera del perímetro de la tarjeta.
          .p-4.mb-3(style="background-color:#FFECF7;border-radius:10px;")
            p.mb-0 Agregar 5 pads de referencia en ubicaciones estratégicas para facilitar el corte preciso de la tarjeta.
          .p-4(style="background-color:#FFECF7;border-radius:10px;")
            p.mb-0 Crear un archivo Gerber con solo el borde del PCB y los pads de referencia.

    p.mt-5(data-aos="fade-right") Los archivos Gerber necesarios para la fabricación incluyen serigrafía superior, máscara antisoldante, pistas de cobre, borde del PCB y soldadura en pasta.

    .cont_2_2.mt-5 
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/7.svg")
          .col.ps-2(style="place-self:end;")
            h3.mb-0.mb-lg-2.pe-4 Herramientas utilizadas en #[em CNC]
      
      .row
        .col-lg(style="place-self:center;" data-aos="fade-right")
          p Entre las herramientas comunes para el ruteado de cobre se encuentran las fresas chaflanadoras, fresas de corte y grabadores de bisel. Estas herramientas permiten líneas de corte de diferentes grosores según la aplicación.
          .d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema2/9.png")
        .col-lg-auto.d-none.d-lg-block(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/10.png")
      
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/7.svg")
          .col.ps-2(style="place-self:end;")
            h3.mb-0.mb-lg-2.pe-4 Proceso químico para el ataque del cobre
      
      .row
        .col-lg(style="place-self:center;" data-aos="fade-right")
          p Después de realizar el arte del circuito en la placa de cobre, se utiliza cloruro férrico (FeCl₃) para atacar el cobre expuesto y conservar únicamente las pistas. Este proceso se realiza en una solución de cloruro férrico, y es fundamental mantener la placa en constante movimiento dentro de la solución para asegurar un ataque uniforme.
          p.mb-0 El cloruro férrico, disuelto en agua, libera calor y reacciona con el cobre, formando cloruros de hierro y cobre. Es importante que la placa se lave adecuadamente tras el proceso para eliminar restos de cobre y evitar cortocircuitos.
        .col-lg-auto.d-none.d-lg-block(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/11.png")
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Figura 1. 
      span Componentes generales del atacado de cobre por medios químicos 
    figure(data-aos="zoom-in-up")
      img(src="@/assets/curso/tema2/12.svg" alt="La imagen presenta una estación de revelado químico utilizada en la serigrafía y otros procesos de grabado. Se observan tres elementos a la izquierda: un frasco de cloruro de hierro (FeCl₃), un recipiente con agua (H₂O) y una tarjeta de circuito. Estos componentes se agregan al contenedor de revelado, activado mediante el botón de encendido, para disolver el material no deseado y así grabar el diseño en la tarjeta. ")

    h5.mt-5.mb-4(data-aos="fade-right") Precauciones para el manejo de ácidos

    p(data-aos="fade-left") Para trabajar con sustancias químicas, como el cloruro férrico, se deben tomar las siguientes precauciones:

    .cont_2_3.mt-5
      .col-xl-8.m-auto.col-lg-11
        .p-2.pe-md-4.mb-3(style="background-color:#E9F7EF;border-radius:21px;box-shadow:0px 3px 4px rgba(0,0,0,.07);" data-aos="zoom-in" data-aos-duration="600")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/14.svg")
            .col(style="place-self:center;")
              p.mb-0 Usar equipo de protección adecuado: bata, delantal plástico, gafas y guantes.
        .p-2.pe-md-4.mb-3(style="background-color:#E9F7EF;border-radius:21px;box-shadow:0px 3px 4px rgba(0,0,0,.07);" data-aos="zoom-in" data-aos-duration="600")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/15.svg")
            .col(style="place-self:center;")
              p.mb-0 Evitar el contacto con la piel y ojos, ya que estas soluciones son corrosivas.
        .p-2.pe-md-4.mb-3(style="background-color:#E9F7EF;border-radius:21px;box-shadow:0px 3px 4px rgba(0,0,0,.07);" data-aos="zoom-in" data-aos-duration="600")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/16.svg")
            .col(style="place-self:center;")
              p.mb-0 Disolver el cloruro férrico en agua y no al revés, para prevenir salpicaduras.
        .p-2.pe-md-4(style="background-color:#E9F7EF;border-radius:21px;box-shadow:0px 3px 4px rgba(0,0,0,.07);" data-aos="zoom-in" data-aos-duration="600")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/17.svg")
            .col(style="place-self:center;")
              p.mb-0 Maximizar la reutilización de la solución y desechar los residuos en lugares seguros para evitar contaminación



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
