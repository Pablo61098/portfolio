import React,  { useState, useEffect, useRef } from 'react';
import {connect}  from 'react-redux';
import SideMenu from '../sideMenu/sideMenu.component';
import DarkMode from '../darkMode/darkMode.component';
import {gsap, Power3} from 'gsap';
import {ReactComponent as X} from '../../images/x.svg';
import {ReactComponent as Menu} from '../../images/menu.svg'
import {setAlreadyLoaded} from '../../redux/darkmode/darkMode.actions'
import {Link} from 'react-scroll';
import eventActions from '../../actions/events.userActions.js';
import pageActions from '../../actions/pages.userActions.js';
import LanguageChanger from '../language/language.component';
import Logo from '../logo/logo.component';
// import {ReactGA} from '../config.js'
// import {ReactGAInstance} from '../config.js'


import { NavbarDark, NavbarBright, Collapsed} from './header.styles';




const Header = ({currentState, alreadyLoaded, setAlreadyLoaded, languageState}) => {

    const [menuState, setMenuState] = useState(false);
    const [scrolled, scrolledState] = useState(false);
    const [animate, animateState] = useState(false);

    const Navbar = currentState ? NavbarDark : NavbarBright;
    const menuConfig = currentState ? (!menuState ? `menuDarkNormal` : `menuDarkCollapsed`) : (!menuState ? `menuBrightNormal` : `menuBrightCollapsed`);


    // let animate = true
    let changeAnimate = () => {
        animate = false
    }
    // const [width, setWidth] = useState(getWindowDimension())

    let navBar = useRef(null)
    let menuIcon = useRef(null)
    

    const showMenu = () => {
        // console.log('papsapdasp');
        if(!menuState){
            eventActions.sideMenuPressed()    
        }
        setMenuState(!menuState)
        animateState(true)
        document.body.style.position = '';
    }


    let headerPart = []

    useEffect(() => {
        // console.log(headerPart[0].parentNode.parentNode)
        // console.log('yoooooo')
        gsap.to(headerPart[0].parentNode.parentNode, {duration: 0.9, height: `60px`, ease: Power3.easeInOut, scrollTrigger: {
            // markers: true,
            toggleActions: "play complete reverse reset",
        }});
        function handleResize() {
            if(window.innerWidth > 769)
                setMenuState(false);
        }
        function handleScroll(){
            if(window.scrollY > 80){
                scrolledState(true);
            }else{
                scrolledState(false);
            }
        }
        if(!alreadyLoaded){
            headerPart.forEach((part,index) => {
                gsap.from(part, {duration: (index/2), opacity: 0, y: -60, ease: Power3.easeInOut})
            })   
        }
        if(animate){
            gsap.from(menuIcon, {duration: 0.9, rotateX: 130, rotateY: 130});
        }
        // console.log("kajaja")
        window.addEventListener('resize', handleResize);
        // window.addEventListener('scroll', handleScroll);
    });

    

    return (
       <Navbar className={scrolled ? `active` : ``}  currentState={currentState}>
            <Link spy={true} smooth={true} to='home'>
                {/* <div className="logo glow linkScroll" to='/' onClick={pageActions.homePressed} ref={element => headerPart.push(element)}>
                    <img className="logoPS" src="./images/logos/logoPS.png"></img>
                </div> */}
                <Logo></Logo>
            </Link>
            <div className="navItems">
                <Link className="linkScroll"  spy={true} smooth={true}  to='home' onClick={pageActions.pageLoaded}><div className="navbarLink glow" ref={element => headerPart.push(element)}>{languageState === 'en' ?  `Home` : `Inicio`}</div></Link>
                <Link className="linkScroll" spy={true} smooth={true} to='skills' onClick={pageActions.skillsPressed}><div className="navbarLink glow" ref={element => headerPart.push(element)}>{languageState === 'en' ?  `Skills` : `Maestría en...`}</div></Link>
                <Link className="linkScroll" spy={true} smooth={true} to='about' onClick={pageActions.aboutPressed}><div className="navbarLink glow" ref={element => headerPart.push(element)}>{languageState === 'en' ?  `About` : `Acerca de mí`}</div></Link>
                <Link className="linkScroll" spy={true} smooth={true} to='highlights' onClick={pageActions.projectsPressed}><div className="navbarLink glow" to='/services' ref={element => headerPart.push(element)}>{languageState === 'en' ?  `Projects` : `Proyectos`}</div></Link>
                <DarkMode/>
                <LanguageChanger margin/>
            </div>
            <Collapsed currentState={currentState} menuState={menuState} onClick={showMenu}>
                <div className={`${menuConfig}`} ref={element => menuIcon = element}>
                    {menuState ? <X  /> : 
                        <Menu  /> }
                </div>
            </Collapsed>
            <SideMenu setMenuState={setMenuState} menuState={menuState} currentState={currentState} showMenu={showMenu}/>
       </Navbar>
    )
}

const mapDispatchToProps = dispatch => ({
    setAlreadyLoaded: () => dispatch(setAlreadyLoaded())
})

const mapStateToProps = (state) => {
    const {currentState, alreadyLoaded} = state.darkMode
    const {languageState} = state.language
    // console.log('maaaaaaaaaaaaaaaaaaaaan')
    // console.log(currentState)
    return {currentState: currentState, alreadyLoaded: alreadyLoaded, languageState: languageState}
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);