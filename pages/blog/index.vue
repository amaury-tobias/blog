<template lang="pug">
.animated.fadeIn.min-h-full.w-full.font-light.py-24
  .container.uppercase.mx-auto.px-12.md_px-32.lg_px-40
    h3.text-sm.md_text-base Posts
    h1.break-words.text-2xl.md_text-4xl UNKNOWN ME
    .flex.items-center.justify-start
      ul.list-none
        li(is='blog-entry-item' :post='post' v-for='post in posts' :key='post.title')
</template>

<script>
import posts from '~/content/articles.json'
import BlogEntryItem from '~/components/Blog/BlogEntryItem.vue'

export default {
  components: { BlogEntryItem },
  asyncData: () => ({ posts }),
  head: () => ({
    title: 'Posts',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Posts'
      }
    ]
  })
}
</script>
