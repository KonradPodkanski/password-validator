const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const showIcon = document.querySelector(".eye-icon");
const icon = document.querySelectorAll(".fa-square");
const letters = /[A-Z]+/;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 8;

//Requirements pertained to the password
const passRequire = () => {
	if (pass.value.length >= minValue) {
		for (let i = 0; i < icon.length; i++) {
			icon[0].classList.remove("fa-square");
			icon[0].classList.add("fa-check-square");
		}
	} else {
		icon[0].classList.remove("fa-check-square");
		icon[0].classList.add("fa-square");
	}

	if (letters.test(pass.value)) {
		for (let i = 0; i < icon.length; i++) {
			icon[1].classList.remove("fa-square");
			icon[1].classList.add("fa-check-square");
		}
	} else {
		icon[1].classList.remove("fa-check-square");
		icon[1].classList.add("fa-square");
	}
	if (numbers.test(pass.value)) {
		for (let i = 0; i < icon.length; i++) {
			icon[2].classList.remove("fa-square");
			icon[2].classList.add("fa-check-square");
		}
	} else {
		icon[2].classList.remove("fa-check-square");
		icon[2].classList.add("fa-square");
	}
	if (special.test(pass.value)) {
		for (let i = 0; i < icon.length; i++) {
			icon[3].classList.remove("fa-square");
			icon[3].classList.add("fa-check-square");
		}
	} else {
		icon[3].classList.remove("fa-check-square");
		icon[3].classList.add("fa-square");
	}
};

//Get information about our password. If password is correct or incorrect comunicate will be display
const showMsg = () => {
	if (
		pass.value.length >= minValue &&
		letters.test(pass.value) &&
		numbers.test(pass.value) &&
		special.test(pass.value)
	) {
		p.textContent = "Masz mocne hasło";
		p.style.color = "gold";
	} else if (
		pass.value.length >= minValue &&
		letters.test(pass.value) &&
		numbers.test(pass.value)
	) {
		p.textContent = "Masz dobre hasło";
		p.style.color = "green";
	} else if (pass.value.length <= minValue) {
		p.textContent = "Masz słabe hasło";
		p.style.color = "red";
	}
};
// tool to use to check dispay a password. By using If, We can change type of input from password to text 
showIcon.onclick = function () {
	if (pass.type == "password") {
		pass.type = "text";
		showIcon.src = "images/eye-open.png";
	} else {
		pass.type = "password";
		showIcon.src = "images/eye-close.png";
	}
};
const checkPassword = () => {
	passRequire();
	if (pass.value !== "") {
		showMsg();
	} else {
		p.textContent = "Type password...";
		p.style.color = "";
	}
};

pass.addEventListener("keyup", checkPassword);
