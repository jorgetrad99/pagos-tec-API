const express = require('express');
const router = express.Router();
const Career = require('../models/career');

//POST: Create a new career
router.post('/', (req, res) => {
  career = new Career({
    name: req.body.careerName,
    level: req.body.careerLevel,
    createdAt: req.body.careerCreatedAt,
    modifiedAt: req.body.careerModifiedAt,
  });

  career
    .save()
    .then((career) => {
      res.send(career);
    })
    .catch((error) => {
      res.status(500).send("career wasn't stored in  the database: ", error);
    });
});

module.exports = router;
