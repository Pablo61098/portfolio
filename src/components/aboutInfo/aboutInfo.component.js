import React, {useRef, useEffect} from 'react' 
import styled from 'styled-components'
import {gsap} from 'gsap';
import {connect} from 'react-redux';
import {aboutMeText} from '../../content/texts.content';

const Container = styled.div`
    /* color: #000; */
    padding: 2rem;
    /* backdrop-filter: blur(5px); */
    background-color: rgba(0, 0, 0, 0);
    /* margin: 2rem; */
    border-radius: 10px;

    width: 100%;

    
    /* display: flex; */
    /* flex-wrap: wrap-reverse; */
    justify-content: space-around;
    display: grid;
    grid-template-columns: repeat(12, 8.33%);
    grid-template-rows: 1;
    /* grid-auto-rows: min-content; */
    
    position: relative;
    /* bottom: 200px; */

    @media(max-width: 769px){
        /* grid-template-rows: 1fr 1fr; */
        grid-template-columns: 1;
        padding: 0;
    }

    h1{
        font-size: clamp(2rem, 8vw, 4rem);
        margin: 2px;
    }
    p{
        font-size: clamp(1rem, 6vw, 2.5rem);
        margin: 2px;
    }
    button{
        font-size: clamp(0.8rem, 4vw, 1.2rem);
        padding: 0.8rem 2rem;
        color: #000;
        background: #ffb347;
        background: linear-gradient(to right, #ffcc33, #ffb347);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        outline: none;
    }

    #gretting{
        /* width: min(60%, 400px); */
        /* margin-top: 70px; */
        display: grid;
        /* justify-content: flex-end; */
        align-items: start;
        grid-template-rows: 100%;
        font-family: RobotoMonoRegular;
        /* background-color: red; */
        grid-column: 8 / span last-line;

        @media(max-width: 769px){
            grid-column: 1 / span last-line;
            grid-row: 1;

        }

        .text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* height: 70%; */
            font-size: 1.3rem;
            /* font-size: clamp(0.7rem, 1rem, 1.5vw); */
            span{
                /* display: inline-block; */
                /* width: 100%; */
                margin-top: 5px;
                /* background-color: rgba(1,2,3,0.3); */
                grid-column: 1 / span last-line;
                display: inline-block;
                @media(max-width: 1350px){
                    font-size: 1rem;
                }
                @media(max-width: 769px){
                    display: inline-block;
                    margin-bottom: 20px;
                }
            }
            
        }


        .title{
            grid-column: 6 / span last-line;
            text-align: end;
            
        }

        .lineContainer{
            grid-column: 1 / span 5;
        }
    }

    #me{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        grid-column: 1 / span 6;
        
        @media(max-width: 769px){
            grid-column: 1 / span last-line;
            grid-row: 2;
            
        }
    }

    #me-img{
        width: 100%;
        border-radius: 50%;
    }

`;

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
        
    })

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