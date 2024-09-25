// export default NavbarLink
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface Props {
  href: string
  icon: React.ReactNode
  label: string
}

const NavbarLink = ({ href, icon, label }: Props) => {
  const container = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 },
  }
  const links = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 35 },
  }

  return (
    <Link href={href}>
      <motion.div
        initial="hidden"
        whileHover="visible"
        variants={container}
        className="relative flex flex-col items-center"
      >
        {icon}
        <motion.span
          initial="hidden"
          variants={links}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute text-sm text-white bg-white bg-opacity-15 rounded-xl px-1.5 py-0.5"
        >
          {label}
        </motion.span>
      </motion.div>
    </Link>
  )
}

export default NavbarLink
