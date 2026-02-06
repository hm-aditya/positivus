

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Dot from "/static/dot.svg";
import GreenDot from "/static/greendot.svg";



const testimonials = [
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    author: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "Positivus transformed our digital presence completely. Their strategic approach to SEO and content marketing helped us achieve a 200% increase in organic traffic within just six months.",
    author: "Sarah Johnson",
    role: "CEO at Tech Solutions Inc",
  },
  {
    quote:
      "Working with Positivus has been a game-changer for our business. Their data-driven approach helped us reach new audiences and significantly improve conversions.",
    author: "Michael Chen",
    role: "Founder at Digital Ventures",
  },
  {
    quote:
      "Amazing team and outstanding results. Our ROI has never been better and the collaboration is seamless.",
    author: "Emily Davis",
    role: "CMO at Startify",
  },
];



const BubbleSVG = () => (
  <svg
    className="w-full h-auto  "
    viewBox="0 0 606 266"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M561 0C585.853 2.51262e-06 606 20.1472 606 45V192.952C606 217.805 585.832 237.952 560.979 237.952H109.639L83 266L56.3613 237.952H45.0205C20.1677 237.952 0 217.805 0 192.952V45C2.6965e-05 20.1472 20.1472 7.24794e-08 45 0H561Z"
      fill="#191A23"
      stroke="#B9FF66"
      strokeWidth="2"
    />
  </svg>
);

export function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((i) => (i + 1) % testimonials.length);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-16">
     {/* HEADER */}
        <div className="flex flex-col md:flex-row gap-6 items-center lg:items-start mb-10 md:mb-16 text-center md:text-left">
          <span className="bg-[#B9FF66] px-2 py-1 rounded-md text-2xl md:text-3xl font-medium inline-block w-fit">
            Testimonials
          </span>

          <p className="max-w-md text-gray-600 text-sm md:text-base">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>

        <div className="bg-[#191A23] rounded-3xl py-10 md:py-16 px-6  overflow-hidden">

          {/* TRACK */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className=" w-full md:w-1/2 lg:w-1/3 shrink-0 px-4 lg:px-2  gap-4 "
              >
                {/* ===== BUBBLE WRAPPER ===== */}
                <div className="relative w-full py-2  aspect-606/266 ">
                  
                  <BubbleSVG  />

                  {/* TEXT LAYER */}
                  <div className="absolute inset-0 p-4 md:p-5 mb-4 flex items-center overflow-hidden">
                    <p className="text-white text-xs md:text-md xl:text-[15px] leading-snug line-clamp-6">
                      “{t.quote}”
                    </p>
                  </div>
                </div>

                {/* AUTHOR */}
                <div className="mt-5 pl-3">
                  <p className="text-[#B9FF66] font-medium">
                    {t.author}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CONTROLS */}
          <div className="flex items-center justify-evenly gap-8 mt-10 px-6">
            
          
             <ArrowLeft
              className="text-white cursor-pointer hover:text-[#B9FF66]"
              onClick={prev}
            />

            {/* DOTS */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <img
                  key={i}
                  src={i === index ? GreenDot : Dot}
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>

            <ArrowRight
              className="text-white cursor-pointer hover:text-[#B9FF66]"
              onClick={next}
            />
    
          </div>
        </div>
      </div>
    </section>
  );
}
