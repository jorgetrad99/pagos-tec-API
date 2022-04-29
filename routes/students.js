const express = require('express');
const router = express.Router();
const Student = require('../models/students');

//POST: Create a new student
router.post('/', (req, res) => {
  const {
    studentControlNumber,
    studentInstitutionalEmail,
    studentName,
    studentFirstLastName,
    studentSecondLastName,
    /* careerName,
    careerLevel */
  } = req.body;

  student = new Student({
    studentControlNumber,
    studentInstitutionalEmail,
    studentName,
    studentFirstLastName,
    studentSecondLastName,
    /* career: {
      careerName,
      careerLevel
    }, */
  });

  student
    .save()
    .then((student) => {
      res.send(student);
    })
    .catch((error) => {
      res.status(500).send("Student wasn't stored in  the database: " + error);
    });
});

/* {
	"controlNumber": "18800272",
  "institutionalEmail": "iti.18800272@itconkal.edu.mx",
  "studentName": "Jorge Elias",
  "studentFirstLastName": "Trad",
  "studentSecondLastName": "López",
	"career": {
		"careerName": "TICS",
		"careerLevel": "2"
    }
} */

module.exports = router;
