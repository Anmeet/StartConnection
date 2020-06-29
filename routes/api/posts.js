const express = require('express');
const router = express.Router();

//@ route Post api/posts
//@desc register user
//@access Public
router.post('/', (req, res) => {
  console.log(req.body);

  res.send('Posts route');
});

module.exports = router;
