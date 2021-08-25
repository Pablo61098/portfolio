import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import {Section} from '../generalStyles/general.styles'
import HighlightsCard from '../components/cards/highlightCard.component'
import {content} from '../content/highlightCardsContent';
import {TitleSection} from '../generalStyles/general.styles'
import {gsap, Power3} from 'gsap';
import {sectionTitles} from '../content/texts.content';
import {connect} from 'react-redux';

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

const Highlights = ({languageState}) => {
    // console.log(content);

    let cards = [];

    useEffect(() => {
        cards.map((card) => {
            gsap.from(card, {duration: 0.9, opacity: 0.0, scale: 0.1,  ease: Power3.easeInOut, scrollTrigger: {
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
                    <span>{sectionTitles[languageState][4]}</span>
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
                    content[languageState].map((cont, index) => {
                        return (<div key={`card-${index}`} ref={element => cards.push(element)}>
                            <HighlightsCard right={ (index+1)%2 ? false : true}  title={cont.title} description={cont.description} image={cont.image} technologies={cont.technologies} link={cont.link} />
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

const mapStateToProps = (state) => {
    const {languageState} = state.language
    return {languageState}
}

export default connect(mapStateToProps, null)(Highlights)