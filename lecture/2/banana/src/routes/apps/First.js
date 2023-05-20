import Button from "../../components/start/Button";
import styled from "../../components/start/First.module.css";
import { useEffect, useState } from "react";

export default function First() {
	const [counter, setValue] = useState(0);
	const [keyword, setKeyword] = useState("");
	const onClick = () => setValue((prev) => prev + 1);
	const onChange = (event) => setKeyword(event.target.value);

	console.log("I run all the time!");

	useEffect(() => {
		console.log("Call the API...");
	}, []);

	useEffect(() => {
		if (keyword !== "" && keyword.length > 5) {
			// keyword !== "" 는 아무것도 작성하지 않은 초기에 코드 실행을 막기 위함
			console.log("Search For", keyword);
		}
	}, [keyword]);

	useEffect(() => {
		if (keyword !== "" || counter !== 0) {
			console.log("I run when keyword or counter changes");
		}
	}, [keyword, counter]);

	return (
		<div>
			<h1 className={styled.title}>Welcome back!</h1>
			<input
				value={keyword}
				onChange={onChange}
				type="text"
				placeholder="Search here..."
			/>
			<p>How many times did you click? {counter}</p>
			<Button onClick={onClick} text={"Click me!"} />
		</div>
	);
}
