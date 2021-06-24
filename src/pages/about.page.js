import React from 'react'
import styled from 'styled-components'
import AboutInfo from "../components/aboutInfo.component"
import {Section}  from '../styles/general.styles';
import {TitleSection} from '../styles/general.styles'

const Division = styled.div`
    width: 80%;
    /* background-color: lightblue; */
    /* justify-content: center; */
    /* display: flex; */
    /* flex-direction: column; */
    max-width: 1000px;

    .titleSection{
        margin-bottom: 70px;
    }
    
`;

const About = () => {
    return (
        <Section>
            <Division>
                <TitleSection left>
                    About Me
                </TitleSection>
                <AboutInfo/>
            </Division>
        </Section>
    )
}

export default About