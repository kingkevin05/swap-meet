const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/your-stuff', (req, res) => {
  res.render('your-stuff')
});

router.get('/single-item', (req, res) => {
  res.render('single-item')
});

router.get('/edit-item', (req, res) => {
  res.render('edit-item')
});

router.get('/item-info', (req, res) => {
  res.render('item-info')
});

module.exports = router;
