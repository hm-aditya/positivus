import {  ArrowUpRightIcon } from "lucide-react"
import SEO from "/static/services-seo.svg"
import PPC from "/static/services-ppc.svg"
const services = [
  {
    title: <p >Search engine <br className="mb-1"/> optimization</p>,
    variant: "light" as const,
    logo: SEO,
  },
  {
    title: <p>Pay-per-click <br/> advertising</p>,
    variant: "lime" as const,
    logo: PPC,
  },
]

function ServiceCard({
  title,
  variant,
  logo,
}: {
  title: React.ReactNode
  variant: "lime" | "dark" | "light"
  logo: string
}) {
  const bgColor =
    variant === "lime"
      ? "bg-[#B9FF66]"
      : variant === "dark"
      ? "bg-[#191A23]"
      : "bg-[#F3F3F3]"

  const iconBg = variant === "dark" ? "bg-white" : "bg-[#191A23]"
  const textColor = variant === "dark" ? "text-white" : "text-[#191A23]"

  return (
    <div
      className={`
        ${bgColor}
        rounded-3xl p-6 md:p-8
        border border-[#191A23]
        shadow-[4px_4px_0_0_#191A23]

        relative

        /* ===== DESKTOP LAYOUT ===== */
        md:grid md:grid-cols-2
        md:items-center
        md:gap-6

        min-h-57.5 md:min-h-50
      `}
    >
      {/* ===== LEFT SIDE ===== */}
      <div className="flex flex-col justify-between h-full">
        <div>
          <span
            className={`
              ${
                variant === "lime"
                  ? "bg-white"
                  : variant === "dark"
                  ? "bg-white"
                  : "bg-[#B9FF66]"
              }
              text-[#191A23]
              px-2 py-1 rounded-md
              text-lg md:text-xl font-medium
              inline-block
            `}
          >
            {title}
          </span>
        </div>

        {/* Arrow + Learn more */}
        <div
          className="
            absolute bottom-5 left-5      /* mobile */
            md:static md:mt-6            /* desktop */
            flex items-center gap-3
          "
        >
          <div
            className={`${iconBg} w-10 h-10 rounded-full flex items-center justify-center`}
          >
            <ArrowUpRightIcon
              className="w-5 h-5 text-[#B9FF66]"
              strokeWidth={3}
            />
          </div>

          <span className={`${textColor} text-sm hidden md:block`}>
            Learn more
          </span>
        </div>
      </div>

      {/* ===== RIGHT SIDE – IMAGE ===== */}
      <div
        className="
          absolute bottom-3 right-3       /* mobile */
          md:static md:flex md:justify-end
        "
      >
        <img
          src={logo}
          alt="service"
          className="
            w-42.5        /* mobile */
            md:w-52.5     /* desktop */
            object-contain
          "
        />
      </div>
    </div>
  )
}




export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row  text-center md:text-start items-center  gap-4 md:gap-10 mb-10 md:mb-16">
          <h2 className="bg-[#B9FF66] px-2 py-1 rounded-md text-2xl md:text-3xl font-medium inline-block w-fit">
            Services
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} variant={service.variant} logo={service.logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
