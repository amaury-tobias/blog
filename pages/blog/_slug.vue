<template lang="pug">
.animated.fadeIn.min-h-full.w-full.font-light.py-24
  .container.mx-auto.px-12.md_px-32.lg_px-40
    h3.text-sm.md_text-base {{ date }}
    h1.break-words.text-2xl.md_text-4xl {{ title }}
    section
      .container.text-left.content
        div(ref='container')
        .relative.pt-8
          n-link.absolute.right-0.bottom-0(to='/blog') ATRÁS
</template>

<script>
import Vue from 'vue'

import DynamicMarkdown from '~/components/Markdown/DynamicMarkdown.vue'
const ComponentClass = Vue.extend(DynamicMarkdown)

export default {
  name: 'Slug',
  asyncData({ params }) {
    return {
      slug: params.slug
    }
  },
  data: () => ({
    title: '',
    date: null,
    episodeContent: null
  }),
  created() {
    import(`~/content/articles/${this.slug}.md`).then(c => {
      this.title = c.attributes.title
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
      const publishedDate = new Date(c.attributes.date)
      this.date = publishedDate.toLocaleString('es', options)

      const componente = new ComponentClass({
        propsData: {
          renderFunc: c.vue.render,
          staticRenderFuncs: c.vue.staticRenderFns
        }
      })
      componente.$mount()
      this.$refs.container.appendChild(componente.$el)
    })
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
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
