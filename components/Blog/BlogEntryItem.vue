<template lang="pug">
li.has-text-justified
  h2
    n-link(:to='`/blog/${post.slug}`') {{ post.title }}
  h4 {{ parseDate(post.date) }}
</template>

<script>
export default {
  name: 'Post',
  props: { post: { type: Object, required: true } },
  methods: {
    parseDate: date => {
      return new Date(date).toLocaleString('es', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  padding: 0.8rem 0 0.8rem;
  position: relative;
  h4 {
    font-size: 0.7rem;
    color: #999;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  h2 {
    font-size: 1.3rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 88%;
      left: -0.1em;
      right: -0.1em;
      bottom: 0;
      transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
      background-color: #f66;
    }
    &:hover::after {
      top: 0%;
    }
  }
}
</style>
