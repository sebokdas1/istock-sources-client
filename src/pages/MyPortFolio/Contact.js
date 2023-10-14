import React, { useState } from "react";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Contact1 from "../../Assets/contact1.png";
import { MdMail } from "react-icons/md";
import "./Contact.css";

const Contact = () => {
  const [successMs, setSuccessMs] = useState("");
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_portfolio2.0",
        "template_portfolio2.0",
        e.target,
        "qmE8kvRvoTnyw4LFU"
      )
      .then((res) => {})
      .catch((err) => console.log(err));
    setSuccessMs("I received your message, Thanks.");
    e.target.reset();
  };
  return (
    <section className="mt-6">
      <div className="p-[10px]">
        <h1 className="text-[#735BE2] text-[55px] font-bold text-center leading-none">
          Contact
        </h1>
        <h2 className="text-[#262626] text-[22px] font-bold text-center leading-none">
          Connect with me
        </h2>
      </div>
      <div className="my-[25px] pb-45px lg:flex">
        <div className="contact_personalDit lg:mr-[25px]">
          <img src={Contact1} alt="" />
          <div>
            <h1 className="text-[#735BE2] text-[32px] font-bold">Sebok Das</h1>
            <h2 className="text-[#262626] text-[18px] font-semibold">
              Web Developer (Mern)
            </h2>
            <p className="font-light mb-[15px] leading-[1.6em] text-[#262626]">
              Are You Looking For Your Business Online Presence? I am here.
            </p>
            <div>
              <h2 className="flex items-center gap-3">
                <span className="text-[18px] font-normal text-[#735BE2]">
                  <BsFillPhoneVibrateFill />
                </span>
                <span className="text-[#262626] text-[18px] font-semibold">
                  <a href="tel:+8801730661569">+8801730661569</a>
                </span>
              </h2>
              <h2 className="flex items-center gap-3">
                <span className="text-[18px] font-normal text-[#735BE2]">
                  <MdMail />
                </span>
                <span className="text-[#262626] text-[18px] font-semibold">
                  <a href="mailto:sebok.das66@gmail.com">
                    sebok.das66@gmail.com
                  </a>
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="contact_inputs mt-6 lg:mt-0 mx-[10px]">
          <form onSubmit={sendMail}>
            <label className="font-semibold" for="name">
              Your name
            </label>
            <input
              className="input_styles"
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              required
            />

            <label className="font-semibold" for="email">
              Your email
            </label>
            <input
              className="input_styles"
              type="email"
              id="email"
              name="email"
              required
            />

            <label className="font-semibold" for="subject">
              Subject
            </label>
            <input
              className="input_styles"
              type="text"
              id="subject"
              name="subject"
              autoComplete="off"
              required
            />
            <label className="font-semibold" for="message">
              Your message
            </label>
            <textarea
              className="input_styles"
              name="message"
              id="message"
              cols="30"
              rows="7"
              autoComplete="off"
              required
            />
            <input className="input_submit" type="submit" value="Submit" />
          </form>
          <h2 className="text-cyan-500 text-xl font-bold mt-1">{successMs}</h2>
        </div>
      </div>
    </section>
  );
};

export default Contact;
