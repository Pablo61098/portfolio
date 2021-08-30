import React, {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import DarkModeComponent from '../darkMode/darkMode.component';
import {Link} from 'react-scroll';
import SocialMediaBar from '../socialMediaBar/socialMediaBar.component.js';
import pagesActions from '../../actions/pages.userActions';
import LanguageChanger from '../language/language.component';

import {ContainerBrightNormal, ContainerBrightCollapsed, ContainerDarkNormal, ContainerDarkCollapsed} from './sideMenu.styles';

const SideMenu = ({setMenuState, menuState, currentState, showMenu}) => {
    

    const Container = currentState ? ( !menuState ? ContainerDarkNormal : ContainerDarkCollapsed) : ( !menuState ? ContainerBrightNormal : ContainerBrightCollapsed);
    // const displayConfig = !menuState ? `displayNormal` : `displayCollapsed`;

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
        <Container  menuState={menuState} currentState={currentState}>
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
                <div className="language menuLink">
                    <LanguageChanger />
                </div>
                <div className="socialMedia menuLink">
                    <SocialMediaBar block/>
                </div>
            </div>
        </Container>
    )
}

export default SideMenu;