import ReactGA from "react-ga";

const keys = {
    GOOGLE :  {
        GA_TRACKING_CODE : process.env.REACT_APP_GA_TRACKING
    }
}

// console.log(keys.GOOGLE.GA_TRACKING_CODE)
ReactGA.initialize(keys.GOOGLE.GA_TRACKING_CODE);
// console.log(ReactGAInstance)
export {ReactGA}


