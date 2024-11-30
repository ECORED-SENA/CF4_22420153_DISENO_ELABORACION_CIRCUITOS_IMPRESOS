<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-down" data-aos-duration="600")  A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 

    .row.justify-content-center.p-4(style="background-color:#F6F6F6;border-radius:20px;")
      .col-lg-10.mb-5
        figure(data-aos="zoom-in-up" data-aos-duration="750")
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis  presenta el proceso de fabricación y ensamblaje de circuitos impresos, dividiéndose en cuatro secciones principales: perforación de tarjeta, secuencia de ensamblaje, medidas de seguridad y fase de pruebas. La perforación se puede realizar de manera manual o industrial, utilizando archivos específicos y herramientas precisas. La secuencia de ensamblaje indica el orden recomendado para los componentes, sugiriendo iniciar con los más pequeños. Las medidas de seguridad incluyen equipos como gafas y guantes, además de la prevención contra humos. Finalmente, la fase de pruebas asegura la funcionalidad de los componentes ensamblados. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
