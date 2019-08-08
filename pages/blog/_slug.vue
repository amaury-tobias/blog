<template lang="pug">
div
  .post
    h3.subtitle.is-spaced.heading.date {{ date }}
    h1.is-size-3.is-uppercase.title {{ title }}
    section.animated.fadeIn
      .container.has-text-left
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
        year: 'numeric',
        month: 'short',
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

<style lang="scss" scoped>
.post {
  max-width: 650px;
  margin: 110px auto;
  padding: 0 30px 50px;
  position: relative;

  .date {
    font-family: 'Montserrat', 'Helvetica Neue', 'Hiragino Sans GB', 'LiHei Pro', Arial, sans-serif;
    font-size: 13px;
    color: #999;
    margin: 0 0 30px;
    letter-spacing: 1px;
  }
  h1 {
    font-size: 32px;
    margin: 0 0 45px;
    letter-spacing: 1px;
  }
}
</style>
