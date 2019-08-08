<script>
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/nord.css'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('xml', xml)

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['renderFunc', 'staticRenderFuncs', 'extraComponent'],
  created() {
    // eslint-disable-next-line no-new-func
    this.templateRender = new Function(this.renderFunc)()
    // eslint-disable-next-line no-new-func
    this.$options.staticRenderFns = new Function(this.staticRenderFuncs)()
  },
  mounted() {
    const targets = document.querySelectorAll('code')
    targets.forEach(target => {
      hljs.highlightBlock(target)
    })
  },
  render(createElement) {
    return this.templateRender ? this.templateRender() : createElement('div', 'Rendering')
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 768px) {
  .dynamicContent {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}

.content figure {
  margin-left: 0 !important;
  margin-right: 0 !important;
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
