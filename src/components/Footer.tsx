"use client"
import { useState } from "react"
import Logo from "/static/logo1.svg"
import LinkedinLogo from "/static/linkedin.svg"
import FacebookLogo from "/static/facebook.svg"
import TwitterLogo from "/static/X.svg"

const navItems = [
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#usecases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
]

const socialLinks = [
  { name: "LinkedIn", href: "#", logo: LinkedinLogo },
  { name: "Facebook", href: "#", logo: FacebookLogo },
  { name: "Twitter", href: "#", logo: TwitterLogo },
]

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail("")
  }

  return (
    <footer className="bg-[#191A23] text-white rounded-t-3xl">
      <div className="container mx-auto px-16 py-12">

        {/*  TOP ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Positivus" className="w-8 h-8" />
            <span className="text-xl font-semibold">Positivus</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="underline underline-offset-2 font-lighter text-white/80 hover:text-[#B9FF66] transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="w-8 h-8 rounded-full flex items-center justify-center"
              >
                <img src={link.logo} alt={link.name}  />
              </a>
            ))}
          </div>
        </div>

        {/*  MIDDLE SECTION */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">

          {/* Contact */}
          <div className="space-y-4">
            <span className="inline-block bg-[#B9FF66] text-[#191A23] px-3 py-1 rounded-md text-sm font-medium">
              Contact us:
            </span>

            <div className="text-sm text-gray-300 space-y-2">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="container mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-center bg-[#292A32] rounded-2xl p-8 "
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border border-white rounded-xl h-12 w-5 px-4  text-white placeholder:text-gray-400 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[#B9FF66] text-[#191A23] rounded-xl mx-2  h-12 px-4 font-medium hover:bg-[#a8eb55] transition"
              >
                Subscribe to news
              </button>
            </form>
          </div>
        </div>

        {/*  BOTTOM BAR */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Positivus. All Rights Reserved.
          </p>
          <a href="#" className="text-gray-400 text-sm underline hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
