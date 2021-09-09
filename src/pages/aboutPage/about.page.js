import React from 'react'
import AboutInfo from "../../components/aboutInfo/aboutInfo.component"
import {Section, ThinDivision}  from '../../generalStyles/general.styles';
import {TitleSection} from '../../generalStyles/general.styles';
import {sectionTitles} from '../../content/texts.content';
import {connect} from 'react-redux';

const About = ({languageState}) => {
    return (
        <Section>
            <ThinDivision>
                <TitleSection left>
                    {sectionTitles[languageState][3]}
                </TitleSection>
                <AboutInfo/>
            </ThinDivision>
        </Section>
    )
}

const mapStateToProps = (state) => {
    const {languageState} = state.language
    return {languageState}
}

export default connect(mapStateToProps, null)(About);