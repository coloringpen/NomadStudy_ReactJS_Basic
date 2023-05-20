import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root.js";
import First from "./routes/apps/First.js";
import Todos from "./routes/apps/Todos.js";
import Coin from "./routes/apps/Coin.js";
import Second from "./routes/apps/Second.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "apps/First",
				element: <First />,
			},
			{
				path: "apps/Second",
				element: <Second />,
			},
			{
				path: "apps/Todos",
				element: <Todos />,
			},
			,
			{
				path: "apps/Coin",
				element: <Coin />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
