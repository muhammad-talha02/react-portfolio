import { motion } from "framer-motion"

const SidebarMenu = () => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.3
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  }
  const Itemvariants = {
    open: {
      y: 0,
      opacity: 1
    },
    closed: {
      y: 50,
      opacity: 0
    }
  }

  const navLinks = [
    "Home", "Services", "Portfolio", "Contact"
  ]
  return (
    <motion.div className="sidebarMenu" variants={variants}>
      {navLinks?.map((item) => (
        <motion.a href={`#${item}`} whileHover={{scale:1.1}} whileTap={{scale:0.95}} key={item} variants={Itemvariants}>{item}</motion.a>
      ))}
    </motion.div>
  )
}

export default SidebarMenu