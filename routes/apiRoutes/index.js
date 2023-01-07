// Variables
const router = require('express').Router();
const notesRoutes = require('./notesRoutes.js');

// Middleware
router.use(notesRoutes);

// Router
module.exports = router;