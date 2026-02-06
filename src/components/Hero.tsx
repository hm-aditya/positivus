import Heroimg from "/static/hero.svg";

export function Hero() {
  return (
    <section className=" w-full py-12">
      <div className="container mx-auto px-4 md:px-16">
        
        {/* MOBILE: column | DESKTOP: grid */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Text Content */}
          <div className="space-y-5 text-left lg:text-left max-w-none lg:max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground text-balance">
              Navigating the digital landscape for success
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social media
              marketing, and content creation.
            </p>

            <button className="w-full md:w-auto inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm md:text-base font-medium text-white hover:bg-transparent hover:text-black border border-transparent hover:border-black  transition">
              Book a consultation
            </button>
          </div>

          {/* Illustration */}
          <div className="flex justify-center w-full">
            <img
              src={Heroimg}
              alt="Marketing Illustration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
