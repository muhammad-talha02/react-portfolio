import { motion } from "framer-motion"
import "./services.scss"

const Services = ()=>{
    return (
        <motion.div className="services">
            <motion.div className="textContainer">
               <p>
                I focus on helping your branch grow <br/> and move forward.
                </p> 
                <hr />
            </motion.div>
            <motion.div className="titileContainer">
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><strong>Unique</strong> Ideas</h1>
                </div>
                <div className="title">
                    <h1><strong>For Your</strong> Business </h1>
                    <button>What I do?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer">
                <div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis mollitia vero, consectetur itaque adipisci animi ea dolores saepe dolorum, aspernatur cum quo quos alias, fugit sed omnis velit libero.</p>
                    <button>GO</button>
                </div>
            </motion.div>
        </motion.div>
        
    )
}

export default Services