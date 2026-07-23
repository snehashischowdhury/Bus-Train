const ticketPassenger = document.getElementById("ticketPassenger");
const ticketBookingID = document.getElementById("ticketBookingID");
const ticketVehicle = document.getElementById("ticketVehicle");
const ticketCoach = document.getElementById("ticketCoach");
const ticketRoute = document.getElementById("ticketRoute");
const ticketDate = document.getElementById("ticketDate");
const ticketSeat = document.getElementById("ticketSeat");
const ticketFare = document.getElementById("ticketFare");
const ticketPayment = document.getElementById("ticketPayment");

const coachRow = document.getElementById("coachRow");

const printBtn = document.getElementById("printBtn");
const downloadBtn = document.getElementById("downloadBtn");
const homeButton = document.getElementById("homeButton");


async function loadTicket() {

    const bookingID = localStorage.getItem("bookingID");

    if (!bookingID) {

        alert("No booking found.");

        window.location.href = "/";

        return;

    }

    try {

        const response = await fetch("/booking/" + bookingID);

        const data = await response.json();

        if (!data.success) {

            alert("Booking not found.");

            window.location.href = "/";

            return;

        }

        const booking = data.booking;

        ticketPassenger.innerText = booking.passengerName;

        ticketBookingID.innerText = booking.bookingId;

        ticketVehicle.innerText = booking.vehicle;

        ticketCoach.innerText = booking.coach;

        ticketRoute.innerText =
            booking.source + " → " + booking.destination;

        ticketDate.innerText = booking.journeyDate;

        ticketSeat.innerText = booking.seat;

        ticketFare.innerText = "₹" + booking.fare;

        ticketPayment.innerText = booking.paymentMethod;


        if (booking.vehicle.toLowerCase().includes("bus")) {

            coachRow.style.display = "none";

        }

    }

    catch (err) {

        console.log(err);

        alert("Unable to load ticket.");

    }

}

loadTicket();


printBtn.addEventListener("click",function(){

    window.print();

});


downloadBtn.addEventListener("click", function () {

    const ticket = document.querySelector(".ticket-card");

    html2canvas(ticket).then(function(canvas){

        const link = document.createElement("a");

        link.download = "TravelEaZ-Ticket.png";

        link.href = canvas.toDataURL("image/png");

        link.click();

    });

});


homeButton.addEventListener("click",function(){

    localStorage.removeItem("vehicle");
    localStorage.removeItem("route");
    localStorage.removeItem("seat");
    localStorage.removeItem("coach");
    localStorage.removeItem("fare");
    localStorage.removeItem("paymentMethod");
    localStorage.removeItem("bookingID");
    localStorage.removeItem("passengerName");
    localStorage.removeItem("passengerAge");
    localStorage.removeItem("passengerGender");
    localStorage.removeItem("passengerPhone");
    localStorage.removeItem("passengerEmail");

    window.location.href="/";

});