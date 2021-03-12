// Email Validation
function checkEmailValidation(email) {
	const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (regex.test(email.value.trim())) {
		showSuccess(email);
	} else {
		showErr(email, "Email is not valid");
	}
}

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// ShowErr function
function showErr(input, message) {
	const formControl = input.parentElement;
	formControl.className = "form-control err";

	const small = formControl.querySelector("small");
	small.textContent = message;
}
// showSuccess function
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}
// checkRequired function
function checkRequired(inputArr) {
	inputArr.forEach((input) => {
		if (input.value.trim() !== "") {
			showSuccess(input);
		} else {
			showErr(input, `${getInputName(input)} is required!`);
		}
	});
}
// getInputName()
function getInputName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// checkLength()
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showErr(input, `${getInputName(input)} must be at least ${min} characters`);
	} else if (input.value.length > max) {
		showErr(input, `${getInputName(input)} must be less than ${max} characters`);
	} else {
		showSuccess(input);
	}
}

// checkPassword()
function checkPassword(pass1, pass2) {
	if (pass1.value !== pass2.value) {
		showErr(pass2, "Password do not match");
	}
}

// Listener Function
function listenEvents(e) {
	e.preventDefault();

	checkRequired([username, email, password, password2]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
	checkEmailValidation(email);
	checkPassword(password, password2);
}

// Event Listeners
form.addEventListener("submit", listenEvents);
