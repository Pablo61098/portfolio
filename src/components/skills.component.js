import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Section} from '../styles/general.styles'
import {TitleSection} from '../styles/general.styles'
import {connect} from 'react-redux'
import {gsap, TimelineLite, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';



const Container = styled.div`
    color: ${p => p.currentState ? `#000` : `#000`};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    font-family: RobotoMonoRegular;
    font-size: 18px;
    font-weight: 800;
    .skills{
        display: flex;
        /* flex-wrap: wrap; */
        justify-content: space-around;
        flex-direction: ${p => p.skills ? `row` : `row-reverse`};
        align-items: space-around;
        width: ${p => p.skills ? `30%` : `20%` };
        margin: 20px 10px;
        background-color: #f9f9ff;
        height: ${p => p.skills ? `100px` : `80px` };
        border-radius: 25px;
        .skill{
            width: 60%;
        }
        .skillsImages{
            width: 20%;
        }
        .both{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        img{
            width: 100%;
        }
        @media(max-width: 769px){
            width: 40%;
        }
        @media(max-width: 547px){
            width: 80%;
        }
        .express{
            width: 175%;
        }
    }
`;


const SkillsImg = ({images}) => {

    

    return (
        <div className="skillsImages both" >
           {images ? images.map((tech) =>  {
                    if (tech == "Express.png" || tech == "CH.png"){
                        return (<img className='express' src={`images/logos/${tech}`}></img>)
                    }else if(tech == "EJS.png"){
                        return(<span>&lt;%EJS</span>)
                    }else{
                        return (<img src={`images/logos/${tech}`}></img>)
                    }
                }) : ``
            }  
        </div>
    )
}



const Skills = ({skillSet, toolSet, skills, tools, currentState}) => {

    // gsap.registerPlugin(ScrollTrigger);
    let skillAnimated = [];
    let title = useRef(null);

    const timeline = new TimelineLite();
    const timeline2 = new TimelineLite();

    useEffect(() => {
        
        
        
        
        // skillAnimated.map((skill) => {
        gsap.from(skillAnimated, {duration: 1.2, opacity: 0.0, scale: 0.1,  ease: Power3.easeInOut, scrollTrigger: {
            trigger: skillAnimated,
            // start: "5% 20%",
            // end: "5% 50%",
            // markers: true,
            toggleActions: "play none none none",
        }},);

        // })
        
        
        
    })

    let set = skillSet
    if(!skillSet){
        set = toolSet
    }

    return (

       <Container className="todo" skills={skills} tools={tools} currentState={currentState}>
            <TitleSection className="titleSkillsTools" left={skills ? true : false}>
                <div  ref={element => title = element}>
                    {skills ? `Skillset` : `Tools I use`}
                </div>
            </TitleSection>
                { 
                    set.map((skill) => (
                        <div className="skills" ref={element => skillAnimated.push(element) }>
                            <div className="skill both">{skill.name}</div>
                            <SkillsImg images={skill.images}></SkillsImg>
                        </div>
                    ))
                }
       </Container>
    )
}

const mapStateToProps = (state) => {
    const {currentState} = state.darkMode
    return {currentState: currentState}
}


export default connect(mapStateToProps)(Skills);

