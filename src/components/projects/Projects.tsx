import { Card, WrapperComponent } from ".."
import "./projects.scss"
const Projects = () => {
    const Items = [1, 2, 3]
    return (
        <div className="projects">
            <div className="container">
                <h2>My Projects</h2>
                <div className="projectItems">
                    {
                        Items.map((item) => {
                            return (
                                <div className="projectItem" key={item}>
                                    <Card />
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WrapperComponent(Projects)
