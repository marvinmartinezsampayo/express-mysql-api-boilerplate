const express = require('express');
const router = express.Router();

// Child endpoints:
const tables = require('./tables/index');

router.get('/', (req, res) => {
  res.status(200).json({
    children: 'Go to /api/v1/emojies to interact with sample children services 👶',
    message: 'This is the api base path 🍓',
  });
});

router.use('/tables', tables);

module.exports = router;
