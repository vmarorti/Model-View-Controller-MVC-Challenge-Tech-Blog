const router = require('express').Router();
// Import the routes. This is how we make our routes modular.
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');

// When a request is made to the /users or /blogs path, it will be directed to the index.js in the /users or /blogs folder.
router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
