<template lang="pug">
.animated.fadeIn.min-h-full.w-full.font-light.py-24
  .container.mx-auto.px-12.md_px-32.lg_px-40
    h3.text-sm.md_text-base {{ date }}
    h1.break-words.text-2xl.md_text-4xl {{ title }}
    section
      .container.text-left.content
        DynamicMarkdown(
          :render-func='renderFunc'
          :static-render-funcs='staticRenderFuncs')
        .relative.pt-8
          n-link.absolute.right-0.bottom-0(to='/blog') ATRÁS
</template>

<script>
import DynamicMarkdown from '~/components/Markdown/DynamicMarkdown.vue'

export default {
  components: { DynamicMarkdown },
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
  },
  async asyncData({ params, error }) {
    try {
      const fileContent = await import(`~/content/articles/${params.slug}.md`)
      const attr = fileContent.attributes

      const { title, tags, date, author, image } = attr

      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }

      const publishedDate = new Date(date)
      const published = publishedDate.toLocaleString('es', options)

      return {
        title,
        tags,
        image,
        date: published,
        author,
        html: fileContent.html,
        extraComponent: attr.extraComponent,
        renderFunc: fileContent.vue.render,
        staticRenderFuncs: fileContent.vue.staticRenderFns
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Noticia no encontrada' })
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
