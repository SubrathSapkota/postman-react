import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const SelectTab = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SelectTab;
