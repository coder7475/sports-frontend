import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import AllProducts from "@/pages/AllProducts";
import Checkout from "@/pages/Checkout";
import ErrorPage from "@/pages/ErrorPage";
import ManageProducts from "@/pages/ManageProducts";
import SingleProduct from "@/pages/SingleProduct";

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
  {
    path: "/single-product/:id",
    element: <SingleProduct />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
