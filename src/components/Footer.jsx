import logo from "../assets/svgs/favicon.svg";

const Footer = () => {
  return (
    <div className="bg-[#334238] px-4 py-10">
      <div id="footer-about">
        <h4 className="font-bold text-xs text-center pt-10 pb-3">VISION</h4>

        <h1 className="uppercase text-[2.75rem] text-center font-bold text-[#618C70] font-[latobold]">
          shanz & nikze
        </h1>

        <div
          id="logo"
          className="my-20 relative flex items-center justify-center"
        >
          <hr className="border w-full border-[#618C70]" />
          <img src={logo} className="h-20 rounded-full absolute" alt="" />
        </div>

        <p className="text-lg">
          We craft stunning ethnic and fusion wear designed to win hearts, made
          with care, made to last, and made for your most beautiful moments.
        </p>
      </div>
      <div id="footer-info">
        <div id="footer-links" className="flex flex-wrap items-center ">
          <div id="links" className="w-1/2 pt-10">
            <h1 className="font-bold py-3 uppercase text-sm text-[#CCE561]">
              quick links
            </h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Track Order</li>
              <li>Support Center</li>
            </ul>
          </div>
          <div id="social-links" className="w-1/2 pt-10">
            <h1 className="font-bold py-3 uppercase text-sm text-[#CCE561]">
              let's social
            </h1>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Pinterest</li>
            </ul>
          </div>
          <div id="get-in-touch" className="w-1/2 pt-10">
            <h1 className="font-bold py-3 uppercase text-sm text-[#CCE561]">
              get in touch
            </h1>
            <p className="text-[#618C70]">Address</p>
            <p>
              B/409, Dheeraj Kirti, Evershine Nagar, Malad(W), Mumbai - 400 064
            </p>
          </div>
        </div>
        <div
          id="policy"
          className="w-1/2 pt-10 flex flex-col gap-3 text-[#618C70]  "
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
