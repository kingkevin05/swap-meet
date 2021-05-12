const router = require('express').Router();
const { Item, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    Item.findAll({
        attributes: ['id', 'title', 'image_url'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbItemData => res.json(dbItemData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Item.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'image_url', 'title'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbItemData => {
        if (!dbItemData) {
          res.status(404).json({ message: 'No item found with this id' });
          return;
        }
        res.json(dbItemData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', (req, res) => {
    Item.create({
      title: req.body.title,
      image_url: req.body.image_url,
      user_id: req.body.user_id
    })
      .then(dbItemData => res.json(dbItemData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;