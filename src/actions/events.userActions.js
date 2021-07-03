import {ReactGA} from '../config.js'


const eventActions = {
    'sideMenuPressed': () => 
        ReactGA.event({
            category: 'User',
            action: 'Opened Side Menu Button'
        }),

    'instagramPressed': () => 
        ReactGA.event({
            category: 'User',
            action: 'Instagram Link Pressed'
        }),

    'twitterPressed': () => 
        ReactGA.event({
            category: 'User',
            action: 'Twitter Link Pressed'
        }),

    'mailPressed': () => 
        ReactGA.event({
            category: 'User',
            action: 'Mail Link Pressed'
        }),

    'indeedPressed': () => 
        ReactGA.event({
            category: 'User',
            action: 'Indeed Link Pressed'
        }),

    'githubPressed': () => 
        ReactGA.event({
            category: 'User',
            action: 'Github Link Pressed'
        }),
    
    'resumePressed': () => 
        ReactGA.event({
            category: 'User',
            action: 'Github Link Pressed'
        }),


}

export default eventActions;
