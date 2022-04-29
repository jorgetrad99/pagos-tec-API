const express = require('express');
const router = express.Router();
const Career = require('../models/careers');

//POST: Create a new career
router.post('/', (req, res) => {
  const { careerName, careerLevel, careerCreatedAt, careerModifiedAt } =
    req.body;
  career = new Career({
    careerName,
    careerLevel,
    careerCreatedAt,
    careerModifiedAt,
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
