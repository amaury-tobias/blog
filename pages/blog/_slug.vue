<template lang="pug">
div
  .post
    h3.subtitle.is-spaced.heading.date {{ date }}
    h1.is-uppercase.is-size-4-mobile.is-size-2-tablet {{ title }}
    section.animated.fadeIn
      .container.has-text-left
        .content
          DynamicMarkdown(
            :render-func='renderFunc'
            :static-render-funcs='staticRenderFuncs')
          n-link#older.blog-nav(to='/blog') ATRÁS
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

<style lang="scss" scoped>
.post {
  @media only screen and (min-device-width: 768px) {
    margin: 110px auto;
  }
  @media only screen and (max-device-width: 768px) {
    margin: 80px auto;
  }
  max-width: 650px;
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
    margin: 0 0 45px;
  }
}
.blog-nav {
  position: fixed;
  height: 20px;
  line-height: 20px;
  font-family: 'Montserrat', 'Helvetica Neue', 'Hiragino Sans GB', 'LiHei Pro', Arial, sans-serif;
  font-size: 15px;
  text-decoration: none;
  letter-spacing: 1px;
  // border-bottom: 3px solid transparent;

  @media only screen and (min-device-width: 768px) {
    right: 2rem;
    bottom: 80px;
  }

  @media only screen and (max-device-width: 768px) {
    position: absolute;
  }
}
#older {
  right: 40px;
  @media only screen and (max-device-width: 768px) {
    right: 0px;
  }
}
#newer {
  @media only screen and (max-device-width: 768px) {
    left: 0px;
  }
  left: 40px;
}
</style>
