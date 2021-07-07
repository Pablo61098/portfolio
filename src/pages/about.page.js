import React from 'react'
import styled from 'styled-components'
import AboutInfo from "../components/aboutInfo.component"
import {Section}  from '../styles/general.styles';
import {TitleSection} from '../styles/general.styles';
import {sectionTitles} from '../content/texts.content';
import {connect} from 'react-redux';

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

const About = ({languageState}) => {
    return (
        <Section>
            <Division>
                <TitleSection left>
                    {sectionTitles[languageState][3]}
                </TitleSection>
                <AboutInfo/>
            </Division>
        </Section>
    )
}

const mapStateToProps = (state) => {
    const {languageState} = state.language
    return {languageState}
}

export default connect(mapStateToProps, null)(About);