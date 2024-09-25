"use client"

import { Twitter, Github, Linkedin } from "lucide-react"
import { github, linkedin, twitter, profilePic } from "../../constants/images"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ProfileCard() {
  return (
    <div className="font-satoshi flex flex-col items-center py-8 bg-black-high-opacity text-white rounded-lg overflow-hidden">
      <div className="w-28 h-28 rounded-full mb-2 border-2 border-white">
        <Image
          src={profilePic}
          alt="Profile picture"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h2 className="font-inter text-2xl font-bold mb-1">
        Mboneng N. Berthold
      </h2>
      <h3
        // drag
        // dragConstraints={{
        //   top: -50,
        //   left: -50,
        //   right: 50,
        //   bottom: 50,
        // }}
        className="font-inter text-xl text-center text-reddish font-semibold mb-4"
      >
        Fullstack Web and Mobile Developer
      </h3>
      <div className="flex bg-white px-2.5 py-1.5 rounded-lg  space-x-4 mb-4">
        <Link href="https://github.com/Drax0001" target="_blank">
          <Image src={github} className="w-7 h-7 " alt="" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nkengni-berthold-46685b244/"
          target="_blank"
        >
          <Image src={linkedin} className="w-7 h-7 " alt="" />
        </Link>
        <Link href="https://x.com/BertholdNkengni" target="_blank">
          <Image src={twitter} className="w-7 h-7 " alt="" />
        </Link>
        {/* <Image src={album} className="w-6 h-6 text-purple-500" alt="" /> */}
      </div>
      <p className="text-gray-400 text-center max-w-80">
        Hi, {`I'm`} Berthold. I specialize in creating intuitive Web and Mobile
        Apps. Fluent in both English and French, I bring a diverse perspective
        and a collaborative approach to every project.
      </p>
    </div>
  )
}
