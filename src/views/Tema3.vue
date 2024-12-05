<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Aplicación de #[em antisolder] mediante serigrafía (#[em Screen])
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-up" data-aos-duration="800")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-xl-5
        p.mb-0 En el proceso de diseño y desarrollo de los circuitos, se llega a una etapa en la que es necesario recubrir el cobre con materiales químicos altamente resistentes, capaces de soportar el manejo y las condiciones ambientales de trabajo.
    
    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
      h5 Figura 2. 
      span Componentes para la aplicación del antisolder 
    figure(data-aos="zoom-in-up")
      img(src="@/assets/curso/tema3/2.svg" alt="La imagen presenta una estación de aplicación de antisolder y sellante en una tarjeta de circuito. En la izquierda, se ven los frascos de antisolder y sellante junto con la tarjeta que se coloca sobre la seda. A la derecha, se observa un horno para el curado de los materiales aplicados. ")

    p.mt-5(data-aos="fade-right") Preparación de la máscara antisoldante para protección del cobre en circuitos impresos:

    .cont_3_1.mt-5.pb-5
      .row
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right" style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/4.png")
        .col-lg-9(data-aos="zoom-in")
          SlyderF(columnas="col-lg-6 col-xl-6 p-4")
            .tarjeta.color-acento-botones.p-4.bg-white.text-center.pt-xl-5.pb-xl-5(style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
              figure.mb-4.text-center
                img.d-inline(src="@/assets/curso/tema3/5.svg" style="max-width:90px;")
              h5.mb-3.m-auto.ps-4.pe-4.p-2(style="background-color:#FFECF7;max-width:fit-content;") Preparación de la mezcla
              p.mb-0 Preparar la máscara antisoldante (#[em Solder mask] UV) según las especificaciones del proveedor, que suelen incluir una sustancia endurecedora al calor.
            .tarjeta.color-acento-botones.p-4.bg-white.text-center.pt-xl-5.pb-xl-5(style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
              figure.mb-4.text-center
                img.d-inline(src="@/assets/curso/tema3/6.svg" style="max-width:90px;")
              h5.mb-3.m-auto.ps-4.pe-4.p-2(style="background-color:#FFECF7;max-width:fit-content;") Aplicación de la mezcla
              p.mb-0 Aplicar la mezcla sobre las pistas del circuito, utilizando un procedimiento similar al de la emulsión fotosensible empleada en la fabricación de las pistas del circuito impreso.
            .tarjeta.color-acento-botones.p-4.bg-white.text-center.pt-xl-5.pb-xl-5(style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
              figure.mb-4.text-center
                img.d-inline(src="@/assets/curso/tema3/7.svg" style="max-width:90px;")
              h5.mb-3.m-auto.ps-4.pe-4.p-2(style="background-color:#FFECF7;max-width:fit-content;") Función de la pintura
              p.mb-0 La pintura protege las pistas de cobre contra el óxido y posibles cortocircuitos, además de mejorar la apariencia general del circuito.
            .tarjeta.color-acento-botones.p-4.bg-white.text-center.pt-xl-5.pb-xl-5(style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
              figure.mb-4.text-center
                img.d-inline(src="@/assets/curso/tema3/8.svg" style="max-width:90px;")
              h5.mb-3.m-auto.ps-4.pe-4.p-2(style="background-color:#FFECF7;max-width:fit-content;") Curado de la mezcla
              p.mb-0 Seguir las indicaciones del distribuidor para el tiempo de curado, temperatura y cantidad exacta de componentes necesarios para lograr un curado adecuado.
            .tarjeta.color-acento-botones.p-4.bg-white.text-center.pt-xl-5.pb-xl-5(style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
              figure.mb-4.text-center
                img.d-inline(src="@/assets/curso/tema3/9.svg" style="max-width:90px;")
              h5.mb-3.m-auto.ps-4.pe-4.p-2(style="background-color:#FFECF7;max-width:fit-content;") Alternativa económica
              p.mb-0 Como alternativa económica, se puede mezclar barniz dieléctrico con un tinte verde de origen vegetal para obtener una pintura antisoldante.
            .tarjeta.color-acento-botones.p-4.bg-white.text-center.pt-xl-5.pb-xl-5(style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
              figure.mb-4.text-center
                img.d-inline(src="@/assets/curso/tema3/10.svg" style="max-width:90px;")
              h5.mb-3.m-auto.ps-4.pe-4.p-2(style="background-color:#FFECF7;max-width:fit-content;") Secado de la pintura
              p.mb-0 Después de aplicar la pintura, usar un bastidor con el acetato correspondiente y secar en un horno de rayos ultravioleta (UV) durante aproximadamente 10 minutos para completar el proceso de secado.

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Aplicación de antisolder mediante lámina fotosensible
    
    .row
      .col-lg(style="place-self:center;" data-aos="fade-right")
        p.mb-0 La aplicación de #[em antisolder] con láminas fotosensibles es comúnmente utilizada en entornos industriales. Existen películas sintéticas, como el #[em Dry-film Soldermask], que requieren secado mediante rodillos calientes, siendo este el método más convencional. Sin embargo, el proceso exige laminadores especiales que se ajusten al grosor del sustrato, generalmente de 1/16", para lograr los mejores resultados. También se requiere la aplicación de aire caliente, horneado y exposición controlada a luz UV para asegurar una adecuada adhesión y curado sobre la lámina de cobre. Este método es recomendado para personas con experiencia en la laminación #[em Dry-film] y con acceso a las herramientas necesarias.
      .col-lg-auto.d-none.d-lg-block(style="place-self:center;" data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/11.png")

    .col-xl-10.m-auto.mt-5
      .p-4(style="background-color:#2D496C;border-radius:11px;" data-aos="fade-up")
        .row
          .col-md-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema3/12.svg")
          .col-md(style="place-self:center;")
            p.mb-0.text-white #[strong(style="color:#F0CF2B !important;") Nota.] Trabajar con una lámpara incandescente en una habitación con luz solar indirecta (se recomienda el uso de persianas o cortinas). No es necesario un cuarto oscuro fotográfico.
    
    p.mt-5(data-aos="fade-right") El proceso de aplicación de antisoldante en circuitos impresos implica limpiar el sustrato, adherir la lámina con presión para eliminar aire y agua, exponer a luz UV con un patrón positivo, revelar en solución y curar en horno para garantizar un recubrimiento resistente: 

    .cont_3_2.mt-5.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Limpieza del sustrato
              p Limpiar la placa de cobre, asegurando la eliminación completa de cualquier suciedad o partículas de oxidación.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/14.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Adherencia de la lámina de antisolder
              p Para eliminar el aire y el agua, se aplica presión sobre la película y el sustrato. Se recomienda realizar perforaciones previamente para facilitar la expulsión de aire.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/15.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Exposición
              p El #[em Dry-film Soldermask] requiere un patrón de transferencia en formato positivo. Es recomendable usar positivos procesados profesionalmente. La lámina se expone a luz ultravioleta en una cámara, con presión entre el vidrio y el negativo.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/16.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Revelado
              p Preparar la solución de revelado según las proporciones del fabricante. Introducir la tarjeta en la solución, agitar y retirarla cuando esté completamente impregnada.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/17.png')
          .row.pt-lg-4.col-xl-11.m-auto
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Curado
              p Precalentar el horno a 100-120 °C (sin exceder los 125 °C). Colocar la tarjeta en el horno durante 40 minutos para endurecer la película, luego exponerla a luz UV durante 30-40 minutos adicionales.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/18.png')

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Método de perforación manual de tarjetas impresas
    
    p(data-aos="fade-left") La perforación manual suele realizarse mediante taladros pequeños o motortools, permitiendo una maniobra precisa y ajustable. A continuación, se detallan las instrucciones:

    .cont_2_2.mt-5
      .col-xl-10.m-auto
        PasosA.color-acento-contenido(tipo="n" data-aos="fade-up")
          .row
            .col.text-start(style="place-self:center;")
              p.mb-0 Verificar que no existan cortocircuitos entre las pistas y que el esquema de componentes esté impreso sobre el circuito impreso. Proceder a perforar.
            .col-auto(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema3/19.svg')
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema3/20.svg')
            .col.text-start(style="place-self:center;")
              p.mb-0 Realizar la perforación de las donas del circuito con precisión utilizando un taladro de árbol o motortool. Seleccionar el diámetro de la broca (regularmente de 1/32 de pulgada) de acuerdo al grosor de los extremos o pines del componente.
          .row
            .col.text-start(style="place-self:center;")
              p.mb-0 Ubicar los componentes en el circuito impreso de acuerdo con el diseño.
            .col-auto(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema3/21.svg')
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema3/22.svg')
            .col.text-start(style="place-self:center;")
              p Posicionar los componentes de acuerdo con el espacio disponible:
              ul.lista-ul.ps-3
                li.d-flex
                  i.lista-ul__vineta
                  span #[strong Posición horizontal:] Se utiliza cuando no hay problemas de espacio, permitiendo un circuito más claro y facilitando las mediciones.
                li.d-flex
                  i.lista-ul__vineta
                  span #[strong Posición vertical:] Se emplea cuando el circuito debe quedar compacto y no existen limitaciones de altura.
          .row
            .col.text-start(style="place-self:center;")
              p.mb-0 Utilizando un cautín y soldadura, soldar los extremos o pines de los componentes a la tarjeta. Usar gafas protectoras y evitar inhalar el humo de la soldadura.
            .col-auto(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema3/23.svg')
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema3/24.svg')
            .col.text-start(style="place-self:center;")
              p.mb-0 Cortar las puntas sobrantes de los componentes con un cortafrío.
          .row
            .col.text-start(style="place-self:center;")
              p.mb-0 Completar el montaje de todos los componentes.
            .col-auto(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema3/25.svg')

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Método industrial de perforación de tarjetas impresas
    
    p(data-aos="fade-left") Las perforaciones industriales se realizan con máquinas CNC y requieren archivos generados específicamente para guiar el proceso en la tarjeta. Antes de generar los archivos #[em Gerber y Excellon Drilling] será necesario adecuar el #[em layout] para la manufactura de su circuito impreso, siguiendo las siguientes recomendaciones:

    .row.mt-5
      .col-lg-auto.d-none.d-lg-block(style="place-self:center;" data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/26.png")
      .col-lg(style="place-self:center;" data-aos="fade-left")
        .p-2.pe-md-4.mb-3(style="background-color:#CBE7F0;border-radius:21px;box-shadow:0px 3px 4px rgba(0,0,0,.07);")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/27.svg")
            .col(style="place-self:center;")
              p.mb-0 No debe haber texto o figuras fuera del perímetro de la tarjeta.
        .p-2.pe-md-4.mb-3(style="background-color:#98D1E2;border-radius:21px;box-shadow:0px 3px 4px rgba(0,0,0,.07);")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/28.svg")
            .col(style="place-self:center;")
              p.mb-0 Se deben agregar 5 #[em pads] de 60 #[em mils] de diámetro externo y agujero de 35 #[em mils] de diámetro en todos los #[em layers].
        .p-2.pe-md-4.mb-3(style="background-color:#CBE7F0;border-radius:21px;box-shadow:0px 3px 4px rgba(0,0,0,.07);")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/29.svg")
            .col(style="place-self:center;")
              p.mb-0 Los #[em pads] de referencia deben estar ubicados en las esquinas y uno adicional para orientación.
        .p-2.pe-md-4(style="background-color:#98D1E2;border-radius:21px;box-shadow:0px 3px 4px rgba(0,0,0,.07);")
          .row
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/30.svg")
            .col(style="place-self:center;")
              p.mb-0 Una vez realizados los ajustes, generar los archivos #[em Excellon] para perforaciones no metalizadas y metalizadas.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema1/7.svg")
        .col.ps-2(style="place-self:end;")
          h3.mb-0.mb-lg-2.pe-4 Brocas y herramientas
    
    p(data-aos="fade-left") Las herramientas para perforación son de "Micro Grano" de carburo, lo que les da durabilidad y precisión. A continuación, se presentan sus características:

    .cont_2_2.mt-5
      .col-xl-6.col-lg-10.m-auto
        .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-down")
          h5 Tabla 1. 
          span Brocas y herramientas utilizadas para la perforación de tarjetas impresas
        .tabla-a.color-acento-contenido(data-aos="fade-up")
          table
            thead
              tr.text-center(style="background-color:#F9F7F3;")
                th Característica
                th Valor
            tbody
              tr.bg-white
                td.p-3 Geometría
                td.p-3  2 flautas, zanco 3.18 mm
              tr.bg-white
                td.p-3 Largo
                td.p-3  1.5 ± 0.010 pulgadas
              tr.bg-white
                td.p-3 Vida anticipada
                td.p-3  3,000 perforaciones (en FR4 epóxico)
              tr.bg-white
                td.p-3 Material
                td.p-3  Carburo sólido de micrograno
              tr.bg-white
                td.p-3 RPM de operación
                td.p-3  20 k – 100 k RPM
    
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/tema1/7.svg")
          .col.ps-2(style="place-self:end;")
            h3.mb-0.mb-lg-2.pe-4 Ensamble de componentes de circuitos impresos

      .row
        .col-lg(style="place-self:center;" data-aos="fade-right")
          p Para el montaje de componentes en un circuito electrónico, se debe seguir una secuencia específica comenzando con los componentes más pequeños, como puentes, diodos, resistencias, y avanzando hasta los componentes más grandes, como pines de conexión y zócalos de circuitos integrados.
          .d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema3/31.png")
        .col-lg-auto.d-none.d-lg-block(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema3/32.png")
    
      .cont_3_2.mt-5.pt-4.pb-4.pb-xl-5.pt-xl-5
        .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
          SlyderA(tipo="b")
            .row.pt-lg-4.col-xl-11.m-auto
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4 Bases para integrados
                p Zócalos donde se insertan los circuitos integrados, facilitando el reemplazo sin remover soldadura. Las bases DIP vienen en tipo DIP (#[em dual in-line package]) con tamaños comunes de 8, 14, 16, 24, 40 y 64 pines. Evitar doblar los pines.
              .col-lg-5
                figure.m-auto.col-12.col-md-8.col-lg-12
                  img(src='@/assets/curso/tema3/33.png')
            .row.pt-lg-4.col-xl-11.m-auto
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4 Condensadores
                p Montar observando la polaridad: el lado negativo del condensador debe coincidir con el diseño en la baquelita. Evitar calentar en exceso para no dañar el componente. Los condensadores no electrolíticos no requieren orientación.
              .col-lg-5
                figure.m-auto.col-12.col-md-8.col-lg-12
                  img(src='@/assets/curso/tema3/34.png')
            .row.pt-lg-4.col-xl-11.m-auto
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4 Transistores
                p Dispositivo semiconductor que cumple funciones de amplificador, oscilador, conmutador o rectificador. Verificar que la posición del transistor coincida con el diseño del circuito.
              .col-lg-5
                figure.m-auto.col-12.col-md-8.col-lg-12
                  img(src='@/assets/curso/tema3/35.png')
            .row.pt-lg-4.col-xl-11.m-auto
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4 Puentes THT
                p Utilizados para unir una cara de la placa de montaje con la otra. Están hechos de un tubo conductor (aleación de cinc, cobre y plata) para evitar oxidación y facilitar la soldadura.
              .col-lg-5
                figure.m-auto.col-12.col-md-8.col-lg-12
                  img(src='@/assets/curso/tema3/36.png')
            .row.pt-lg-4.col-xl-11.m-auto
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4 Conectores
                p Permiten establecer conexiones mecánicas y eléctricas entre alambres y circuitos impresos. Instalar después de los componentes pequeños para evitar molestias al soldar debido a su tamaño.
              .col-lg-5
                figure.m-auto.col-12.col-md-8.col-lg-12
                  img(src='@/assets/curso/tema3/37.png')
            .row.pt-lg-4.col-xl-11.m-auto
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4 Diodos
                p Soldar sin calentar en exceso para evitar daños internos. Colocar en la posición indicada en el diseño para asegurar el correcto flujo de corriente.
              .col-lg-5
                figure.m-auto.col-12.col-md-8.col-lg-12
                  img(src='@/assets/curso/tema3/38.png')
            .row.pt-lg-4.col-xl-11.m-auto
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4 Circuito Integrado DIP
                p Integrados con disposición DIP, prácticos para prototipos en #[em protoboard], con separación estándar de 0.1" (2.54 mm) entre pines. Verificar que los pines coincidan con la base y alinear el pin 1 con el diseño del circuito.
              .col-lg-5
                figure.m-auto.col-12.col-md-8.col-lg-12
                  img(src='@/assets/curso/tema3/39.png')
            .row.pt-lg-4.col-xl-11.m-auto
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4 Resistores
                p Introducen resistencia eléctrica en el circuito. Debido a su tamaño pequeño, se recomienda montarlos primero. Evitar calentar los extremos en exceso para no dañar su funcionamiento.
              .col-lg-5
                figure.m-auto.col-12.col-md-8.col-lg-12
                  img(src='@/assets/curso/tema3/40.png')
            .row.pt-lg-4.col-xl-11.m-auto
              .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
                h4 Inductores
                p Componente que almacena energía en forma de campo magnético debido a la autoinducción. Al montar en el circuito impreso, asegurar que no haga contacto con otros componentes
              .col-lg-5
                figure.m-auto.col-12.col-md-8.col-lg-12
                  img(src='@/assets/curso/tema3/41.png')


</template>

<script>
export default {
  name: 'Tema3',
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
