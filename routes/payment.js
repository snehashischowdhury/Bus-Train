const express = require("express");

const router = express.Router();

const paymentController =
require("../controllers/paymentController");

router.get("/payment",
paymentController.paymentPage);

module.exports = router;