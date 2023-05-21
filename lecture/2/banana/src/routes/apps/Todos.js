import { useEffect, useState } from "react";

export default function Todos() {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);
	const onChange = (event) => {
		setTodo(event.target.value);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		if (todo === "") {
			return;
		}

		setTodos((prevArray) => {
			return [...prevArray, todo];
		});
		setTodo("");
	};

	useEffect(() => {
		console.log(todos);
	}, [todos]);

	return (
		<>
			<h2>Todo List</h2>
			<p>Now left : {todos.length}</p>
			<div>
				<form onSubmit={onSubmit}>
					<input
						value={todo}
						onChange={onChange}
						type="text"
						placeholder="Write your Todo!"
					/>
					<button>Add To Do</button>
				</form>
				<hr />
				<ul>
					{todos.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</div>
		</>
	);
}
