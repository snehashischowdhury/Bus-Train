const signupForm = document.getElementById("signupForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

const passwordStrength = document.getElementById("passwordStrength");


togglePassword.addEventListener("click", function(){

    if(password.type === "password"){

        password.type = "text";

        togglePassword.innerHTML = "🙈";

    }
    else{

        password.type = "password";

        togglePassword.innerHTML = "👁️";

    }

});


toggleConfirmPassword.addEventListener("click", function(){

    if(confirmPassword.type === "password"){

        confirmPassword.type = "text";

        toggleConfirmPassword.innerHTML = "🙈";

    }
    else{

        confirmPassword.type = "password";

        toggleConfirmPassword.innerHTML = "👁️";

    }

});



password.addEventListener("input", function(){

    const pass = password.value;

    if(pass.length < 6){

        passwordStrength.innerHTML = "Weak";
        passwordStrength.style.color = "red";

    }
    else if(pass.length < 10){

        passwordStrength.innerHTML = "Medium";
        passwordStrength.style.color = "orange";

    }
    else{

        passwordStrength.innerHTML = "Strong";
        passwordStrength.style.color = "green";

    }

});


signupForm.addEventListener("submit", function(e){

    e.preventDefault();


    if(fullName.value.trim() === ""){

        alert("Please enter your full name.");

        return;

    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value)){

        alert("Please enter a valid email.");

        return;

    }


    const phonePattern = /^[0-9]{10}$/;

    if(!phonePattern.test(phone.value)){

        alert("Phone number must contain exactly 10 digits.");

        return;

    }


    if(password.value.length < 6){

        alert("Password must contain at least 6 characters.");

        return;

    }


    if(password.value !== confirmPassword.value){

        alert("Passwords do not match.");

        return;

    }


fetch("/signup",{

    method:"POST",

    headers:{
        "Content-Type":"application/json"
    },

    body:JSON.stringify({

        fullName:fullName.value.trim(),
        email:email.value.trim(),
        phone:phone.value.trim(),
        password:password.value

    })

})

.then(res=>res.json())

.then(data=>{

    alert(data.message);

    if(data.success){

        window.location.href="/login";

    }

})

.catch(err=>{

    console.log(err);

    alert("Server Error");

});

});