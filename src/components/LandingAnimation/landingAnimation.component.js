import React, {useRef, useEffect} from 'react';
import { LandingStyleDark, LandingStyleBright } from './landingAnimation.styles';
import {connect} from 'react-redux';

import {gsap, Power3} from 'gsap';

import Logo from '../logo/logo.component';

const LandingAnimation = ({currentState}) => {

    let wholeLandingPage = useRef(null);
    let logo2 = useRef(null);

    let LandingStyle = currentState ? LandingStyleDark : LandingStyleBright;

    useEffect(() => {
        let effects = [{x : '-100vw'}, {opacity: '0'}, {y : '-100vw'}];
        let effectValue = parseInt(Math.random() * 4);

        gsap.to(wholeLandingPage, {duration: 1.2, ...effects[effectValue], ease: Power3.easeInOut}, 2.6);
        // gsap.to(logo2, {duration: 1.0, height: `0px`, ease: Power3.easeInOut}, 2.5);
    });

    return (
        <div >
            <LandingStyle>
                <div ref={element => wholeLandingPage =element}>
                    <Logo landing></Logo>
                </div>
            </LandingStyle>
        </div>
        
    );

}

const mapStateToProps = (state) => {
    const {currentState} = state.darkMode;
    return {currentState};
};

export default connect(mapStateToProps, null)(LandingAnimation);

