function validateAll() {
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const address = document.getElementById("address");
    const DateofBirth = document.getElementById("DateOfBirth");
    const gender = document.getElementById("gender");
    const today = new Date();
    const DOB = new Date(DateofBirth.value); 
    const registrationForm = document.getElementById("register-form");

    if(name.value.trim() === "") {
        alert("Name is not filled");
    } else if(email.value.trim() === "") {
        alert("Email is not filled");
    } else if(!email.value.endsWith(".com")){
        alert("Enter a valid email");
    } else if(DateofBirth > today) {
        alert("Please enter a valid birthdate");
    }else if(gender.value === "none"){
        alert("Please fill in your gender");
    } else{
        returnToMain();
        // registrationForm.submit();
    }
}

function returnToMain() {
    window.location.href = "main-page.html";
}