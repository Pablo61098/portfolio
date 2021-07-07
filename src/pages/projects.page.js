import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import ProjectsCard from '../components/cards/projectCard.component'
import {Section} from '../styles/general.styles'
// import ProjectsCard  from '../components/cards/projectCard.component'
import {content} from '../content/projectsCardsContent'
import {TitleSection} from '../styles/general.styles'
import {sectionTitles} from '../content/texts.content';
import {connect} from 'react-redux';


const Division = styled.div`
    
    width: 80%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    /* grid-auto-rows: minmax(min-content, max-content); */
    
    /* grid-row-gap: 5px; */
    /* grid-column-gap: 5px; */
    /* justify-content: center; */
   
    /* background-color: #f9f9ff; */
    /* border: 3px solid blue; */

`;

const Projects = ({languageState}) => {


    
    return (
        <Section down >
            {/* <ProjectsCard>
                <CardStyle>
                    hola
                </CardStyle> */}
            <Division>
                <TitleSection className="titleProjects" left>{sectionTitles[languageState][5]}</TitleSection>
                {
                    content[languageState].map( (project, index) => 
                        (
                            <ProjectsCard key={index} project={project} delay={index}/>
                        )
                    )
                }
                
                {/* <ProjectsCard/>
                <ProjectsCard/>
                <ProjectsCard/>
                <ProjectsCard/> */}
            </Division>
            
        </Section>
    )
}

const mapStateToProps = (state) => {
    const {languageState} = state.language
    return {languageState}
}

export default connect(mapStateToProps, null)(Projects)
