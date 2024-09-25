import React from "react"
import Home from "../page"
import Resume from "./ResumeSection"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-4 font-satoshi text-gray-400 bg-black-high-opacity rounded-t-lg py-6 md:flex-col-reverse">
      <ul className="flex items-center justify-center gap-4 md:flex-col">
        <Link href="#">Home</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#resume">Resume</Link>
        <Link href="/#contact">Contact</Link>
        {/* <Link href="#">Blog</Link> */}
      </ul>
      <p>Made with 💖 by Berthold</p>
    </div>
  )
}

export default Footer
