import Button from "../../components/start/Button";
import styled from "../../components/start/First.module.css";
import { useEffect, useState } from "react";

export default function First() {
	const [counter, setValue] = useState(0);
	const onClick = () => setValue((prev) => prev + 1);
	const iRunOnlyOnce = () => {
		console.log("I run only once!");
	};
	console.log("I run all the time!");
	useEffect(iRunOnlyOnce, []);

	return (
		<div>
			<h1 className={styled.title}>Welcome back!</h1>
			<p>How many times did you click? {counter}</p>
			<Button onClick={onClick} text={"Click me!"} />
		</div>
	);
}
