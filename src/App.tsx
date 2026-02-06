import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { LogoScroll} from "./components/LogoScroll"
import { Navbar } from "./components/Navbar"
import { Testimonials } from "./components/Testimonials"
import { WorkingProcess } from "./components/WorkingProcess"


function App() {
  
  return (
    <div className="min-h-screen bg-background gro">
      <Navbar />
      <Hero/>
      <LogoScroll/>
      <WorkingProcess/>
      <Testimonials/>
      <Footer />
    </div>
  )
}

export default App
