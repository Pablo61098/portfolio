import {ReactGA} from '../config.js'
import {content} from '../content/projectsCardsContent'



const projectActions = {}

for(let i = 0; i < content.length; i++){
    projectActions[`${content[i].actionTitle}`] =  () => 
    ReactGA.event({
        category: 'Project',
        action: `Click in "${content[i].title}"`
    })
}

export default projectActions;
