import { useEffect, useState } from "react";

function Hello() {
	useEffect(() => {
		console.log("Created! :)");

		return () => {
			console.log("destroyed :(");
		};
	}, []);
	return <h3>Hello!</h3>;
}

export default function Second() {
	const [showing, setShowing] = useState(false);
	const onClick = () => {
		setShowing((prev) => !prev);
	};

	return (
		<>
			<h2>Cleanup Experiment</h2>
			{
				showing ? <Hello /> : null // showing이 true일 때, Hello컴포넌트 실행
			}
			<button onClick={onClick}>{showing ? "Hide" : "Show again"}</button>
		</>
	);
}
