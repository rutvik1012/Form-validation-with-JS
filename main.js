
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let repass = document.getElementById("repass").value;


    if (name === "" || email === "" || pass === "" || repass === "") {
        alert("All fields are Required");
        return false;
    }

    if (pass.length < 6) {
        alert("Password must be at least 6 characters or number ")
        return false;
    }

    if (pass !== repass) {
        alert("Password Does't Match")
        return false
    }

    let emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
        alert("Enter a valid email!");
        return false;
    }

    return true;

}
// let form= document.getElementsByTagName(form)
// form.addEventListener("submit")