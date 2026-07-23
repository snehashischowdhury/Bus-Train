const passengerForm = document.getElementById("passengerForm");

const fullName = document.getElementById("fullName");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

const summaryVehicle = document.getElementById("summaryVehicle");
const summaryRoute = document.getElementById("summaryRoute");
const summaryCoach = document.getElementById("summaryCoach");
const summarySeat = document.getElementById("summarySeat");
const summaryFare = document.getElementById("summaryFare");
const coachRow = document.getElementById("coachRow");


const backBtn = document.getElementById("backBtn");


const vehicle = localStorage.getItem("vehicle");
const route = localStorage.getItem("route");
const coach = localStorage.getItem("coach");
const seat = localStorage.getItem("seat");
const fare = localStorage.getItem("fare");

if(vehicle){

    summaryVehicle.innerText = vehicle;

}

if(route){

    summaryRoute.innerText = route;

}

if(seat){

    summarySeat.innerText = seat;

}

if(fare){

    summaryFare.innerText = fare;

}

if(coach){

    summaryCoach.innerText = coach;

}


if(vehicle && vehicle.toLowerCase().includes("bus")){

    coachRow.style.display = "none";

}


backBtn.addEventListener("click",function(e){

    e.preventDefault();

    if(vehicle && vehicle.toLowerCase().includes("rajdhani")){

        window.location.href = "/train-booking";

    }

    else{

        window.location.href = "/bus-booking";

    }

});



passengerForm.addEventListener("submit",function(e){

    e.preventDefault();


    if(fullName.value.trim() === ""){

        alert("Please enter passenger name.");

        return;

    }


    if(age.value === "" || age.value < 1 || age.value > 120){

        alert("Please enter a valid age.");

        return;

    }
    

    if(gender.value === ""){

        alert("Please select gender.");

        return;

    }


    const phonePattern = /^[0-9]{10}$/;

    if(!phonePattern.test(phone.value)){

        alert("Please enter a valid 10-digit phone number.");

        return;

    }
    

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value)){

        alert("Please enter a valid email address.");

        return;

    }

    localStorage.setItem("passengerName",fullName.value);

    localStorage.setItem("passengerAge",age.value);

    localStorage.setItem("passengerGender",gender.value);

    localStorage.setItem("passengerPhone",phone.value);

    localStorage.setItem("passengerEmail",email.value);

    window.location.href = "/payment";

});