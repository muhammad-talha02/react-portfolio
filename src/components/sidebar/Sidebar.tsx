import { useState } from 'react'
import ToggleButton from './ToggleButton'
import SidebarMenu from './SidebarMenu'
import { motion } from 'framer-motion'
import "./sidebar.scss"
const Sidebar = () => {
    const [open, setOpen] = useState(false)
    console.log(open)
    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 30
            }


        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 500,
                damping: 40
            }
        }
    }
    return (
        <motion.div className='sidebar' animate={open ? "open" : "closed"} >
            <motion.div className="sidebarDrawer" variants={variants}>
                <SidebarMenu />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}

export default Sidebar