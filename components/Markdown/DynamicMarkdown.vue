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
  props: ['renderFunc', 'staticRenderFuncs'],
  created() {
    this.templateRender = this.renderFunc
    this.$options.staticRenderFns = this.staticRenderFuncs
  },
  // mounted() {
  // const targets = document.querySelectorAll('code')
  // targets.forEach(target => {
  // hljs.highlightBlock(target)
  // })
  // },
  render(createElement) {
    return this.templateRender ? this.templateRender() : createElement('div', 'error')
  }
}
</script>

<style lang="postcss">
@media only screen and (min-width: 768px) {
  .dynamicContent {
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
