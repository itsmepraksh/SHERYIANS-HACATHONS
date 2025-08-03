import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import WesternWear from "../layouts/WesternWear"
import FusionWear from "../layouts/FusionWear"
import PageNotFound from "../pages/PageNotFound"
import FestiveWear from "../layouts/FestiveWear"
import MensWear from "../layouts/MensWear"

 
const MainRouter = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/fusion-wear" element={<FusionWear/>} />
        <Route path="/western-wear" element={<WesternWear/>}  />
        <Route path="/festive-wear" element={<FestiveWear/>}  />
        <Route path="/mens-wear" element={<MensWear/>}/>
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/lost" element={<PageNotFound/>}/>

    </Routes>
    </div>
  )
}

export default MainRouter