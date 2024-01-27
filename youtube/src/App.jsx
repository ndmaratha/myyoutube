import "./index.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./Component/Body";
import Header from "./Component/Header";
import { Provider } from "react-redux";
import store from "./Redux/store";
import Watch from "./Component/Watch";


function App() {
	return (
		<>
			<Provider store={store}>
				<Header />
				
				<Outlet />
			</Provider>
		</>
	);
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
			{
				path: "/watch/:id",
				element: <Watch />,
			},
		],
	},
]);

export default App;
