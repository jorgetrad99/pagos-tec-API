const express = require('express');
const router = express.Router();
const Student = require('../models/students');

//POST: Create a new student
router.post('/', (req, res) => {
  student = new Student({
    controlNumber: req.body.studentControlNumber,
    institutionalEmail: req.body.studentInstitutionalEmail,
    name: req.body.studentName,
    firstLastName: req.body.studentFirstLastName,
    secondLastName: req.body.studentSecondLastName,
    career: {
      name: req.body.careerName,
      level: req.body.careerLevel,
      createdAt: req.body.careerCreatedAt,
      modifiedAt: req.body.careerModifiedAt,
    },
    createdAt: req.body.studentCreatedAt,
    modifiedAt: req.body.studentModifiedAt,
  });

  student
    .save()
    .then((student) => {
      res.send(student);
    })
    .catch((error) => {
      res.status(500).send("Student wasn't stored in  the database");
    });
});

/* {
	"controlNumber": "18800272",
  "institutionalEmail": "iti.18800272@itconkal.edu.mx",
  "name": "Jorge Elias",
  "firstLastName": "Trad",
  "secondLastName": "López",
	"career": {
		"name": "TICS",
		"level": "2",
		"createdAt": "hoy",
		"modifiedAt": "hoy",
    },
  "createdAt": "hoy",
	"modifiedAt": "hoy",
} */

module.exports = router;
