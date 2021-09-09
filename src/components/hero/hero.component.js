import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Section}  from '../../generalStyles/general.styles';
import {connect} from 'react-redux'
import {TimelineLite, Power3} from 'gsap';
import eventActions from '../../actions/events.userActions';
import {greetingHero} from '../../content/texts.content';

import Container from './hero.styles';

const Hero = ({currentState, languageState, hasChanged}) => {
    let section = useRef(null);
    let texts = useRef(null);
    let me = useRef(null);
    let iAmSpanish = useRef(null);
    let iAmEnglish = useRef(null);
    

    useEffect(() => {
        var dataText = {'en': [ "fullstack software developer", "systems engineer"], 'es': ["desarrolador de software fullstack", "ingeniero en sistemas"]}
    
        function typeWriter(text, i, fnCallback, iAm) {
            // console.log(text);
            // if(hasChanged){
            //     return 0;
            // }
            if (i < (text.length)) {

                iAm.innerHTML = text.substring(0, i+1) ;
                setTimeout(function() {
                    typeWriter(text, i + 1, fnCallback, iAm)
                }, 100);
            }

            else if (typeof fnCallback === 'function') {

                setTimeout(fnCallback, 2000);
            }
        }
        function StartTextAnimation(i, iAm, language) {
            if (typeof dataText[language][i] === 'undefined'){
                setTimeout(function() {
                    StartTextAnimation(0, iAm, language);
                }, 2000);
            }else{
                console.log(language);
                if (i < dataText[language][i].length) {

                    typeWriter(dataText[language][i], 0, function(){
                    
                        StartTextAnimation(i + 1, iAm, language);
                    }, iAm);
                }
            }
        }
        // All animations of all possible languages run at the same time
        // We control what which is shown based on the languageState -> see id="i-am" elements
        StartTextAnimation(0, iAmSpanish, 'es');
        StartTextAnimation(0, iAmEnglish, 'en');
        
    }, []) // This is only executed when the component mounts, it does not need to execute everytime a state changes
    

    useEffect(() => {
        let timeline = new TimelineLite()
        // timeline.duration(0.9)
        timeline.add('start')
        // timeline.add('me')
        // console.log(`texts`)
        for(let i=0; i<texts.children.length; i++){
            // console.log(texts.children[i])
            if(i%2 === 0){
                timeline.from(texts.children[i], {duration: 0.9,x: -80, ease: Power3.easeInOut}, 'start')
            }else{
                timeline.from(texts.children[i], {duration: 0.9,x: 50, ease: Power3.easeInOut}, 'start')
            }
        }
        timeline.from(me, {duration: 0.9, opacity: 0.3, scale: 0.4, ease: Power3.easeInOut}, 'start');


    })

    return (
       <Section margin >
            <Container>
                    <div id="gretting">
                        <div className="texts" ref={(element) => texts = element}>
                            <p>{greetingHero[languageState][0]}</p>
                            <h1>{greetingHero[languageState][1]} </h1>
                            <h1>{greetingHero[languageState][2]}</h1>
                            <span>{greetingHero[languageState][3]} 
                                <a id="i-am" className={`${languageState === 'en' ? 'doNotShow' : '' }`} ref={element => iAmSpanish = element}>{greetingHero[languageState][4]}</a> 
                                <a id="i-am" className={`${languageState === 'es' ? 'doNotShow' : '' }`} ref={element => iAmEnglish = element}>{greetingHero[languageState][4]}</a>
                                {greetingHero[languageState][5]}
                            </span>
                            <span>{greetingHero[languageState][6]}</span>
                            <div className="buttonsCont">
                                <a href="mailto:pablosolano61098@gmail.com" onClick={eventActions.mailPressed}>
                                    <button>{greetingHero[languageState][7]}</button>
                                </a>
                                <a href="https://github.com/Pablo61098/CV/blob/main/Pablo%20Solano_En.pdf" target="_blank" rel="noopener noreferrer" onClick={eventActions.resumePressed}>
                                    <button>{greetingHero[languageState][8]}</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="me" ref={element => me = element}>
                        <img id="me-img" src={`images/${currentState ?  `me2.gif` : `me.gif`}`} alt="Me but pixeled"/>
                    </div>
            </Container>
       </Section>
    )
}

const mapStateToProps = (state) => {
    const {currentState} = state.darkMode
    const {languageState, hasChanged} = state.language
    return {currentState, languageState, hasChanged}
}

export default connect(mapStateToProps)(Hero);
