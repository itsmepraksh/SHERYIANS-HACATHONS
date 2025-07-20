import ArrivalsItem from "../components/ArrivalsItem"
import item1 from "../assets/images/kurta-mens.jpg";
import item2 from "../assets/images/western-wear.jpg";
import item3 from "../assets/images/fusion-wear.jpg"
import item4 from "../assets/images/casual-wear.jpg"
import CtaBtn from "../components/CtaBtn";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 

const Home = () => {
  return (
    <div className="">
      <section id="section-1" className="bg-[#334238] px-4 py-8">
        <h2 className="font-[latoBold] text-5xl font-bold uppercase leading-[1.1] tracking-wider">Heritage <br /> Reimagined</h2>
        
        
        <div id="coupons" className="font-[latoRegular] py-4">
          <p className="pb-3 text-lg">Culture, styled for today.</p>
          <p className="">Save more with discount coupon.</p>
          <p>use coupon SNOFF10 & get 10% off all our products.</p>
        </div>

        <div id="image-container">
          <div id="image-names" className="font-bold text-sm text-[#618C70] leading-[1.5] uppercase tracking-wide py-5">
            <p>Festive</p>
            <p>Western</p>
            <p>Fusion</p>
            <p>Casual</p>
          </div>

          <div id="images-box" className="flex relative h-[28rem]  py-4">
            <img src={item1} className="h-96 w-[65%] absolute object-cover object-center rounded-lg" alt="" />
            <img src={item2} className="h-96 w-[65%] absolute left-10 object-cover object-center rounded-lg" alt="" />
            <img src={item3} className="h-96 w-[65%] absolute left-20 object-cover object-center rounded-lg" alt="" />
            <img src={item4} className="h-96 w-[65%] absolute left-30 object-cover object-center rounded-lg" alt="" />

          </div>
          <div id="arrow-elem" className="flex flex-col items-start font-black text-xl px-2 text-[#CCE561]">
            <FontAwesomeIcon icon={faAngleDown} className="" />
            <FontAwesomeIcon icon={faAngleDown} className="" />
            <FontAwesomeIcon icon={faAngleDown} className="" />
            <FontAwesomeIcon icon={faAngleDown} className="" />
          </div>
        </div>
      </section>
      <section id="section-2" className="bg-[#FAF2E8] text-black px-4 py-8 pt-22">
        <div className="font-[latoRegular] flex flex-col items-center">
        <p className="uppercase text-xs font-bold pb-5">New Arrivals</p>
        <h1 className="text-3xl font-bold py-5">Elevating Fashion For</h1>

        <div id="roller-box" className=" w-[75%] bg-[#CCE561] h-12 rounded text-center overflow-hidden font-bold ">
          <h1 className="py-3">Men's Collection</h1>
          <h1 className="py-3">Women's Collection</h1>
          <h1 className="py-3">Popular Categories</h1>
          <h1 className="py-3">Monthly Bestseller</h1>
        </div>

        </div>
         <div id="arrivals" className="py-12 rounded flex flex-col gap-10 ">
          {/* <div id="item" className="w-full">
            <img src="" alt="" />
            <h1 className="font-medium text-xl">Festive wear</h1>
            <div className="flex gap-4 items-start py-3">
              <p className="rounded-2xl border px-2 py-1">kurta & pajama</p>
              <p className="rounded-2xl border px-2 py-1">Sherwani</p>
            </div>
          </div> */}
          <ArrivalsItem imgsrc={item1} imgName={"Festive wear"} imgInfo1={"kurta & pajama"} imgInfo2={"Sherwani"}/>
          <ArrivalsItem imgsrc={item2} imgName={"Western wear"} imgInfo1={"Dress"} imgInfo2={"Coords"}/>
          <ArrivalsItem imgsrc={item3} imgName={"Fusion wear"} imgInfo1={"Suit & Lehenga"} imgInfo2={"Salwar Kurta"}/>
         <ArrivalsItem imgsrc={item4} imgName={"Casual wear"} imgInfo1={"Hoodie"} imgInfo2={"T-shirt"}/>
        
        <CtaBtn text={"View all"}/>
        </div>
      </section>
    </div>
  )
}

export default Home