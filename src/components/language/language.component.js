import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components'
import {gsap, Power3} from 'gsap';
import {connect} from 'react-redux';
import {setEnglish, setSpanish} from '../../redux/language/language.actions'


const LanguageStyle = styled.div`

    /* width: 100%;
    height: 100%; */
    /* position: relative; */

    *{
        cursor: pointer;
    }

    .all{
        position: relative;
        display: block;
        width: 60px;
        
        /* height: 100%; */
        
        /* top: 20%; */

        /* position: relative; */
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        
        margin: ${ p => p.margin ? `0px 0 0 5vw` : ``};

        
        /* top: 20px; */

        .selected{
            display: flex;
            background-color: #020202;
            border-radius: 15px;
            width: 100%;
            justify-content: center;
            align-items: center;
            &:hover{
                background-color: #424242;
            }
            
        }

        
        .options{
            position: absolute;
            display: none;
            background-color: rgba(249, 249, 255, 0.4);
            width: 100%;
            border-radius: 15px;

            top: 32px;
            
            align-items: center;
            /* background-color: blue; */
            .option{
                display: flex;
                justify-content: center;
                width: 100%;
                border-radius: 15px;
                &:hover{
                    background-color: #424242;
                }
            }
            
        }
    }
    
    
`;

const LanguageChanger = ({languageState, setEnglish, setSpanish, margin}) => {

    let options = useRef(null);
    const [optionsState, setOptionsState] = useState(false);
    let optionsShow = false;

    console.log('salihfkjahskjahkd')
    console.log(languageState)

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
            console.log("hey")
        }else{
            gsap.to(options, 0.2, { opacity: 0, display: 'none'});
            console.log("hey2")
        }
    })


    return(
        <LanguageStyle margin={margin}>
            <div className="all">
                <div className="selected" onClick={() => setOptionsState(!optionsState)}>
                    { languageState === 'en' ? <img src="/images/logos/usa.png"></img> : `` }
                    { languageState === 'es' ? <img src="/images/logos/spain.png"></img> : `` }
                    {/* <div>English</div> */}
                    
                </div>
                <div className="options" ref={element => options = element}>
                    { languageState !== 'en' ? <div className="option" onClick={() => changeLanguage('en')}>
                        <img src="/images/logos/usa.png"></img>
                    </div> : ``}
                    { languageState !== 'es' ? <div className="option" onClick={() => changeLanguage('es')}>
                        <img src="/images/logos/spain.png"></img>
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