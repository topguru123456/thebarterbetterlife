import { About } from './components/About'
import { AnnouncementBar } from './components/AnnouncementBar'
import { Book } from './components/Book'
import { BrandPhilosophy } from './components/BrandPhilosophy'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Watch } from './components/Watch'
import { WaveDivider } from './components/WaveDivider'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WaveDivider />
      <About />
      <Book />
      <WaveDivider fill="navy" flip />
      <BrandPhilosophy />
      <Watch />
      <Footer />
      <AnnouncementBar />
    </div>
  )
}

export default App
