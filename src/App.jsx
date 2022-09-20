import {useRoutes} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import routes from "./routes.jsx";

function App() {
	const routing = useRoutes(routes());
	return <>{routing}</>;
}

export default App;
