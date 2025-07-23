import { faAngleDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

 

const FusionWear = () => {

     const [dropDown, setDropDown] = useState(false);
    
      const sortDropDown = () => {
        setDropDown(!dropDown);
      };
    
      const querySubmit = () => {
        // console.log('its working')
      };

   return (
      <div className="bg-[#FAF2E8]">
        {/*334238*/}
        <section id="section-1" className=" px-4 py-8   text-black">
          <h2
            id="heading"
            className="font-[latoBold] text-5xl lg:text-7xl font-bold uppercase leading-[1.1] tracking-wider "
          >
            Fusion <br /> Wear
          </h2>
  
          <div id="coupons" className="font-[latoRegular] py-4 ">
            <p className="pb-3 text-lg">Where Tradition Meets Trend.</p>
            <p className="">Save more with discount coupon.</p>
            <p>use coupon SNOFF10 & get 10% off all our products.</p>
          </div>
  
          <div
            id="sortDropDown"
            onClick={sortDropDown}
            className={`w-full rounded border-zinc-800 border-[1px] px-4 py-2${
              dropDown ? "  flex flex-col gap-2 py-4" : ""
            }`}
          >
            <div className=" flex justify-between items-center ">
              <p>Recommended</p>
              <FontAwesomeIcon icon={faAngleDown} className="pr-4 md:pr-1 " />
            </div>
  
            {/* { dropDown ? "" : " "} */}
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
              onClick={querySubmit}
              icon={faMagnifyingGlass}
              className="pr-8"
            />
          </div>
        </section>
  
        {/* <section id="products-container" className="px-4">
          <WesterProduct
            id={nanoid()}
            imgSrc={imgSrc2}
            category={"Coords"}
            categoryType={"Pastel coord set"}
            price={"₹999"}
            imgSet={"object-[20%_40%]"}
          />
  
          <WesterProduct
            id={nanoid()}
            imgSrc={imgSrc3}
            category={"Coords"}
            categoryType={"Royal Blue coord"}
            price={"₹999"}
            imgSet={"object-[20%_40%]"}
          />
  
          <WesterProduct
            imgSrc={imgSrc5}
            category={"Coords"}
            categoryType={"Black Foral coord"}
            price={"₹999"}
            imgSet={"object-center"}
          />
        </section> */}
      </div>
    );
}

export default FusionWear