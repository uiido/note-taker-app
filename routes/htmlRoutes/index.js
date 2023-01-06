// Required
const path = require("path");
const router = require('express').Router();

// Router Paths
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// Router
module.exports = router;