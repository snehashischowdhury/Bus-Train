const path = require("path");

exports.ticketPage = (req,res)=>{

    res.sendFile(path.join(__dirname,"../views/ticket.html"));

};