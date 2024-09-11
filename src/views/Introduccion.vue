<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span.text-dark
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade").mb-4 En el siguiente video se da introducción a los temas que se trabajarán en este componente formativo:  
    
    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/sEvCg4Bw2WU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Pre y Postest de campaña
    
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
