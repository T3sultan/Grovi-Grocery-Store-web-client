import { createBrowserRouter } from "react-router-dom";
import Main from "../views/components/main/Main";
import About from "../views/pages/about/About";
import Blog from "../views/pages/blog/Blog";
import Contact from "../views/pages/contact/Contact";
import Home from "../views/pages/home/Home";
import Page from "../views/pages/page/Page";
import Shop from "../views/pages/shop/Shop";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "page",
        element: <Page />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
export default routes;
