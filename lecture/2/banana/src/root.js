import { Link, Outlet } from "react-router-dom";

export default function Root() {
	return (
		<>
			<div id="sidebar">
				<h1>My React App Practices</h1>
				<nav>
					<ul>
						<li>
							<Link to={"apps/First"}>First useEffect practice</Link>
						</li>
						<li>
							<Link to={"apps/Second"}>Second useEffect practice</Link>
						</li>
						<li>
							<Link to={"apps/Todos"}>Todo List</Link>
						</li>
						<li>
							<Link to={"apps/Coin"}>Coin Tracker</Link>
						</li>
						<li>
							<Link to={"apps/MoviesMain"}>Movies</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div id="detail"></div>
			<hr />
			<div>
				<Outlet />
			</div>
		</>
	);
}
