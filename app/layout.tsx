import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "react-hot-toast"

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
        <Toaster />
      </body>
    </html>
  )
}
