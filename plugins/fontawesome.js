import Vue from 'vue'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faRss, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faMastodon, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

library.add(faRss, faMoon, faGithub, faMastodon, faTwitter)
Vue.component('fa', FontAwesomeIcon)
