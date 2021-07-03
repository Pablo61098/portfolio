import {ReactGA} from '../config.js'


const pagesActions = {

    'pageLoaded': () => ReactGA.pageview("/pageLoaded"),
    'homePressed': () => ReactGA.pageview("/home"),
    'skillsPressed': () => ReactGA.pageview("/skills"),
    'aboutPressed': () => ReactGA.pageview("/about"),
    'projectsPressed': () => ReactGA.pageview("/projects"),

}


export default pagesActions;

