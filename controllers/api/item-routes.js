const router = require("express").Router();
const { Item, User } = require("../../models");
const withAuth = require("../../utils/auth");

// get all users
router.get("/", (req, res) => {
  Item.findAll({
    attributes: ["id", "title", "image_url", "item_description"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then(dbItemData => res.json(dbItemData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Item.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "image_url", "title", "item_description"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then(dbItemData => {
      if (!dbItemData) {
        res.status(404).json({ message: "No item found with this id" });
        return;
      }
      res.json(dbItemData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Post new item
router.post("/", withAuth, (req, res) => {
  Item.create({
    title: req.body.title,
    image_url: req.body.image_url,
    user_id: req.session.user_id,
    item_description: req.body.item_description,
  })
    .then(dbItemData => res.json(dbItemData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Item.update(
    {
      title: req.body.title,
      item_description: req.body.item_description,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(dbItemData => {
      if (!dbItemData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbItemData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE item
router.delete("/:id", withAuth, (req, res) => {
  Item.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(dbItemData => {
      if (!dbItemData) {
        res.status(404).json({ message: "No item found with this id" });
        return;
      }
      res.json(dbItemData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
