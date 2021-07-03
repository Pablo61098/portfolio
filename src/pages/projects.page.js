import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import ProjectsCard from '../components/cards/projectCard.component'
import {Section} from '../styles/general.styles'
// import ProjectsCard  from '../components/cards/projectCard.component'
import {content} from '../content/projectsCardsContent'
import {TitleSection} from '../styles/general.styles'


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

const Projects = () => {


    
    return (
        <Section down >
            {/* <ProjectsCard>
                <CardStyle>
                    hola
                </CardStyle> */}
            <Division>
                <TitleSection className="titleProjects" left>Noteworthy code</TitleSection>
                {
                    content.map( (project, index) => 
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

export default Projects
