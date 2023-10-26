import "./App.scss"
import { Hero, Navbar } from "./components"
const App = () => {
  return (
    <div>
      <section>
      <Navbar/>
      </section>
      <Hero/>
      <Hero/>
      <Hero/>
    </div>
  )
}

export default App