const router = require('express').Router();
const sequelize = require("../config/connection");
const { Item, User } = require('../models');

// get all items for homepage
router.get("/", (req, res) => {
  console.log("======================");
  Item.findAll({
    attributes: [
      "id",
      "image_url",
      "title",
      "created_at",
      "item_description"
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then(dbItemData => {
      const items = dbItemData.map(item => item.get({ plain: true }));

      res.render("homepage", {
        items,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single item
router.get("/item/:id", (req, res) => {
  Item.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "image_url",
      "title",
      "created_at",
      "item_description"
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then(dbItemData => {
      if (!dbItemData) {
        res.status(404).json({ message: "No items found with this id" });
        return;
      }

      const item = dbItemData.get({ plain: true });

      res.render("single-item", {
        item,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get('/signup', (req, res) => {
  res.render('signup')
});

// router.get('/edit-item', (req, res) => {
//   res.render('edit-item')
// });

// router.get('/item-info', (req, res) => {
//   res.render('item-info')
// });



module.exports = router;
