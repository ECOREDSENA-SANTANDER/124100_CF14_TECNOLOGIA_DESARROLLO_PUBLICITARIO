<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Uso del color en los anuncios publicitarios

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/img1.png', alt='Marketing')

      .col-sm-12.col-lg-9
        p.mb-3 Según la Real Academia de la Lengua Española, en su primera definición, el color es una “sensación producida por los rayos luminosos que impresionan los órganos visuales y que depende de la longitud de onda”.
        p.mb-0 El mundo es incoloro. Se podría decir que todo el color que [se ve] no existe. Es una percepción. Los objetos poseen la característica de absorber determinadas partes del espectro lumínico. La luz que no es absorbida se remite y transmite diferentes estímulos de color al de la ambientación general. Al llegar estos estímulos hasta el órgano de la vista, (…) produce una sensación de color. (TOMi.digital, 2020)
    
    
    Separador  
    #t_2_1.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.1 Orígenes
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        .bloque-texto-e.color-secundario.p-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            p.fw-bold El físico y matemático inglés Isaac Newton dio un paso decisivo en la historia del color y estableció un principio hasta hoy aceptado: la luz es color. En 1665 Newton fue quien descubrió que la luz del sol, al pasar a través de un prisma, se divide en varios colores.
            i.fas.fa-quote-right
          .row.align-items-end
            .col
              .bloque-texto-e__autor 
                .h5.mb-0.mt-3 - (fotonostra.com, s.f.).

    Separador  
    #t_2_2.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.2 Bases de la teoría del color
    
    p.mb-5(data-aos="zoom-in-left") Son reglas básicas que rigen la mezcla de colores para conseguir los efectos deseados, mediante la combinación de colores o pigmentos. 
    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        .title-card.bg2.mb-3.w-title-card El círculo cromático: 
        p.mb-3 se le conoce como una rueda de colores donde se encuentran de forma ordenada los colores primarios, secundarios y terciarios; los cueles ya se explicaron en componentes anteriores. El aspecto que más se destaca es que los colores que se visualizan en este círculo son los que percibe el ojo humano, de acuerdo con las diferentes tonalidades y matices, como se muestra en la siguiente figura.
        .titulo-sexto.color-secundario.mt-5
                h5 Figura 9.
                span
                  |   Círculo cromático
      .col-sm-12.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img2.png', alt='En la imagen se presenta un circulo cromático en el que se señalan los colores primarios y secundarios.')
        figcaption Nota. Desarrollo web (2004).



    .row.justify-content-center.my-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        .title-card.bg2.mb-3.w-title-card Escalas de color:
        p.mb-3 son conocidas por ser cromáticas (con color: verde, azul, amarillo, etc.) y acromáticas (sin color: negro, gris) y, para que llegue a tomarse como escala, es porque antes ha tenido una variación graduada de luminosidad, tono o saturación. De manera que las escalas de color se entienden como:
        .bg7.py-4.px-4.mb-4
          ul.lista-ul--color
            li.mb-0 
              i.fas.fa-check.color-circle.mb-0
              | #[b Monocromáticos:] referente a los matices de un solo color.
            li.mb-0 
              i.fas.fa-check.color-circle.mb-0
              | #[b Análogos:] armonía en la que se incluyen dos o tres colores.
            li.mb-0 
              i.fas.fa-check.color-circle.mb-0
              | #[b Complementarios:] conocidos por ser un resultado neutral de una combinación de colores.
            li.mb-0 
              i.fas.fa-check.color-circle.mb-0
              | #[b Tríada:] cuando se utiliza del círculo cromático una combinación de colores que da un triángulo equilátero, es decir, colores equidistantes entre sí.
        p.mb-2 En la siguiente figura se muestran estas escalas de color.
        .titulo-sexto.color-secundario.mx-0
                h5 Figura 10.
                span
                  | Escalas de color
      .col-sm-12.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img3.png', alt='En la imagen se presentan varias figuras con las diferentes escalas de color que son monocromáticos, análogos, complementarios y triada.')
        figcaption Nota. Desarrollo web (2004).


    .row.justify-content-center.my-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-8
        .title-card.bg2.mb-3.w-title-card Temperaturas de color:
        p.mb-3 se le conoce como la dominancia de algunos colores del espectro lumínico sobre otros, es decir, la luz sea neutra o artificial, siempre tendrá un dominio de colores y es por ello, que en ocasiones se alteran las fotografías. En síntesis, esta temperatura es distinguida como colores fríos o calientes, como se muestra en la siguiente figura.
        .titulo-sexto.color-secundario.mt-5
                h5 Figura 11.
                span
                  | Temperaturas de color
      .col-sm-12.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img4.png', alt='En la imagen se presentan dos semicírculos que indican las temperatus de color  que son colores frios y colores calientes.')
        figcaption Nota. Desarrollo web (2004).



    .title-card.bg2.mb-3.w-title-card(data-aos="zoom-in-left") Propiedades de los colores: 
    p.mb-5(data-aos="zoom-in-left") a continuación, se describen las propiedades que hacen parte de los colores, tomando como referencia lo que se indica en la página de internet denominada Desarrollo web (2004):
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-left")
      .row(titulo="Matiz")
        .col-sm-12.col-lg-9
          p.mb-3.pl-cus Es el estado puro del color, sin el blanco o negro agregados, y es un atributo asociado con la longitud de onda dominante en la mezcla de las ondas luminosas. El matiz se define como un atributo de color que permite distinguir el rojo del azul, y se refiere al recorrido que hace un tono hacia uno u otro lado del círculo cromático, por lo que el verde amarillento y el verde azulado serán matices diferentes del verde, tal como se muestra en la figura 12.
          p.mb-cus.pl-cus Los tres colores primarios representan los tres matices primarios, y mezclando estos [se puede] obtener los demás matices o colores. Dos colores son complementarios cuando están uno frente a otro en el círculo de matices (círculo cromático). 
        .col-sm-12.col-lg-3
          .titulo-sexto.color-secundario
            h5 Figura 12.
            span
              | Matices en el círculo cromático
          figure
            img(src='@/assets/curso/temas/tema2/img5.png', alt='La imagen presenta el círculo cromático con los diferentes matices de color.')
          figcaption Nota. Desarrollo web (2004).
        

      .row(titulo="Saturación")
        .row
          .col-sm-12.col-lg-9
            p.mb-3.pl-cus También llamada croma, este concepto representa la pureza o intensidad de un color particular, la viveza o palidez del mismo, y puede relacionarse con el ancho de banda de la luz que [se está] visualizando. Los colores puros del espectro están completamente saturados. Un color intenso es muy vivo. Cuanto más se satura un color, mayor es la impresión de que el objeto se está moviendo, como se muestra en la siguiente figura 13.
            p.mb-5.pl-cus  #[b También puede ser definida por la cantidad de gris que contiene un color:] mientras más gris o más neutro es, menos brillante o menos saturado es. Igualmente, cualquier cambio hecho a un color puro automáticamente baja su saturación.
            .pl-cus.mb-cus 
              .bg6.px-4.py-2 #[b Por ejemplo], [si se dice que] un rojo [es] muy saturado es [porque se refiere] a un rojo puro y rico. Pero cuando [se hace referencia] a los tonos de un color que tiene algún valor de gris los [llaman] menos saturados. La saturación del color se dice que es más baja cuando se le añade su opuesto (llamado complementario) en el círculo cromático. 
          .col-sm-12.col-lg-3
            .titulo-sexto.color-secundario
              h5 Figura 13.
              span
                | Saturación
            figure
              img(src='@/assets/curso/temas/tema2/img6.png', alt='La imagen presenta el círculo cromático con tres juegos de flechas que indican la saturación del color así:  Muy saturados, poco saturados y puros.')
            figcaption Nota. Desarrollo web (2004).
        .row.justify-content-center.mb-5
            .col-lg-12
              p.my-5.pl-cus Para desaturar un color sin que varíe su valor, hay que mezclarlo con un gris de blanco y negro de su mismo valor. Un color intenso como el azul perderá su saturación a medida que se le añade blanco y se convierte en celeste, tal como se muestra en la siguiente figura 14.
              .pl-cus
                .titulo-sexto.color-secundario
                  h5 Figura 14.
                  span
                    | Saturación del color rojo 
              figure.pl-cus
                img(src='@/assets/curso/temas/tema2/img7.png', alt='La imagen presenta cinco rectángulos  con los diferentes niveles de saturación del color rojo.')
              .pl-cus
                figcaption Nota. Desarrollo web (2004).
      
      .row(titulo="Valor o brillo")
        .col-sm-12.col-lg-12
          p.mb-3.pl-cus Es un término que se usa para describir qué tan claro u oscuro parece un color, y se refiere a la cantidad de luz percibida. El brillo se puede definir como la cantidad de "oscuridad" que tiene un color, es decir, representa lo claro u oscuro que es respecto a su color patrón. 
          p.mb-3.pl-cus Es una propiedad importante, ya que va a crear sensaciones espaciales por medio del color. Así, porciones de un mismo color con fuertes diferencias de valor (contraste de valor) definen porciones diferentes en el espacio, mientras que un cambio gradual en el valor de un color (gradación) va a dar la sensación de contorno y de continuidad de un objeto en el espacio.
          p.mb-5.pl-cus El valor es el mayor grado de claridad u oscuridad de un color. Un azul, por ejemplo, mezclado con blanco da como resultado un azul más claro, es decir, da un valor más alto, también denominado tono, que es distinto al color, ya que se obtiene del agregado de blanco o negro de un color base. Así, en la siguiente figura se puede apreciar los brillos del color rojo.
        

          .row.justify-content-center.mb-5.pl-cus
            .col-lg-12
              .titulo-sexto.color-secundario
                h5 Figura 15.
                span
                  | Brillos del color rojo
              figure
                img(src='@/assets/curso/temas/tema2/img8.png', alt='La imagen presneta cinco rectángulos con los diferentes niveles de brillo del color rojo.')
              figcaption Nota. Desarrollo web (2004).


    
     
    Separador
    #t_2_3.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.3 Teoría del color de Eva Heller
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema2/img9.png', alt='Marketing')
      .col-sm-12.col-lg-8
        p.mb-3 Eva Heller fue una socióloga, psicóloga y escritora de origen alemán, nació en 1948 y falleció en 2008, desarrolló su propia teoría de los colores a partir del estudio de Goethe, publicando su ya clásico libro titulado #[b “La psicología del color”]. Es considerada, de hecho, como una de las profesionales más interesadas en el estudio de este campo de la Psicología, y una de sus mayores expresiones.
        p.mb-3 Según esta autora, las asociaciones entre los sentimientos y la razón, respecto a la relación de los colores no se realizan de manera accidental, sino que consisten en auténticas experiencias universales enraizadas profundamente tanto en nuestro pensamiento como en nuestro propio lenguaje.
        p.mb-3 #[b Eva Heller considera que todos los colores tienen un significado y se utilizan siempre por un motivo determinado.] Nunca se usan al azar, y se convierten en una herramienta de comunicación verdaderamente útil.
        p.mb-0 En su estudio, y sobre todo en su libro, aborda la relación existente entre los colores y nuestros propios sentimientos, proporcionando una gran cantidad de información sobre el significado de los colores y su uso en nuestra cultura, en el diseño de productos, en los distintos test que se basan en colores.
    

    Separador
    #t_2_4.titulo-segundo.color-secundario(data-aos="zoom-in-left")
      h2 2.4 Significado de los colores
    
    p.mb-5(data-aos="zoom-in-left") Asimismo, para este tema se aborda lo socializado en dicho portal web sobre esta teoría, donde se establecen algunos significados de los colores:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-left")
      .tarjeta.color-secundario-cus.p-4
        .title-card-2.bg8.mb-3 Amarillo
        .row.justify-content-center.mb-3
          .col-sm-3.col-lg-12.my-1
            img(src='@/assets/curso/temas/tema2/img10.png')
        p.text-center Se trata de un color que, popularmente, simboliza el optimismo, la juventud, la autoestima, la seguridad, la amistad, la creatividad y la extroversión. Al igual que el rojo, es un color que llama la atención, aunque utilizado en exceso puede ocasionar fatiga visual.
        p.text-center No obstante, no todo son cualidades positivas, ya que también posee ciertas connotaciones negativas. Puede percibirse como miedo, advertencia y engaño, además, habitualmente se le relaciona como símbolo de la mala suerte.
        p.text-center En marketing y publicidad, por ejemplo, se utiliza como color de fondo para algunas marcas que pretenden transmitir felicidad, optimismo y positivismo.


      .tarjeta.color-secundario-cus.p-4
        .title-card-2.bg8.mb-3 Rojo
        .row.justify-content-center.mb-3
          .col-sm-3.col-lg-12.my-1
            img(src='@/assets/curso/temas/tema2/img11.png')
        p.text-center Es un color que se relaciona con la energía y la supervivencia, aporta emoción, valor y fuerza. Además, es considerado como el color de la llama del fuego, el más intenso, tendiendo a llamar a la acción a primera vista.
        p.text-center De hecho, en la psicología del color el rojo suele considerarse el color más intenso, causando las emociones más potentes.

      .tarjeta.color-secundario-cus.p-4
        .title-card-2.bg8.mb-3 Naranja
        .row.justify-content-center.mb-3
          .col-sm-3.col-lg-12.my-1
            img(src='@/assets/curso/temas/tema2/img12.png')
        p.text-center Se trata de un color que representa el éxito, la creatividad, la aventura, el entusiasmo, el calor, la calidad y anima además a mantener cierto equilibrio.
        p.text-center A diferencia del color amarillo o del color rojo, es utilizado como variante de estos al ser capaz de capturar la vista, pero sin saturarla.

      .tarjeta.color-secundario-cus.p-4
        .title-card-2.bg8.mb-3 Verde
        .row.justify-content-center.mb-3
          .col-sm-3.col-lg-12.my-1
            img(src='@/assets/curso/temas/tema2/img13.png')
        p.text-center Aporta relajación, equilibrio, sensación de paz y armonía, frescura, ponderación, conciencia, seguridad y anima al descanso. Es un color que habitualmente se relaciona con lo ecológico, y que además simboliza la naturaleza. Por ello, también se asocia con la fertilidad, el crecimiento y la salud.
        p.text-center En marketing y publicidad suele utilizarse en marcas vinculadas a la ecología, al medio ambiente y a la naturaleza en general, pero también a marcas relacionadas con la salud y con la actividad física.

      .tarjeta.color-secundario-cus.p-4
        .title-card-2.bg8.mb-3 Marrón (café)
        .row.justify-content-center.mb-3
          .col-sm-3.col-lg-12.my-1
            img(src='@/assets/curso/temas/tema2/img14.png')
        p.text-center Es el color de la tierra por excelencia, así como de la madera. Por ello, se relaciona también con la naturaleza, destacando entre sus significados emocionales la seguridad, la comodidad, la sensación de calidez, apoyo y confianza.
        p.text-center En marketing y publicidad es un color utilizado por marcas que desean aportar confianza, tranquilidad y seguridad, no solo en empresas relacionadas con alimentos o productos naturales.

      .tarjeta.color-secundario-cus.p-4
        .title-card-2.bg8.mb-3 Azul
        .row.justify-content-center.mb-3
          .col-sm-3.col-lg-12.my-1
            img(src='@/assets/curso/temas/tema2/img15.png')
        p.text-center El color azul es, por lo general, el color de la comunicación, de la confianza, la paz, la estabilidad y la armonía, y se relaciona habitualmente no solo con el cielo sino también con el mar.
        p.text-center En marketing y publicidad se considera que el color azul aporta sensación de confiabilidad y de relajación, seguridad y calidad

      .tarjeta.color-secundario-cus.p-4
        .title-card-2.bg8.mb-3 Rosado
        .row.justify-content-center.mb-3
          .col-sm-3.col-lg-12.my-1
            img(src='@/assets/curso/temas/tema2/img16.png')
        p.text-center Es un color que habitualmente se asocia al público femenino. De hecho, en la psicología del color se relaciona con la feminidad, pero también se asocia al amor, a la pareja y a la sexualidad. El significado del color rosa tiene que ver con el amor, el cariño y el encanto.
        p.text-center En publicidad y marketing es un color que habitualmente es utilizado por marcas que trabajan para el público femenino, aunque en los últimos años muchas personas procuran romper la relación cultural entre el color rosa y las mujeres, como sucede con el color azul y los varones (especialmente con los niños y las niñas, por ejemplo, en la ropa y los juguetes).

      .tarjeta.color-secundario-cus.p-4
        .title-card-2.bg8.mb-3 Blanco
        .row.justify-content-center.mb-3
          .col-sm-3.col-lg-12.my-1
            img(src='@/assets/curso/temas/tema2/img17.png')
        p.text-center El blanco es un color que nos aporta luminosidad, limpieza, pureza, claridad, inocencia. También aporta sensación de simplicidad y humildad, y es el símbolo de la bondad por naturaleza.

      .tarjeta.color-secundario-cus.p-4
        .title-card-2.bg8.mb-3 Negro
        .row.justify-content-center.mb-3
          .col-sm-3.col-lg-12.my-1
            img(src='@/assets/curso/temas/tema2/img18.png')
        p.text-center Es un color que aporta eficacia, seguridad, elegancia, poder, glamour y sofisticación. Por ello, se trata de un color utilizado por marcas de alto prestigio que dirigen sus productos a un público mayormente de clase alta. En su aspecto más negativo su significado se asocia con la pérdida y la muerte.

      .tarjeta.color-secundario-cus.p-4
        .title-card-2.bg8.mb-3 Violeta (púrpura)
        .row.justify-content-center.mb-3
          .col-sm-3.col-lg-12.my-1
            img(src='@/assets/curso/temas/tema2/img19.png')
        p.text-center Es un color que se asocia con la psicología, con la espiritualidad, la verdad y la calidad. Además, se relaciona claramente con la sabiduría, el lujo, la nobleza, la contención y también el poder.
        p.text-center Por otro lado, puede causar sentimientos relacionados con la sensación de inferioridad, la introversión o la frustración, siendo percibido incluso como un color arrogante. Por ello, no se aconseja su uso de forma excesiva, dependiendo también del tono de violeta escogido.

      .tarjeta.color-secundario-cus.p-4
        .title-card-2.bg8.mb-3 Gris
        .row.justify-content-center.mb-3
          .col-sm-3.col-lg-12.my-1
            img(src='@/assets/curso/temas/tema2/img20.png')
        p.text-center El significado habitual del color gris se asocia a la neutralidad y al equilibrio, al ser una mezcla entre el blanco y el negro. De hecho, utilizado de forma inteligente con ambos colores puede transmitir limpieza y neutralidad. No obstante, es un color que puede llegar a causar aburrimiento, tendiendo a la vez a transmitir sensación de pérdida y depresión. (Viviendo la salud, 2020)







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

<style lang="sass" scoped></style>
