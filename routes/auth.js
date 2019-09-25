const express = require("express");
const router = express.Router();

router.post("/oath/google", (req, res) => {
  res.json("wssa googgit le");
});

router.post("/oath/facebook", (req, res) => {
  res.json("wssa fb");
});
module.exports = router;
