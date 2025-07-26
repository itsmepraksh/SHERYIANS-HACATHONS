import { Link } from "react-router-dom"
import CtaBtn from "../components/CtaBtn"

 

const PageNotFound = () => {

     
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[30rem]">
            <h1 className="font-bold text-5xl font-[latoBlack] ">503</h1>
            <p>Under Renovation</p>
            <Link to={"/home"}><CtaBtn text={"Back to home"}/></Link> 
    </div>
  )
}

export default PageNotFound