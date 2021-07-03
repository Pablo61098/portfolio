import {ReactComponent as Instagram} from '../images/instagram.svg'
import {ReactComponent as Github} from '../images/github2.svg'
import {ReactComponent as Indeed} from '../images/indeed.svg'
import {ReactComponent as Twitter} from '../images/twitter.svg'
import {ReactComponent as Mail} from '../images/email.svg'
import eventActions from '../actions/events.userActions'

const socialMedia = [
    <a href="https://www.instagram.com/pabloantonio98/" target="_blank" className='link' onClick={eventActions.instagramPressed}><Instagram className='imagen' /></a>,
    <a href="https://github.com/pablosolanoc" target="_blank" className='link'  onClick={eventActions.githubPressed}><Github className='imagen'/></a>,
    <a href="https://my.indeed.com/p/pablos-p48pjbs" target="_blank" className='link'  onClick={eventActions.indeedPressed}><Indeed className='imagen'/></a>,
    <a href="https://twitter.com/AntonioPablo98" target="_blank" className='link' onClick={eventActions.twitterPressed}><Twitter className='imagen'/></a>,
    <a href="mailto:pablosolano61098@gmail.com" className='link' onClick={eventActions.mailPressed}><Mail className='imagen'/></a>
]

export {socialMedia}