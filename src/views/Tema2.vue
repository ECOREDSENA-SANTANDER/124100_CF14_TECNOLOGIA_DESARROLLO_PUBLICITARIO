<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 ROI
    
    .row.justify-content-center.mb-5
      .col-lg-3.col-md-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/imag1.svg', alt='')
      .col-lg-9(data-aos="fade-left")
        p Como se ha expresado anteriormente, para las empresas es un factor de alta relevancia el análisis económico de una campaña cuando para ella se han realizado inversiones importantes de dinero con el ánimo de mejorar aspectos relacionados con las ventas y las utilidades. Actualmente, existen diferentes tipos de sistemas de medición sobre todo en medios digitales que permiten la evaluación de resultados de forma muy detallada y específica, a través de la formulación de indicadores clave o KPI que permiten conocer en una forma muy profunda datos cuantitativos de una campaña y determinar, con un nivel superior de confiabilidad, la efectividad que está teniendo una campaña en determinado momento.
    
    Separador
    #t_2_1.titulo-segundo.color-secundario(data-aos="fade-right")
      h2 2.1 ¿Qué es el ROI?
    
    p.mb-4 #[b Return On Investment] (ROI) es un sistema de medición que permite determinar el valor generado; es decir, el retorno frente a un gasto generado, es decir, la inversión. El ROI se puede implementar en cualquier tipo de inversión; sin embargo, puede resultar de mayor utilidad en aquellas que son de respuesta rápida o a corto plazo, de ahí que sea en la actualidad un indicador de primer orden en el desarrollo estratégico de marketing  y campañas publicitarias.
    
    h4 ¿Para qué se puede utilizar el ROI?

    p.mb-4 El marketing y la publicidad no son ciencias exactas, por el contrario, son disciplinas que presentan múltiples variaciones, lo que hace al ROI tener un papel preponderante para determinar cuan efectivas han sido las estrategias implementadas por una empresa. Un grupo de creativos publicitarios puede generar una estrategia muy efectiva con un presupuesto limitado o tener un presupuesto de millones y generar estrategias con la misma efectividad. Eso hace al ROI que sea un indicador de gestión de actividades comerciales indispensable para mejorar ciertos aspectos de las empresas, como son:
    
    .row.mb-4
      .col-lg-3
        img(src='@/assets/curso/temas/t2/imag2.svg', alt='')
        p #[b Planificación de marketing y estrategias de ventas.]
      .col-lg-3
        img(src='@/assets/curso/temas/t2/imag3.svg', alt='')
        p #[b Evaluación de resultados de marketing y publicidad.]
      .col-lg-3
        img(src='@/assets/curso/temas/t2/imag4.svg', alt='')
        p #[b Analizar el impacto de las campañas.]
      .col-lg-3
        img(src='@/assets/curso/temas/t2/imag5.svg', alt='')
        p #[b Realizar inteligencia de negocios.]
    
    h4 ¿Qué implica la implementación del ROI?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Mejorar la planificación de las estrategias de marketing.
          li 
            i.lista-ul__vineta
            | Facilitar la toma de decisiones.
          li 
            i.lista-ul__vineta
            | Posibilidad de mejorar los resultados de las estrategias.
          li 
            i.lista-ul__vineta
            | Capacidad para determinar los presupuestos para planes de marketing y campañas publicitarias.
          li 
            i.lista-ul__vineta
            | Integrar el marketing con ventas y publicidad.
      .col-lg-6
        img(src='@/assets/curso/temas/t2/imag6.svg', alt='')
    
    Separador
    #t_2_2.titulo-segundo.color-secundario(data-aos="fade-right")
      h2 2.2 Indicadores KPI
    
    p.mb-4 En la siguiente tabla se presentan esta clase de indicadores relacionados con su tipo y variables.

    .titulo-sexto.color-secundario
      h5 Tabla 1
      span Indicadores KPI
    
    .tabla-a.color-secundario.mb-5 
      table
        thead
          tr
            th Variable
            th Tipo
            th Indicador
        tbody
          tr
            td Mercadeo
            td Posicionamiento.
            td 
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | Reconocimiento de marca.
                li 
                  i.lista-ul__vineta
                  | Reputación.
                li 
                  i.lista-ul__vineta
                  | Pertenencia al segmento de mercado.
          tr
            td
            td Educación
            td 
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | Grado de conocimiento.
                li 
                  i.lista-ul__vineta
                  | Habilidades demostradas.
                li 
                  i.lista-ul__vineta
                  | Uso correcto o incorrecto.
          tr
            td
            td Interacciones externas
            td 
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | Asistencia.
                li 
                  i.lista-ul__vineta
                  | Prueba de producto.
                li 
                  i.lista-ul__vineta
                  | Eventos.
          tr
            td
            td Interacciones en punto de venta
            td 
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | Materiales de punto de venta.
                li 
                  i.lista-ul__vineta
                  | Promociones.
                li 
                  i.lista-ul__vineta
                  | Registros.
                li 
                  i.lista-ul__vineta
                  | Muestreo / degustación.
          tr
            td
            td Interacciones online
            td 
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | Redes sociales.
                li 
                  i.lista-ul__vineta
                  | Web.
                li 
                  i.lista-ul__vineta
                  | Dispositivos móviles.
          tr
            td
            td Interacciones offline
            td 
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | Marketing directo.
                li 
                  i.lista-ul__vineta
                  | Patrocinio.
                li 
                  i.lista-ul__vineta
                  | Demo de productos.
          tr
            td
            td Costos
            td 
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | Gastos de marketing.
                li 
                  i.lista-ul__vineta
                  | Pérdidas.
                li 
                  i.lista-ul__vineta
                  | Devoluciones.
          tr
            td
            td Ingresos
            td 
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | Ventas.
                li 
                  i.lista-ul__vineta
                  | Donaciones.
          tr
            td
            td Retorno
            td 
              ul.lista-ul--color
                li 
                  i.lista-ul__vineta
                  | Índice de retorno.
                li 
                  i.lista-ul__vineta
                  | Valor de la vida útil del cliente.
                li 
                  i.lista-ul__vineta
                  | Relación costo-beneficio.
    
    h4 Variable mercadeo:
    p.mb-4 esta variable en el desarrollo de los indicadores clave se refiere a los puntos de contacto con los clientes reales, clientes potenciales y consumidores; en esta se pueden desarrollar los siguientes tipos de indicadores:
    
    .row.justify-content-center.mb-5
      .col-lg-3
        img(src='@/assets/curso/temas/t2/imag7.png', alt='')
      .col-lg-9
        SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/slyder1.svg' alt='AvatarTop')
            h5.text-center Posicionamiento:
            p.text-center enfatiza en el desarrollo del mensaje y su divulgación por los diferentes medios para generar imagen positiva en la mente del consumidor o cliente.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/slyder2.svg' alt='AvatarTop')
            h5.text-center Educación:
            p.text-center las marcas deben considerar dentro del desarrollo de su comunicación, mensajes que generen conocimiento en aspectos relacionados con el producto o servicio. Pueden ser mensajes de uso del producto, de sus componentes, fabricación u otro tipo de información relevante para el consumidor.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/slyder3.svg' alt='AvatarTop')
            h5.text-center Interacciones externas: 
            p.text-center son actividades desarrolladas fuera del punto de venta para atraer compradores hacia el punto de venta y generar experiencias positivas relacionadas con la marca.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/slyder4.svg' alt='AvatarTop')
            h5.text-center Interacciones en punto de venta: 
            p.text-center actividades realizadas en el punto de venta; es allí donde se toman en mayor porcentaje las decisiones de compra.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/slyder5.svg' alt='AvatarTop')
            h5.text-center Interacciones online:  
            p.text-center comunicación con clientes en medios digitales.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/slyder6.svg' alt='AvatarTop')
            h5.text-center Interacciones offline:
            p.text-center comunicación con clientes en medios convencionales y por fuera del entorno digital.

    h4 Variable comercialización: 
    p.mb-4 es una variable importante para la evaluación del rendimiento de la empresa para determinar sus resultados. Se desarrollan estos tipos de indicadores:
    
    .row
      .col-lg-4
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-acento-contenido.p-5
            .row.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/temas/t2/icono1.svg', alt='')           
            h2.text-white Costos
            p.text-white Incluye todo tipo de costos, desde el que tiene el obtener nuevos clientes hasta los programas de quejas y reclamos de los mismos que implica la devolución y pérdida de productos.
      .col-lg-4
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-acento-contenido.p-5
            .row.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/temas/t2/icono2.svg', alt='')           
            h2.text-white Ingresos
            p.text-white Es tal vez el indicador más importante a medir teniendo en cuenta que hace parte del objetivo principal de cualquier empresa, que es el aumento de las ventas y por lo tanto, el incremento en los ingresos.
      .col-lg-4
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-acento-contenido.p-5
            .row.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/temas/t2/icono3.svg', alt='')           
            h2.text-white Retornos
            p.text-white Es la razón de ser del ROI, no hay negocio si no hay retorno; es decir, si no existe una diferencia significativa entre costos e ingresos.

    h4 Relacionamiento de los indicadores KPI
    p.mb-4 Cada indicador debe tener un valor atribuido para que se pueda medir. En la siguiente tabla, se puede determinar lo que con cada tipo de indicador se consigue evaluar dentro de la empresa. 
   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-secundario
          h5 Tabla 2
          span Indicador y evaluación
        .tabla-a.color-secundario.mb-5 
          table
            thead
              tr
                th Tipo de indicador
                th Ejemplo de indicador
                th Pregunta 1 - evaluación monetaria
                th Pregunta 2 - evaluación influencia
            tbody
              tr
                td Posicionamiento
                td Nivel de recordación de marca.
                td ¿Cuántos consumidores mencionan la marca dentro de las primeras 5 de su lista de recordación?
                td ¿Qué nivel de influencia tiene la marca en la decisión de compra?
              tr
                td Educación
                td Reconocimiento del beneficio de marca.
                td ¿Cuántas personas reconocen el beneficio principal del producto?
                td ¿Cuánto influye el beneficio en la decisión de compra?
              tr
                td Interacción
                td Prueba de muestra gratis
                td ¿Cuántas personas probaron la muestra gratis del producto?
                td ¿Qué niveles de influencia tuvo la muestra gratis con la decisión de compra?
              tr
                td Costos
                td Costo de muestras gratis + actividades de educación e interacción.
                td ¿Cuánto costó la campaña?
                td ¿Cuál fue la inversión total del proyecto?
              tr
                td Ingresos
                td Precio de venta
                td ¿Cuánto se obtuvo por cada venta?
                td ¿Cuánto es el ingreso total obtenido en el proyecto?
    
    Separador
    #t_2_3.titulo-segundo.color-secundario(data-aos="fade-right")
      h2 2.3 Cálculo del ROI
    
    p.mb-4 En el siguiente video, se explica de manera sencilla y con un ejemplo, la manera adecuada de realizar el calculo del ROI.

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Leyenda del video


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
