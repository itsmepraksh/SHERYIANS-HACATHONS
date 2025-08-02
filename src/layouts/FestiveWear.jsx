import { useState } from "react";
import FusionProduct from "../components/FusionProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; 
import { nanoid } from "nanoid";
 
import imgSrc1 from "../assets/images/kurta-mens.jpg";
import imgSrc2 from "../assets/images/kurta-mens.jpg";

 

const FestiveWear = () => {

   const [dropDown, setDropDown] = useState(false);
  
    const sortDropDown = () => {
      setDropDown(!dropDown);
    };



     return (
    <div className="bg-[#FAF2E8]  md:px-8">
      {/*334238*/}
      <section id="section-1" className=" px-4 py-8   text-black">
        <h2
          id="heading"
          className="font-[latoBold] text-5xl lg:text-7xl font-bold uppercase leading-[1.1] tracking-wider "
        >
          Festive <br /> Wear
        </h2>

        <div id="coupons" className="font-[latoRegular] py-4 ">
          <p className="pb-3 text-lg">Where Tradition Meets Trend.</p>
          <p className="">Save more with discount coupon.</p>
          <p>use coupon SNOFF10 & get 10% off all our products.</p>
        </div>

        <div id="search-bar" className="md:flex md:items-center gap-5 ">
          <div
            id="sortDropDown"
            onClick={sortDropDown}
            className={`w-full rounded border-zinc-800 border-[1px] px-4 py-2 md:h-10  ${
              dropDown ? "  flex flex-col gap-2 py-4 md:h-fit" : ""
            }`
          }
          >
            <div className=" flex justify-between items-center ">
              <p>Recommended</p>
              <FontAwesomeIcon icon={faAngleDown} className="pr-4 md:pr-1 " />
            </div>
  
            <div className={`${dropDown ? "" : "hidden"} flex flex-col gap-2`}>
              <p>All</p>
              <p>Price: Low to High</p>
              <p>Price: High to Low</p>
            </div>
          </div>

          <div
            id="search-bar"
            className="my-4 border-zinc-700 border-[1px] rounded w-full flex justify-between items-center"
          >
            <input
              type="text"
              placeholder="item.."
              className=" p-2 w-2/3 outline-none"
            />
            <FontAwesomeIcon 
              icon={faMagnifyingGlass}
              className="pr-8"
            />
          </div>
        </div>
      </section>

      <section id="products-container" className="px-4 md:flex md:gap-10" >
        <FusionProduct
          id={nanoid()}
          imgSrc={imgSrc1}
          category={"kurta"}
          categoryType={"Imaara velvet kurta"}
          price={"₹999"}
          imgSet={"object-[20%_15%]"}
        />

        <FusionProduct
          id={nanoid()}
          imgSrc={imgSrc2}
          category={"kurta"}
          categoryType={"Lime green kurta"}
          price={"₹999"}
          imgSet={"object-[20%_15%]"}
        />
      </section>
    </div>
  );
}

export default FestiveWear