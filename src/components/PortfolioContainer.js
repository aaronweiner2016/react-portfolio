import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import projectList from "./projectList"

class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Projects") {
      return <Projects projects={projectList} />;
    }
  };

  styles = {
    margin: {
      marginLeft: '10%',
      marginRight: '10%',
    },
    width: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    color: {
      backgroundColor: 'white',
      marginBottom: '0px'
    }
  }

  render() {
    return (
      <div style={this.styles.margin}>
        <div className="d-flex justify-content-center pb-4" style={this.styles.width, this.styles.color}>
          <h1 style={this.styles.color}>Aaron Weiner Portfolio</h1>
        </div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
