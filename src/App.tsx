import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { LogoScroll} from "./components/LogoScroll"
import { Navbar } from "./components/Navbar"
import { Testimonials } from "./components/Testimonials"


function App() {
  
  return (
    <div className="min-h-screen bg-background gro">
      <Navbar />
      <Hero/>
      <LogoScroll/>
      <Testimonials/>
      <Footer />
    </div>
  )
}

export default App
