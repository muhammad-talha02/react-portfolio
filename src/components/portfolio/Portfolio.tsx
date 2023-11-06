import { motion, useScroll, useSpring, useTransform } from "framer-motion"
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

    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    return (
        <section style={{height:"100vh"}}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y: y }}>
                        <motion.h2>{item.title}</motion.h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll<any>({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, damping: 30
    })
    return (
        <div ref={ref} className="portfolio">
            <div className="progress">
                <h1>Featured Projects</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
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
