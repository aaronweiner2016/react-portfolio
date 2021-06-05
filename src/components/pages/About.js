import React from "react";

const styles = {
  width: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  color: {
    backgroundColor: 'white',
    height: '100%',
  },
  margin: {
    marginLeft: '20%',
    marginRight: '20%'
  }
}

const About = () => (
  <div style={styles.color}>

    <div style={styles.width}>
      <h1 className="mt-5">About Me</h1>
    </div>

    <div style={styles.width, styles.margin}>
      <div className="column is-four-fifths pl-6 borders">

        <p className="has-text-weight-bold">
          My name is Aaron Weiner and I am from Charlotte, North Carolina. I went
          to Providence High School and competitively played soccer growing up.
          In my spare time i like to spend time with my family/girlfriend, do yoga/breathwork, travel to the
          mountains where I like to hike, collect plants and invest/research the stock market.
</p>
        <p className="has-text-weight-bold">
          In 2020 i started getting more into online jobs and found a way to sell bitcoin but when the market
          became difficult to navigate and I decided to
          join the UNC Full Stack Bootcamp for web development. In this class i learned how to code in HTML,
          CSS, Vanilla Javascript and Jquery for the front end.
          I also learned how to utilize Bootstrap, Bulma and various other tools to help with front end
          functionality. For back end development, i learned how to utilize
          MySQL, Sequelize, Express.js, Node.js and Handlebars.

</p>

      </div>
    </div >

  </div >
);

export default About;
