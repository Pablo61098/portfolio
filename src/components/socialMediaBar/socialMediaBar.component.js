import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import {socialMedia} from '../../content/socialMediaSites.content'
import {connect} from 'react-redux'
import {gsap, Power3} from 'gsap';
// import {ReactComponent as Insta} from '../../images/instagram.svg'

const loadStyles = () => {
    const Container = styled.div`
        position: ${p => !p.block ? `fixed` : `static`};
        top: 35%;
        left: 20px;
        width: ${p => !p.block ? `40px` : `100%`};
        display: flex;
        
        /* flex-direction: column; */
        flex-flow: ${p => !p.block ? `column` : `row`};
        justify-content: ${p => !p.block ? `center` : `space-around`};
        .socialLink{
            cursor: pointer;

            *{
                /* padding-top: 10px; */
                /* background-color: blue; */
                display: flex;
                justify-content: center;
            }

            @media (max-width: 768px) {
                visibility: ${p => !p.block ? `hidden` : `visible`};
            }
            .link{
                height: 100%;
                padding-top: 10px;
            .imagen{
                width: 30px;
                height: auto;
                padding-bottom: 25px;
                /* background-color: blue; */
                fill: ${p => p.currentState ? `#ffff` : `#000`};

                animation-name: growBack;
                animation-duration: 0.1s;
                animation-timing-function: linear;

                @keyframes grow {
                    from{}
                    to{width: 35px;
                    transform: translateX(5px);
                    fill: ${p => p.currentState ? `#c62ff7` : `#c62ff7`} }
                }

                @keyframes growBack {
                    from{width: 35px;
                    transform: translateX(5px);}
                    to{width: 30px;
                    height: auto;}
                }

                &:hover{
                    animation-name: grow;
                    animation-duration: 0.3s;
                    animation-timing-function: linear;
                    animation-fill-mode: forwards;
                }

            }
            }
        }
    

    `;

    const Line = styled.div`
        border: 0.3px solid black;
        height: 100px;
        width: 0;
    `;

    return {Container, Line}
}


const SocialSideBar = ({currentState, alreadyLoaded, block})  => {
    // console.log('YYYY')
    // console.log(currentState.darkMode)
    const {Container, Line} = loadStyles()

    let socialLinks =  [];

    if(!block){
        block = false
    }

    useEffect(() => {
        // if(!alreadyLoaded){
            socialLinks.map((link,index) => {
                // console.log(`dope ${window.pageYOffset}`)
                if(!block){
                    gsap.from(link, {duration: 1.9, opacity: 0.0, y: -index*60,  ease: Power3.easeInOut})
                }else{
                    gsap.from(link, {duration: 1.9, opacity: 0.0, x: -index*60,  ease: Power3.easeInOut})
                }
                
            })
        // }
    })

    return (
        <Container currentState={currentState} block={block} >
            {
                socialMedia.map(((img, index) => (
                        // <img className="imagen"/>
                        <div key={index} className="socialLink" ref={element => socialLinks.push(element)}>
                            {img}
                        </div>
                    )
                ))
            }
            <div>
                {/* <Line/> */}
            </div>
        </Container>
    );

}

const mapStateToProps = (state) => {
    const {currentState} = state.darkMode
    // console.log(`dopee2 ${alreadyLoaded}`)
    return {currentState: currentState}
}


export default connect(mapStateToProps)(SocialSideBar);