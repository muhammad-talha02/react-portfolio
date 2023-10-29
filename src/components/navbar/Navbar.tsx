import { motion } from "framer-motion"
import "./navbar.scss"
import { Sidebar } from ".."
const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.div className="logo" initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{duration:0.5}}
                >
                    M Talha
                </motion.div>
                <div className="socialLinks">
                    <a href="#"><img src="/public/facebook.png" alt="" /></a>
                    <a href="#"><img src="/public/instagram.png" alt="" /></a>
                    <a href="#"><img src="/public/youtube.png" alt="" /></a>
                    <a href="#"><img src="/public/dribbble.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
