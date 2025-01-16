// export default NavbarLink
import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"

interface Props {
  href: string
  icon: React.ReactNode
  label: string
}

const NavbarLink = ({ href, icon, label }: Props) => {
  const [isHovered, setIsHovered] = React.useState(false)
  // const container = {
  //   hidden: { opacity: 1, y: 0 },
  //   visible: { opacity: 1, y: 0 },
  // }
  // const links = {
  //   hidden: { opacity: 0, y: 0 },
  //   visible: { opacity: 1, y: 35 },
  // }

  return (
    <Link href={href}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex flex-col items-center"
      >
        {icon}
        {/* <motion.span

          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute text-sm text-white bg-white bg-opacity-15 rounded-xl px-1.5 py-0.5"
        >
          {label}
        </motion.span> */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 25 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute text-sm text-white bg-reddish  rounded-xl px-1.5 flex justify-center items-center"
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  )
}

export default NavbarLink
