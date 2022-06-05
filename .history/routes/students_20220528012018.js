var express = require('express');
var router = express.Router();
var { searchStudent, getAllStudents, addStudent, stageStudent } = require('../controller/students.controller');

router.get('/', getAllStudents);
router.post('/', addStudent)
router.get('/search', searchStudent)
router.get('/stage/search', searchStudent)

module.exports = router;