const path = require("path");
const Booking = require("../models/Booking");

exports.trainBookingPage = (req, res) => {

    res.sendFile(path.join(__dirname, "../views/train-booking.html"));

};

exports.busBookingPage = (req, res) => {

    res.sendFile(path.join(__dirname, "../views/bus-booking.html"));

};

exports.passengerPage = (req, res) => {

    res.sendFile(path.join(__dirname, "../views/passenger.html"));

};


exports.createBooking = async (req, res) => {

    try {

        const bookingId =
        "TE" + Math.floor(100000 + Math.random() * 900000);

        await Booking.create({

            ...req.body,

            bookingId

        });

        res.json({

            success: true,

            bookingId

        });

    }

    catch (err) {

        console.log(err);

        res.json({

            success: false,

            message: "Booking Failed"

        });

    }

};

exports.getBooking = async (req, res) => {

    try {

        const booking =
        await Booking.findOne({

            bookingId: req.params.id

        });

        if (!booking) {

            return res.json({

                success: false,

                message: "Booking Not Found"

            });

        }

        res.json({

            success: true,

            booking

        });

    }

    catch (err) {

        console.log(err);

        res.json({

            success: false,

            message: "Server Error"

        });

    }

};