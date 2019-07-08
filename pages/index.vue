<template lang="pug">
div
  #head.hero.is-fullheight-with-navbar.animated.slideInDown
    .hero-body
      .container.has-text-centered
        h1.is-size-1.is-uppercase Amaury.
        h2.subtitle.heading DESARROLLADOR WEB FULL-STACK
        a(href='#about')
          fa(icon='chevron-down' size='2x')
  
  #about.hero.is-fullheight-with-navbar.is-light
    .hero-body
      .container.has-text-left
        .float.is-hidden-mobile
          a(href='#head')
            fa(icon='chevron-up')
          br
          a(href='#eduexp')
            fa(icon='chevron-down')
        p.is-size-3.is-uppercase Acerca de mi
        p.subtitle.heading Quien soy y de dónde vengo
        .has-text-weight-light
          p.is-family-line-height.is-size-5.block ◾ Mi interés por la programación comenzó durante el bachillerato con las tecnologías de Java y TurboPascal2000, llevadas de manera curricular, y más adelante descubrí mi pasión por la programación al crear pequeñas aplicaciones para Windows Mobile de manera autodidacta.
          p.is-family-line-height.is-size-5.block ◾ Actualmente curso el Séptimo semestre de la Licenciatura en Multimedia y Animación Digital (LMAD) en la Universidad Autónoma de Nuevo León (UANL), en donde de manera tanto individual como en colaboración con mis compañeros desarrollo proyectos con fines educativos y de uso propio.
          p.is-family-line-height.is-size-5.block ◾ Además, realizo prácticas en el Centro de Servicios en Informática (CSI) como desarrollador web Full Stack utilizando las tecnologías de Java: Spring, Struts y JS: Vue.js, jQuery.

  #eduexp.hero.is-fullheight-with-navbar.is-dark
    .hero-body
      .container
        .float.is-hidden-mobile
          a(href='#about')
            fa(icon='chevron-up')
          br
          a(href='#skills')
            fa(icon='chevron-down')
        .columns
          .column.is-offset-2-widescreen.is-offset-1-tablet
            p.is-size-3.is-uppercase Educación
            p.subtitle.heading Todo lo que he aprendido
            .has-text-weight-light
              p.is-family-line-height.is-size-6.block
                span.is-size-5 ◽ 2016 - Presente
                br
                span Universidad Autónoma de Nuevo León
                br
                span Multimedia y Animación Digital
                br
                span San Nicolás de los Garza, Nuevo León
              p.is-family-line-height.is-size-6.block
                span.is-size-5 ◽ Febrero 2018 - Septiembre 2018
                br
                span IOS Development Lab UANL
                br
                span Swift, iOS App Development 
              p.is-family-line-height.is-size-6.block
                span.is-size-5 ◽ 2012 - 2015
                br
                span Colegio de Bachilleres; Bachillerato General
                br
                span Cedral, SLP
          .column
            p.is-size-3.is-uppercase Experiencia
            p.subtitle.heading Lugares donde he trabajado
            .has-text-weight-light
              p.is-family-line-height.is-size-6.block
                span.is-size-5 ◽ 2018 - Presente
                br
                span Centro de Servicios en Informática
                br
                a http://www.csi.uanl.mx/
              p.is-family-line-height.is-size-6.block
                span.is-size-5 ◽ Veranos
                br
                span Atención al cliente, ventas de mostrador

  #skills.hero.is-fullheight-with-navbar
    .hero-body
      .container
        .float.is-hidden-mobile
          a(href='#eduexp')
            fa(icon='chevron-up')
          br
          a(href='#github')
            fa(icon='chevron-down')
        .columns
          .column.is-offset-2-widescreen.is-offset-1-tablet
            p.is-size-3.is-uppercase Habilidades
            p.subtitle.heading Todo lo que se hacer
            .has-text-weight-light
              p.is-family-line-height.is-size-6.block
                span.is-size-5 CSS&nbsp;
                span.is-size-7 CSS3/SASS
                //progress.progress.is-dark(value='20' max='100') 15%
              p.is-family-line-height.is-size-6.block
                span.is-size-5 HTML&nbsp;
                span.is-size-7 HTML 5/Pug/Thymeleaf
                //progress.progress.is-dark(value='20' max='100') 15%
              p.is-family-line-height.is-size-6.block
                span.is-size-5 JVM&nbsp;
                span.is-size-7 Spring/Struts/Android
                //progress.progress.is-dark(value='20' max='100') 15%
              p.is-family-line-height.is-size-6.block
                span.is-size-5 JS&nbsp;
                span.is-size-7 Node/Express
                //progress.progress.is-dark(value='20' max='100') 15%
              p.is-family-line-height.is-size-6.block
                span.is-size-5 VUE&nbsp;
                span.is-size-7 Vuex/Vue Router/Nuxt
                //progress.progress.is-dark(value='20' max='100') 15%
              p.is-family-line-height.is-size-6.block
                span.is-size-5 SWIFT
                //progress.progress.is-dark(value='20' max='100') 15%
              p.is-family-line-height.is-size-6.block
                span.is-size-5 DB&nbsp;
                span.is-size-7 MySQL/MongoDB
                //progress.progress.is-dark(value='20' max='100') 15%
              p.is-family-line-height.is-size-6.block
                span.is-size-5 TOOLS&nbsp;
                span.is-size-7 VSCode/Xcode/Nginx/Git/BASH
                //progress.progress.is-dark(max='100') 15%
          .column
            p.is-size-3.is-uppercase Intereses
            p.subtitle.heading OUT OF OFFICE
            .columns.is-mobile
              .column.has-text-weight-light
                p.is-family-line-height.is-size-6 Lectura
                p.is-family-line-height.is-size-6.block Música
              .column.has-text-weight-light
                p.is-family-line-height.is-size-6 Videojuegos

  #github.hero.is-dark
    .hero-body
      .container
        .float.is-hidden-mobile
          a(href='#skills')
            fa(icon='chevron-up')
        #github.card
          no-ssr
            github-feed(login='amaury-tobias')

  footer.footer
    .content.has-text-weight-light.has-text-centered
      p
        strong CONTACTO
        p Monterrey, México.
        p amaury.tobiasqr@gmail.com
        p (488)-112-8398
      p
        | Hecho con el ♥️ por&nbsp;
        strong  Amaury Tobias&nbsp;
        | utilizando Vue.js + Nuxt.
      a(href='https://bulma.io')
        lazy-image.image-footer(imageURL='/made-with-bulma--black.png' classes='is-128x128')
</template>

<style scoped>
@media (min-width: 768px) {
  .container {
    padding: 0 3rem !important;
  }
}
.float {
  position: absolute;
  top: 50%;
  right: 1rem;
}
progress {
  height: 0.2rem;
}
.footer {
  padding: 3rem 1.5rem 0 !important;
}
.image-footer {
  padding: 1.5rem 0 0 0;
  margin: 0 auto;
}
.is-family-line-height {
  line-height: 2rem;
}
</style>
