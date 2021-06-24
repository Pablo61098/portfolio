import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import AboutInfo from "../components/aboutInfo.component"
import {Section} from '../styles/general.styles'
import HighlightsCard from '../components/highlightCard.component'
import {content} from '../content/highlightCardsContent';
import {TitleSection} from '../styles/general.styles'
import {gsap, TweenMax, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

const Division = styled.div`
    width: 80%;
    /* background-color: lightblue; */
    /* justify-content: center; */
    /* display: flex; */
    /* flex-direction: column; */
    max-width: 1000px;

    .titleSection{
        margin-bottom: 70px;
    }
    
`;

const Highlights = ({}) => {
    console.log(content);

    let cards = [];

    useEffect(() => {
        cards.map((card) => {
            gsap.from(card, {duration: 1.2, opacity: 0.0, scale: 0.1,  ease: Power3.easeInOut, scrollTrigger: {
                trigger: card,
                // start: "5% 20%",
                // end: "5% 50%",
                // markers: true,
                toggleActions: "play none none none",
            }},);
        });
        

    })

    


    return (
        <Section down >
            
            <Division>
                <TitleSection flex >
                    <span>Project Highlights</span>
                </TitleSection>
                {/* <div className="titleSection">
                    <div className="title">
                        02. Project Highlights
                    </div>
                    <div className="lineContainer">
                        <div className="line">
                        </div>
                    </div>
                </div> */}

                {
                    content.map((cont, index) => {
                        return (<div ref={element => cards.push(element)}>
                            <HighlightsCard right={ (index+1)%2 ? false : true} key={`card-${index}`} title={cont.title} description={cont.description} image={cont.image} technologies={cont.technologies} link={cont.link} />
                        </div>)
                    })
                }

                
                
                {/* <HighlightsCard/>
                <HighlightsCard/>
                <HighlightsCard/> */}
            </Division>

            
        </Section>
    )
}

export default Highlights