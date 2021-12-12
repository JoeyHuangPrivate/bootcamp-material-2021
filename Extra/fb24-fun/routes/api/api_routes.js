const router = require('express').Router(); // mini-app
const studentList = require('../../db/students');

console.log("studentList: ", studentList);

// URL endpoint: localhost:3000/api/students
router.get("/students", (request, response) => {
    console.log('GET /api/students');
    response.status(200).json(studentList);
})

// URL endpoint: localhost:3000/api/students
router.post("/students", (req, res) => {
    console.log("POST /api/student");
    console.log("req.body: ", req.body);

    studentList.push(req.body);
    console.log(studentList);

    return res.status(200).json(studentList);

})

module.exports = router