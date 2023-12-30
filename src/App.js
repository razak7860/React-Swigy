import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import Error from "./components/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
// import About from "./components/About";
import AppLayout from "./components/AppLayout";
import Body from "./components/Body";
import ResMenu from "./components/ResMenu";
import RestaurantMenu from "./components/RestaurantMenu";
const About = lazy(() => import("./components/About"));

const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={
              <div className="font-black text-9xl">
                Loading..jssssssssssssssssssssssssssssssssssssssss..
              </div>
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoute} />);
