const router = require('express').Router();
const htmlRoutes = require('./html_routes');

// URL endpoint: localhost:3000/
router.use('/', htmlRoutes);

module.exports = router;