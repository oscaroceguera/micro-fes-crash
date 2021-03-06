import React, { useEffect, useState } from "react";

import { login, jwt } from "./cart";

export default function CartContent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    //login("sally", "123");
    jwt.subscribe((val) => setToken(val ?? ""));
  }, []);

  return <div>JWT: {token}</div>;
}
