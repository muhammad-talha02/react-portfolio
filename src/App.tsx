import "./App.scss"
import { Contact, Hero, Navbar, Parallex, Portfolio, Services } from "./components"
import Cursor from "./components/cursor.scss/Cursor"
const App = () => {


  return (
    <>
      <div>
        <Cursor/>
        <section id="Home">
          <Navbar />
          <Hero />
        </section>
        <section id="services">
          <Parallex type="services" />
        </section>
        <section>
          <Services />
        </section>
        {/* <section id="works">
       <Parallex/>
       </section> */}
        <section id="portfolio">
          <Parallex />
        </section>
        <Portfolio />
        <section id="contact">
          <Contact />
        </section>
        {/* <Hero/> */}
        {/* <Hero/> */}
      </div>
      {/* <Test/> */}
      {/* <Test/> */}
    </>
  )
}

export default App