<template lang="pug">
div
  .hero
    .hero-body
      .container.has-text-centered.animated.fadeIn
        h1.is-size-1.title.is-uppercase POSTS
        h2.subtitle.heading UNKNOWN ME
  .container.has-text-centered.animated.fadeIn
    span(v-for='(post, index) in posts' :key='index')
      p
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
