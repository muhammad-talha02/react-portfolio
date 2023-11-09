import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./experince.scss"
// import { experiences } from '../../utils';

const ExperienceCard = () => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1d1836', color: "#fff" }}
            contentArrowStyle={{ borderRight: '7px solid #232631', }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<img src='/skills/reactjs.png' />}
        >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
        </VerticalTimelineElement>
    )
}


const Experiences = () => {
    return (
        <div className="experience">
            <h2>My Experiences</h2>
            <VerticalTimeline>
                <ExperienceCard />
            </VerticalTimeline>
        </div>
    )
}

export default Experiences
