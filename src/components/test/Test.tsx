import { motion } from "framer-motion"
import "./test.scss"
const Test = () => {
  return (
    <div className="course">
      <motion.div className="Box" 
      initial={{opacity:0, scale:0.5}}
      animate={{
        opacity:1 , scale:1
      }} transition={{duration:2, delay:0.5}}>

      </motion.div>
    </div>
  )
}

export default Test
