import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import SelectTab from "../components/SelectTab";
import Params from "../components/Params";
import Headers from "../components/Headers";
import Body from "../components/Body";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <SelectTab />,
        children: [
          {
            path: "/",
            element: <Params />,
          },
          {
            path: "/headers",
            element: <Headers />,
          },
          {
            path: "/body",
            element: <Body />,
          },
        ],
      },
    ],
  },
]);
