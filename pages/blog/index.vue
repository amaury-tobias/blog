<template lang="pug">
div.posts.animated.fadeIn
  h3.subtitle.heading posts
  h1.is-uppercase UNKNOWN ME
  .container.has-text-centered.animated.fadeIn
    ul(style='list-style-type: none;')
      post(:post='post' v-for='(post, index) in posts' :key='index')
</template>

<script>
import posts from '~/content/articles.json'
import Post from '~/components/Blog/BlogEntryItem.vue'

export default {
  components: { Post },
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

<style lang="scss" scoped>
.posts {
  max-width: 650px;
  margin: 110px auto 0;
  padding: 0 30px 50px;
  position: relative;

  h1 {
    font-size: 32px;
    margin: 0 0 45px;
    letter-spacing: 1px;
  }
}
</style>
