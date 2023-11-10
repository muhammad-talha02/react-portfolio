import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "./cursor.scss"
const Cursor = () => {

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {

        const cursorMove = (e: MouseEvent): void => {
            setCursorPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", cursorMove)

        return () => {

            window.removeEventListener("mousemove", cursorMove)
        }
    }, [])
    // console.log(cursorPosition)
    return (
        <motion.div className="cursor" animate={{ x: cursorPosition.x - 20, y: cursorPosition.y - 20 }}>

        </motion.div>
    )
}

export default Cursor
