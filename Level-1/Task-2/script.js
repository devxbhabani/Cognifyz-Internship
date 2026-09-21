const colorButton = document.querySelector("#colorButton");
const greetingButton = document.querySelector("#greetingButton");
const calculatorForm = document.querySelector("#calculatorForm");
const calculatorResult = document.querySelector("#calculatorResult");

const buttonColors = ["#f06b4f", "#e6a23c", "#4c9f70", "#4f79c7"];
let colorIndex = 0;

colorButton.addEventListener("click", () => {
	colorIndex = (colorIndex + 1) % buttonColors.length;
	colorButton.style.backgroundColor = buttonColors[colorIndex];
});

greetingButton.addEventListener("click", () => {
	const hour = new Date().getHours();
	let greeting;

	if (hour < 12) {
		greeting = "Good morning!";
	} else if (hour < 18) {
		greeting = "Good afternoon!";
	} else {
		greeting = "Good evening!";
	}

	alert(greeting);
});

calculatorForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const firstNumber = Number(document.querySelector("#firstNumber").value);
	const secondNumber = Number(document.querySelector("#secondNumber").value);
	const sum = firstNumber + secondNumber;

	calculatorResult.textContent = `${firstNumber} + ${secondNumber} = ${sum}`;
});
