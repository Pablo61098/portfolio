import React from 'react';
import styled from 'styled-components';
import {socialMedia} from '../content/socialMediaSites.content'
import {connect} from 'react-redux'
// import {ReactComponent as Insta} from '../images/instagram.svg'

const loadStyles = () => {
    const Container = styled.div`
    position: fixed;
    top: 40%;
    left: 20px;
    width:40px;
    display: flex;
    /* flex-direction: column; */
    flex-flow: column;

    *{
        padding-top: 10px;
        /* background-color: blue; */
        display: flex;
        justify-content: center;
    }

    @media (max-width: 768px) {
        visibility: hidden;
    }

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
    

    `;

    const Line = styled.div`
        border: 0.3px solid black;
        height: 100px;
        width: 0;
    `;

    return {Container, Line}
}


const SocialSideBar = ({currentState})  => {
    // console.log('YYYY')
    // console.log(currentState.darkMode)
    const {Container, Line} = loadStyles()

    return (
        <Container currentState={currentState} >
            {
                socialMedia.map(((img) => (
                        // <img className="imagen"/>
                        img
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
    return {currentState: currentState}
}


export default connect(mapStateToProps)(SocialSideBar);