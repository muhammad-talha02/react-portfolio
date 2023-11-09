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
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis mollitia vero.</p>
                        {/* <button>GO</button> */}
                    </motion.div>
                    <motion.div className="box" whileHover={{}}>
                        <img src="/services/web.png" alt="" />
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis mollitia vero.</p>
                        {/* <button>GO</button> */}
                    </motion.div>
                    <motion.div className="box" whileHover={{}}>
                        <img src="/services/web.png" alt="" />
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis mollitia vero.</p>
                        {/* <button>GO</button> */}
                    </motion.div>
                    <motion.div className="box" whileHover={{}}>
                        <img src="/services/web.png" alt="" />
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis mollitia vero.</p>
                        {/* <button>GO</button> */}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>

    )
}

export default Services