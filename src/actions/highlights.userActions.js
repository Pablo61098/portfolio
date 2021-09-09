import {ReactGA} from '../config.js';
import {content} from '../content/highlightCardsContent';



const highlightActions = {}

for(let i = 0; i < content['en'].length; i++){
    // console.log('actiooooooon 2')
    highlightActions[`${content['en'][i].actionTitle}`] =  () => 
        ReactGA.event({
            category: 'Highlight',
            action: `Click in "${content['en'][i].title}"`
        })    
}

export default highlightActions;