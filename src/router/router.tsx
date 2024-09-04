import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import AllProducts from "@/pages/AllProducts";
import ErrorPage from "@/pages/ErrorPage";
import ManageProducts from "@/pages/ManageProducts";

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
  {
    path: "/manage-products",
    element: <ManageProducts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/all-products",
    element: <AllProducts />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
