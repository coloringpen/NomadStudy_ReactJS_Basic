import "./App.css";
import { useState } from "react";

function App() {
	let [firstNum, setFirstNum] = useState("");
	let [secondNum, setSecondNum] = useState("");
	let [operation, setOperation] = useState("");
	let [isDone, setIsDone] = useState(false);
	let [result, setResult] = useState(0);

	function changeFirstNum(event) {
		setFirstNum((prev) => (prev = event.target.value));
	}

	function changeSecondNum(event) {
		setSecondNum((prev) => (prev = event.target.value));
	}

	function operationChange(event) {
		setOperation((prev) => (prev = event.target.value));
	}

	function calculate() {
		let num1 = parseFloat(firstNum);
		let num2 = parseFloat(secondNum);

		if (operation === "+") {
			setResult(num1 + num2);
		} else if (operation === "-") {
			setResult(num1 - num2);
		} else if (operation === "/") {
			setResult(num1 / num2);
		} else if (operation === "*") {
			setResult(num1 * num2);
		}

		setIsDone(true);
	}

	return (
		<>
			<h1>🔥Calculator🔥</h1>
			<div>
				<input
					placeholder={"👉 Write a number..."}
					value={firstNum}
					onChange={changeFirstNum}
				/>
			</div>
			<div>
				<input
					placeholder="👉 And another one..."
					value={secondNum}
					onChange={changeSecondNum}
				/>
			</div>
			<select onChange={operationChange}>
				<option>👉 Select operation</option>
				<option value="+">+</option>
				<option value="-">-</option>
				<option value="/">/</option>
				<option value="*">*</option>
			</select>
			<div>
				<button onClick={calculate}>Calculate</button>
			</div>
			<div>{isDone ? `The result is : ${result}` : null}</div>
		</>
	);
}

export default App;
