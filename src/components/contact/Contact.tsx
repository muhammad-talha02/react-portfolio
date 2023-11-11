import { motion, useInView } from "framer-motion"
import "./contact.scss"
import { useRef } from "react"
const Contact = () => {


    const ref = useRef(null)
    // const InView = useInView(ref, { margin: "-100px" })

    const varinats = {
        initial: {
            y: 500,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2,
                staggerChildren: 0.3
            }
        },
    }
    return (
        <motion.div ref={ref} className="contact" variants={varinats} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={varinats}>
                <motion.h1 variants={varinats}>Let's Work Together</motion.h1>
                <motion.div className="item" variants={varinats}>
                    <h2>Mail</h2>
                    <span>talha123@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={varinats}>
                    <h2>Address</h2>
                    <span>Abu Dhabi United Arab Emirates</span>
                </motion.div>
                <motion.div className="item" variants={varinats}>
                    <h2>Phone</h2>
                    <span>+971 548652426</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                {/* <motion.div
                    className="phoneSvg"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0}}
                    transition={{ delay: 2, duration: 1 }}
                >

                    <img src="https://media.giphy.com/media/umYMU8G2ixG5mJBDo5/giphy.gif" alt="" />
                </motion.div> */}
                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <input type="text" required placeholder="Name" />
                    <input type="email" required placeholder="Email" />
                    <textarea name="message" rows={8} placeholder="Message"></textarea>
                    <button>Send Message</button>
                </motion.form>
            </div >
        </motion.div >
    )
}

export default Contact
