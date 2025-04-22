"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
        scrolled ? "bg-black/40 border-b border-purple-800/20" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              AI Art Gallery
            </span>
            <div className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500" />
          </div>
        </Link>

        <nav className="ml-auto flex gap-4 sm:gap-6">
          <NavButton href="/" label="Home" />
          <NavButton href="/about" label="About" />
        </nav>
      </div>
    </header>
  )
}

function NavButton({ href, label }: { href: string; label: string }) {
  return (
    <Button asChild variant="ghost" className="relative overflow-hidden group">
      <Link href={href}>
        <span className="relative z-10 text-purple-300 group-hover:text-white transition-colors">{label}</span>
        <div className="absolute inset-0 bg-purple-900/50 z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </Link>
    </Button>
  )
}
