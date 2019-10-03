<template lang="pug">
div
  nav-bar.fixed.inset-x-0.bottom-0
  nuxt
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    'nav-bar': Navbar
  }
}
</script>
