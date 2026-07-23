const seats = document.querySelectorAll(".train-seat");

const summaryTrain = document.getElementById("summaryTrain");
const summaryCoach = document.getElementById("summaryCoach");
const summarySeat = document.getElementById("summarySeat");
const summaryFare = document.getElementById("summaryFare");

const trainName = document.getElementById("trainName");
const route = document.getElementById("route");
const coachName = document.getElementById("coachName");
const journeyDate = document.getElementById("journeyDate");

const continueBtn = document.getElementById("continueBtn");

let selectedSeat = document.querySelector(".train-seat.selected");

const vehicle = localStorage.getItem("vehicle");
const savedFare = localStorage.getItem("fare");
const source = localStorage.getItem("source");
const destination = localStorage.getItem("destination");
const savedDate = localStorage.getItem("date");

if(vehicle){

    trainName.innerText = vehicle;

    summaryTrain.innerText = vehicle;

}

if(savedFare){

    summaryFare.innerText = savedFare;

}

if(source && destination){

    route.innerText = source + " → " + destination;

}


if(savedDate){

    journeyDate.innerText = savedDate;

}

const coach = coachName.innerText.replace("Coach : ", "");

summaryCoach.innerText = coach;


if(selectedSeat){

    summarySeat.innerText = selectedSeat.dataset.seat;

    localStorage.setItem("vehicle", trainName.innerText);

    localStorage.setItem("route", route.innerText);

    localStorage.setItem("date", journeyDate.innerText);

    localStorage.setItem("coach", coach);

    localStorage.setItem("seat", selectedSeat.dataset.seat);

    localStorage.setItem("fare", summaryFare.innerText);

}

seats.forEach(function(seat){

    if(seat.classList.contains("booked")){

        seat.style.cursor = "not-allowed";

        return;

    }

    seat.addEventListener("click", function(){

        if(selectedSeat){

            selectedSeat.classList.remove("selected");

            selectedSeat.classList.add("available");

            selectedSeat.style.transform = "scale(1)";

        }

        seat.classList.remove("available");

        seat.classList.add("selected");

        seat.style.transform = "scale(1.1)";

        selectedSeat = seat;

        summarySeat.innerText = seat.dataset.seat;

        localStorage.setItem("vehicle", trainName.innerText);

        localStorage.setItem("route", route.innerText);

        localStorage.setItem("date", journeyDate.innerText);

        localStorage.setItem("coach", coach);

        localStorage.setItem("seat", seat.dataset.seat);

        localStorage.setItem("fare", summaryFare.innerText);

    });

});

continueBtn.addEventListener("click", function(e){

    if(selectedSeat == null){

        e.preventDefault();

        alert("Please select a seat first.");

        return;

    }

});