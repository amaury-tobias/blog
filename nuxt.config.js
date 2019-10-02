const path = require('path')
const Mode = require('frontmatter-markdown-loader/mode')

const articles = require('./content/articles.json')

const dynamicRoutes = generateDynamicRoutes(articles)

module.exports = {
  server: {
    port: 3000
  },
  generate: {
    routes: dynamicRoutes
  },
  mode: 'universal',
  router: {
    linkExactActiveClass: 'link-active'
  },
  head: {
    htmlAttrs: { lang: 'es', class: 'has-navbar-fixed-bottom' },
    title: 'AMAURY.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: {
    color: 'black',
    height: '5px'
  },
  css: [
    // '~/assets/main.scss',
    '~/assets/css/tailwind.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'vue2-animate/dist/vue2-animate.min.css'
  ],
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/axios.js',
    '~/plugins/lazyload.js',
    '~/plugins/lazyImage.js',
    '~/plugins/vueGithubActivity.js'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],
  axios: {},
  purgeCSS: {
    mode: 'postcss'
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css'
  },
  build: {
    extractCSS: true,
    postcss: {
      plugins: { 'postcss-nested': {} },
      preset: {
        autoprefixer: true
      }
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'content/articles'),
        options: {
          mode: [Mode.VUE_RENDER_FUNCTIONS],
          vue: {
            root: 'dynamicContent'
          }
        }
      })
    }
  }
}

function generateDynamicRoutes(articles) {
  return ['/404'].concat(articles.map(article => `/blog/${article.slug}`))
}
