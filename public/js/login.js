const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const rememberMe = document.getElementById("rememberMe");

const togglePassword = document.getElementById("togglePassword");

const forgotPassword = document.getElementById("forgotPassword");



window.addEventListener("load", function(){

    const rememberedEmail =
    localStorage.getItem("rememberEmail");

    if(rememberedEmail){

        email.value = rememberedEmail;

        rememberMe.checked = true;

    }

});


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



forgotPassword.addEventListener("click",function(e){

    e.preventDefault();

    alert("Forgot Password feature will be added later.");

});



loginForm.addEventListener("submit",function(e){

    e.preventDefault();

    fetch("/login",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            email:email.value.trim(),

            password:password.value

        })

    })

    .then(res=>res.json())

    .then(data=>{

        if(!data.success){

            alert(data.message);

            return;

        }


        if(rememberMe.checked){

            localStorage.setItem(
                "rememberEmail",
                email.value
            );

        }

        else{

            localStorage.removeItem(
                "rememberEmail"
            );

        }


        localStorage.setItem(
            "loggedIn",
            "true"
        );

        localStorage.setItem(
            "currentUser",
            data.user
        );

        alert(data.message);

        window.location.href="/";

    })

    .catch(err=>{

        console.log(err);

        alert("Server Error");

    });

});