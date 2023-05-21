import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Details";

const router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/character/:id", element: <Details /> },
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
