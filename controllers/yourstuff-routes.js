const router = require("express").Router();
const sequelize = require("../config/connection");
const { Item, User, Image } = require("../models");
const withAuth = require("../utils/auth");

// get all items for dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("======================");
  Item.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "image_url",
      "title",
      "created_at",
      
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
      res.render("your-stuff", { items, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Item.findByPk(req.params.id, {
    attributes: [
      "id",
      "image_url",
      "title",
      "created_at",
      
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then(dbItemData => {
      if (dbItemData) {
        const item = dbItemData.get({ plain: true });

        res.render("edit-item", {
          item,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;