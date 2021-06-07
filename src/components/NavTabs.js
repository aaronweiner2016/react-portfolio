
import React from "react";
import { Link } from "react-router-dom";


function NavTabs() {


  const styles = {
    color: {
      backgroundColor: 'white'
    }
  }

  return (
    <nav style={styles.color} className="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
      <div style={styles.color}>
        <ul style={styles.color} className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/Home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/About"
              className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Projects"
              className={window.location.pathname === "/Projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
