"use strict";

let express = require("express"), router = express.Router();

router.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

module.exports = router;
