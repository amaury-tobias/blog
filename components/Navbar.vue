<template lang="pug">
nav.navbar.is-fixed-bottom.animated.slideInUp.is-transparent
  .container
    .navbar-brand
      nuxt-link.navbar-item.Eight_One(to='/')
        span(@click='isActive = false') &lt;ary&gt;
      nuxt-link.navbar-item(to='/blog')
        fa(icon='blog')
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
  name: 'Navbar'
}
</script>
