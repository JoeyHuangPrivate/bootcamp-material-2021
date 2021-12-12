var express = require("express");
var path = require("path");

// Using index.js file under ./routes eliminates the need to require api_routes and html_routes manually
var routes = require('./routes');
// var apiRoutes = require('./routes/api_routes');
// var htmlRoutes = require('./routes/html_routes');

var app = express();
var PORT = process.env.PORT || 3001;

// ??body parser for incoming json data to add req.body available
app.use(express.json());

// Set up static content root folder
app.use(express.static(path.join(process.cwd(), 'public')));

// var students = [
//     {
//         username: "joehan",
//         firstName: "Joe",
//         lastName: "Han",
//         address: {
//             street: "100 Main Street",
//             city: "New York",
//             state: "New york",
//             location: {
//                 lat: 0.0,
//                 long: 0.0
//             }
//         }
//     },
//     {
//         username: "jemelwilliams",
//         firstName: "Jemel",
//         lastName: "Williams",
//         address: {
//             street: "101 Main Street",
//             city: "New York",
//             state: "New york",
//             location: {
//                 lat: 0.0,
//                 long: 0.0
//             }
//         }
//     },
//     {
//         username: "hungyiuwong",
//         firstName: "Yungyiu",
//         lastName: "Wong",
//         address: {
//             street: "102 Main Street",
//             city: "New York",
//             state: "New york",
//             location: {
//                 lat: 0.0,
//                 long: 0.0
//             }
//         }
//     }
// ]

// This route is not needed if static content root folder is set with express.static() middleware. In this case,
// express will look for index.html in the static content root folder and serve it to browser to display
// app.get("/", (req, res) => {
//     console.log('GET /');
//     console.log('req.path:', req.path);
//     console.log('req.url', req.url);
//     res.sendFile(path.join(__dirname, "./public/index.html"));
//     // response.sendFile(path.join(process.cwd(), "index.html"));
// })

// app.get("/api/students", (request, response) => {
//     console.log('GET /api/students');
//     response.status(200).json(students);
// })

// app.post("/api/students", (req, res) => {
//     console.log("POST /api/student");
//     console.log("req.body: ", req.body);

//     students.push(req.body);
//     console.log(students);

//     return res.status(200).json(students);

// })

app.use(routes);
// app.use(htmlRoutes);
// app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`Server now is listening on port ${PORT}`);
})