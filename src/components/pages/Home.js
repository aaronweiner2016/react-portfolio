import React from "react";
import portrait from "../../images/portrait-picture.jpg";

const styles = {
  width: {
    width: '100%',
    display: 'flex',
    height: '100vh'
  },
  sizeImg: {
    width: '100%',
    width: '700px',
    height: '400px'
  },
  color: {
    backgroundColor: 'white',
    height: '100%',
  },
}

const Home = () => (
  <div style={styles.color}>

    <div style={styles.width} className="d-flex flex-column align-items-center">
      <img src={portrait} style={styles.sizeImg} className='mt-5 mb-4' />
      <ul className="d-flex flex-column align-items-center">
        <a href="mailto:Aaronjacobweiner@yahoo.com">AaronJacobWeiner@yahoo.com</a>
        <a href="#">704-778-2171</a>
        <a href="https://github.com/aaronweiner2016">Github Link</a>
        <a href="https://www.linkedin.com/in/aaron-weiner-031051202/">Linkedin
                        Link</a>

        <a href="file:///C:/Users/Aaron%20Weiner/Downloads/Aaron_Weiner_Resume.PDF">Resume</a>

      </ul>
    </div>

  </div>
);

export default Home;
