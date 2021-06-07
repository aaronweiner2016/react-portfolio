import React from "react";
import projectList from "../projectList";

const styles = {
  width: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  color: {
    backgroundColor: '#f9f9f9',
    height: '100%',
  },
  div: {
    width: '100%',
  },
  text: {
    textAlign: 'center'
  }
}

const Projects = () => (

  <div style={styles.color}>
    <div style={styles.width}>
      <h1 className="mt-5">Projects</h1>
    </div>
    <div className="pb-3" style={styles.width}>
      <div className="list-group d-flex flex-column" style={styles.width}>

        {projectList.map(result => (
          <div className="p-2" style={styles.div} key={result.result.name} >
            <img className="col-12 p-5" src={result.result.image} alt={result.result.name} />

            <div className="col-12 p-3 d-flex flex-column align-items-center">
              <h4>{result.result.name}</h4>

              <p style={styles.text}>{result.result.details}</p>

              <span>{result.result.collab[0].name}</span>
              <span>{result.result.collab[0].github}</span>
              <br />

              <span>{result.result.collab[1].name}</span>
              <span>{result.result.collab[1].github}</span>
              <br />

              <span>{result.result.collab[2].name}</span>
              <span>{result.result.collab[2].github}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div >
);

export default Projects;
