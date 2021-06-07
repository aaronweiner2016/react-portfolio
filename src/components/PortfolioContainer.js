import React from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {

  const styles = {
    margin: {
      marginLeft: '10%',
      marginRight: '10%',
      height: '100vh'
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

  return (
    <div style={styles.margin}>
      <div className="d-flex justify-content-center pb-4" style={styles.width, styles.color}>
        <h1 style={styles.color}>Aaron Weiner Portfolio</h1>
      </div>
      <Router>
        <NavTabs
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects} />

      </Router>
    </div>
  );
}

export default App;
