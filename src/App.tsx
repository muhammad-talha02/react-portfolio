import "./App.scss"
import { Hero, Navbar, Parallex, Portfolio, Services } from "./components"
const App = () => {


  return (
    <>
     <div>
       <section id="Home">
       <Navbar/>
       <Hero/>
       </section>
       <section id="services">
       <Parallex type="services"/>
       </section>
       <section>
       <Services/>
       </section>
       {/* <section id="works">
       <Parallex/>
       </section> */}
       <section id="portfolio">
       <Parallex/>
       </section>
       <Portfolio/>
       {/* <Hero/> */}
       {/* <Hero/> */}
    </div>
    {/* <Test/> */}
    {/* <Test/> */}
    </>
  )
}

export default App