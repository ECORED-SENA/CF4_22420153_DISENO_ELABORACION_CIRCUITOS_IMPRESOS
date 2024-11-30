<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cont_intro
      p.p-relative(data-aos="fade-up") La fabricación de circuitos impresos es un proceso clave en el desarrollo de dispositivos electrónicos, ya que permite integrar y conectar componentes eléctricos de manera eficiente. Para crear un circuito funcional, se debe realizar un diseño que luego se transfiere a una placa de cobre, marcando las áreas que formarán las pistas de conexión.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/intro2.png')})`}"
        )
        .bloque-texto-g__texto.p-4.p-xl-5
          p.mb-0 Posteriormente, se perfora la tarjeta para insertar los pines de los componentes, asegurando que estos queden bien sujetos y alineados con el diseño. La perforación puede hacerse de manera manual, con herramientas como motortools, o industrialmente mediante máquinas CNC, que siguen archivos digitales específicos para asegurar precisión en cada perforación.
      
      .row.mt-5.p-relative(data-aos="fade-up")
        .col-md-auto.d-none.d-md-block(style="place-self:center;")
          figure
            img(src="@/assets/curso/intro3.svg")
        .col-md(style="place-self:center;")
          p.mb-0 Finalmente, se ensambla el circuito uniendo los componentes mediante soldadura, asegurando un buen contacto eléctrico y mecánico. Durante el proceso, se toman medidas de seguridad, como el uso de gafas y guantes, y se verifica el funcionamiento del circuito a través de pruebas. Este enfoque garantiza un ensamblaje duradero y funcional.


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
