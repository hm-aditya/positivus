import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { LogoScroll} from "./components/LogoScroll"
import { Navbar } from "./components/Navbar"


function App() {
  
  return (
    <div className="min-h-screen bg-background gro">
      <Navbar />
      <Hero/>
      <LogoScroll/>
      <Footer />
    </div>
  )
}

export default App
