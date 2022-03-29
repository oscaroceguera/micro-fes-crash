import React from "react";
import "remixicon/fonts/remixicon.css";

import Login from "cart/Login";
import MiniCart from "cart/MiniCart";

export default () => (
  <div className="p-5 bg-blue-500 text-white text-3xl">
    <div className="flex">
      <div className="flex-grow">Fidget Spiner world - Alient vs Predator</div>
      <div className="flex-end relative">
        <Login />
        <MiniCart />
      </div>
    </div>
  </div>
);
