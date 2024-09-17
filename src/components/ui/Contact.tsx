"use client";
import { m, LazyMotion, domAnimation } from "framer-motion";

import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      )
      .then(
        (result) => {
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
          setIsSent(true);
          alert("Thank you! I will get back to you as soon as possible.");
          console.log(result);
        },
        (error) => {
          console.error(error);
          setIsSent(false);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      id="contact"
      className="w-full overflow-hidden-web flex flex-col items-center"
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: -350 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="text-primary-400 p-6 noselect"
            >
              <span
                className="opacity-50"
                style={{
                  textTransform: "uppercase",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                }}
              >
                Get in touch
              </span>
              <h2
                className="tracking-wider text-7xl sm:text-8xl md:text-9xl"
                style={{ fontFamily: "Morganite Black" }}
              >
                {"CONTACT".split("").map((char, index) => {
                  if (char === " ") {
                    return " ";
                  }
                  return (
                    <span key={index} className="bounce">
                      {char}
                    </span>
                  );
                })}
              </h2>
            </m.div>
          </LazyMotion>
        </div>
        <div className="w-full flex justify-center items-center">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] p-4 flex flex-col sm:flex-row gap-4"
            >
              <div className="flex justify-center"></div>
              <div
                className="justify-center"
                style={{
                  backgroundImage:
                    "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
                  width: "100%",
                  height: "95%",
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div>
                  <h2
                    style={{ fontFamily: "Morganite Bold, sans-serif" }}
                    className="message text-7xl bg-primary-400 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
                  >
                    <Typewriter words={["LET'S GET IN TOUCH!"]} loop={true} />
                    &nbsp;
                  </h2>
                </div>
                <div className="w-full flex justify-center">
                  <form
                    id="contact_form"
                    ref={form}
                    method="POST"
                    target="_blank"
                    onSubmit={sendEmail}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    className="w-[80%] h-full flex flex-col gap-4 pt-4 text-primary-200"
                  >
                    <div className="w-full flex flex-col">
                      <label
                        htmlFor="firstname"
                        style={{ fontWeight: "bold", fontSize: "18px" }}
                      >
                        First Name
                      </label>
                      <input
                        className="p-[0.5em] rounded-xl text-grayscale-950 bg-primary-200"
                        placeholder="Enter your First Name"
                        id="firstname"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="w-full flex flex-col">
                      <label
                        htmlFor="lastname"
                        style={{ fontWeight: "bold", fontSize: "18px" }}
                      >
                        Last Name
                      </label>
                      <input
                        className="p-[0.5em] rounded-xl text-grayscale-950 bg-primary-200"
                        placeholder="Enter your Last Name"
                        id="lastname"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="w-full flex flex-col">
                      <label
                        htmlFor="email"
                        style={{ fontWeight: "bold", fontSize: "18px" }}
                      >
                        E-mail
                      </label>
                      <input
                        className="p-[0.5em] rounded-xl text-grayscale-950 bg-primary-200"
                        placeholder="Enter your E-mail"
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="w-full flex flex-col">
                      <label
                        htmlFor="message"
                        style={{ fontWeight: "bold", fontSize: "18px" }}
                      >
                        Message
                      </label>
                      <textarea
                        className="p-[0.5em] rounded-xl text-grayscale-950 bac bg-primary-200"
                        placeholder="Enter your message..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="w-full flex justify-center">
                      <input
                        className="w-[100px] h-[50px] bg-primary-400 rounded-xl cursor-pointer hover:bg-primary-700 mb-5"
                        type="submit"
                        value={!isSent ? "Send" : "Done!"}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </div>
  );
};

export default Contact;
