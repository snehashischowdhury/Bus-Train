const express = require("express");
const path = require("path");

const app = express();

const connectDB = require("./config/db");


const homeRouter = require("./routes/home");
const authRouter = require("./routes/auth");
const bookingRouter = require("./routes/booking");
const paymentRouter = require("./routes/payment");
const ticketRouter = require("./routes/ticket");

connectDB();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Public folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", homeRouter);
app.use("/", authRouter);
app.use("/", bookingRouter);
app.use("/", paymentRouter);
app.use("/", ticketRouter);

// Start server
app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});