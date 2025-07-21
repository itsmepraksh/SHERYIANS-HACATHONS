import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

 
const MainRouter = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/services" element={<Services/>}/> */}
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>

    </Routes>
    </div>
  )
}

export default MainRouter