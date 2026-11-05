import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Berthold's Corner",
  description: "Portfolio of Mboneng Nkengni Berthold, a fullstack web and mobile developer based in Douala, Cameroon.",
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
