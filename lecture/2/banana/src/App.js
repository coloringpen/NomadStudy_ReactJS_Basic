import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./root.js";
import First from "./routes/apps/First.js";
import Second from "./routes/apps/Second.js";
import Todos from "./routes/apps/Todos.js";
import Coin from "./routes/apps/Coin.js";
import Movies from "./routes/apps/movie/Movies.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				// 사용자가 여기 url을 갔을 때, 헤당 컴포넌트를 실행하시오.
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
			{
				path: "apps/Movies",
				element: <Movies />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
