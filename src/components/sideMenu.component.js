import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import {gsap} from 'gsap';
import DarkModeComponent from './darkMode.component';
import {Link} from 'react-scroll';
import SocialMediaBar from './socialMediaBar.component.js';
import pagesActions from '../actions/pages.userActions'


const loadStyles = () => {
    const Container = styled.div`
        
        width: 100vw;
        position: fixed;
        right: 0;
        top: 0;
        height: 100vh;
        z-index: 15;

        
        /* background-color: cyan; */
        
        display: ${p => !p.menuState ? `none` : `grid`};
        
        grid-template-columns: repeat(6, 15%);

        .blur{
            opacity:0;
            grid-column: 1 / span 3;
            grid-row: 1;
            /* background-color: red; */
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
        }

        .menu{
            opacity:0;
            grid-column: 4 / span last-line;
            grid-row: 1;
            
            
            display: grid;
            grid-template-rows: 20% repeat(6, 10%) 30% ;
            grid-template-columns: 20% 60% 20%;

            background-color: ${p => p.currentState ? `#2a2a2a` : `#f9f9ff`};;
            text-align: center;

            .home{
                grid-row: 2;
            }
            .skills{
                grid-row: 3;
            }
            .about{
                grid-row: 4;
            }
            .projects{
                grid-row: 5;
            }
            .darkMode{
                grid-row: 6;
                border: 0;
            }
            .socialMedia{
                grid-row: 7;
            }
            .sections{
                border: 2px solid black;
            }
            .menuLink{
                grid-column: 2;
                margin-bottom: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            p{
                margin: 0 5px;
            }
        }
    `;

    return {Container}
}



const SideMenu = ({setMenuState, menuState, currentState, showMenu}) => {
    
    let {Container} = loadStyles() 

    let blur = useRef(null)
    let menu = useRef(null)

    useEffect(() => {
        if(menuState){
            gsap.from(blur, {duration: 0.2, width: '100vw'})
            gsap.fromTo(blur, {opacity: 0}, {duration: 0.2, opacity: 1, marginLeft: '0'})
            gsap.fromTo(menu, {opacity: 0, marginLeft: '50vw'}, {duration: 0.2, opacity: 1, marginLeft: '0'}) 
            document.body.style.position = 'fixed';
        }
    })

    return (
        <Container menuState={menuState} currentState={currentState}>
            <div className="blur" onClick={() => {setMenuState(false); showMenu()}} ref={element => blur = element}>
            </div>
            <div className="menu" ref={element => menu = element }>
                <Link to='home' className="linkScroll home menuLink"  spy={true} smooth={true} onClick={() => {pagesActions.homePressed(); setMenuState(false); showMenu()}}><p>01.</p><span>Home</span></Link>
                <Link to='skills' className="linkScroll skills menuLink"  spy={true} smooth={true} onClick={() => {pagesActions.skillsPressed(); setMenuState(false); showMenu()}}><p>02.</p><span>Skills</span></Link>
                <Link to='about' className="linkScroll about menuLink"  spy={true} smooth={true} onClick={() => {pagesActions.aboutPressed(); setMenuState(false); showMenu()}}><p>03.</p><span>About</span></Link>
                <Link to='highlights' className="linkScroll projects menuLink"  spy={true} smooth={true} onClick={() => {pagesActions.projectsPressed(); setMenuState(false); showMenu()}}><p>04.</p><span>Projects</span></Link>
                <div className="menuLink darkMode">
                    <DarkModeComponent></DarkModeComponent>
                </div>
                <div className="socialMedia menuLink">
                    <SocialMediaBar block/>
                </div>
            </div>
        </Container>
    )
}

export default SideMenu;