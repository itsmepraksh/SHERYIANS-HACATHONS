import CtaBtn from "../components/CtaBtn";

import founder1 from "../assets/images/founder1.jpg";
import founder2 from "../assets/images/founder2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="">
      <section id="about-company" className="px-4 py-10 md:px-16">
        <h1 className="font-[latoBold] text-5xl font-bold uppercase leading-[1.1] tracking-wider">
          about us
        </h1>

        <p className="py-10 text-xl">
          We’re not just making clothes. We’re creating moments, rooted in
          tradition, touched by modernity. Every piece blends ethnic heritage
          with a fresh, effortless twist, designed to feel as beautiful as it
          looks. No loud claims. Just quiet confidence. Styles that become part
          of your story, and stay with you through every season.
        </p>
        <CtaBtn text={"Explore Now"} />
      </section>

      <section id="founder-info" className="px-4 py-10 bg-[#FAF2E8] text-black md:px-16">
        <p className="text-red-300 font-[latobold] text-2xl py-4">
          #shanzandnikz
        </p>
        <h1 className="font-[latoBold] text-4xl font-bold uppercase leading-[1.1] tracking-wider">
          shanz & nikz
        </h1>

        <h2 className="pt-4 font-medium text-lg">Where Vision Meets Craft</h2>
        <p className="text-sm">Our founders the dreamers behind the design.</p>

        <div id="founder-images" className="py-10 flex flex-col gap-10">
          <div id="founder-1" className="">
            <img
              src={founder1}
              alt="shanice-shrestha-founder"
              className="rounded"
            />
             <div className="py-4 flex justify-between items-start">
              <div id="founder-data">
                <h1 className="font-medium text-lg">Shanice Shrestha</h1>
                <p className="text-zinc-700">Founder</p>
              </div>
              <div id="social-icons" className="text-red-300 flex gap-2 py-2">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faYoutube} />
                  <FontAwesomeIcon icon={faFacebookF} />
              </div>
            </div>
          </div>
          <div id="founder-2" className="">
            <img
              src={founder2}
              alt="shanice-shrestha-founder"
              className="rounded"
            />
            <div className="py-4 flex justify-between items-start">
              <div id="founder-data">
                <h1 className="font-medium text-lg">Nikita Shrestha</h1>
                <p className="text-zinc-700">Founder</p>
              </div>
              <div id="social-icons" className="text-red-300 flex gap-2 py-2">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faYoutube} />
                  <FontAwesomeIcon icon={faFacebookF} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
