"use strict";

const form = document.querySelector(".input_login");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector('#submit')

// error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";

    const small = formControl.querySelector("small");
    small.innerText = message;
}

// success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Check input length
function checkLength(input, min, max) {
    if (password.value.length < min) {
        showError(input, `password must be at least ${min} characters`);
    } else if (password.value.length > max) {
        showError(input, `password must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// email 유효성 검사
function checkEmail(input) {
    if (input.value.trim() && input.value.includes("@")) {
        showSuccess(input);
    } else {
        showError(input, `email is not valid`);
    }
}

// Check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.length < 0) {
            showError(input, `information is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}

// Event listeners
btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (!checkRequired([email, password])) {
        checkLength(password, 6, 25);
        checkEmail(email);
    }

    let formValue = form.value;
    formValue = null;
});
