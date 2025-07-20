import CtaBtn from "../components/CtaBtn";

const Contact = () => {
  return (
    <div>
      <section id="contact-page" className="px-4 py-10">
        <h1 className="font-[latoBold] text-5xl font-bold uppercase leading-[1.1] tracking-wider">
          Contact Us
        </h1>

        <h2 className=" pt-10 font-bold text-xl">
          Designing it. Wearing it. Living in it.
        </h2>
        <p className="py-4 text-xl">
          We’re a modern ethnic wear brand for those who express themselves
          through timeless style, designing it, wearing it, and living in it.
        </p>

        <p className="py-4 text-xl">
          {" "}
          Have a question or just want to connect? We’re here for you. And while
          you're at it, don’t miss out, check out our latest arrivals.
        </p>

        <form action="" className="flex flex-col gap-4 py-5">
          <input type="text" placeholder="First Name*" className="bg-[#618C70] p-4 rounded placeholder:text-white " />
          <input type="text" placeholder="Last Name*" className="bg-[#618C70] p-4 rounded placeholder:text-white " />
          <input type="email" placeholder="Email*" className="bg-[#618C70] p-4 rounded placeholder:text-white " />
          <input type="text" placeholder="Mobile No*" className="bg-[#618C70] p-4 rounded placeholder:text-white "/>
          <textarea name="" id="" rows="5" placeholder="Message*" className="bg-[#618C70] p-4 rounded resize-none placeholder:text-white mb-5"></textarea>

          {/* <button >submit </button> */}
          <CtaBtn onClick={"submit"} text={"Submit"}/>
        </form>
        {/* <CtaBtn text={"Explore Now"} /> */}
      </section>
    </div>
  );
};

export default Contact;
