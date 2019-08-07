import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
