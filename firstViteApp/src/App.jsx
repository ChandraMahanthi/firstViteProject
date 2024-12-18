import New from "./New"
import "./App.css"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact/"

function App() {

  return (
   <div>
    <New name="One" Id="1"></New>
    <New name="Two" Id="2"></New>
    <New name="Three" Id="3"></New>
    <Home></Home>
    <About></About>
    <Contact></Contact>

   </div> 
  )
}

export default App