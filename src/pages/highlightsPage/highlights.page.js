import React, {useRef, useEffect} from 'react';
import {Section, ThinDivision} from '../../generalStyles/general.styles'
import HighlightsCard from '../../components/cards/highlightCard/highlightCard.component'
import {content} from '../../content/highlightCardsContent';
import {TitleSection} from '../../generalStyles/general.styles'
import {gsap, Power3} from 'gsap';
import {sectionTitles} from '../../content/texts.content';
import {connect} from 'react-redux';

// import Division from './highlightsPage.styles';
// gsap.registerPlugin(ScrollTrigger);



const Highlights = ({languageState}) => {
    // console.log(content);

    let cards = [];

    useEffect(() => {
        cards.forEach((card) => {
            gsap.from(card, {duration: 0.9, opacity: 0.0, scale: 0.1,  ease: Power3.easeInOut, scrollTrigger: {
                trigger: card,
                // start: "5% 20%",
                // end: "5% 50%",
                // markers: true,
                toggleActions: "play none none none",
            }},);
        });
    }, [])

    


    return (
        <Section down >
            
            <ThinDivision>
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
                            <HighlightsCard right={ (index+1)%2 ? false : true}   {...cont}/>
                            {/* title={cont.title} description={cont.description} image={cont.image} technologies={cont.technologies} link={cont.link} */}
                        </div>)
                    })
                }

                
                
                {/* <HighlightsCard/>
                <HighlightsCard/>
                <HighlightsCard/> */}
            </ThinDivision>

            
        </Section>
    )
}

const mapStateToProps = (state) => {
    const {languageState} = state.language
    return {languageState}
}

export default connect(mapStateToProps, null)(Highlights)