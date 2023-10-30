import "./App.scss"
import { Hero, Navbar } from "./components"
// import Test from "./components/test/Test"
const App = () => {


  return (
    <>
     <div>
       <section id="Home">
       <Navbar/>
       </section>
       <Hero/>
       <Hero/>
       <Hero/>
    </div>
    {/* <Test/> */}
    {/* <Test/> */}
    </>
  )
}

export default App