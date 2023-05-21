import { Outlet } from "react-router-dom";

export default function MoviesMain() {
	return (
		<>
			<h2>Movies</h2>
			<Outlet />
		</>
	);
}
