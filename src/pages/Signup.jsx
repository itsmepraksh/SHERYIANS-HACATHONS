import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="bg-[#FAF2E8] text-[#334238] px-4 md:px-16 py-8 mt-2">
      <div id="login-form">
        <h1 className="font-[latoBold] text-5xl font-bold uppercase leading-[1.1] tracking-wider">
          Sign Up
        </h1>
        <Link to={"/home"} className=" py-2">
          <FontAwesomeIcon className="pr-4" icon={faArrowLeft} />
          Back to Home
        </Link>
      </div>
      <form className=" w-full p-10 flex justify-between flex-col md:flex-wrap md:flex-row gap-7  ">
        <input
          type="text"
          placeholder="First Name *"
          className="py-2 md:py-3 px-4 md:my-2 border-[0.5px] bg-white rounded-lg placeholder:text-zinc-700 w-full md:w-[47%]"
        />

        <input
          type="text"
          placeholder="Last Name *"
          className="py-2 md:py-3 px-4 md:my-2 border-[0.5px] bg-white rounded-lg placeholder:text-zinc-700 w-full md:w-[47%]"
        />

        <input
          type="text"
          placeholder="Email Address *"
          className="py-2 md:py-3 px-4 md:my-2 border-[0.5px] bg-white rounded-lg placeholder:text-zinc-700 w-full"
        />

        <input
          type="text"
          placeholder="Password *"
          className="py-2 md:py-3 px-4 md:my-2 border-[0.5px] bg-white rounded-lg placeholder:text-zinc-700 w-full  md:w-[47%]"
        />

        <input
          type="text"
          placeholder="Confirm Password *"
          className="py-2 md:py-3 px-4 md:my-2 border-[0.5px] bg-white rounded-lg placeholder:text-zinc-700 w-full  md:w-[47%]"
        />

        <div className="flex justify-between items-center text-xs md:text-sm font-medium ">
          <p className="flex items-center">
            <input type="checkbox" className="mr-2" />I agree the{" "}
            <Link className="ml-1 font-bold"> Terms and Condition*</Link>
          </p>
        </div>

        <button className="uppercase w-full bg-[#334238] text-[#FAF2E8] py-3 rounded font-bold">
          Sign Up
        </button>

        <p>
          Already have an account ?
          <br />{" "}
          <Link to={"/login"} className="font-medium cursor-pointer">
            Log In here!
          </Link>
        </p>

        {/* <input type="text" placeholder="Confirm Password *" /> */}
      </form>
    </section>
  );
};

export default Signup;
