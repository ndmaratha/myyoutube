import "./index.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./Component/Body";
import Header from "./Component/Header";

function App() {
	return <>
  <Header/>
  <Outlet/>
  </>;
}
export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
		],
	},
]);

export default App;
