import Button from "./Button";
import styled from "./App.module.css";

function App() {
	return (
		<div>
			<h1 className={styled.title}>Welcome back!</h1>
			{/* style속성으로 넣는 게 아니라, className으로 넣는 것임! */}
			<Button text={"Continue"} />
		</div>
	);
}

export default App;
