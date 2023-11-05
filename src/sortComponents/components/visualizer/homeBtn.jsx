import { Link } from "react-router-dom";

import React from "react";

function HomeBtn() {
  return (
    <Link to={"/"}>
      <span style={{ color: "white" }}>Home</span>
    </Link>
  );
}

export default HomeBtn;
