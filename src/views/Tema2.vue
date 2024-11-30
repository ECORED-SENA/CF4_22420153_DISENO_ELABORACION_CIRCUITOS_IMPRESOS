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
