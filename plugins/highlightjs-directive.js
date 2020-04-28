import Vue from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'

import 'highlight.js/styles/night-owl.css'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('xml', xml)

Vue.directive('highlight', {
  inserted(el, _binding, _vnode) {
    const blocks = [...el.getElementsByTagName('code')]
    blocks.forEach((target) => hljs.highlightBlock(target))
  },
})
