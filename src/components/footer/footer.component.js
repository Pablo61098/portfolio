import React from 'react'
import { connect } from 'react-redux';
import {credits} from '../../content/texts.content';


import {FooterStyleDark, FooterStyleBright} from './footer.styles';



const Footer = ({currentState, languageState}) => {


    const Footer = currentState ? FooterStyleDark : FooterStyleBright;

    return(
        <Footer currentState={currentState}>
            <div className='content'>
                <div className='flow-h'>
                    <div className="text top">
                        {credits[languageState][0]}<a href="https://github.com/Pablo61098" target="_blank" rel="noopener noreferrer">{credits[languageState][1]}</a>
                    </div>
                    <div className="text bottom">
                        <a className="linkPortfolio" href="https://github.com/Pablo61098/portfolio">
                            {credits[languageState][2]}
                        </a>
                    </div>
                </div>
                
            </div>
        </Footer>
        
    )
}

const mapStateToProps = (state) => {
    const {currentState, alreadyLoaded} = state.darkMode
    const {languageState} = state.language
    return {currentState: currentState, alreadyLoaded: alreadyLoaded, languageState: languageState}
}

export default connect(mapStateToProps, null)(Footer)

