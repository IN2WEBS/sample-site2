var firstname = document.forms['contact-form']['firstname'];
var lastname = document.forms['contact-form']['lastname'];
var message = document.forms['contact-form']['message'];

var firstname_error = document.getElementById('firstname_error');
var lastname_error = document.getElementById('lastname_error');
var message_error = document.getElementById('message_error');

firstname.addEventListener('blur', firstnameVerify, true);
lastname.addEventListener('blur', lastnameVerify, true);
message.addEventListener('blur', messageVerify, true);

function Validate() {
    if (firstname.value === "") {
        firstname.style.border = "1px solid red";
        document.getElementById('firstname_div').style.color = "red";
        firstname_error.textContent = "firstname is required";
        firstname.focus();
        return false;
    }if (lastname.value === "") {
        lastname.style.border = "1px solid red";
        document.getElementById('lastname_div').style.color = "red";
        lastname_error.textContent = "lastname is required";
        lastname.focus();
        return false;
    }if (message.value === "") {
        message.style.border = "1px solid red";
        document.getElementById('message_div').style.color = "red";
        message_error.textContent = "message is required";
        message.focus();
        return false;
    }
}

function firstnameVerify() {
    if (firstname.value !== "") {
        firstname.style.border = "1px solid #5e6e66";
        document.getElementById('firstname_div').style.color = "#5e6e66";
        firstname_error.innerHTML = "";
        return true;
    }
}
function lastnameVerify() {
    if (lastname.value !== "") {
        lastname.style.border = "1px solid #5e6e66";
        document.getElementById('lastname_div').style.color = "#5e6e66";
        lastname_error.innerHTML = "";
        return true;
    }
}
function messageVerify() {
    if (message.value !== "") {
        message.style.border = "1px solid #5e6e66";
        document.getElementById('message_div').style.color = "#5e6e66";
        message_error.innerHTML = "";
        return true;
    }
}
