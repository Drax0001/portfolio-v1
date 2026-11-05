import React from "react"
import Link from "next/link"

interface Props {
  href: string
  icon: React.ReactNode
  label: string
}

const NavbarLink = ({ href, icon, label }: Props) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-1 text-white hover:text-reddish transition-colors"
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Link>
  )
}

export default NavbarLink
