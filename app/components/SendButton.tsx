"use client"

import React from "react"
import { useFormStatus } from "react-dom"
import { motion } from "framer-motion"

const SendMailButton = ({ onClick }: { onClick: () => void }) => {
  const { pending } = useFormStatus()

  return (
    <motion.button
      whileHover={{ color: "#f15152" }}
      whileTap={{ scale: 0.95 }}
      disabled={pending}
      className="font-satoshi flex items-center justify-center bg-purple-custom text-white font-medium rounded-md py-1.5 px-3 "
      onClick={onClick}
    >
      {pending ? "Sending Mail..." : "Submit"}
    </motion.button>
  )
}

export default SendMailButton
