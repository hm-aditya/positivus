"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Logo from '/static/logo.svg'

const navItems = [
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#usecases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full py-2 md:py-3 sticky top-0 z-50 backdrop-blur bg-blur">
      <div className="container mx-auto px-4 md:px-16">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center">
              <img src={Logo} alt="Logo" />
            </div>
            <span className="text-3xl mt-1 font-semibold tracking-wide text-foreground">Positivus</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-foreground/80 transition-colors text-lg "
              >
                {item.label}
              </a>
            ))}
            <button
              className="rounded-xl border-foreground text-lg border py-3 px-4 hover:bg-black cursor-pointer hover:text-white transition-colors bg-transparent"
            >
              Request a quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-foreground/80 transition-colors text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                className="rounded-xl border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors w-full mt-2 bg-transparent"
              >
                Request a quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
