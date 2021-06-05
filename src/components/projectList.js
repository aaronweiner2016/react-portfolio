import golfer from "../images/golferPlus.png";
import stockApp from "../images/nicks-gif.gif";
import weatherApp from "../images/weather.gif";
import daileyPlanner from "../images/dailey-planner.gif";



const projects = [

    {
        result: {
            id: 1,
            image: golfer,
            name: 'Golf Application',
            details: 'An app for golfers to keep track of scores hole by hole and per course. The dev team decided to create an app that would address both total score and quota scores for the user. There are two ways to find the score through the total score and quota. players to compete against each other no matter the skill level. Additional stretchfeatures are mapping and range estimation',
            collab: [
                {
                    name: 'Josh Walters',
                    github: 'https://github.com/joshwalters34'
                },
                {
                    name: 'Greg Petropoulos',
                    github: 'https://github.com/GregPetropoulos'
                },
                {
                    name: 'Koalia Sanders',
                    github: 'https://github.com/koalias'
                }
            ]
        }
    },
    {
        result: {
            id: 2,
            image: stockApp,
            name: 'Stock Application',
            details: 'This project was made to allow a user to interact with reddit feeds, stock news and stock statistics all on one platform.It is hooked up to the Reddit API and also Yahoo Finance which both allow users to search a stock symbol and pull information pertaining to each stock.',
            collab: [
                {
                    name: 'Viktoriia Midor',
                    github: 'https://vmidor.github.io/Updated-portfolio/'
                },
                {
                    name: 'Nick Aisthorpe',
                    github: 'https://www.linkedin.com/in/nick-aisthorpe/'
                },
                {
                    name: '',
                    github: ''
                }
            ]
        }
    },
    {
        result: {
            id: 3,
            image: weatherApp,
            name: 'Weather Application',
            details: 'This application allows users to see the current and five day weather forecast for any city they type into the search bar. The last city typed will after show up in history.',
            collab: [
                {
                    name: '',
                    github: ''
                },
                {
                    name: '',
                    github: ''
                },
                {
                    name: '',
                    github: ''
                }
            ]
        }
    },
    {
        result: {
            id: 4,
            image: daileyPlanner,
            name: 'Dailey Planner Application',
            details: 'This application was designed to allow users to write in a specific time slot and save what was written to local storage and still shows after the page is reloaded. As the work day continues the hours past show up grey, the hours it is on will show up red and the future hours show as green.',
            collab: [
                {
                    name: '',
                    github: ''
                },
                {
                    name: '',
                    github: ''
                },
                {
                    name: '',
                    github: ''
                }
            ]
        }
    }
]



export default projects;