import React from "react";
import portrait from "../../images/portrait-picture.jpg";

const styles = {
  width: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  sizeImg: {
    width: '100%',
    width: '700px',
    height: '400px'
  },
  color: {
    backgroundColor: 'white',
    height: '100%',
  }
}

const Home = () => (
  <div style={styles.color}>

    <div style={styles.width}>
      <img src={portrait} style={styles.sizeImg} className='mt-5' />
    </div>

  </div>
);

export default Home;
