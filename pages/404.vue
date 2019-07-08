<template lang="pug">
div
  .hero.is-medium.animated.slideInDown.portada
    .hero-body
      .container.has-text-centered
        h1.is-size-1.title.is-uppercase 404
        n-link(to='/') Inicio
</template>

<script>
export default {
  head() {
    return {
      title: '404'
    }
  }
}
</script>
