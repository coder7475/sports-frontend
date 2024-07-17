import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import ErrorPage from "@/pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
