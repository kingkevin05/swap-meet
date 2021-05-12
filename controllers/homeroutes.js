const router = require('express').Router();

router.get('/', (req, res) => {

    res.render('homepage')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/your-stuff', (req, res) => {
  res.render('your-stuff')
})


module.exports = router
