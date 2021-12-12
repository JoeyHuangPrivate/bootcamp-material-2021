const router = require('express').Router();
const path = require('path');

// URL endpoint: localhost:3000/
router.get("/", (req, res) => {
    console.log('GET /');
    console.log('req.path:', req.path);
    console.log('req.url', req.url);
    res.sendFile(path.join(__dirname, "../public/index.html"));
    // res.sendFile(path.join(process.cwd(), "index.html"));
});

module.exports = router;

