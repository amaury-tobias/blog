<template lang="pug">
nav.animated.slideInUp.shadow.z-50(:class='{ dark: darkMode }')
  .container.mx-auto.px-4
    .flex.items-center.py-4.justify-start
      nuxt-link(to='/').navbar-brand
        span AMAURY.
      nuxt-link(to='/blog').navbar-item
        fa(icon='rss').h-4.w-4
      a(rel='me' href='https://github.com/amaury-tobias').navbar-item
        fa(:icon="['fab', 'github']").h-4.w-4
      a(rel='me' href='https://mstdn.mx/@amaury_tobias').navbar-item
        fa(:icon="['fab', 'mastodon']").h-4.w-4
      a(rel='me' href='https://twitter.com/amaury_tobias').navbar-item
        fa(:icon="['fab', 'twitter']").h-4.w-4
      span(@click='darkMode = !darkMode').navbar-item.cursor-pointer
        fa(icon='moon').h-4.w-4
</template>

<script>
// @vue/component
export default {
  name: 'NavBar',
  data: () => ({ darkMode: false }),
  watch: {
    darkMode() {
      this.$store.dispatch('theme/setDarkMode', this.darkMode)
    }
  },
  beforeMount() {
    this.darkMode = JSON.parse(localStorage.getItem('darkMode'))
    this.$store.dispatch('theme/setDarkMode', this.darkMode)
  }
}
</script>

<style lang="postcss" scoped>
nav {
  &.dark {
    @apply bg-gray-900;
    .navbar-item,
    .navbar-brand {
      &:hover svg > path,
      &:hover > span {
        @apply text-purple-600;
      }
    }
  }
  &:not(.dark) {
    @apply bg-gray-100;
    .navbar-item,
    .navbar-brand {
      &:hover svg > path,
      &:hover > span {
        @apply text-red-600;
      }
    }
  }

  .navbar-item,
  .navbar-brand {
    @apply mx-2;
  }
}
</style>
