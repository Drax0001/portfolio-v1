"use client"

import { Download } from "lucide-react"
import { motion } from "framer-motion"

export default function Resume() {
  // const pdfUrl = url('/Berthold-CV.pdf')

  return (
    <section className="font-satoshi w-full flex flex-col gap-6">
      <div className="w-full rounded-lg bg-purple-custom p-5 gap-4">
        <div className="mb-3">
          <h2 className="text-lg font-semibold text-reddish">Resume Summary</h2>
          <p className="text-gray-400">
            A brief overview of my professional experience and skills
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-semibold mb-2 text-reddish">Education</h3>
              <ul className="list-disc list-inside text-sm text-gray-400">
                <li>{`Bachelor of Technology, University of Buea (2021 - 2024)`}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-reddish">
                Work Experience
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-400">
                <li>{`Frontend Software Developer, Swagg (2024 - Present)`}</li>
                <li>{`Software Engineering Intern, ClingsTech (July 2023 - September 2023)`}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-reddish">Skills</h3>
              <ul className="list-disc list-inside text-sm text-gray-400">
                <li>
                  Proficient in React.js, Next.js, Express.js, and other modern
                  technologies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple-custom rounded-lg flex flex-col justify-center gap-4 p-5">
        <div>
          <h2 className="text-lg font-semibold text-reddish">
            Download Full Resume
          </h2>
          <p className="text-gray-400">
            Get a detailed version of my professional and academic background
          </p>
        </div>

        <motion.a
          whileTap={{ scale: 0.95 }}
          href="/CV-Berthold.pdf"
          download="CV-Berthold.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex gap-1 justify-center items-center bg-reddish py-1.5 rounded-lg"
        >
          <Download className="mr-2 h-4 w-4" />
          <p className="font-medium">Download PDF</p>
        </motion.a>
      </div>
    </section>
  )
}
