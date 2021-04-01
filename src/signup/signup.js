'use strict';

const form = document.querySelector(".input_login");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const btn = document.querySelector("#submit")

// ERROR MESSAGE
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error"; // css 적용

    const small = formControl.querySelector("small");
    small.innerText = message;
}

// SUCCESS MESSAGE
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// 첫글자를 대문자로 변환
function idName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// EMAIL 유효성 검사
function checkEmail(input) {
    if (input.value.trim() && input.value.includes("@")) {
        showSuccess(input);
    } else {
        showError(input, `${idName(input)} is not valid`);
    }
}

// 입력 글자 수 제한
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${idName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${idName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// PASSWORD 확인
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}

// 값이 없을때
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.length < 0) {
            showError(input, `${idName(input)} is required`);
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

    if (!checkRequired([username, email, password, password2])) {
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(password, password2);
    }
});


// check box

const allBtn = document.querySelector('.check_all');
const checkboxes = document.querySelectorAll('input[name="check"]');
//console.log(checkboxes)



function selectAll() {

    checkboxes.forEach((checkbox) => {
        if (allBtn.checked) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    })
}

allBtn.addEventListener('click', selectAll);


function checkSelectAll() {

    // 선택된 체크박스
    const checked = document.querySelectorAll('input[name="check"]:checked');

    if (checkboxes.length === checked.length) {
        allBtn.checked = true;
    } else {
        allBtn.checked = false;
    }
}


checkboxes.forEach(box => box.addEventListener('click', checkSelectAll))