const express = require("express");
const { listUser } = require("../controllers.js/userController");
const router = express.Router();

router.get("/", listUser);

module.exports = router;
