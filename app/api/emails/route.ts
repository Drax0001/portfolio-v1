import { Resend } from "resend"
import ContactFormEmail from "@/emails/ContactFormEmail"
import { NextRequest, NextResponse } from "next/server"
import { ContactFormType } from "@/type"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json()

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "berthnk@gmail.com",
    subject: "Message from my Portfolio",
    react: ContactFormEmail({ body: body.message, name: body.name }),
  })

  if (error) {
    return NextResponse.json({ error })
  }
  return NextResponse.json({ data })
}
