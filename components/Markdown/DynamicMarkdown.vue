<template lang="pug">
.animated.fadeIn.min-h-full.w-full.font-light.py-24
  .container.mx-auto.px-12.md_px-32.lg_px-40
    h3.text-sm.md_text-base {{ date }}
    h1.break-words.text-2xl.md_text-4xl {{ title }}
    section
      .container.text-left.content
        div(ref='container')
          component(:is='markdownContent' v-highlight)
        .relative.pt-8
          n-link.absolute.right-0.bottom-0(to='/blog') ATRÁS
</template>

<script>
import ErrorComponent from '~/layouts/error.vue'

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    title: '',
    date: '',
    error: null,
  }),
  methods: {
    markdownContent() {
      return import(`~/content/articles/${this.name}.md`)
        .then((fmd) => {
          this.title = fmd.attributes.title
          const publishedDate = new Date(fmd.attributes.date)
          this.date = publishedDate.toLocaleString('es', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
          return fmd.vue.component
        })
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.error(e)
          this.error = e
          return ErrorComponent
        })
    },
  },
}
</script>

<style lang="postcss">
@media only screen and (min-width: 768px) {
  .markdown-body {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}

pre {
  padding: 0 !important;
  & > code {
    padding: 1rem;
    display: block;
  }
}

:not(pre) > code {
  display: inline;
}
</style>
