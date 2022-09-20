import AppLayout from "./hoc/layout/AppLayout";
import Error from "./pages/error/Error";

const routes = () => [
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "home",
				element: <AppLayout />,
			},
		],
	},
	{
		path: "*",
		element: <Error />,
	},
];

export default routes;
