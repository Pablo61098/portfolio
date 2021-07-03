import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Section}  from '../styles/general.styles';
import {connect} from 'react-redux'
import {TimelineLite, Power3} from 'gsap';



   
  

const Container = styled.div`
    /* color: #000; */
    /* visibility: hidden; */
    padding: 2rem 0 2rem 4rem;
    font-family: "RobotoMonoRegular";
    /* backdrop-filter: blur(5px); */
    background-color: rgba(11, 12, 0, 0);
    /* margin: 2rem; */
    border-radius: 10px;

    width: min(80%, 90%);

    /* display: flex; */
    /* flex-wrap: wrap; */
    justify-content: center;
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(12, 8.33%);
    grid-template-rows: 1;
    /* grid-gap: 1rem; */
    /* grid-auto-flow: dense; */
    
    position: relative;
    /* bottom: 200px; */

    h1{
        font-size: clamp(2rem, 8vw, 6rem);
        margin: 2px;
        font-family: "RobotoRegular";
        /* font-family: "EczarRegular"; */ 
    }
    h1:nth-of-type(2){
        margin-left: 30px;
    }
    p{
        font-size: clamp(1rem, 1.7vw, 2.5rem);
        margin: 2px;
        margin-bottom: 30px;
        
    }
    span{
        font-size: clamp(1rem, 1.2vw, 1.5rem);
        display: inline-block;
        margin: 0 0 10px 20px;
        @keyframes caret {
            50% {
                border-color: transparent;
            }
        }
        #i-am{
            border-right: 8px solid;
            animation: caret 1s steps(1) infinite;
        }
    }
    span:nth-of-type(2){
        margin-left: 40px
    }
    button{
        font-size: clamp(0.8rem, 4vw, 1.2rem);
        padding: 0.8rem 2rem;
        color: #000;
        background: #ffb347;
        background: linear-gradient(to right, #ffcc33, #ffb347);
        border: none;
        border-radius: 10px;
        cursor: pointer;
        outline: none;
        font-weight: 500;
        margin: 10px 0; 
        /* font-weight: 900; */
        position:relative;
        font-family: "RobotoRegular";
        box-shadow: 0px 6px #efa424;
    }
    button:hover{
        box-shadow: 0px 4px #efa424;
        top: 2px;
    }


    button:active{
        box-shadow: none;
        top: 6px;
    }

    .buttonsCont{
        
        margin: 20px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    #gretting{
        width: min(100%, 400px);
        grid-column: 2 / span 4;
        /* background-color: blue; */
        /* margin-top: 70px; */
        display: flex;
        justify-content: flex-end;
        align-items: center;

        @media(max-width: 769px){
            grid-column: 3 / span 10;
        }
    }

    #me{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* background-color: red; */
        grid-column: 6 / span last-line;
        /* border-radius: 50%; */

        @media(max-width: 769px){
            grid-column: 1 / span last-line;
        }
        /* background-color: rgba(12,232,23,1); */
    }

    #me-img{
        /* width: 100%; */
        width: 100%;
        border-radius: 50%;
    }

    @media(max-width: 769px){
        padding: 2rem;
    }
`;


const Hero = ({currentState}) => {
    let section = useRef(null);
    let texts = useRef(null);
    let me = useRef(null);
    let iAm = useRef(null);
    

    useEffect(() => {
        var dataText = [ "fullstack software developer", "systems engineer"];
    
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
            if (typeof dataText[i] === 'undefined'){
                setTimeout(function() {
                    StartTextAnimation(0, iAm);
                }, 2000);
            }else{
                if (i < dataText[i].length) {

                    typeWriter(dataText[i], 0, function(){
                    
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
                            <p>Hi !! My name is</p>
                            <h1>PABLO </h1>
                            <h1>SOLANO</h1>
                            <span>I'm a <a id="i-am" ref={element => iAm = element}>fullstack software developer</a>trying to make something out of myself.</span>
                            <span>At the moment I'm studying a Systems Egineering major with great ambitions and ready to take the best oportunity possible.</span>
                            <div className="buttonsCont">
                                <a href="mailto:pablosolano61098@gmail.com">
                                    <button>Contact me</button>
                                </a>
                                <a href="https://github.com/Pablo61098/CV/blob/main/Pablo%20Solano_En.pdf" target="_blank">
                                    <button>Resumé</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="me" ref={element => me = element}>
                        <img id="me-img" src={`images/${currentState ?  `me2.gif` : `me.gif`}`}/>
                    </div>
            </Container>
       </Section>
    )
}

const mapStateToProps = (state) => {
    const {currentState} = state.darkMode
    return {currentState}
}

export default connect(mapStateToProps)(Hero);
