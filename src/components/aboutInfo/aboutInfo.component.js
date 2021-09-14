import React, {useRef, useEffect} from 'react' 
import {gsap} from 'gsap';
import {connect} from 'react-redux';
import {aboutMeText} from '../../content/texts.content';

import Container from './aboutInfo.styles';

const AboutInfo = ({languageState}) => {

    let bio = useRef(null)
    let gretting = useRef(null)

    useEffect(() => {
        let bio_children = bio.children
        for(let i=0; i< bio_children.length; i++){
            setTimeout(() => {gsap.from(bio_children[i], {duration: i/5, opacity: 0, y: '200px', scrollTrigger: {
                trigger: bio_children[i],
                toggleActions: "play none none none",
            }})})
        }
        
    }, []);

    return(
                
            <Container>
                <div  id="me">
                    <img id="me-img" src='images/boy.gif' alt="Me and my dog"/>
                </div>
                <div id="gretting" ref={element => gretting = element}>
                    {/* <div className="titleSection">
                        <div className="title">
                            01. About Myself
                        </div>
                        <div className="lineContainer">
                            <div className="line">
                            </div>
                        </div>
                    </div> */}
                    <div className="text">
                        <div ref={element => bio = element}>
                            <span>{aboutMeText[languageState][0]}</span>
                            <span>{aboutMeText[languageState][1]}</span>
                            <span>{aboutMeText[languageState][2]}</span>
                            <span>{aboutMeText[languageState][3]}</span>
                        </div>
                    </div>
                </div>  
            </Container>

    )
}

const mapStateToProps = (state) => {
    const {languageState} = state.language
    return {languageState}
}

export default connect(mapStateToProps, null)(AboutInfo);