import React from "react"
import { motion } from "framer-motion"
import { Home, Folder, Hammer, Contact, Edit, NotepadText } from "lucide-react"
import NavbarLink from "./NavbarLink"

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-black-high-opacity py-4 rounded-b-lg"
    >
      <ul className="flex items-center justify-center gap-8">
        <NavbarLink
          href="#"
          icon={<Home className="w-5 h-5 text-white" />}
          label="Home"
        />
        <NavbarLink
          href="/#projects"
          icon={<Folder className="w-5 h-5 text-white" />}
          label="Projects"
        />
        <NavbarLink
          href="/#skills"
          icon={<Hammer className="w-5 h-5 text-white" />}
          label="Skills"
        />
        <NavbarLink
          href="/#resume"
          icon={<NotepadText className="w-5 h-5 text-white" />}
          label="Resume"
        />
        <NavbarLink
          href="/#contact"
          icon={<Contact className="w-5 h-5 text-white" />}
          label="Contact"
        />
        {/* <NavbarLink href="#" icon={<Edit className="w-5 h-5" />} label="Edit" /> */}
      </ul>
    </motion.nav>
  )
}

export default Navbar
