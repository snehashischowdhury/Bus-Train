const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const sourceInput = document.querySelectorAll(".search-bar input")[0];
const destinationInput = document.querySelectorAll(".search-bar input")[1];
const dateInput = document.querySelectorAll(".search-bar input")[2];

const searchBtn = document.querySelector(".search-btn");
const getStartedBtn = document.querySelector(".get-btn");

const loggedIn = localStorage.getItem("loggedIn");
const currentUser = localStorage.getItem("currentUser");

if (loggedIn === "true") {

    loginBtn.innerHTML = "👋 Hi, " + currentUser;

    loginBtn.style.background = "#28a745";

    loginBtn.style.color = "white";

    loginBtn.href = "#";

    signupBtn.style.display = "none";

    getStartedBtn.innerHTML = "Book Now";

    getStartedBtn.href = "/search";

    loginBtn.addEventListener("click", function (e) {

        e.preventDefault();

        if (confirm("Do you want to logout?")) {

            localStorage.removeItem("loggedIn");
            localStorage.removeItem("currentUser");

            alert("Logged Out Successfully!");

            window.location.reload();

        }

    });

}

searchBtn.addEventListener("click", function (e) {

    e.preventDefault();

    const source = sourceInput.value.trim();
    const destination = destinationInput.value.trim();
    const date = dateInput.value;

    if (source === "" || destination === "" || date === "") {

        alert("Please fill all the fields.");

        return;

    }
    const selectedDate = new Date(date);

    const currentDate = new Date();

    currentDate.setHours(0, 0, 0, 0);

    if (selectedDate < currentDate) {

        alert("Please select today or a future date.");

        return;

    }
    localStorage.setItem("source", source);
    localStorage.setItem("destination", destination);
    localStorage.setItem("date", date);

    window.location.href = "/search";

});

const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, "0");

const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;


const maxDate = new Date();

maxDate.setMonth(maxDate.getMonth() + 6);

const maxYear = maxDate.getFullYear();
const maxMonth = String(maxDate.getMonth() + 1).padStart(2, "0");
const maxDay = String(maxDate.getDate()).padStart(2, "0");

dateInput.max = `${maxYear}-${maxMonth}-${maxDay}`;


getStartedBtn.addEventListener("click", function (e) {

    if (localStorage.getItem("loggedIn") === "true") {

        return;

    }

    e.preventDefault();

    window.location.href = "/login";

});


const routeCards = document.querySelectorAll(".route-card");

routeCards.forEach(function (card) {

    card.style.cursor = "pointer";

    card.addEventListener("click", function () {

        const route = card.querySelector("h3").innerText;

        const places = route.split(" -> ");

        localStorage.setItem("source", places[0]);
        localStorage.setItem("destination", places[1]);

        window.location.href = "/search";

    });

});


console.log("Welcome to TravelEaZ");