import { useEffect, useState } from "react";

function Hello() {
	useEffect(() => {
		console.log("Created! :)");
		// 이 함수들을 외부에 분리해서 사용할 수도 있음
		// 하지만 보통 이 안에서 그냥 함수 정의함
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
