import { motion, useScroll, useTransform } from "framer-motion"
import "./parallex.scss"
import { useRef } from "react"
type parallexProps = {
    type?: string
}

const Parallex = ({ type }: parallexProps) => {
    const parallexRef = useRef()
    const { scrollYProgress } = useScroll({
        target: parallexRef,
        offset: ['start start', "end start"]
    })

    const YText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    const YBG = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    return (
        <div ref={parallexRef} className="parallex" style={{ background: type === "services" ? "linear-gradient(180deg, #0c0c1d, #111132)" : "linear-gradient(180deg, #0c0c1d, #505064)" }}>
            <motion.h1 style={{ y: YText }}>{type === "services" ? "What I Do?" : "What I Did?"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{ y: YBG, background: `url(${type === 'services' ? "/planets.png" : "/sun.png"}` }} className="planets"></motion.div>
            <motion.div style={{ x: YBG }} className="stars"></motion.div>
        </div>
    )
}

export default Parallex