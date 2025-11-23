import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import PrivateLayout from "./pages/PrivateLayout";
import HomePage from "./pages/HomePage";
import AssossiationsPage from "./pages/about/AssossiationsPage";
import TeamPage from "./pages/about/TeamPage";
import ProductionPage from "./pages/about/ProductionPage";
import BlogsPage from "./pages/others/BlogsPage";
import ProgramsPage from "./pages/others/ProgramsPage";
import BandsPage from "./pages/others/BandsPage";
import BlogPage from "./pages/others/BlogPage";
import AddressPage from "./pages/others/AddressPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "associations", element: <AssossiationsPage /> },
      { path: "team", element: <TeamPage /> },
      { path: "productions", element: <ProductionPage /> },
      { path: "blogs", element: <BlogsPage /> },
      { path: "programs", element: <ProgramsPage /> },
      { path: "bands", element: <BandsPage /> },
      { path: "blogs/:slug/", element: <BlogPage /> },
      { path: "address", element: <AddressPage /> },
    ],
    // children: [{ path: "login/", element: <LoginPage /> }],
  },
  {
    element: <PrivateLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "suppliers/:id/", element: <SupplierPage /> },
      // { path: "suppliers/:id/orders/:order_id", element: <OrderPage /> },
      // { path: "products", element: <ProductsPage /> },
      // { path: "products/:id/", element: <ProductPage /> },
    ],
  },
]);

export default routes;
