import React from 'react'
import styled from 'styled-components'
import {Section} from '../generalStyles/general.styles'
import Skills from '../components/skills/skills.component.js'
import {skillset} from '../content/skillset.content'
import {toolset} from '../content/skillset.content'


const SkillTools = () => {
    return (
        <Section down>
            <Skills skills skillSet={skillset}></Skills>
            <Skills tools toolSet={toolset}></Skills>
        </Section>
    )
}


export default SkillTools;