<template lang="pug">
  DynamicMarkdown(:name="slug")
</template>

<script>
import DynamicMarkdown from '~/components/Markdown/DynamicMarkdown.vue'

export default {
  name: 'Slug',
  components: { DynamicMarkdown },
  asyncData({ params }) {
    return {
      slug: params.slug,
    }
  },
  data: () => ({
    title: '',
    date: null,
  }),
  // head() {
  //   return {
  //     title: this.title,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: 'My custom description',
  //       },
  //     ],
  //   }
  // },
}
</script>

<style lang="postcss">
body {
  &.dark {
    .content a {
      @apply no-underline;
      @apply text-purple-500;
      &:hover {
        @apply text-purple-400;
      }
    }
  }

  &:not(.dark) {
    .content a {
      @apply no-underline;
      @apply text-red-500;
      &:hover {
        @apply text-red-400;
      }
    }
  }
}

ul {
  @apply list-disc;
  @apply list-inside;
  @apply my-4;
}
h3 {
  @apply text-gray-500;
  @apply tracking-wider;
  @apply uppercase;
}
h1 {
  @apply uppercase;
  @apply mb-4;
}
</style>
