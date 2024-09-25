import React from "react"
import { motion } from "framer-motion"

const FloatingBall = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="h-20 w-20 rounded-full border-2 border-white"
    ></motion.div>
  )
}

export default FloatingBall
