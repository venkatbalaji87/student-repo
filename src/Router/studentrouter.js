const express = require("express");
const students = require("../studentDetail");

const studentRouter = express.Router();

studentRouter
  .post("/", (req, res) => {
    if (req.body.id && req.body.firstName) {
      students.push(req.body);
      res.status(200).json({ message: "Student created successfully" });
    } else {
      res.status(400).send("Bad Request");
    }
  })
  .get("/:id", (req, res) => {
    // const studentId = req.params.id;
    const { id = "" } = req.params;
    const requiredStudent = students.find(student => {
      if (parseInt(id) === student.id) return true;
      else return false;
    });
    res.status(200).json({ student: requiredStudent });
  })
  .patch("/:id", (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age, gender, scores } = req.body;

    let requiredStudentIndex;
    const requiredStudent = students.find((student, studentIndex) => {
      if (parseInt(id) === student.id) {
        requiredStudentIndex = studentIndex;
        return true;
      } else return false;
    });

    console.log(requiredStudent);
    console.log(requiredStudentIndex);

    res.send("ok");
  });

module.exports = studentRouter;
