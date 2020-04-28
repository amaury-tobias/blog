const path = require('path')
const Mode = require('frontmatter-markdown-loader/mode')

const articles = require('./content/articles.json')

const dynamicRoutes = generateDynamicRoutes(articles)

module.exports = {
  server: {
    port: 3000,
  },
  generate: {
    routes: dynamicRoutes,
  },
  mode: 'universal',
  router: {
    linkExactActiveClass: 'link-active',
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
        content: 'AMAURY | Portafolio y Blog Personal',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: {
    color: 'black',
    height: '5px',
  },
  css: [
    // '~/assets/main.scss',
    '~/assets/css/tailwind.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'vue2-animate/dist/vue2-animate.min.css',
  ],
  plugins: [
    '~/plugins/fontawesome.js',
    // '~/plugins/axios.js',
    '~/plugins/lazyload.js',
    '~/plugins/lazyImage.js',
    '~/plugins/vueGithubActivity.js',
    '~/plugins/highlightjs-directive.js',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  buildModules: ['@nuxtjs/tailwindcss'],
  axios: {},
  build: {
    // isDev analyze: true,
    extractCSS: true,
    postcss: {
      plugins: { 'postcss-nested': {} },
      preset: {
        autoprefixer: {},
      },
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'content/articles'),
        options: {
          mode: [Mode.VUE_COMPONENT],
          vue: {
            root: 'markdown-body',
          },
        },
      })
    },
  },
}

function generateDynamicRoutes(articles) {
  return ['/404'].concat(articles.map((article) => `/blog/${article.slug}`))
}
