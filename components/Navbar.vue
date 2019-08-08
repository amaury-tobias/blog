<template lang="pug">
nav.navbar.is-fixed-bottom.is-transparent
  .container
    .navbar-brand.animated.slideInUp
      nuxt-link.navbar-item(to='/')
        span AMAURY.
      nuxt-link.navbar-item(to='/blog')
        fa(icon='rss')
      a.navbar-item(rel='me' href='https://github.com/amaury-tobias')
        fa(:icon="['fab', 'github']")
      a.navbar-item(rel='me' href='https://mstdn.mx/@amaury_tobias')
        fa(:icon="['fab', 'mastodon']")
      a.navbar-item(rel='me' href='https://twitter.com/amaury_tobias')
        fa(:icon="['fab', 'twitter']")
</template>

<script>
// @vue/component
export default {
  name: 'NavBar'
}
</script>
