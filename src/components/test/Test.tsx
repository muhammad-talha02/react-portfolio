import { motion } from "framer-motion"
import "./test.scss"
const Test = () => {

  const variants = {
    hidden: { opacity: 0 },
    visible: (i:number) => ({
      opacity: 1,
      //  x: 100, 
      transition: {
        delay: i * 0.8
      }
    }),
  }

  const items = [
    "items1",
    "items2",
    "items3",
    "items4",
  ]
  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {
          items.map((item, i) => (

            <motion.li key={item} variants={variants} custom={i}>
              {item}
            </motion.li>
          ))
        }
      </motion.ul>
    </div>
  )
}

export default Test
