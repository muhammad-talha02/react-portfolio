import "./App.scss"
import { Hero, Navbar, Parallex, Services } from "./components"
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
       <section id="works">
       <Parallex/>
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