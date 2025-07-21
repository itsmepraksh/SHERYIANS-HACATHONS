import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="bg-[#FAF2E8] text-[#334238] px-4 md:px-16 py-8 mt-2">
      <div id="login-form">
        <h1 className="font-[latoBold] text-5xl font-bold uppercase leading-[1.1] tracking-wider">
          Login
        </h1>
        <Link to={"/home"} className=" py-2">
          <FontAwesomeIcon className="pr-4" icon={faArrowLeft} />
          Back to Home
        </Link>
      </div>
      <form action="" className=" w-full p-10 flex flex-col gap-7"> 

        <input
          type="text"
          placeholder="Email Address"
          className="py-2 px-4 border-[0.5px] bg-white rounded-lg w-full placeholder:text-zinc-700"
        />

        <input
          type="text"
          placeholder="Password"
          className="py-2 px-4 border-[0.5px] bg-white rounded-lg w-full placeholder:text-zinc-700"
        />

        <div className="flex justify-between items-center text-xs md:text-sm font-medium ">
          <p className="">
            <input type="checkbox" className="mr-2" />
            Remember Me
          </p>

          <Link className="">Forgot Password?</Link>
        </div>

        <button className="uppercase w-full bg-[#334238] text-[#FAF2E8] py-3 rounded font-bold">
          Log In
        </button>

        <p>
          Don't have an account yet?
          <br />{" "}
          <Link to={"/signup"} className="font-medium cursor-pointer">
            Sign Up here!
          </Link>
        </p>

        {/* <input type="text" placeholder="Confirm Password *" /> */}
      </form>
    </section>
  );
};

export default Login;
