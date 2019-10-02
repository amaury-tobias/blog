<template lang="pug">
li
  h2
    n-link(:to='`/blog/${post.slug}`') {{ post.title }}
  h4 {{ parseDate(post.date) }}
</template>

<script>
export default {
  name: 'BlogEntryItem',
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

<style lang="postcss" scoped>
body {
  &.dark {
    a {
      &::after {
        @apply bg-purple-500;
      }
    }
  }

  &:not(.dark) {
    a {
      &::after {
        @apply bg-red-500;
      }
    }
  }
}

li {
  @apply py-4;
  @apply relative;
  @apply uppercase;
  h4 {
    @apply text-gray-500;
    @apply tracking-wider;
    @apply text-xs;
  }
  h2 {
    @apply text-gray-600;
    @apply text-xl;
    @apply tracking-wider;
  }
  a {
    @apply no-underline;
    @apply relative;
  }
}

a {
  z-index: 1;

  &::after {
    @apply absolute;
    z-index: -1;
    content: '';
    top: 88%;
    left: -0.1em;
    right: -0.1em;
    bottom: 0;
    transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
  }
  &:hover {
    @apply text-gray-800;
    &::after {
      top: 0%;
    }
  }
}
</style>
