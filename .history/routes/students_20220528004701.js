var express = require('express');
var router = express.Router();
var { searchStudent, getAllStudents, addStudent } = require('../controller/students.controller');

router.get('/', getAllStudents);
router.post('/', addStudent)

module.exports = router;