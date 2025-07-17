import ArrivalsItem from "../components/ArrivalsItem"
import item1 from "../assets/images/kurta-mens.jpg";
 

const Home = () => {
  return (
    <div className="">
      <section id="section-1" className="bg-[#334238] px-4 py-8">
        <h2 className="font-[latoBold] text-5xl font-bold uppercase leading-[1.1] tracking-wider">Women's <br /> Collection</h2>
        
        
        <div id="coupons" className="font-[latoRegular] py-4">
          <p className="">Save more with discount coupon.</p>
          <p>use coupon SNOFF10 & get 10% off all our products.</p>
        </div>

        <div id="image-container">
          <div id="image-names" className="font-medium text-lg">
            <p>Festive wear</p>
            <p>Kurta wear</p>
            <p>Cord set</p>
            <p></p>
          </div>

          <div id="images-box">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />

          </div>
          <div id="arrow-elem"></div>
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
          <ArrivalsItem imgsrc={item1} imgName={"Festive wear"} imgInfo1={"kurta & pajama"} imgInfo2={"Sherwani"}/>
          <ArrivalsItem imgsrc={item1} imgName={"Festive wear"} imgInfo1={"kurta & pajama"} imgInfo2={"Sherwani"}/>
         <ArrivalsItem imgsrc={item1} imgName={"Festive wear"} imgInfo1={"kurta & pajama"} imgInfo2={"Sherwani"}/>
        
        <div id="view-more" className="bg-red-400 w-fit p-2 px-4 rounded font-bold">
          <h1>View all</h1>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Home