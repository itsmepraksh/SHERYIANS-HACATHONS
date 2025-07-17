import logo from "../assets/svgs/favicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHamburgMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className=" p-4  bg-[#334238]   flex justify-between items-center  font-medium font-[latoRegular]  rounded-lg">
      <div id="nav" className="flex justify-between w-full  items-center gap-4">
        <div id="logo" className="flex items-center gap-2 ">
          <img src={logo} className="h-10 rounded-full" alt="" />
          <h1 className="font-medium text-2xl uppercase font-[latoBlack]">shanz & nikze</h1>
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
        } lg:hidden! absolute top-20 left-0 h-[85%] flex flex-col items-center bg-[#334238] text-[#FAF2E8] text-xl font-semibold w-full`}
      >
        <Link to={"/home"} className="hamburg-link">Home</Link>
        <Link to={"/about"} className="hamburg-link" >About</Link>
        <Link to={"/women"} className="hamburg-link">Women's Fashion</Link>
        <Link to={"/men"}className="hamburg-link" >Men's Fashion</Link>
        <Link to={"/contact"} className="hamburg-link">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
