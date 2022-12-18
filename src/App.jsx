import { useRoutes } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import routes from "./routes.jsx";
import { useState, createContext } from "react";

export const IsRedirectAllowed = createContext();
export const SetIsRedirectAllowed = createContext();

function App() {
  const [isRedirectAllowed, setIsRedirectAllowed] = useState(false);
  const routing = useRoutes(routes(isRedirectAllowed));

  return (
    <IsRedirectAllowed.Provider value={isRedirectAllowed}>
      <SetIsRedirectAllowed.Provider value={setIsRedirectAllowed}>
        {routing}
      </SetIsRedirectAllowed.Provider>
    </IsRedirectAllowed.Provider>
  );
}

export default App;
