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
        <div>

            <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
                <motion.div className="textContainer" variants={variants}>
                    <p>
                        I focus on helping your branch grow <br /> and move forward.
                    </p>
                    <hr />
                </motion.div>
                <motion.div className="titileContainer">
                    <div className="title">
                        <img src="/people.webp" alt="" />
                        <h1><motion.strong whileHover={{ color: "orange" }}>Unique</motion.strong> Ideas</h1>
                    </div>
                    <div className="title">
                        <h1><motion.strong whileHover={{ color: "orange" }}>For Your</motion.strong> Business </h1>
                        <button>What I do?</button>
                    </div>
                </motion.div>
                <motion.div className="listContainer" variants={variants}>
                    <motion.div className="box" whileHover={{ background: "lightgray", color: "#000" }}>
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis mollitia vero, consectetur itaque adipisci animi ea dolores saepe dolorum, aspernatur cum quo quos alias, fugit sed omnis velit libero.</p>
                        <button>GO</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{ background: "lightgray", color: "#000" }}>
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis mollitia vero, consectetur itaque adipisci animi ea dolores saepe dolorum, aspernatur cum quo quos alias, fugit sed omnis velit libero.</p>
                        <button>GO</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{ background: "lightgray", color: "#000" }}>
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis mollitia vero, consectetur itaque adipisci animi ea dolores saepe dolorum, aspernatur cum quo quos alias, fugit sed omnis velit libero.</p>
                        <button>GO</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{ background: "lightgray", color: "#000" }}>
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis mollitia vero, consectetur itaque adipisci animi ea dolores saepe dolorum, aspernatur cum quo quos alias, fugit sed omnis velit libero.</p>
                        <button>GO</button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>

    )
}

export default Services