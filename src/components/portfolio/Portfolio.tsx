import {motion, useScroll , useSpring} from "framer-motion"
import { Projects } from "../../utils"
import "./portfolio.scss"
import { useRef } from "react"
type SInglePorjectProps = {
    item: {
        id: number,
        title: string,
        img: string,
        desc: string,
    }
}
const SingleProject = ({ item }: SInglePorjectProps) => {
    return (
        <section>
            {item.title}
        </section>
    )
}

const Portfolio = () => {
const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness:100, damping:30
    })
    return (
        <div ref={ref} className="portfolio">
            <div className="progress">
                <h1>Featured Projects</h1>
                <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
            </div>

            {
                Projects.map((item) => {
                    return <SingleProject item={item} key={item.id} />
                })
            }
        </div>
    )
}

export default Portfolio
