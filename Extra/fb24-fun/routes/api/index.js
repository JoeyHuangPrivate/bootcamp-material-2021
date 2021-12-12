const router = require('express').Router();
const apiRoutes = require('./api_routes');

// URL endpoint: localhost:3000/api
router.use('/', apiRoutes);

module.exports = router;