<template lang="pug">
div
  .hero.is-fullheight-with-navbar.animated.slideInDown.is-white
    .hero-body
      .container.has-text-centered
        h1(v-if='error.statusCode === 404').is-size-1.title.is-uppercase 404
        h1(v-else).is-size-1.title.is-uppercase {{ error.statusCode }}
        // h2.subtitle.heading {{ error.message }}
        n-link(to='/') Inicio
</template>

<script>
export default {
  props: { error: { type: Object, required: true } }
}
</script>
