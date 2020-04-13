<template lang="pug">
.animated.fadeIn.font-light
  section.mx-auto.px-12.md_px-32.lg_px-40
    .min-h-screen.flex.justify-center.items-center.flex-col
      h1.uppercase.text-4xl.title 404.
      n-link(to='/').text-2xl Inicio
</template>

<script>
export default {
  head() {
    return {
      title: '404',
    }
  },
}
</script>
