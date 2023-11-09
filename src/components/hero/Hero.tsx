import { HeroSkills } from ".."
import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}
const slidTextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      // repeatType: "mirror",
      duration: 5,
    }
  }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">

        <motion.div className="intro" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Muhammad Talha</motion.h2>
          <motion.h1 variants={textVariants}>Full Stack/MERN Developer</motion.h1>
          <motion.div variants={textVariants} className="heroButtons">
            <motion.button variants={textVariants}>My Services</motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate='scrollButton' src="/scroll.png" alt="" />
        </motion.div>
        <div className="heroSkillContainer">

        <HeroSkills/>
        </div>

        {/* <div className="imgContainer">
          <img src="/hero.png" alt="" />
        </div> */}
      </div>
      <motion.div className="slidingText" variants={slidTextVariants} initial="initial" animate="animate">
        Proramming Engineer and Manager
      </motion.div>
    </div>
  )
}

export default Hero
