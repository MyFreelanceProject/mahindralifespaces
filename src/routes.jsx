import AppLayout from "./hoc/layout/AppLayout";
import Error from "./pages/error/Error";
import Thankyou from "./pages/Thankyou";
import { Navigate } from "react-router-dom";

const routes = (isRedirectAllowed) => {
  return [  
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
      path: "thank-you",
      element: isRedirectAllowed ? <Thankyou /> : <Navigate to={"/"} />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ];
};

export default routes;
