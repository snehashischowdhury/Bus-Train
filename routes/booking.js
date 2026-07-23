const express = require("express");

const router = express.Router();

const bookingController = require("../controllers/bookingController");

// Booking Pages
router.get("/train-booking", bookingController.trainBookingPage);

router.get("/bus-booking", bookingController.busBookingPage);

router.get("/passenger", bookingController.passengerPage);

// Booking API
router.post("/booking", bookingController.createBooking);

router.get("/booking/:id", bookingController.getBooking);

module.exports = router;