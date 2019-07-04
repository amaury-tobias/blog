<template lang="pug">
div
  .hero.is-fullheight-with-navbar.animated.slideInDown
    .hero-body
      .container.has-text-centered
        h1.is-size-1.title.is-uppercase Amaury.
        h2.subtitle.heading DESARROLLADOR
        a(href='#portfolio')
          fa(icon='chevron-down' size='2x')
  #portfolio.hero.is-fullheight-with-navbar.animated.slideInUp
    .hero-head
      .container.has-text-centered
        p.title.is-size-1.is-uppercase Portfolio
    .hero-body
      .container

  .hero.is-fullheight-with-navbar
    .hero-body
      .container
        #github.card
          no-ssr
            github-feed(login='amaury-tobias')
  footer.footer
    .content.has-text-centered
      p
        | Hecho con el ♥️ por 
        strong  Amaury Tobias
      lazy-image.image-footer(imageURL='/made-with-bulma--black.png' classes='is-128x128')
</template>

<style scoped>
.avatar {
  display: none !important;
}

.image-footer {
  margin: 0 auto;
}
</style>
