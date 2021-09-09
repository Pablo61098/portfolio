import React, {useRef, useEffect, useState} from 'react';
import {gsap, Power3} from 'gsap';
import {connect} from 'react-redux';
import {setEnglish, setSpanish} from '../../redux/language/language.actions'

import {LanguageStyle} from './language.styles';

const LanguageChanger = ({languageState, setEnglish, setSpanish, margin}) => {

    let options = useRef(null);
    const [optionsState, setOptionsState] = useState(false);
    let optionsShow = false;

    // console.log('salihfkjahskjahkd')
    // console.log(languageState)

    const changeLanguage = (lang) => {
        if(lang === 'en'){
            setEnglish()
        }else if(lang === 'es'){
            setSpanish()
        }
        setOptionsState(!optionsState)
    }
    

    useEffect(() => {

        if(optionsState){
            gsap.fromTo(options, 0.2, {opacity: 0, y: -15}, { y: 0, opacity: 1, display: 'block'});
            // console.log("hey")
        }else{
            gsap.to(options, 0.2, { opacity: 0, display: 'none'});
            // console.log("hey2")
        }
    })


    return(
        <LanguageStyle margin={margin}>
            <div className="all">
                <div className="selected" onClick={() => setOptionsState(!optionsState)}>
                    { languageState === 'en' ? <img src="/images/logos/usa.png" alt="English"></img> : `` }
                    { languageState === 'es' ? <img src="/images/logos/spain.png" alt="Spanish"></img> : `` }
                    {/* <div>English</div> */}
                    
                </div>
                <div className="options" ref={element => options = element}>
                    { languageState !== 'en' ? <div className="option" onClick={() => changeLanguage('en')}>
                        <img src="/images/logos/usa.png" alt="English"></img>
                    </div> : ``}
                    { languageState !== 'es' ? <div className="option" onClick={() => changeLanguage('es')}>
                        <img src="/images/logos/spain.png" alt="Spanish"></img>
                    </div> : ``}
                </div>
            </div>
        </LanguageStyle>
    )
}


const mapDispatchToProps = dispatch => ({
    setEnglish: () => dispatch(setEnglish()),
    setSpanish: () => dispatch(setSpanish())
})

const mapStateToProps = (state) => {
    const {languageState} = state.language
    return {languageState: languageState}
}


export default connect(mapStateToProps, mapDispatchToProps)(LanguageChanger);