const express = require("express");
const router = express.Router();
const {
  create,
  answer,
  scores,
  checking,
} = require("../controller/Create_Controller");

router.post("/create", create);
router.post("/answer/:name", answer);
router.get("/scores/:name", scores);
router.get("/:name", checking);

module.exports = router;
