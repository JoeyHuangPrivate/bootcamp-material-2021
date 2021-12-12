const router = require('express').Router();

// Use index.js under the subfolder ./api and ./html
const apiRoutes = require('./api');
const htmlRoutes = require('./html');

// Moved api_routes.js and html_routes.js to ./api and ./html subfolders respectively
// const apiRoutes = require('./api/api_routes');
// const htmlRoutes = require('./html/html_routes');

// api_routes and html_routes are in the same folder as index.js
// const apiRoutes = require('./api_routes');
// const htmlRoutes = require('./html_routes');

// URL endpoint: localhost:3000/api
router.use('/api', apiRoutes);

// URL endpoint: localhost:3000/
router.use('/', htmlRoutes);

module.exports = router;


