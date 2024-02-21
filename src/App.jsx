import React from "react";
import Home from "./components/Home";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";

const App = () => {
  return (
    
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
};

export default App;
