const path = require("path");

exports.paymentPage = (req,res)=>{

    res.sendFile(path.join(__dirname,"../views/payment.html"));

};