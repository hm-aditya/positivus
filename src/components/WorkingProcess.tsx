"use client"

import { useState } from "react"
import { MinusIcon, PlusIcon } from "lucide-react"
const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description: "We conduct thorough research on your industry, competitors, and target audience to develop a comprehensive strategy that aligns with your business objectives and maximizes your ROI.",
  }
]


export function WorkingProcess() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-16">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 mb-10 md:mb-16">
          <h2 className="bg-[#B9FF66] px-3 py-1 rounded-md text-2xl md:text-3xl font-medium w-fit">
            Our Working Process
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-md">
            Step-by-Step Guide to Achieving <br className="hidden md:block" /> Your <br className="block md:hidden" /> Business Goals
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`
                  rounded-4xl
                  border border-[#191A23]
                  shadow-[4px_4px_0_0_#191A23]
                  transition-all
                  ${isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"}
                `}
              >
                {/* ===== TOP CONTENT (ONLY WHEN OPEN) ===== */}
                {isOpen && (
                  <div className="px-6 md:px-10 pt-6 md:pt-8">
                    <p className="text-[#191A23] text-sm md:text-base mb-4 md:mb-6 max-w-3xl">
                      {step.description}
                    </p>

                    {/* Divider line */}
                    <div className="border-t border-[#191A23]" />
                  </div>
                )}

                {/* ===== TITLE ROW (ALWAYS BOTTOM) ===== */}
                <button
                  className="w-full px-6 md:px-10 py-6 md:py-8 flex items-center justify-between"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <div className="flex items-center gap-3 md:gap-5">
                    <span className="text-4xl md:text-5xl font-semibold text-[#191A23]">
                      {step.number}
                    </span>

                    <span className="text-lg md:text-xl font-medium text-[#191A23] text-left">
                      {step.title}
                    </span>
                  </div>

                  {/* PLUS / MINUS */}
                  <div
                    className="
                      w-10 h-10 md:w-12 md:h-12
                      rounded-full
                      border-2 border-[#191A23]
                      flex items-center justify-center
                      bg-white
                    "
                  >
                    {isOpen ? (
                      <MinusIcon strokeWidth={5} className="w-5 h-5 md:w-6 md:h-6 text-[#191A23] " />
                    ) : (
                      <PlusIcon strokeWidth={5} className="w-5 h-5 md:w-6 md:h-6 text-[#191A23] " />
                    )}
                  </div>
                </button>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

