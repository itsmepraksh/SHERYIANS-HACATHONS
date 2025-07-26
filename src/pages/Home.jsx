import ArrivalsItem from "../components/ArrivalsItem";
import item1 from "../assets/images/kurta-mens.jpg";
import item2 from "../assets/images/western-wear.jpg";
import item3 from "../assets/images/fusion-wear.jpg";
import item4 from "../assets/images/casual-wear.jpg";
import CtaBtn from "../components/CtaBtn";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "motion/react";

const Home = () => {
  return (
    <div className="">
      <section
        id="section-1"
        className="bg-[#334238] px-4 py-8 md:px-8 md:grid md:[grid-template-areas:'a_d''b_d''c_d'] md:grid-cols-2 md:items-start md:justify-between"
      >
        <h2
          id="heading"
          className="font-[latoBold] text-5xl lg:text-7xl font-bold uppercase leading-[1.1] tracking-wider md:[grid-area:a]"
        >
          Heritage <br /> Reimagined
        </h2>

        <div id="coupons" className="font-[latoRegular] py-4 md:[grid-area:b]">
          <p className="pb-3 text-lg">Culture, styled for today.</p>
          <p className="">Save more with discount coupon.</p>
          <p>use coupon SNOFF10 & get 10% off all our products.</p>
        </div>
        <div
          id="image-names"
          className="font-bold text-sm text-[#618C70] leading-[1.5] uppercase tracking-wide py-5  md:[grid-area:c]"
        >
          <p>Festive</p>
          <p>Western</p>
          <p>Fusion</p>
          <p>Casual</p>
        </div>

        <div id="image-container" className=" md:[grid-area:d] md:relative  ">
          <div
            id="images-box"
            className="flex relative h-[28rem] md:h-[24rem] lg:h-[30rem]    py-4 md:py-0"
          >
            <img
              src={item1}
              className="h-96 lg:h-full w-[65%] md:w-[55%] lg:w-[60%] absolute md:right-0 object-cover object-center rounded-lg"
              alt=""
            />
            <img
              src={item2}
              className="h-96 lg:h-full w-[65%] md:w-[55%] lg:w-[60%] absolute md:right-0 left-10 object-cover object-center rounded-lg"
              alt=""
            />
            <img
              src={item3}
              className="h-96 lg:h-full w-[65%] md:w-[55%] lg:w-[60%] absolute md:right-0 left-20 object-cover object-center rounded-lg"
              alt=""
            />
            <img
              src={item4}
              className="h-96 lg:h-full w-[65%] md:w-[55%] lg:w-[60%] absolute md:right-0 left-30 object-cover object-center rounded-lg"
              alt=""
            />
          </div>
          <div
            id="arrow-elem"
            className="flex flex-col items-start font-black text-xl md:text-xs px-2 text-[#CCE561] md:absolute md:bottom-0 md:left-0"
          >
            <FontAwesomeIcon icon={faAngleDown} className="" />
            <FontAwesomeIcon icon={faAngleDown} className="" />
            <FontAwesomeIcon icon={faAngleDown} className="" />
            <FontAwesomeIcon icon={faAngleDown} className="" />
          </div>
        </div>
      </section>
      <section
        id="section-2"
        className="bg-[#FAF2E8] text-black px-4 py-8 pt-22 md:px-8"
      >
        <p className="uppercase text-xs font-bold pb-2 text-center">
          New Arrivals
        </p>
        <div className="font-[latoRegular] flex flex-col md:flex-row items-center md:justify-center md:gap-5">
          <h1 className="text-3xl md:text-4xl font-bold py-5">
            Elevating Fashion For
          </h1>

          <motion.div
            id="roller-box"
            className=" w-[75%] md:w-[25%] bg-[#CCE561] h-12 md:h-10 rounded text-center overflow-hidden font-bold "
             
          >
            <h1 className="py-3 md:py-2">Men's Collection</h1>
            <h1 className="py-3 md:py-2">Women's Collection</h1>
            <h1 className="py-3 md:py-2">Popular Categories</h1>
            <h1 className="py-3 md:py-2">Monthly Bestseller</h1>
          </motion.div>
        </div>
        <div
          id="arrivals"
          className="py-12 rounded flex flex-col md:flex-row gap-10 md:gap-5 "
        >
          {/* <div id="item" className="w-full">
            <img src="" alt="" />
            <h1 className="font-medium text-xl">Festive wear</h1>
            <div className="flex gap-4 items-start py-3">
              <p className="rounded-2xl border px-2 py-1">kurta & pajama</p>
              <p className="rounded-2xl border px-2 py-1">Sherwani</p>
            </div>
          </div> */}
          <ArrivalsItem
            imgsrc={item1}
            imgName={"Festive wear"}
            imgInfo1={"kurta & pajama"}
            imgInfo2={"Sherwani"}
          />
          <ArrivalsItem
            imgsrc={item2}
            imgName={"Western wear"}
            imgInfo1={"Dress"}
            imgInfo2={"Coords"}
          />
          <ArrivalsItem
            imgsrc={item3}
            imgName={"Fusion wear"}
            imgInfo1={"Suit & Lehenga"}
            imgInfo2={"Salwar Kurta"}
          />
          <ArrivalsItem
            imgsrc={item4}
            imgName={"Casual wear"}
            imgInfo1={"Hoodie"}
            imgInfo2={"T-shirt"}
          />
        </div>
        <CtaBtn text={"View all"} />
      </section>
    </div>
  );
};

export default Home;
