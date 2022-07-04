import React from 'react'
import { MainLayout, InnerLayout } from '../Styled/Layout'
import Title from './Title'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'
const allSkills = [
    {
        title: 'React',
        width: '60%',
        text: '60%',
    },
    {
        title: 'Redux',
        width: '30%',
        text: '30%',
    },
    {
        title: 'Axios',
        width: '70%',
        text: '70%',
    },
    {
        title: 'styled-components',
        width: '60%',
        text: '60%',
    },
    {
        title: 'HTML 5',
        width: '80%',
        text: '80%',
    },
    {
        title: 'CSS 3',
        width: '70%',
        text: '70%',
    },
    {
        title: 'Bootstrap 5',
        width: '60%',
        text: '60%',
    },
 
    {
        title: 'Atomic Designing',
        width: '80%',
        text: '80%',
    },
    {
        title: 'JavaScript',
        width: '50%',
        text: '50%',
    },
    {
        title: 'TypeScript',
        width: '65%',
        text: '65%',
    }
]
const Skills = () => {
    return (
        <SkillsStyle>
            <Title title="Resume" span="Resume" />
            <InnerLayout>
                <div className="skills">
                    {allSkills.map((skill, i) => {
                        return (
                            <ProgressBar
                                key={skill.title}
                                title={skill.title}
                                text={skill.text}
                                width={skill.width}
                            />
                        )
                    })}
                </div>
            </InnerLayout>
        </SkillsStyle>
    )
}

const SkillsStyle = styled.div`
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 1.5rem;
        grid-column-gap: 2.5rem;
        @media screen and (max-width: 900px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

export default Skills
