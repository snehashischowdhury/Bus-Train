const route = document.querySelector(".route");
const date = document.querySelector(".date");

const source = localStorage.getItem("source");
const destination = localStorage.getItem("destination");
const journeyDate = localStorage.getItem("date");


if(source && destination){

    route.innerText = source + " → " + destination;

}


if(journeyDate){

    date.innerText = journeyDate;

}


const buttons = document.querySelectorAll(".select-btn");

buttons.forEach(function(button){

    button.addEventListener("click",function(){

        const card = button.closest(".card");

        const vehicle =
        card.querySelector("h2").innerText;


        const fare =
        card.querySelector("h3").innerText;

        localStorage.setItem("vehicle",vehicle);

        localStorage.setItem("fare",fare);

    });

});