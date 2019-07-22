<template lang="pug">
div
  .hero.is-white.animated.slideInDown
    .hero-body
      .container.has-text-centered
        h1.is-size-1.is-size-3-mobile.is-uppercase.has-text-weight-semibold {{ title }}
        p.subtitle.heading {{ date }}
  section.section.animated.slideInUp
    .container.has-text-justified
      .content
        DynamicMarkdown(
          :render-func='renderFunc'
          :static-render-funcs='staticRenderFuncs')
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
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      const publishedDate = new Date(date)
      const published = publishedDate.toLocaleDateString('es-ES', options)

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
