import About from './components/blocks/about'
import Footer from './components/blocks/footer'
import Header from './components/blocks/header'
import Intro from './components/blocks/intro'
import Portfolio from './components/blocks/portfolio'
import './scss/app.css'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Intro />
      <Portfolio />
      <About />
      <Footer />
    </div>
  )
}

export default App
