<template lang="pug">
.animated.fadeIn.font-light
  section.mx-auto.px-12.md_px-32.lg_px-40
    .min-h-screen.flex.justify-center.items-center.flex-col
      h1(v-if='error.statusCode === 404').uppercase.text-4xl.title 404.
      h1(v-else).uppercase.text-4xl.title {{ error.statusCode }}
      n-link(to='/').text-2xl Inicio
</template>

<script>
export default {
  props: { error: { type: Object, required: true } }
}
</script>
