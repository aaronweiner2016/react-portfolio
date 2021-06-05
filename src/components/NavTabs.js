import React from "react";

const styles = {
  color: {
    backgroundColor: 'white'
  }
}

function NavTabs(props) {
  return (
    <ul style={styles.color} className="nav nav-tabs d-flex justify-content-center">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Projects"
          onClick={() => props.handlePageChange("Projects")}
          className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
