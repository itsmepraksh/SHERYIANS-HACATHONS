import logo from "../assets/svgs/favicon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#334238] px-0 py-10">
      <div id="footer-about">
        <h4 className="font-bold text-xs lg:text-sm xl:text-base text-center pt-10 pb-3">VISION</h4>

        <h1 className="uppercase text-[2.75rem] lg:text-[7rem] xl:text-[10rem] text-center font-bold text-[#618C70] font-[latobold] xl:font-[latoblack]">
          shanz & nikze
        </h1>

        <div
          id="logo"
          className="my-20 relative flex items-center justify-center"
        >
          <hr className="border w-full border-[#618C70]" />
          <img src={logo} className="h-20 rounded-full absolute" alt="" />
        </div>

        <p className="text-lg  md:px-8 xl:px-15 xl:py-7">
          We craft stunning ethnic and fusion wear designed to win hearts, made
          with care, made to last, and made for your most beautiful moments.
        </p>
      </div>
      <div id="footer-info" className=" md:px-8 xl:px-15">
        <div id="footer-links" className="flex flex-wrap items-center xl:items-start   ">
          <div id="links" className="w-1/2 xl:w-1/3 pt-10">
            <h1 className="font-bold py-3 uppercase text-sm text-[#CCE561]">
              quick links
            </h1>
            <ul>
              
              
              <li><Link to={"/home"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link> </li>
              <li><Link to={"/lost"}>Track Order</Link></li>
              <li><Link to={"/lost"}>Support Center</Link></li>
            </ul>
          </div>
          <div id="social-links" className="w-1/2 xl:w-1/3 pt-10">
            <h1 className="font-bold py-3 uppercase text-sm text-[#CCE561]">
              let's social
            </h1>
            <ul>
              <li><a href="https://www.facebook.com/people/Shanice-Shrestha/100044636070227/">Facebook</a></li>
              <li><a href="https://www.instagram.com/shanznnikz/">Instagram</a> </li> 
              <li><a href="https://www.youtube.com/@shaniceshresthavlog">Youtube</a></li>
              <li className="opacity-0"> ..</li>
            </ul>
          </div>
          <div id="get-in-touch" className="w-1/2 xl:w-1/3 pt-10">
            <h1 className="font-bold py-3 uppercase text-sm text-[#CCE561]">
              get in touch
            </h1>
            <p className="text-[#618C70]">Address</p>
            <p className="xl:w-1/2">
              B/409, Dheeraj Kirti, Evershine Nagar, Malad(W), Mumbai - 400 064
            </p>
          </div>
        </div>
        <div
          id="policy"
          className="w-1/2 xl:w-full pt-10 flex flex-col xl:flex-row xl:justify-between gap-3 text-[#618C70]  "
        >
          <h1>Privacy Policy</h1>
          <h1>Shipping Policy</h1>
          <h1>Terms & conditions</h1>
          <h1>Cancellation, Return & Exchange Policy</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
