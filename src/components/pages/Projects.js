import React from "react";

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
  image: {
    width: '50%',
  },
}

const Projects = ({ projects }) => (
  <div style={styles.color}>
    <div style={styles.width}>
      <h1 className="mt-5">Projects</h1>
    </div>
    <div className="pb-3" style={styles.width}>
      <div className="list-group d-flex flex-column" style={styles.width}>
        {projects.map(result => (
          <div className="m-2 d-flex flex-row" style={styles.div} key={result.result.name} >
            <img style={styles.image} src={result.result.image} alt={result.result.name} />
            <div className="p-3">
              <h4 className="d-flex justify-content-center">{result.result.name}</h4>
              <h6>{result.result.details}</h6>
              <h6 style={styles.div} className="d-flex justify-content-between">{result.result.collab[0].name}<span>{result.result.collab[0].github}</span></h6>
              <h6 style={styles.div} className="d-flex justify-content-between">{result.result.collab[1].name}<span>{result.result.collab[1].github}</span></h6>
              <h6 style={styles.div} className="d-flex justify-content-between">{result.result.collab[2].name}<span>{result.result.collab[2].github}</span></h6>

            </div>
          </div>
        ))}
      </div>
    </div>

  </div >
);

export default Projects;
