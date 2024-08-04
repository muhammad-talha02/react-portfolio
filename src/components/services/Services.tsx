import { motion } from "framer-motion"
import "./services.scss"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
}

const Services = () => {
    return (
        <div style={{background: "linear-gradient(180deg, #0c0c1d, #111132)"}}>

            <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
                <motion.div className="textContainer" variants={variants}>
                    <p>
                       Introduction
                    </p>
                    <h2>Overview</h2>
                    {/* <hr /> */}
                </motion.div>
                <motion.div className="titileContainer">
                    <div className="title">
                        <p>Welcome to my world of web development! I am a passionate MERN stack developer, dedicated to crafting exceptional user experiences through elegant and efficient code. With a strong foundation in JavaScript and a comprehensive understanding of the MERN stack (MongoDB, Express.js, React.js, and Node.js), I thrive in creating robust, scalable, and feature-rich web applications.</p>
                    </div>
                    {/* <div className="title">
                        <img src="/people.webp" alt="" />
                        <h1><motion.strong whileHover={{ color: "orange" }}>Unique</motion.strong> Ideas</h1>
                    </div> */}
                    {/* <div className="title">
                        <h1><motion.strong whileHover={{ color: "orange" }}>For Your</motion.strong> Business </h1>
                        <button>What I do?</button>
                    </div> */}
                </motion.div>
                <motion.div className="listContainer" variants={variants}>
                    <motion.div className="box" whileHover={{}}>
                        <img src="/services/web.png" alt="" />
                        <h2>User Interface Specialist</h2>
                        <p>Specialized in creating visually appealing and user-friendly interfaces with modern web technologies.</p>
                        {/* <button>GO</button> */}
                    </motion.div>
                    <motion.div className="box" whileHover={{}}>
                        <img src="/services/backend.png" alt="" />
                        <h2>Server-Side Architect</h2>
                        <p>Experienced in developing robust server-side logic, databases, and APIs to power dynamic web applications.</p>
                        {/* <button>GO</button> */}
                    </motion.div>
                    <motion.div className="box" whileHover={{}}>
                        <img src="/services/web.png" alt="" />
                        <h2>End-to-End Web Engineer</h2>
                        <p>Versatile developer skilled in both front-end and back-end technologies, capable of building end-to-end web solutions.</p>
                        {/* <button>GO</button> */}
                    </motion.div>
                    <motion.div className="box" whileHover={{}}>
                        <img src="/services/web.png" alt="" />
                        <h2>JavaScript Solutions Expert</h2>
                        <p>Proficient in JavaScript, building interactive and dynamic web applications with a strong focus on performance and functionality.</p>
                        {/* <button>GO</button> */}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>

    )
}

export default Services