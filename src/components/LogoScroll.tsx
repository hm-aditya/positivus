"use client"

import Amazon from "/static/amazon.svg"
import Dribbble from "/static/dribbble.svg"
import Hubspot from "/static/hubspot.svg"
import Notion from "/static/notion.svg"
import Netflix from "/static/netflix.svg"
import Zoom from "/static/zoom.svg"

const logos = [
  { name: "Amazon", logo: Amazon },
  { name: "Dribbble", logo: Dribbble },
  { name: "HubSpot", logo: Hubspot },
  { name: "Notion", logo: Notion },
  { name: "Netflix", logo: Netflix },
  { name: "Zoom", logo: Zoom },
]

export function LogoScroll() {
  return (
    <div className="w-full overflow-hidden py-8 md:py-12">
      <div className="relative">
        <div className="animate-scroll flex w-max gap-12 md:gap-20">
          
          {/* First set */}
          {logos.map((logo, index) => (
            <img
              key={`first-${index}`}
              src={logo.logo}
              alt={logo.name}
              className="h-6 md:h-8 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
            />
          ))}

          {/* Duplicate set */}
          {logos.map((logo, index) => (
            <img
              key={`second-${index}`}
              src={logo.logo}
              alt={logo.name}
              className="h-6 md:h-8 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
            />
          ))}
              {/* Duplicate set */}
          {logos.map((logo, index) => (
            <img
              key={`second-${index}`}
              src={logo.logo}
              alt={logo.name}
              className="h-6 md:h-8 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
            />
          ))}

        </div>
      </div>
    </div>
  )
}
