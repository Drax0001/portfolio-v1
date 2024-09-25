"use client"

import React, { useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import SendMailButton from "./SendButton"
import { sendMail } from "@/lib/actions"
import { motion } from "framer-motion"
import { revalidatePath } from "next/cache"
import useFormIsOpenStore from "@/lib/state"

const ContactForm = () => {
  const [error, formAction] = useFormState(sendMail, undefined)
  // const [formIsOpen, setFormIsOpen] = useState(true)

  const { formIsOpen, setFormIsOpen } = useFormIsOpenStore()

  return (
    <>
      {formIsOpen ? (
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-satoshi flex flex-col gap-4"
          action={formAction}
        >
          <label htmlFor="name">
            <p className="mb-1 font-medium">Name</p>

            <input
              className="inputStyle w-full"
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
            />
          </label>

          <label htmlFor="email">
            <p className="mb-1 font-medium">Email</p>

            <input
              className="inputStyle w-full"
              type="email"
              name="email"
              id="email"
              placeholder="jdoe@gmail.com"
              required
            />
          </label>
          <label htmlFor="message">
            <p className="mb-1 font-medium">Message</p>

            <textarea
              className="inputStyle w-full"
              name="message"
              id="message"
              placeholder="Message"
              rows={10}
              required
            />
          </label>
          {error && (
            <p className="text-white bg-red-500 px-4 py-1.5 rounded-lg font-medium ">
              Message didn't go through. refresh your browser and try again
            </p>
          )}
          <SendMailButton onClick={() => setFormIsOpen(false)} />
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4 font-satoshi"
        >
          <p className="text-2xl text-center">Thank you for your Mail!😊</p>
          <p>I will reply as soon as possible</p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-reddish px-3 py-1.5 rounded-lg text-white"
            onClick={() => setFormIsOpen(true)}
          >
            Send Another Message
          </motion.button>
        </motion.div>
      )}
    </>
  )
}

export default ContactForm
