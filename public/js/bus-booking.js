
const seats = document.querySelectorAll(".seat");

const summarySeat = document.getElementById("summarySeat");
const summaryBus = document.getElementById("summaryBus");
const summaryFare = document.getElementById("summaryFare");

const busName = document.getElementById("busName");
const route = document.getElementById("route");
const journeyDate = document.getElementById("journeyDate");

const continueBtn = document.getElementById("continueBtn");

let selectedSeat = document.querySelector(".seat.selected");

const vehicle = localStorage.getItem("vehicle");
const fare = localStorage.getItem("fare");
const source = localStorage.getItem("source");
const destination = localStorage.getItem("destination");
const date = localStorage.getItem("date");

if(vehicle){
    busName.innerText = vehicle;
    summaryBus.innerText = vehicle;
}

if(fare){
    summaryFare.innerText = fare;
}

if(source && destination){
    route.innerText = source + " → " + destination;
}

if(date){
    journeyDate.innerText = date;
}

if(selectedSeat){

    summarySeat.innerText = selectedSeat.dataset.seat;

    localStorage.setItem("seat", selectedSeat.dataset.seat);

}

seats.forEach(function(seat){

    // Ignore booked seats
    if(seat.classList.contains("booked")){

        seat.style.cursor = "not-allowed";

        return;

    }

    seat.addEventListener("click",function(){

        // Remove previous selection
        if(selectedSeat){

            selectedSeat.classList.remove("selected");

            selectedSeat.classList.add("available");

            selectedSeat.style.transform="scale(1)";
        }

        // Select new seat
        seat.classList.remove("available");

        seat.classList.add("selected");

        seat.style.transform="scale(1.1)";

        selectedSeat = seat;

        // Update summary
        summarySeat.innerText = seat.dataset.seat;

        // Save everything
        localStorage.setItem("seat", seat.dataset.seat);
        localStorage.setItem("bus", busName.innerText);
        localStorage.setItem("route", route.innerText);
        localStorage.setItem("date", journeyDate.innerText);
        localStorage.setItem("fare", summaryFare.innerText);

    });

});


continueBtn.addEventListener("click",function(e){

    if(selectedSeat==null){

        e.preventDefault();

        alert("Please select a seat first.");

        return;

    }

});