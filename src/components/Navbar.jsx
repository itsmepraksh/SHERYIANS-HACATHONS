import logo from "../assets/svgs/favicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menToggleBtn, setMenToggleBtn] = useState(false);
  const [womenToggleBtn, setWomenToggleBtn] = useState(false);

  const dropDownWomen = () => {
    // console.log("its open for women");
    setWomenToggleBtn(!womenToggleBtn);
  };

  const dropDownMen = () => {
    // console.log("its open for men");
    setMenToggleBtn(!menToggleBtn);
  };


  const [hoverMenu, setHoverMenu] = useState({  
    women:false,
    men:false
  });
  

  const toggleHamburgMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenToggleBtn(false);
    setWomenToggleBtn(false);
  };

  return (
    <div className=" p-4 md:p-5 xl:p-10  bg-[#334238]   flex justify-between items-center  font-medium font-[latoRegular]  rounded-lg ">
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
          id="nav-for-big-screen"
          className="hidden lg:flex lg:justify-around text-sm gap-5 xl:w-[47%]"
        >
          <Link className="hover:underline" to={"/home"}>
            Home
          </Link>
          <Link className="hover:underline" to={"/about"}>
            About
          </Link>

          {/* working here ---------------------- */}

          <div
            id="women-hover-menu"
            onMouseEnter={()=>setHoverMenu(prev=>({...prev,women:true}))}
            onMouseLeave={()=>setHoverMenu(prev=>({...prev,women:false}))}


            className="inline-block"
          >
            <Link
              className={` ${hoverMenu.women ? "hover:underline" : ""}`}
              to={"/men"}
            >
              Women's Fashion
            </Link>
          </div>

          {/* working here ---------------------- */}
          <div
            onMouseEnter={()=>setHoverMenu(prev=>({...prev,men:true}))}

            onMouseLeave={()=>setHoverMenu(prev=>({...prev,men:false}))}
            className="inline-block "
          >
            <Link
              className={`${hoverMenu.men ? " hover:underline" : ""}`}
              to={"/men"}
            >
              Men's Fashion
            </Link>
          </div>
          <Link className="hover:underline" to={"/contact"}>
            Contact
          </Link>
          <Link className="hover:underline" to={"/login"}>
            LogIn
          </Link>
          <Link className="hover:underline" to={"/signup"}>
            SignUp
          </Link>
        </div>

        <div
          onClick={toggleHamburgMenu}
          id="menu"
          className="bg-[#E9C8C4] text-[#334238] text-xl p-2 px-3 rounded lg:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <div
        className={`${
          hoverMenu.women ? "block" : "hidden"
        } absolute top-20 right-50 z-[9] h-40 w-96 bg-red-500`}
      ></div>
      <div
        className={`${
          hoverMenu.men ? "block" : "hidden"
        } absolute top-20 right-30 z-[9] h-40 w-96 bg-green-500`}
      ></div>

      {/* ------------this is for mobile view and sm screen */}
      <div
        id="hamburg-menu"
        className={` ${
          isMenuOpen ? "" : "hidden"
        } lg:hidden! absolute z-[99] top-18 left-0 h-[85%] flex flex-col items-center bg-[#334238] text-[#FAF2E8] text-xl font-semibold w-full   `}
      >
        <Link to={"/home"} className="hamburg-link">
          Home
        </Link>
        <Link to={"/about"} className="hamburg-link">
          About
        </Link>
        <div
          // to={"/women"}
          onClick={dropDownWomen}
          className={`hamburg-link h-16 flex items-center justify-between relative ${
            womenToggleBtn ? "h-40" : ""
          }`}
        >
          <p className="absolute top-4 ">Women's Fashion </p>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`pr-4 md:pr-1 absolute top-5 right-0 md:right-12 ${
              womenToggleBtn ? "rotate-[180deg] mr-4 md:mr-1" : "rotate-[0deg]"
            } `}
          />

          <div
            className={` ${
              womenToggleBtn
                ? "absolute top-15 md:top-13 left-10 md:left-15 h-15 w-[80%] text-lg font-light flex flex-col gap-1"
                : "hidden"
            }`}
          >
            <Link to={"/fusion-wear"}>Fusion Wear</Link>
            <Link to={"/western-wear"}>Western Wear</Link>
          </div>
        </div>
        {/* --------------------------------------------------- */}
        <div
          // to={"/men"}
          onClick={dropDownMen}
          className={`hamburg-link h-16 flex items-center justify-between relative ${
            menToggleBtn ? "h-40" : ""
          }`}
        >
          <p className="absolute top-4 ">Men's Fashion </p>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`pr-4 md:pr-1 absolute top-5 right-0 md:right-12 ${
              menToggleBtn ? "rotate-[180deg] mr-4 md:mr-1" : "rotate-[0deg]"
            } `}
          />

          <div
            className={` ${
              menToggleBtn
                ? "absolute top-15 md:top-13 left-10 md:left-15 h-15 w-[80%] text-lg font-light flex flex-col gap-1"
                : "hidden"
            }`}
          >
            <Link to={"/festive-wear"}>Festive Wear</Link>
            <Link to={"/mens-wear"}>Men's Wear</Link>
          </div>
        </div>

        {/* <div to={"/women"} onClick={dropDown} className={`hamburg-link h-16 flex items-center justify-between relative ${toggleBtn ? "h-40":""}`}>
          <p className="absolute top-4 ">Men's Fashion </p>
          <FontAwesomeIcon icon={faAngleDown} className={`pr-4 md:pr-1 absolute top-5 right-0 ${toggleBtn ? "rotate-[180deg] mr-4":"rotate-[0deg]"} `} />
          
          <div className={` ${toggleBtn ? "absolute  top-15 left-10 h-15 w-[80%] text-lg font-light flex flex-col gap-1":"hidden"}`}>
            
            <Link>Fusion Wear</Link>
            <Link>Western Wear</Link>
          </div>
        </div> */}

        {/* <Link
          to={"/men"}
          className="hamburg-link flex items-center justify-between"
        >
          <p>Men's Fashion</p>
          <FontAwesomeIcon icon={faAngleDown} className="pr-4 md:pr-1 " />
        </Link> */}
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
