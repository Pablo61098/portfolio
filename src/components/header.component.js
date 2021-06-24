import React,  { useState, useEffect } from 'react';
import {connect}  from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SideMenu from '../components/sideMenu.component';
import DarkMode from '../components/darkMode.component'

const loadStyles = () => {
    const Navbar = styled.nav`
    font-family: RubikBold;
    font-size: 18px;
    position: fixed;
    width: 100%;
    z-index: 30;
    /* z-index: 30; */
    background-color: ${p => p.currentState ? `#020202` : `#ffff`};
    color: ${p => p.currentState ? `#ffff` : `#000`};
    top: 0;
    height: 60px;
    /* background: transparent; */
    /* padding: 0rem calc((100vw - 1300px)/2); */
    display: flex;
    justify-content: space-around;
    align-items: center;

    border-bottom: 2px solid white;
    box-shadow: ${p => p.currentState ? `0px 10px 10px #c62ff7` : ``};

    .logo{
        padding-left: 1rem;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
        font-style: italic;
    }

    .navItems{
        display:flex;
        align-items: center;
        @media (max-width: 769px){
            display: none;
        }
        
    }

    

    @media (max-width: 769px){
        justify-content: space-around;
    }

    @keyframes glow{
        from{
        }
        to{
            text-shadow: ${p => p.currentState ? `0px 10px 10px #c62ff7,0px -10px 10px #c62ff7,-5px 0px 10px #c62ff7,5px 0px 10px #c62ff7,-10px 0px 10px #c62ff7,10px 0px 10px #c62ff7;` : `none`} ;
            color: ${p => {return(p.currentState ? `#ffff` : `#c62ff7`)}} ;    
        }
    }
    @keyframes glowBack{
        from{            
            text-shadow: ${p => p.currentState ? `0px 10px 10px #c62ff7,0px -10px 10px #c62ff7,-5px 0px 10px #c62ff7,5px 0px 10px #c62ff7,-10px 0px 10px #c62ff7,10px 0px 10px #c62ff7;` : `none`} ;
            color: ${p => {return(p.currentState ? `#ffff` : `#c62ff7`)}} ;    
        }
        to{
            text-shadow: ${p => p.currentState ? `none` : `none`} ;
            color: ${p => p.currentState ? `#ffff` : `#000`} ;
        }
    }

    .navbarLink{
        text-decoration: none;
        padding: 2rem;
    }

    .glow{
        &:hover{

            animation-name:glow;
            animation-duration: 0.2s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: forwards;
        }
        /* transition: 0.5s; */
        animation-name: glowBack;
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        color: ${p => p.currentState ? `#ffff` : `#000`};
    }


    
        

    `;

    const Logo = styled(Link)`
        /* color: blue; */
        
    `;

    const NavItems = styled.div`
        
    `;

    const Collapsed = styled.button`
        display: none;
        
        width: 7vw;
        height: 7vw;
        background-color: red;
        
        position: fixed;
        right: 0;
        top: 10px;

        justify-self: right;

        min-width: 10px;
        /* justify-self: end; */

        @media (max-width: 769px){
            /* display: inline-block;
            position: static; */
            min-width: 20px;
            min-height: 20px;
            display: flex;
            justify-self: end;
            z-index: ${p => p.menuState ? `20` : `auto`};
        }
        
    `;

    const NavbarLink = styled(Link)`
        /* color: #000; */
        
    `;

    return {Navbar, Collapsed}
}


const Header = ({currentState}) => {

    const [menuState, setMenuState] = useState(false);
    // const [width, setWidth] = useState(getWindowDimension())

    const {Navbar, Collapsed} = loadStyles();

    const showMenu = () => {
        setMenuState(!menuState);
    }

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth > 769)
                setMenuState(false);
        }
        window.addEventListener('resize', handleResize);
    });

    

    return (
       <Navbar currentState={currentState}>
            <div className="logo glow" to='/'>Pablo Solano</div>
            <div className="navItems">
                <div className="navbarLink glow" to='/'>Home</div>
                <div className="navbarLink glow" to='/about'>About</div>
                <div className="navbarLink glow" to='/services'>Services</div>
                <DarkMode/>
            </div>
            <Collapsed menuState={menuState} onClick={showMenu}/>
                { menuState ? <SideMenu/> : null }
       </Navbar>
    )
}

const mapStateToProps = (state) => {
    const {currentState} = state.darkMode
    console.log('maaaaaaaaaaaaaaaaaaaaan')
    console.log(currentState)
    return {currentState: currentState}
}


export default connect(mapStateToProps)(Header);