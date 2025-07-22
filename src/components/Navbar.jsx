import logo from "../assets/svgs/favicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);

  const dropDown = () => {
    
      console.log("its open");
      setToggleBtn(!toggleBtn);
    
  };

  console.log(toggleBtn);

  const toggleHamburgMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setToggleBtn(false)
  };
  return (
    <div className=" p-4  bg-[#334238]   flex justify-between items-center  font-medium font-[latoRegular]  rounded-lg ">
      <div
        id="nav"
        className="flex justify-between w-full  items-center gap-4 md:px-4"
      >
        <div id="logo" className="flex items-center gap-2 ">
          <img src={logo} className="h-10 rounded-full" alt="" />
          <h1 className="font-medium text-2xl uppercase font-[latoBlack]">
            shanz & nikze
          </h1>
        </div>

        <div
          onClick={toggleHamburgMenu}
          id="menu"
          className="bg-[#E9C8C4] text-[#334238] text-xl p-2 px-3 rounded"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <div
        id="hamburg-menu"
        className={` ${
          isMenuOpen ? "" : "hidden"
        } lg:hidden! absolute z-[99] top-20 left-0 h-[85%] flex flex-col items-center bg-[#334238] text-[#FAF2E8] text-xl font-semibold w-full   `}
      >
        <Link to={"/home"} className="hamburg-link">
          Home
        </Link>
        <Link to={"/about"} className="hamburg-link">
          About
        </Link>
        <div
          // to={"/women"}
          onClick={dropDown}
          className={`hamburg-link h-16 flex items-center justify-between relative ${toggleBtn ? "h-40":""}`}
        >
          <p className="absolute top-4 ">Women's Fashion </p>
          <FontAwesomeIcon icon={faAngleDown} className={`pr-4 md:pr-1 absolute top-5 right-0 ${toggleBtn ? "rotate-[180deg] mr-4":"rotate-[0deg]"} `} />
          
          <div className={` ${toggleBtn ? "absolute  top-15 left-10 h-15 w-[80%] text-lg font-light flex flex-col gap-1":"hidden"}`}>
            
            <Link to={"/fusion-wear"}>Fusion Wear</Link>
            <Link to={"/western-wear"}>Western Wear</Link>
          </div>
        </div>
        
        {/* <div
          // to={"/women"}
          onClick={dropDown}
          className={`hamburg-link h-16 flex items-center justify-between relative ${toggleBtn ? "h-40":""}`}
        >
          <p className="absolute top-4 ">Men's Fashion </p>
          <FontAwesomeIcon icon={faAngleDown} className={`pr-4 md:pr-1 absolute top-5 right-0 ${toggleBtn ? "rotate-[180deg] mr-4":"rotate-[0deg]"} `} />
          
          <div className={` ${toggleBtn ? "absolute  top-15 left-10 h-15 w-[80%] text-lg font-light flex flex-col gap-1":"hidden"}`}>
            
            <Link>Fusion Wear</Link>
            <Link>Western Wear</Link>
          </div>
        </div> */}

        <Link
          to={"/men"}
          className="hamburg-link flex items-center justify-between"
        >
          <p>Men's Fashion</p>
          <FontAwesomeIcon icon={faAngleDown} className="pr-4 md:pr-1 " />
        </Link>
        <Link to={"/contact"} className="hamburg-link">
          Contact
        </Link>
        <Link to={"/login"} className="hamburg-link">
          LogIn{" "}
        </Link>
        <Link to={"/signup"} className="hamburg-link">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
