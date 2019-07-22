<template lang="pug">
  div
    nav-bar
    main
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
