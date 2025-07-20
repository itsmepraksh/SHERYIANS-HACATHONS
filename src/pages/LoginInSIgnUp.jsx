import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

 

const LoginInSIgnUp = () => {
  return (
    <div>
        <section className="px-4">
            <form action="">
                <div>
                <h1  className="font-[latoBold] text-5xl font-bold uppercase leading-[1.1] tracking-wider">Login</h1>
                    <p className=" py-2"><FontAwesomeIcon className="pr-4" icon={faArrowLeft} />Back to Home</p>
                </div>
            </form>
        </section>
    </div>
  )
}

export default LoginInSIgnUp