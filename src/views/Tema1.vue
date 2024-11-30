<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Métodos de fabricación de circuitos impresos

    .row
      .col-lg(style="place-self:center;" data-aos="fade-right")
        p.mb-0 El proceso de diseño y desarrollo de circuitos llega a la etapa en la que el diseño elaborado en el software debe transferirse a la placa de cobre (bakelita) para su posterior fijación y ensamblaje de componentes. Existen distintos métodos para realizar esta transferencia, cada uno con características técnicas y formas de aplicación que dependen de las tecnologías disponibles. Los métodos incluyen:
      .col-lg-auto.d-none.d-lg-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/1.png")
    
    Separador

    .cont_1_1
    
      .titulo-segundo(data-aos="flip-up")
        h2#t_1_1 1.1 Métodos convencionales
      
      p(data-aos="fade-right") Los métodos convencionales se utilizan manualmente para la producción de circuitos a pequeña escala y suelen ser prácticos para la realización de prototipos y ejemplos. A continuación, se describen algunos de estos métodos:

      .col-xl-10.mt-5.m-auto
        .row.justify-content-center
          .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in" data-aos-duration="700")
            .cont_1_2.h-100
              figure
                img(src="@/assets/curso/tema1/2.png")
              .__secondary.p-4.ps-xl-5.pe-xl-5
                h5 Utilización de marcador de tinta indeleble
                p Este método consiste en dibujar el circuito en una placa de cobre usando un marcador indeleble, basado en un esquema previo. Primero, se coloca el diseño impreso sobre la placa y, con un alfiler o puntilla, se marcan los puntos de los componentes. Luego, se dibujan las pistas del circuito en la cara de cobre, completando el diseño con el marcador. Este método es completamente manual y permite realizar circuitos de complejidad media a bajo costo, siendo ideal para principiantes y aficionados a la electrónica.
          .col-lg.col-md-9(data-aos="zoom-in" data-aos-duration="700")
            .cont_1_2.h-100
              figure
                img(src="@/assets/curso/tema1/3.png")
              .__secondary.p-4.ps-xl-5.pe-xl-5
                h5 Impresión láser y transferencia por plancha
                p El papel termo transferible facilita la creación de circuitos impresos. Permite transferir el diseño a una placa de cobre virgen de forma rápida, económica y sencilla. Una vez el diseño se transfiere con una plancha a temperatura máxima durante unos 10 minutos, se sumerge en una solución de cloruro férrico para grabar el circuito. Se recomienda usar papel termo transferible de la marca PCBMAKER o papeles gruesos para dibujo. Después de planchar, se deja enfriar y se sumerge la placa en agua fría durante 5 minutos para humedecer el papel y revelar el diseño.
        
        .p-4.mt-5(style="background-color:#2D496C;border-radius:11px;" data-aos="fade-up")
          .row
            .col-md-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema1/4.svg")
            .col-md(style="place-self:center;")
              p.mb-0.text-white #[strong(style="color:#F0CF2B;") Nota.] La temperatura puede variar según la marca del papel. En caso de usar papeles de dibujo no termo transferibles, la plancha debe estar a su máxima potencia.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 Métodos industriales

    .cont_1_1
      .row
        .col-lg(style="place-self:center;" data-aos="fade-right")
          p Estos métodos permiten la producción a gran escala de circuitos impresos con alta precisión y calidad. Son ideales para proyectos industriales o de mayor envergadura. Entre los métodos más utilizados están:
          .d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema1/5.png")
        .col-lg-auto.d-none.d-lg-block(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/6.png")

      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/7.svg")
          .col.ps-2(style="place-self:end;")
            h3.mb-0.mb-lg-2.pe-4 Serigrafía
      
      p(data-aos="fade-left") La serigrafía es una técnica antigua que permite transferir tinta a través de una malla de seda en un marco de madera. En la fabricación de circuitos impresos, esta técnica facilita la reproducción en serie del mismo diseño sin perder calidad, ideal para prototipos y aplicaciones industriales. El proceso de serigrafía en circuitos impresos es:
    
    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Preparación del bastidor" :icono="require('@/assets/curso/tema1/8.svg')")
        .row.p-4.col-xl-11.m-auto
          .col-md.mb-4.mb-md-0(style="place-self:center;")
            h5 Preparación del bastidor
            p El bastidor es un marco de madera sobre el que se fija una malla de seda de entre 90 y 120 puntos. Debe estar limpio y seco antes de aplicar la emulsión fotosensible.
          .col-md-auto.col-10.m-auto
            figure
              img(src='@/assets/curso/tema1/9.svg' alt='La imagen presenta un bástidor, una estructura utilizada en procesos de impresión o serigrafía para sostener la malla o pantalla ')
      .py-4.py-md-5(titulo="Aplicación de la emulsión" :icono="require('@/assets/curso/tema1/10.svg')")
        .row.p-4.col-xl-11.m-auto
          .col-md.mb-4.mb-md-0(style="place-self:center;")
            h5 Aplicación de la emulsión
            p En un cuarto oscuro, se mezcla la emulsión fotosensible con bicromato o revelador (según especificaciones del proveedor) en una proporción de 9:1. La emulsión se aplica sobre la seda de forma uniforme. Una vez seca, se coloca el diseño en acetato sobre la seda y se fija con cinta adhesiva, asegurándose de que el diseño esté en la orientación correcta.
          .col-md-auto.col-10.m-auto
            figure
              img(src='@/assets/curso/tema1/11.svg' alt='La imagen presenta un frasco de emulsión fotográfica, sustancia utilizada en serigrafía para cubrir el bástidor y crear áreas sensibles a la luz. ')
      .py-4.py-md-5(titulo="Revelado" :icono="require('@/assets/curso/tema1/12.svg')")
        .row.p-4.col-xl-11.m-auto
          .col-md.mb-4.mb-md-0(style="place-self:center;")
            h5 Revelado
            p Se coloca una espuma negra y un vidrio sobre el bastidor, y se expone a una luz ultravioleta durante unos 13 minutos. Tras la exposición, se enjuaga la seda con agua a presión para revelar el diseño del circuito en las áreas donde no penetró la luz. Luego, se seca con un secador y queda lista para imprimir múltiples circuitos.
          .col-md-auto.col-10.m-auto
            figure
              img(src='@/assets/curso/tema1/13.svg' alt='La imagen presenta un bástidor, una estructura utilizada en procesos de impresión o serigrafía para sostener la malla o pantalla ')

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_3 1.3 Impresión de circuitos fotosensibilizados y placas fotosensibles
    
    p(data-aos="fade-right") Para finalizar el proceso y obtener el circuito impreso en la placa, se sigue el siguiente procedimiento:

    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Grabado en cloruro férrico" :icono="require('@/assets/curso/tema1/14.svg')")
        .row.p-4.col-xl-11.m-auto
          .col-md.mb-4.mb-md-0(style="place-self:center;")
            h5 Grabado en cloruro férrico
            p En un recipiente de plástico, se coloca una solución de cloruro férrico y se sumerge la placa con el diseño, donde el cloruro férrico disolverá el cobre no protegido por el diseño. Este proceso dura entre 15 y 30 minutos, y se recomienda agitar el recipiente para obtener un grabado uniforme.
          .col-md-auto.col-10.m-auto
            figure
              img(src='@/assets/curso/tema1/15.svg' alt='')
      .py-4.py-md-5(titulo="Limpieza de la placa" :icono="require('@/assets/curso/tema1/16.svg')")
        .row.p-4.col-xl-11.m-auto
          .col-md.mb-4.mb-md-0(style="place-self:center;")
            h5 Limpieza de la placa
            p Tras el grabado, se enjuaga la placa con agua y se limpia con disolvente o acetona para retirar el barniz, revelando las pistas de cobre.
          .col-md-auto.col-10.m-auto
            figure
              img(src='@/assets/curso/tema1/17.svg' alt='')
      .py-4.py-md-5(titulo="Perforación de la placa" :icono="require('@/assets/curso/tema1/18.svg')")
        .row.p-4.col-xl-11.m-auto
          .col-md.mb-4.mb-md-0(style="place-self:center;")
            h5 Perforación de la placa
            p Con un taladro de precisión, se perforan los puntos donde se insertarán los componentes electrónicos, usando brocas adecuadas al tamaño de los pines.
          .col-md-auto.col-10.m-auto
            figure
              img(src='@/assets/curso/tema1/19.svg' alt='')
      .py-4.py-md-5(titulo="Impresión y acabado final" :icono="require('@/assets/curso/tema1/20.svg')")
        .row.p-4.col-xl-11.m-auto
          .col-md.mb-4.mb-md-0(style="place-self:center;")
            h5 Impresión y acabado final
            p Para proteger el circuito, se aplica una capa de laca que previene la oxidación de las pistas de cobre, aumentando la durabilidad del circuito.
          .col-md-auto.col-10.m-auto
            figure
              img(src='@/assets/curso/tema1/21.svg' alt='')
    
    p.mt-5(data-aos="fade-right") La fotosensibilización de placas de cobre se realiza: 

    .row.mt-5
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema1/22.png")
      .col-lg(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Preparación y aplicación del barniz fotosensible")
            p Se aplica barniz fotosensible bajo luz roja a unos 20 cm de distancia hasta cubrir uniformemente la placa. Luego, se seca con aire caliente y se deja reposar en la oscuridad por un día antes de guardarla en una bolsa opaca.
          .row.col-xl-11.m-auto(titulo="Positivado")
            p Bajo luz roja, se coloca el fotolito sobre la placa y se expone a luz fluorescente o solar durante el tiempo adecuado para transferir el diseño.
          .row.col-xl-11.m-auto(titulo="Revelado con sosa cáustica")
            p Para revelar, se utiliza una solución de sosa cáustica y agua. La placa se sumerge y se mueve para distribuir la solución uniformemente, revelando el diseño del circuito. Si el diseño no aparece, se ajusta la cantidad de revelador en incrementos de 10 gotas hasta obtener una imagen clara.
    
    .cont_1_3.mt-5
      .row
        .col-lg(style="place-self:center;" data-aos="fade-right")
          p Una vez revelada y enjuagada, la placa puede retocarse con marcador para corregir imperfecciones y dejarla lista para el montaje de componentes electrónicos en el circuito.
          .d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema1/24.png")
        .col-lg-auto.col-md-7.col-12.m-auto(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/25.svg")
          
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
