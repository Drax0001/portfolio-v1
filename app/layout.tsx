import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Berthold's Corner",
  description: "Portfolio website designed and created by Nkengni Berthold",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true} // This prevents extensions from causing a server/client mismatch
      >
        {children}
      </body>
    </html>
  )
}
