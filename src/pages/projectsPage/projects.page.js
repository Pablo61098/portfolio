import React, {useRef, useEffect} from 'react';
import ProjectsCard from '../../components/cards/projectCard/projectCard.component'
import {Section} from '../../generalStyles/general.styles'
// import ProjectsCard  from '../components/cards/projectCard.component'
import {content} from '../../content/projectsCardsContent'
import {TitleSection} from '../../generalStyles/general.styles'
import {sectionTitles} from '../../content/texts.content';
import {connect} from 'react-redux';

import Division from './projectsPage.styles';

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
