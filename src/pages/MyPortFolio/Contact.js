import React, { useState } from "react";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { FaTelegram, FaDiscord } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Contact1 from "../../Assets/contact1.png";
import { MdMail } from "react-icons/md";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const sendMail = async (e) => {
    e.preventDefault();
    const subject = e.target.subject.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    if (!email || !subject || !message) {
      setErrorMessage("All Fields are required");
      return;
    }

    try {
      const result = await axios.post(
        `${process.env.REACT_APP_serverLink}/sentmessage`,
        {
          subject,
          text: `${message} , 
          email: ${email}`,
        }
      );
      console.log(result.data.message);
      if (result.data.status === 200) {
        e.target.reset();
      }
    } catch (error) {
      console.log(error?.message);
    }
  };
  return (
    <section className="mt-6">
      <div className="p-[10px]">
        <h1 className="text-cyan-600 text-[55px] font-bold text-center leading-none">
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
            <h1 className="text-cyan-600 text-[32px] font-bold">Sebok Das</h1>
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
              <div className="flex justify-center items-center gap-4 mt-3">
                <a
                  className="text-2xl text-[#229ED9]"
                  href="https://t.me/sebokdas1"
                  target="_blank"
                >
                  <FaTelegram />
                </a>
                <a
                  className="text-2xl text-[#075E54]"
                  href="https://wa.me/+8801730661569?text"
                  target="_blank"
                >
                  <IoLogoWhatsapp />
                </a>
                <a
                  className="text-2xl text-[#7289da]"
                  href="https://discord.com/users/885250899038060605"
                  target="_blank"
                >
                  <FaDiscord />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_inputs mt-6 lg:mt-0 mx-[10px]">
          <form onSubmit={sendMail}>
            <label className="font-semibold" htmlFor="email">
              Your email
            </label>
            <input
              className="input_styles outline-cyan-600"
              type="email"
              id="email"
              name="email"
              onFocus={() => setErrorMessage("")}
            />

            <label className="font-semibold" htmlFor="subject">
              Subject
            </label>
            <input
              className="input_styles outline-cyan-600"
              type="text"
              id="subject"
              name="subject"
              autoComplete="off"
              onFocus={() => setErrorMessage("")}
            />
            <label className="font-semibold" htmlFor="message">
              Your message
            </label>
            <textarea
              className="input_styles outline-cyan-600"
              name="message"
              id="message"
              cols="30"
              rows="7"
              autoComplete="off"
              onFocus={() => setErrorMessage("")}
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <input className="input_submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
