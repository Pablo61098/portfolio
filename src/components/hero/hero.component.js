import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Section}  from '../../generalStyles/general.styles';
import {connect} from 'react-redux'
import {TimelineLite, Power3} from 'gsap';
import eventActions from '../../actions/events.userActions';
import {greetingHero} from '../../content/texts.content';

import Container from './hero.styles';

const Hero = ({currentState, languageState}) => {
    let section = useRef(null);
    let texts = useRef(null);
    let me = useRef(null);
    let iAm = useRef(null);
    

    useEffect(() => {
        var dataText = {'en': [ "fullstack software developer", "systems engineer"], 'es': ["desarrolador de software fullstack", "ingeniero en sistemas"]}
    
        function typeWriter(text, i, fnCallback, iAm) {

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
        function StartTextAnimation(i, iAm) {
            if (typeof dataText[languageState][i] === 'undefined'){
                setTimeout(function() {
                    StartTextAnimation(0, iAm);
                }, 2000);
            }else{
                if (i < dataText[languageState][i].length) {

                    typeWriter(dataText[languageState][i], 0, function(){
                    
                        StartTextAnimation(i + 1, iAm);
                    }, iAm);
                }
            }

            
        }
        StartTextAnimation(0, iAm);
    })
    

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
                            <span>{greetingHero[languageState][3]} <a id="i-am" ref={element => iAm = element}>{greetingHero[languageState][4]}</a>{greetingHero[languageState][5]}</span>
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
    const {languageState} = state.language
    return {currentState, languageState}
}

export default connect(mapStateToProps)(Hero);
