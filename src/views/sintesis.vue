<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Para realizar un control efectivo de una campaña publicitaria se deben utilizar las estrategias de pretest y postest específicamente sobre el mensaje, la planeación de estrategias y los resultados de la campaña. En el siguiente cuadro se presentan los diferentes temas y conceptos trabajados alrededor de este tema: 

    .row.justify-content-center
      .col-lg-10.mb-5
        .row.justify-content-center
          .col-lg-10
            figure
              img(src="@/assets/curso/temas/sintesis.svg", alt="En el diagrama se mencionan las características más importantes para realizar el pretest y el postest: medición de la campaña publicitaria y las explicaciones de ROI.")
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
