<template lang="pug">
div
  .hero.is-medium.animated.slideInDown
    .hero-body
      .container.has-text-centered
        h1.is-size-1.title.is-uppercase POSTS
        h2.subtitle.heading UNKNOWN ME
  .container.has-text-centered.animated.slideInUp
    span(v-for='(post, index) in posts' :key='index')
      div
        n-link(:to='`/blog/${post.slug}`') {{ post.title }}
</template>

<script>
import posts from '~/content/articles.json'
import PostCard from '~/components/Blog/PostCard.vue'

export default {
  components: { 'post-card': PostCard },
  head() {
    return {
      title: 'Posts',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Noticias Index'
        }
      ]
    }
  },
  asyncData() {
    return { posts }
  }
}
</script>
