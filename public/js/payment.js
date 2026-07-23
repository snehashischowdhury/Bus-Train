const summaryPassenger = document.getElementById("summaryPassenger");
const summaryVehicle = document.getElementById("summaryVehicle");
const summaryCoach = document.getElementById("summaryCoach");
const summaryRoute = document.getElementById("summaryRoute");
const summarySeat = document.getElementById("summarySeat");
const summaryDate = document.getElementById("summaryDate");
const summaryFare = document.getElementById("summaryFare");

const coachRow = document.getElementById("coachRow");



const paymentForm = document.getElementById("paymentForm");


summaryPassenger.innerText =
    localStorage.getItem("passengerName");

summaryVehicle.innerText =
    localStorage.getItem("vehicle");

summaryRoute.innerText =
    localStorage.getItem("route");

summarySeat.innerText =
    localStorage.getItem("seat");

summaryDate.innerText =
    localStorage.getItem("date");

summaryFare.innerText =
    localStorage.getItem("fare");

const coach =
    localStorage.getItem("coach");

if (coach) {

    summaryCoach.innerText = coach;

}


const vehicle =
    localStorage.getItem("vehicle");

if (vehicle.toLowerCase().includes("bus")) {

    coachRow.style.display = "none";

}


paymentForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const paymentMethod =
        document.querySelector('input[name="payment"]:checked');

    if (!paymentMethod) {

        alert("Please select a payment method.");

        return;

    }


    localStorage.setItem(
        "paymentMethod",
        paymentMethod.value
    );


    const bookingData = {

        userEmail: localStorage.getItem("userEmail"),

        passengerName: localStorage.getItem("passengerName"),

        age: localStorage.getItem("passengerAge"),

        gender: localStorage.getItem("passengerGender"),

        phone: localStorage.getItem("passengerPhone"),

        vehicle: localStorage.getItem("vehicle"),

        source: localStorage.getItem("source"),

        destination: localStorage.getItem("destination"),

        journeyDate: localStorage.getItem("date"),

        coach: localStorage.getItem("coach"),

        seat: localStorage.getItem("seat"),

        fare: Number(
            localStorage
                .getItem("fare")
                .replace(/[₹,]/g, "")
        ),

        paymentMethod: paymentMethod.value

    };

    fetch("/booking", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(bookingData)

    })

        .then(res => res.json())

        .then(data => {

            if (!data.success) {

                alert(data.message);

                return;

            }

            localStorage.setItem(

                "bookingID",

                data.bookingId

            );

            alert("Payment Successful!");

            window.location.href = "/ticket";

        })

        .catch(err => {

            console.log(err);

            alert("Server Error");

        });

});