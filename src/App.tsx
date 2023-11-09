import "./App.scss"
import { Contact, Experiences, Hero, HeroSkills, Navbar, Parallex, Portfolio, Services, Skills } from "./components"
import Cursor from "./components/cursor/Cursor"
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
        <section>
          <Skills/>
        </section>
        <section>
          <Experiences/>
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
      </div>
      {/* <Test/> */}
      {/* <Test/> */}
    </>
  )
}

export default App