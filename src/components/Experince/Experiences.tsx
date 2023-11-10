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
            date="2023 - present"
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={<img src='/skills/reactjs.png' style={{ width: "100%", padding: "5px" }} />}
        >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Abu Dhabi, UAE</h4>
            <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
        </VerticalTimelineElement>
    )
}


const Experiences = () => {
    return (
        <div className="experience">
            <div className="experienceContainer">
                <h2>My Experiences</h2>
                <VerticalTimeline>
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experiences
