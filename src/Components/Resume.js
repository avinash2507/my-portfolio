import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../Styled/Layout'
import Title from './Title'
import SmallTitle from './SmallTitle'
import BusinessCenter from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from './ResumeItem'
const resumeContents = [
    {
        id: 1,
        year: 'Dec 2021-Present',
        title: 'Web Developer',
        subTitle: 'No Working Experince',
        text: [
            '',
            'Knowledge of  React ,Redux , React hooks,Material UI ,JWT and React router dom etc are the main library that I have used to and making some small projects',
            'Optimization purpose using react-dev-tools',
            'Maintained the code quality, linting.',
            "Involved in all web development life-cycle from translating designs into high-quality code from scratch, deployment and it's maintenance.",
        ],
    },]
  
const educationalContents = [
    {
        id: 1,
        year: 'Jul 2017-Sept 2020',
        title: 'Bachelor of Engineering ',
        subTitle: 'Hi-Tech Institute of Engineering & Technology',
        text: 'Electrical Engineering with 7.15CGPA',
    },
    {
        id: 2,
        year: 'Jul 2014-Sept 2017',
        title: 'Diploma   Engineering ',
        subTitle: 'Govt. Polytechnic Ghaziabad',
        text: 'Electronics Communication Engineering with 73%',
    },
    {
        id: 2,
        year: 'July 2012-June 2014',
        title: 'InterMediate',
        subTitle: 'Sonebhadra,India',
        text: 'Science Stream',
    },
    {
        id: 3,
        year: 'July 2010-June 2012',
        title: 'Higher Seconadary',
        subTitle:'Sonebhadra,India',
        text: 'Science Stream ',
    },
]
const Resume = () => {
    return (
        <ResumeStyle>
            <Title title="Resume" span="Resume" />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle
                        icon={<BusinessCenter />}
                        title="Working Experince"
                    />
                </div>
                <div className="resume-content">
                    {resumeContents.map((content) => (
                        <ResumeItem key={content.id} {...content} />
                    ))}
                </div>
                <div className="small-title u-margin">
                    <SmallTitle
                        icon={<SchoolIcon />}
                        title="Educational Qualification"
                    />
                </div>
                <div className="resume-content">
                    {educationalContents.map((content) => (
                        <ResumeItem key={content.id} {...content} />
                    ))}
                </div>
            </InnerLayout>
        </ResumeStyle>
    )
}

const ResumeStyle = styled.div`
    .small-title {
        padding-bottom: 2rem;
    }
    .u-margin {
        margin-top: 2rem;
    }
    .resume-content {
        border-left: 2px solid var(--border-color);
    }
`

export default Resume
