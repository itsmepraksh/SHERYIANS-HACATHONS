import { Route, Routes } from "react-router-dom"

 
const MainRouter = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/services" element={<Services/>}/> */}
        {/* <Route path="/certificates"  element={<Certificate/>}/> */}
        {/* <Route path="/gallery" element={<Gallery/>}/> */}
        <Route path="/contact" element={<Contact/>}/>

    </Routes>
    </div>
  )
}

export default MainRouter