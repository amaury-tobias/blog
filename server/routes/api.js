const { Router } = require('express')
const router = Router()

router.get('/noticias', (req, res, next) => {
  res.json([
    {
      slug: 1,
      title: 'Nueva Pagina',
      description: 'Estrenamos nueva pagina, que esperas para visitarnos',
      image: 'https://bulma.io/images/placeholders/480x320.png'
    }
  ])
})

module.exports = router
