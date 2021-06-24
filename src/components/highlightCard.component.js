import React from 'react';
import styled from 'styled-components';
import {TitleSection} from '../styles/general.styles'

const Container = styled.div`
    width:80%;
`;

const HCardStyle = styled.div`
    width: 100%;
    
    /* height: 350px; */
    /* background-color: red; */

    display: grid;
    grid-template-columns: repeat(12, 8.33%);
    /* grid-gap: 0.3%; */
    margin-bottom: 100px;
    position: relative;
    
    .rounded{
        @media (max-width: 768px) {
            border-radius: 30px;
        }
    }
    /* grid-template-columns: 1fr; */

`;

const Thumbnnail = styled.div`
    grid-column: ${p => !p.right ? `1 / span 9` : `4 / span sad`};
    grid-row: 1;
    /* justify-self: center; */
    z-index: 5;
    /* background-color: rgba(60, 202, 142, 1);
    opacity: 0.4; */
    
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* display: flex;
    flex-direction: row; */
    box-shadow: -2px 10px 30px #969696;

    @media (max-width: 768px) {
        grid-column: 1 / span last-line;
        align-items: start;
        border-radius: 30px;
        
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* border-radius: 20px; */
    }

    iframe{
        width: 100%;
    }

    @keyframes getOver{
        0%{opacity: 0.9}
        30%{
            }
        100%{
            opacity: 1;
        }
    }
    @keyframes backNormal{
        0%{}
        30%{
            }
        100%{
            opacity: 1;
        }
    }

    .overlay{
        position: absolute;
        top: 0px; 
        /* left: 0; */
        width: 100%;
        height: 100%;
        background-color: #c62ff7;
        opacity: 0.3;
        
        &:hover{
            opacity: 0;
        }
        
    }

    animation-name: out, backNormal;
    animation-duration: 0.7s;
    
    

    &:hover{
        z-index: 20;
        animation-name: in, getOver;
        animation-duration: 0.7s;
        animation-timing-function: ease-in ease-out;
        animation-fill-mode: forwards;

        /* animation-name: getOver;
        animation-duration: 0.5s;
        animation-timing-function: ease-in ease-out; */
    }

    
     

`;

const Info = styled.div`
    grid-column: ${p => !p.right ? `5 / span last-line` : `1 / span 8`};
    grid-row: 1;
    /* justify-self: center; */
    z-index: 10;
    /* opacity: 0.4;
    background-color: grey; */
    max-height: 80%;
    align-self: center;
    text-align: ${p => !p.right ? `right` : `left`};
    font-size: 15px;
    
    @keyframes getOverInfo{
        0%{}
        30%{
            }
        100%{
            opacity: 1;
        }
    }
    @keyframes backNormalInfo{
        0%{opacity: 1}
        20%{opacity: 0.9}
        100%{opacity: 1}
    }

    animation-name: out, backNormalInfo;
    animation-duration: 1.7s;
    
    &:hover{
        z-index: 20;
        animation-name: in, getOverInfo;
        animation-duration: 0.7s;
        animation-timing-function: ease-in ease-out;
        animation-fill-mode: forwards;
    }
    
    /* position: absolute; */

    /* display: flex;
    flex-direction: column; */
    
    
    /* font-size: min( 1vw); */

    @media (max-width: 768px) {
        grid-column: 1 / span last-line;
        position: static;
        /* font-size: 2vw; */
    }

    @media (max-width: 281px) {
        font-size: 4vw;
    }

    .titleProject{
        /* color: black; */
        font-size: clamp(0.8rem, 5vw, 1.5rem);
        margin-bottom: 20px;
        color: white;
        background-color: rgba(17, 34, 64, 1);
        padding: 10px 0;
        opacity: 0.9;
        text-align: center;
        box-shadow: -2px 10px 10px #202125;
        
    }
    .technologies{
        /* font-size: clamp(1.5vw, 1.5rem); */
        margin-bottom: 20px;
        
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
        padding: 10px 0;

        border-radius: 20px;

        background-color: rgba(255, 255, 255, 0.8);

        box-shadow: -2px 10px 10px #202125;
        
        img{
            margin-right: 5%;
            width: 10%;
        }

        span{
            margin-right: 7%;
            width: 10%;
            font-size: 22px;
            color: #83cd29;
            font-weight: 600;
        }

        .express{
            width: 20%;
            
        }

        span:last-child{
            margin-right: 0;
        }
    }
    .description{
        /* font-size: clamp(0.1rem, 10px, 1.5rem); */
        background-color: rgba(17, 34, 64, 1);
        color: lightcyan;
        /* margin-bottom: 20px; */
        padding: 5%;
        box-shadow: -2px 10px 10px #202125;
    }
    .links{
        margin-top: 10px;
    }
`;




const HighlightCard = ({right, title, description, image, technologies, link, key}) => {


    

    return (
        // <Container>
            
            
            
            <HCardStyle>
                
                <Thumbnnail right={right}>
                    <img className="rounded" src={`images/highlights/${image}`}></img>
                    <div className="overlay rounded"></div>
                </Thumbnnail>
                
                <Info right={right}>
                    <div className="titleProject">
                        {title}
                    </div>
                    <div className="technologies">
                        {technologies ? technologies.map((tech) =>  {
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
                    <div className="description">
                        {description}
                    </div>
                    {/* <div className="links">
                        <a href={`${link}`} target="_blank">View live</a>
                    </div> */}
                </Info>
            </HCardStyle>
        // </Container>
    )
}

export default HighlightCard;