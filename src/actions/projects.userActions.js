import {ReactGA} from '../config.js'
import {content} from '../content/projectsCardsContent'



const projectActions = {}

for(let i = 0; i < content['en'].length; i++){
    // console.log('actiooooooon')
    projectActions[`${content['en'][i].actionTitle}`] =  () => 
        ReactGA.event({
            category: 'Project',
            action: `Click in "${content['en'][i].title}"`
        })    
}

export default projectActions;
