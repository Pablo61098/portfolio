import React, {useRef, useEffect} from 'react';
import {socialMedia} from '../../content/socialMediaSites.content'
import {connect} from 'react-redux'
import {gsap, Power3} from 'gsap';
// import {ReactComponent as Insta} from '../../images/instagram.svg'

import {ContainerDark, ContainerBright} from './socialMedia.styles'

const SocialSideBar = ({currentState, alreadyLoaded, block})  => {
    // console.log('YYYY')
    // console.log(currentState.darkMode)
    // const {Container, Line} = loadStyles()
    const Container = currentState ? ContainerDark : ContainerBright;

    let socialLinks =  [];

    if(!block){
        block = false
    }

    useEffect(() => {
        // if(!alreadyLoaded){
            socialLinks.forEach((link,index) => {
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
            {/* <div>
                <Line/>
            </div> */}
        </Container>
    );

}

const mapStateToProps = (state) => {
    const {currentState} = state.darkMode
    // console.log(`dopee2 ${alreadyLoaded}`)
    return {currentState: currentState}
}


export default connect(mapStateToProps)(SocialSideBar);